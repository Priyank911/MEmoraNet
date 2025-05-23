import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-black hover:bg-gray-800 text-white",
              socialButtonsProviderIcon: "",
              card: "shadow-lg"
            },
          }}
          redirectUrl={'/chat'}
          routing="path"
          path={"/auth"}
        />
      </div>
    </div>
  );
};

export default AuthPage; 