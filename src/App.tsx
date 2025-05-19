import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Tools from "./components/Tools";
import Deployment from "./components/Deployment";
import Footer from "./components/Footer";
import ChatPage from './components/chat/ChatPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
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
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
