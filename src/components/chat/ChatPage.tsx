import React from 'react';
import ChatCredential from '../chatcredential';

const ChatPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ChatCredential />
      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Chat</h1>
          {/* Add your chat interface components here */}
          <div className="bg-white rounded-lg shadow p-4">
            <p>Welcome to your chat! Start a conversation below.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage; 