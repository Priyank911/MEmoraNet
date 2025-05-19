import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Tools from "./components/Tools";
import Deployment from "./components/Deployment";
import Footer from "./components/Footer";
import ChatCredential from './components/chatcredential';
import { Routes, Route } from 'react-router-dom';

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
      <Route path="/chat" element={<ChatCredential />} />
    </Routes>
  );
}

export default App;
