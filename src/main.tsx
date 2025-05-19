import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Assuming using a build tool like Vite where env vars are on import.meta.env
// Ensure your .env file has VITE_CLERK_PUBLISHABLE_KEY
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
