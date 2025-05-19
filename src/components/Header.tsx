import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-3 fixed w-full top-0 z-50">
      <div className="nextjs-container flex items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="MEmoraNet Logo" className="h-6 w-9 mr-2" />
            <span className="dashboard-navbar-divider">/</span>
            <span className="text-xl font-bold text-gray-900 ml-2">MEmoraNet</span>
          </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/docs" className="text-base text-gray-700 hover:text-black font-normal transition-colors">Docs</a>
          <a href="/about" className="text-base text-gray-700 hover:text-black font-normal transition-colors">About</a>
          <a href="/developer" className="text-base text-gray-700 hover:text-black font-normal transition-colors">Developer</a>
          <a href="/contact" className="text-base text-gray-700 hover:text-black font-normal transition-colors">Contact us</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="font-bold text-gray-900 flex items-center">
            <span className="mr-1" style={{fontSize: '1rem'}}>▲</span> Get Started
          </span>
          <a
            href="/learn"
            className="bg-white border border-gray-200 text-black font-semibold px-6 py-2 rounded-xl shadow-sm hover:bg-gray-100 transition"
            style={{minWidth: '72px', textAlign: 'center'}}
          >
            Learn
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              <a 
                href="/docs" 
                className="text-base text-gray-700 hover:text-black font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a 
                href="/about" 
                className="text-base text-gray-700 hover:text-black font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/developer" 
                className="text-base text-gray-700 hover:text-black font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Developer
              </a>
              <a 
                href="/contact" 
                className="text-base text-gray-700 hover:text-black font-normal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </a>
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <span className="font-bold text-gray-900 flex items-center mb-4">
                <span className="mr-1" style={{fontSize: '1rem'}}>▲</span> Get Started
              </span>
              <a
                href="/learn"
                className="block w-full bg-white border border-gray-200 text-black font-semibold px-6 py-2 rounded-xl shadow-sm hover:bg-gray-100 transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
