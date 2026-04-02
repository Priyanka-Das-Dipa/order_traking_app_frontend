import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const useSocket = () => {
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // create socket connection
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
    });

    // connect event
    socketRef.current.on("connect", () => {
      setConnected(true);
      console.log("Connected to the server", socketRef.current.id);
    });

    //
    socketRef.current.on("disconnect", () => {
      setConnected(false);
    });

    socketRef.connect.on("connected", (data) => {
      console.log("server message:", data.message);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current?.disconnect();
      }
    };
  }, []);

  return {
    socket: socketRef.current,
    connected,
  };
};
