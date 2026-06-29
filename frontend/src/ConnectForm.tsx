import { useState } from "react";

const ConnectForm = ({ className = "" }: { className?: string }) => {
  const [peer1Id, setPeer1Id] = useState("");
  const [peer2Id, setPeer2Id] = useState("");
  const [connected, setConnected] = useState(false);
  const handleConnect = () => {
    setConnected(true);
  };
  return (
    <div className={`w-96 flex flex-col justify-center m-auto ${className}`}>
      <div className="flex flex-row justify-between p-2 m-1 border-1 border-gray-300">
        <label htmlFor="peer1">Your ID : </label>
        <input
          className="border-1 border-gray-300 rounded-sm"
          type="text"
          name="peer1"
          id="peer1"
          value={peer1Id}
          onChange={(e) => setPeer1Id(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between p-2 m-1 border-1 border-gray-300">
        <label htmlFor="peer2">Connect to ID : </label>
        <input
          className="border-1 border-gray-300 rounded-sm"
          type="text"
          name="peer2"
          id="peer2"
          value={peer2Id}
          onChange={(e) => setPeer2Id(e.target.value)}
        />
      </div>
      <button
        id="connect"
        onClick={handleConnect}
        className="border-2 p-2 m-1 border-black rounded-2xl bg-gray-800 text-white hover:border-white active:bg-white active:text-gray-800"
      >
        {connected ? "Connected" : "Connect"}
      </button>
    </div>
  );
};

export default ConnectForm;
