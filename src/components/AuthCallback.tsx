import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthCallback: React.FC = () => {
  const { getToken } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const token = await getToken();
        const callbackUrl = searchParams.get('callback');
        
        if (!callbackUrl) {
          console.error('No callback URL provided');
          navigate('/');
          return;
        }

        // Construct the callback URL with the token
        const redirectUrl = `${callbackUrl}?token=${encodeURIComponent(token || '')}`;
        
        // Redirect back to the extension
        window.location.href = redirectUrl;
      } catch (error) {
        console.error('Error during auth callback:', error);
        navigate('/');
      }
    };

    handleAuthCallback();
  }, [getToken, searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Completing Authentication</h2>
        <p className="text-gray-600">Please wait while we redirect you back to the extension...</p>
      </div>
    </div>
  );
};

export default AuthCallback; 