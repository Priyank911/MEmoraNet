import { useAuth } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

export function useAuthManager() {
  const { getToken, isSignedIn } = useAuth();
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    const verifyAuth = async () => {
      console.group('🔐 Auth Verification');
      console.log('Initial state:', { isSignedIn, authState });
      
      try {
        if (!isSignedIn) {
          console.log('❌ User not signed in');
          setAuthState({ isAuthenticated: false, token: null });
          console.groupEnd();
          return;
        }

        console.log('🔍 Verifying token...');
        const token = await getToken();
        
        if (!token) {
          console.log('❌ No token found');
          setAuthState({ isAuthenticated: false, token: null });
        } else {
          console.log('✅ Token verified successfully');
          setAuthState({
            isAuthenticated: true,
            token: token || null,
          });
        }
      } catch (error) {
        console.error('❌ Auth verification error:', error);
        setAuthState({ isAuthenticated: false, token: null });
      }
      
      console.log('Final auth state:', authState);
      console.groupEnd();
    };

    verifyAuth();
  }, [isSignedIn, getToken]);

  const signIn = () => {
    console.log('🔑 Initiating sign in...');
    window.location.href = '/';
  };

  const signOut = () => {
    console.log('🚪 Initiating sign out...');
    window.location.href = '/';
  };

  return {
    authState,
    signIn,
    signOut,
  };
} 