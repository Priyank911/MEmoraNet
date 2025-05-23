import { useAuth } from '@clerk/clerk-react';

class AuthManager {
  private static instance: AuthManager;
  private authState: {
    isAuthenticated: boolean;
    token: string | null;
  } = {
    isAuthenticated: false,
    token: null,
  };

  private constructor() {}

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  public async verifyAuth(): Promise<boolean> {
    try {
      const { getToken } = useAuth();
      const token = await getToken();
      
      if (!token) {
        this.authState.isAuthenticated = false;
        this.authState.token = null;
        return false;
      }

      this.authState.isAuthenticated = true;
      this.authState.token = token;
      return true;
    } catch (error) {
      console.error('Error verifying auth:', error);
      this.authState.isAuthenticated = false;
      this.authState.token = null;
      return false;
    }
  }

  public async signIn(): Promise<void> {
    // This will be handled by Clerk's SignInButton component
    window.location.href = '/';
  }

  public async signOut(): Promise<void> {
    // This will be handled by Clerk's UserButton component
    window.location.href = '/';
  }

  public getAuthState() {
    return this.authState;
  }

  public setToken(token: string) {
    this.authState.token = token;
    this.authState.isAuthenticated = true;
  }

  public clearToken() {
    this.authState.token = null;
    this.authState.isAuthenticated = false;
  }
}

export default AuthManager; 