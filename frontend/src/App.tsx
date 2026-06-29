import ConnectForm from "./ConnectForm";

function App() {
  return (
    <div className="m-auto h-screen">
      <h1 className="text-xl p-2 h-0.5/6 font-semibold">
        Peer to Peer Communication Application
      </h1>
      <ConnectForm className="h-2/6" />
      <div className="flex flex-col h-2/6 overflow-y-auto w-96">
        <p className="self-start p-1 bg-gray-300 rounded-xl max-w-3/4 min-w-1/4 text-wrap m-1">
          Hello
        </p>
        <p className="self-end p-1 bg-gray-300 rounded-xl max-w-3/4 min-w-1/4 text-wrap m-1">
          Hello Hello Hello HelloHello Hello Hello HelloHello Hello Hello
          HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello
          HelloHello Hello Hello HelloHello Hello Hello Hello
        </p>
        <p className="self-start p-1 bg-gray-300 rounded-xl max-w-3/4 min-w-1/4 text-wrap m-1">
          Hello
        </p>
        <p className="self-end p-1 bg-gray-300 rounded-xl max-w-3/4 min-w-1/4 text-wrap m-1">
          Hello Hello Hello HelloHello Hello Hello HelloHello Hello Hello
          HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello
          HelloHello Hello Hello HelloHello Hello Hello Hello
        </p>
        <p className="self-start p-1 bg-gray-300 rounded-xl max-w-3/4 min-w-1/4 text-wrap m-1">
          HelloHello Hello HelloHello Hello Hello HelloHello Hello Hello
          HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello
          HelloHello Hello Hello HelloHello Hello Hello Hello
        </p>
        <p className="self-end p-1 bg-gray-300 rounded-xl max-w-3/4 min-w-1/4 text-wrap m-1">
          Hello
        </p>
      </div>
      <div className="h-1/6">
        <input
          type="text"
          name="message"
          id="messageInput"
          className="border-1 border-gray-300 p-2 m-1 w-3/4"
        />
        <button
          id="sendMessage"
          className="border-1 border-gray-500 p-2 m-1 rounded-xl active:bg-black active:text-white hover:bg-gray-100"
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default App;
