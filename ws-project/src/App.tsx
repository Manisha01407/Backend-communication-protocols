import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestmessagae, setlatestmessage] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("Connection established");
      // newSocket.send("Hello Server!");
      setSocket(newSocket);
    };
    newSocket.onmessage = (message) => {
      console.log("Message received:", message.data);
      setlatestmessage(message.data);
    };

    return () => newSocket.close();
  }, []);

  if (!socket) {
    return <div>connecting to socket server ...</div>;
  }

  return (
    <>
      <input
        onChange={(e) => {
          setmessage(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          socket.send(message);
        }}
      >
        Send
      </button>
      {latestmessagae}
    </>
  );
}

export default App;
