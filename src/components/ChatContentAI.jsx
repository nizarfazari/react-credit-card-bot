import BubleChat from "./BubleChat";
import { useContext, useRef, useState } from "react";
import ChatHeadersAI from "./ChatHeadersAI";
import { FileImage, PaperPlaneTilt } from "@phosphor-icons/react";
import { AppContext } from "../context/buble";
import {
  MessageResponse1,
  MessageResponse2,
  MessageResponse3,
  MessageResponse4,
  MessageResponse5,
  MessageResponse6,
  MessageResponse7,
  MessageResponse8,
} from "../data/message";

const ChatContentAI = () => {
  const { buble, setBuble, isTyping, setIsTyping } = useContext(AppContext);
  const messagesEndRef = useRef(null);

  const [formData, setFormData] = useState({
    message: "",
    file: null,
  });

  const [conversationStep, setConversationStep] = useState(1);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files[0],
      }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      sender: "User",
      content: formData.message,
      time: new Date().toLocaleString(),
      photo: "/avatar.jpg",
    };
    setBuble((prevMessages) => [...prevMessages, newMessage]);
    setFormData({
      message: "",
      file: null,
    });

    let nextResponse;
    switch (conversationStep) {
      case 1:
        nextResponse = MessageResponse1;
        break;
      case 2:
        nextResponse = MessageResponse2;
        break;
      case 3:
        nextResponse = MessageResponse3;
        break;
      case 4:
        nextResponse = MessageResponse4;
        break;
      case 5:
        nextResponse = MessageResponse5;
        break;
      case 6:
        nextResponse = MessageResponse6;
        break;
      case 7:
        nextResponse = MessageResponse7;
        break;
      case 8:
        nextResponse = MessageResponse8;
        break;
      default:
        nextResponse = [];
    }

    nextResponse.forEach((msg, index) => {
      setTimeout(() => {
        setBuble((prevMessages) => [...prevMessages, { ...msg }]);
        if (index === nextResponse.length - 1) {
          setIsTyping(false);
        }
      }, (index + 1) * 2000);
    });

    setConversationStep((prevStep) => prevStep + 1);

    if (conversationStep > 7) {
      setConversationStep(1); // Reset ke awal jika mencapai akhir
    }
  };

  return (
    <div className=" col-span-5">
      <ChatHeadersAI />
      <div className="bg-[#F7FBFC] px-4 py-3 bg-[#F7FBFC] bg-cover rounded-lg h-[700px] overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-4 my-4">
          {buble.map(
            (message, index) =>
              message && (
                <>
                  <BubleChat key={index} messages={message} />
                  <div ref={messagesEndRef} />
                </>
              )
          )}

          {isTyping && (
            <div className="loader">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg border border-slate-400 rounded-lg mt-3"
      >
        <textarea
          placeholder="Message"
          value={formData.message}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="w-full outline-none p-4 bg-transparent border-none resize-none focus:ring-0"
        ></textarea>
        <div className="p-4 flex justify-between items-center">
          <div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileImage size={25} className="text-gray-600" weight="fill" />
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="focus:outline-none">
            <PaperPlaneTilt className="text-gray-700" size={22} weight="fill" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatContentAI;
