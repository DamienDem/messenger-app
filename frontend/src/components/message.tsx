import MessageContainer from "./MessageContainer";

const messages = [
  {
    content: "aaaaaaaa",
    userId: 1,
  },
  {
    content: "bbbbbbb",
    userId: 2,
  },
  {
    content: "cccccc",
    userId: 2,
  },
  {
    content: "ddddddd",
    userId: 1,
  },
  {
    content: "eeeeeee",
    userId: 2,
  },
];
const Message = () => {
  
  return (
    <div>
      {messages.map((message, index) => {
        return <MessageContainer key={index} message={message} />;
      })}
    </div>
  );
};

export default Message;
