'use client';

import React from 'react';
import { useUser, SignInButton } from "@clerk/clerk-react";

const Hero: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className="nextjs-container py-16 md:py-24 text-center mt-32">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Your Lifelong AI Companion
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
        MEmoraNet is an advanced RAG-based chatbot that remembers, adapts, and grows with you through
        <span className="font-semibold"> intelligent memory management</span> and personalized interactions.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        {!isLoaded ? (
          <button className="nextjs-button-primary px-8 py-3 font-medium" disabled>Loading...</button>
        ) : !isSignedIn ? (
          <SignInButton mode="modal" fallbackRedirectUrl="/chat">
            <button className="nextjs-button-primary px-8 py-3 font-medium">
              Start Chatting
            </button>
          </SignInButton>
        ) : (
          <a
            href="/chat"
            className="nextjs-button-primary px-8 py-3 font-medium"
          >
            Start Chatting
          </a>
        )}

        <a
          href="/features"
          className="nextjs-button-secondary px-8 py-3 font-medium flex items-center"
        >
          Learn More
        </a>
      </div>
      <div className="text-xs text-gray-500 flex items-center justify-center">
        <svg
          height="16"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1"
        >
          <path d="M4.09 1.636H4.91V2.454H4.09V1.636Z" fill="currentColor"/>
          <path d="M0 0V9H9V0H0ZM6.136 7.909H5.318V5.863H3.682V7.909H2.864V2.864H3.682V5.045H5.318V2.864H6.136V7.909Z" fill="currentColor"/>
        </svg>
        Powered by Langchain & Advanced RAG
      </div>
    </div>
  );
};

export default Hero;
