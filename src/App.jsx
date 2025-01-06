import "./App.css";
import IconComponentAI from "./components/IconComponentAI";
import ChatContentAI from "./components/ChatContentAI";
import { useContext } from "react";
import { AppContext } from "./context/buble";

function App() {
  const { startGetting } = useContext(AppContext);

  return (
    <>
      <div className="container ">
        <div className="flex justify-between items-center mt-5">
          <img src="/logo/microsoft.png" onClick={startGetting} className="h-10 cursor-pointer" alt="" />
          <img src="/logo/cimb-niaga-logo.png" className="h-8" alt="" />
        </div>
        <div className="bg-white shadow rounded-lg p-4 mt-8 mb-20 border-rose-500 border shadow-red-500">
          <div className="grid grid-cols-7">
            <ChatContentAI />
            <IconComponentAI />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
