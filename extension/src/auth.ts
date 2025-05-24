import * as vscode from 'vscode';
import { getNonce } from './utils';

export class AuthProvider {
  private static instance: AuthProvider;
  private token: string | null = null;

  private constructor() {}

  static getInstance(): AuthProvider {
    if (!AuthProvider.instance) {
      AuthProvider.instance = new AuthProvider();
    }
    return AuthProvider.instance;
  }

  async getToken(): Promise<string | null> {
    return this.token;
  }

  async handleCallback(url: vscode.Uri): Promise<void> {
    const params = new URLSearchParams(url.query);
    const token = params.get('token');
    const status = params.get('status');

    if (status === 'success' && token) {
      this.token = token;
      // Store token in extension's global state
      await vscode.workspace.getConfiguration('memoranet').update('authToken', token, true);
      vscode.window.showInformationMessage('Successfully authenticated with MemoraNet!');
    } else {
      vscode.window.showErrorMessage('Authentication failed');
    }
  }

  async signIn(): Promise<void> {
    const callbackUrl = vscode.Uri.parse('memoranet://auth/callback');
    const authUrl = `http://localhost:3000/auth?callback=${encodeURIComponent(callbackUrl.toString())}`;
    
    // Open auth page in browser
    vscode.env.openExternal(vscode.Uri.parse(authUrl));
  }

  async signOut(): Promise<void> {
    this.token = null;
    await vscode.workspace.getConfiguration('memoranet').update('authToken', null, true);
    vscode.window.showInformationMessage('Signed out from MemoraNet');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
} 