/* eslint-disable react/prop-types */
import { Spin } from "antd";
import ModalComponent from "./ModalComponent";
import { useEffect, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

const BubleChat = ({ messages }) => {
  console.log(messages);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleContent, setVisibleContent] = useState("");
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const [loadedStatus, setLoadedStatus] = useState([]);
  const renderContent = async () => {
    setIsLoading(true);

    if (Array.isArray(messages?.content)) {
      const statusArray = new Array(messages.content.length).fill(false);
      for (let i = 0; i < messages.content.length; i++) {
        setLoadingIndex(i);
        const currentContent = messages.content[i];
        setVisibleContent((prev) => [...prev, currentContent]);
        setIsLoading(false);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        statusArray[i] = true;
        setLoadedStatus([...statusArray]);
      }
      setLoadingIndex(-1);
    } else {
      setTimeout(() => {
        setVisibleContent(messages?.content);
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    renderContent();
  }, [messages]);

  return (
    <>
      <div
        className={`flex ${
          messages?.sender === "Adam" ? "flex-row-reverse" : ""
        } gap-4`}
      >
        {/* Icon */}
        <div>
          <img
            src={messages?.photo}
            className="w-12 h-12 object-cover rounded-full"
            alt=""
          />
        </div>

        {/* Handle Loading */}
        {messages?.sender !== "Adam" && isLoading ? (
          <p className="mt-2 thinking">Thinking...</p>
        ) : (
          <div className="w-fit">
            <div
              className={`w-fit rounded-lg px-4 py-2 shadow-2xl ${
                messages?.sender === "Adam"
                  ? "bg-blue-600 text-white"
                  : "bg-white "
              } ${
                messages?.icon === "email" && "border border-lightblue-700"
              }  ${messages?.icon === "whatsapp" && "border border-[#90ee90]"}`}
            >
              <div className="flex justify-between ">
                <h1 className="text-lg font-medium ">{messages?.sender}</h1>

                {messages?.icon === "policy" && (
                  <ModalComponent modalTitle="Document">
                    <img
                      src={`/modal/${messages?.imageIcon}`}
                      className="w-full"
                      alt=""
                    />
                  </ModalComponent>
                )}

                {/* Handle Icon Type */}
                {["email", "whatsapp"].includes(messages?.icon) && (
                  <ModalComponent
                    modalTitle={
                      messages?.icon === "email" ? "Email" : "WhatsApp"
                    }
                    iconType={messages?.icon}
                    imageIcon={messages?.imageIcon}
                  >
                    <img
                      src={`/modal/${messages?.imageIcon}`}
                      className="w-full"
                      alt={messages.sender.icon}
                    />
                  </ModalComponent>
                )}
              </div>

              {/* Handle Content Adam */}
              {messages?.sender !== "Adam" ? (
                Array.isArray(messages?.content) ? (
                  visibleContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 justify-between"
                    >
                      <p dangerouslySetInnerHTML={{ __html: item.content }} />
                      {item.isChecking ? (
                        index === loadingIndex ? (
                          <Spin className="!text-gray-700 ml-4" />
                        ) : loadedStatus[index] ? (
                          <CheckCircle
                            size={25}
                            weight="fill"
                            className="text-green-500 ml-4"
                          />
                        ) : null
                      ) : null}
                    </div>
                  ))
                ) : (
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: visibleContent }}
                  />
                )
              ) : (
                <div>
                  {messages?.fileName && (
                    <p className="mt-2">{messages?.fileName?.name}</p>
                  )}
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                      __html: messages?.content || "",
                    }}
                  />
                </div>
              )}

              {/* Handle Button Type */}
              {messages.button && (
                <div className="mt-4 rounded-md py-2 flex justify-end w-full">
                  <div className="flex gap-2 items-center">
                    <button className="px-8 py-1 border bg-[#D6ECFF] rounded-full text-[#158CFF] font-semibold">
                      <p>Edit</p>
                    </button>
                    <button className="px-7 py-1 border bg-lightgray-700 rounded-full text-white font-semibold">
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Handle Time */}
            <p className="text-gray-600">
              {new Date(messages?.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default BubleChat;
