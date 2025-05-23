import React from 'react';
import { Link } from 'react-router-dom';

const AuthSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl mb-8">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Authentication Successful!</h1>
        <p className="text-gray-600 mb-8">
          You've successfully signed in to MEmoraNet. You can now use the extension and access all features.
        </p>
        <div className="space-y-4">
          <Link
            to="/chat"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
          >
            Go to Chat Dashboard
          </Link>
          <p className="text-sm text-gray-500">
            You can close this window and return to the extension.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccess; 