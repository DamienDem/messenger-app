const MessageContainer = ({
  message,
}: {
  message: any;
}) => {
  const id = 1;
  return (
    <div
      className={` rounded-full flex m-3 ${
        message.userId === id ? "justify-end" : "justify-start"
      }`}
    >
      <span className={`rounded-full px-4 py-0.5 ${ message.userId === id ? "bg-blue-200" : "bg-slate-200"}` }>
        {message.content}
      </span>
    </div>
  );
};

export default MessageContainer;
