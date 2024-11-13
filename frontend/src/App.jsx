import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I couldn't process your message.",
          isUser: false,
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg text-white flex items-center justify-center font-semibold text-3xl">
          👾
          </div>
          <h1 className="text-lg font-semibold text-gray-800">AI ChatBot</h1>
        </div>
      </header>
      <main className="flex-1 relative">
        {messages.length === 0 ? (
          <div className="flex justify-center w-full">
          <h1 className="flex justify-center p-6 m-6 text-lg text-gray-800 rounded-lg bg-gray-100">Hello! How can I help you today?</h1>
          </div>
          ): 
        <>
        <ChatWindow messages={messages} />
        </>
        }
        <MessageInput onSendMessage={sendMessage} />
      </main>
    </div>
  );
};

export default App;
