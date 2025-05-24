import React, { useEffect } from 'react';
import { SignIn, useAuth } from '@clerk/clerk-react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const { getToken } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const callbackUrl = searchParams.get('callback');
        if (!callbackUrl) return;

        const token = await getToken();
        if (!token) return;

        // Send auth success to extension
        const extensionUrl = new URL(callbackUrl);
        extensionUrl.searchParams.set('token', token);
        extensionUrl.searchParams.set('status', 'success');
        
        // Open the extension URL
        window.location.href = extensionUrl.toString();
      } catch (error) {
        console.error('Error in auth callback:', error);
        navigate('/');
      }
    };

    handleAuthCallback();
  }, [getToken, searchParams, navigate]);

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
          afterSignInUrl="/chat"
          routing="path"
          path={"/auth"}
        />
      </div>
    </div>
  );
};

export default AuthPage; 