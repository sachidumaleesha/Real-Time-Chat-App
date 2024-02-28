import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

interface IMessage {
  _id: string; // Assuming _id is a string in the frontend code
  senderId: string; // Assuming senderId is a string in the frontend code
  receiverId: string; // Assuming receiverId is a string in the frontend code
  message: string;
  createdAt: string; // Assuming createdAt is a string in the frontend code
  updatedAt: string; // Assuming updatedAt is a string in the frontend code
}

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message:IMessage) => (
          <Message key={message._id} message={message} />
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
