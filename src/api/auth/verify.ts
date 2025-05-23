import { clerkClient } from '@clerk/clerk-sdk-node';
import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // Verify the token with Clerk
    const session = await clerkClient.sessions.verifySession(token);

    if (!session) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    return res.status(200).json({ authenticated: true });
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 