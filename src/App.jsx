
import { useSocket } from "./hooks/useSocket";

function App() {
  const { socket, connected} = useSocket();
  return (
    <>
      <h1>Hello World</h1>
      {`Socket IO is testing ${connected}`}
    </>
  );
}

export default App;
