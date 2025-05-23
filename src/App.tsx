import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Tools from "./components/Tools";
import Deployment from "./components/Deployment";
import Footer from "./components/Footer";
import ChatPage from './components/chat/ChatPage';
import NotFound from './components/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <Features />
            <Tools />
            <Deployment />
          </main>
          <Footer />
        </div>
      } />
      <Route 
        path="/chat" 
        element={
          isSignedIn ? (
            <ChatPage />
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
