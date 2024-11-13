import React, { useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            className="w-full p-4 pr-12 text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600 resize-none"
            placeholder="Message AI ChatBot..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            className={`absolute right-3 bottom-3 p-1.5 rounded-md transition-colors
              ${message.trim() 
                ? 'bg-violet-600 text-white hover:bg-violet-700' 
                : 'bg-gray-100 text-gray-400'}`}
          >
            <ArrowUpIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;