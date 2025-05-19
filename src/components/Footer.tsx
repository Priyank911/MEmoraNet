import React, { useState, useEffect } from 'react';

interface LinkColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint is 768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="border-b border-gray-200 md:border-none">
      <button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center py-4 md:py-0 ${isMobile ? 'cursor-pointer' : ''}`}
      >
        <h4 className="font-semibold text-sm">{title}</h4>
        {isMobile && (
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      <ul className={`space-y-3 ${isMobile ? (isOpen ? 'block pb-4' : 'hidden') : 'block'}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-gray-600 hover:text-black transition-colors block py-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const resourceLinks = [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Memory Management', href: '/memory' },
    { label: 'Vector Databases', href: '/vector-db' },
    { label: 'Blog', href: '/blog' },
    { label: 'Community', href: '/community' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'MEmoraNet Conf', href: '/conf' },
    { label: 'Enterprise', href: '/enterprise' },
  ];

  const moreLinks = [
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Contact Sales', href: '/contact' },
    { label: 'Community', href: '/community' },
    { label: 'GitHub', href: 'https://github.com/memoranet' },
    { label: 'Releases', href: '/releases' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ];

  const companyLinks = [
    { label: 'About MEmoraNet', href: '/about' },
    { label: 'Open Source', href: '/open-source' },
    { label: 'GitHub', href: 'https://github.com/memoranet' },
    { label: 'Twitter', href: 'https://twitter.com/memoranet' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/memoranet' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="nextjs-container">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* MEmoraNet logo */}
          <div className="mb-12 lg:mb-0 lg:mr-12">
            <a href="/" className="block mb-6">
              <img src="logo.png" alt="MEmoraNet" className="h-8" />
            </a>
            <div className="flex space-x-4">
              <a href="https://github.com/memoranet" className="text-gray-400 hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                </svg>
              </a>
              <a href="https://twitter.com/memoranet" className="text-gray-400 hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            <LinkColumn title="Resources" links={resourceLinks} />
            <LinkColumn title="Company" links={companyLinks} />
            <div>
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter subscription */}
              <div>
                <h4 className="font-semibold text-sm mb-4">Stay Updated</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Get the latest updates on MEmoraNet features, memory management, and AI advancements.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-r-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
          © 2024 MEmoraNet, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
