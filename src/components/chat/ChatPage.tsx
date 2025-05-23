import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import { useAuthManager } from '../../hooks/useAuthManager';
import ChatHeader from '../ChatHeader';

const ChatPage: React.FC = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { authState } = useAuthManager();

  useEffect(() => {
    console.group('💬 ChatPage Auth State');
    console.log('Clerk Auth:', { isSignedIn, isLoaded });
    console.log('Auth Manager State:', authState);
    console.groupEnd();
  }, [isSignedIn, isLoaded, authState]);

  if (!isLoaded) {
    console.log('⏳ Loading authentication state...');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isSignedIn || !authState.isAuthenticated) {
    console.log('🔒 Authentication required');
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Sign in to Chat</h1>
          <p className="text-gray-600 text-center mb-8">
            Please sign in to access the chat feature and start your conversation.
          </p>
          <div className="flex justify-center">
            <SignInButton mode="modal">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    );
  }

  console.log('✅ User authenticated, showing chat interface');
  return (
    <div className="min-h-screen flex flex-col">
      <ChatHeader />
      <main className="flex-grow p-4 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Authentication Success Message Box */}
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p className="font-bold">Authentication Successful!</p>
            <p>You are now logged in. Please return to the VS Code extension to continue.</p>
          </div>

          {/* Main Chat Content */}
          <div className="bg-white rounded-lg shadow p-4">
            <p>Welcome to your chat! Start a conversation below.</p>
            {/* Add your chat interface components here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage; 