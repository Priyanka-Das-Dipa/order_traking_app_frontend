/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
console.log(SOCKET_URL);

export const useSocket = () => {
  // const socketRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  // useEffect(() => {
  //   // Create socket connection
  //   socketRef.current = io(SOCKET_URL, {
  //     transports: ["websocket", "polling"],
  //   });

  //   // Connection event
  //   socketRef.current.on("connect", () => {
  //     setConnected(true);
  //     console.log("✅ Connected to server:", socketRef.current.id);
  //   });

  //   // Disconnection event
  //   socketRef.current.on("disconnect", () => {
  //     setConnected(false);
  //     console.log("❌ Disconnected from server");
  //   });

  //   // Server welcome message
  //   socketRef.current.on("connected", (data) => {
  //     console.log("📨 Server message:", data.message);
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     if (socketRef.current) {
  //       socketRef.current.disconnect();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const socketInstance = io(SOCKET_URL);

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      setConnected(true);
      console.log("✅ Connected:", socketInstance.id);
    });

    socketInstance.on("disconnect", () => {
      setConnected(false);
      console.log("❌ Disconnected");
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  // const getSocket = () => socketRef.current;

  return {
    socket,
    connected,
  };
};
