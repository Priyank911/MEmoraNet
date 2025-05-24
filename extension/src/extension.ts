import * as vscode from 'vscode';
import { AuthProvider } from './auth';

export async function activate(context: vscode.ExtensionContext) {
  const authProvider = AuthProvider.getInstance();

  // Register auth callback handler
  context.subscriptions.push(
    vscode.window.registerUriHandler({
      handleUri(uri: vscode.Uri) {
        if (uri.path === '/auth/callback') {
          authProvider.handleCallback(uri);
        }
      }
    })
  );

  // Register start chat command
  let disposable = vscode.commands.registerCommand('memoranet.startChat', async () => {
    if (!authProvider.isAuthenticated()) {
      await authProvider.signIn();
      return;
    }

    // Open chat in browser
    vscode.env.openExternal(vscode.Uri.parse('http://localhost:3000/chat'));
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {} 