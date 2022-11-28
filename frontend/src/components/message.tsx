import { useState } from "react";
import MessageContainer from "./MessageContainer";


const Message = ({send, messages}: {send:Function, messages:string[]}) => {
  const [messageToSend, setMessageToSend] = useState("");
 
  const handleSubmit = () => {
    console.log(messageToSend);
  };


  return (
    <div className="m-2">
      <div>
        {messages?.map((message, index) => {
          return <MessageContainer key={index} message={message} />;
        })}
      </div>
      <form onSubmit={handleSubmit} >
        <input
          onChange={(e) => {
            setMessageToSend(e.target.value);
          }}
          className="border-2 w-full"
          type="text"
        />
        <button
          type="submit"
          className="bg-blue-500 rounded text-white p-2 mt-3"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Message;
