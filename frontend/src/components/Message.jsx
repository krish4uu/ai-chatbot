import React from 'react';

const Message = ({ message, isUser }) => {
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-violet-600 text-white'
            : 'bg-gray-100 text-gray-800'
        } shadow-md`}
      >
        <p className="text-md whitespace-pre-wrap break-words">{message}</p>
        <span className={`text-xs float-right mt-1`}>
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default Message;