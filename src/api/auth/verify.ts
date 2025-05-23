import { clerkClient } from '@clerk/clerk-sdk-node';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // Verify the token with Clerk
    try {
      const session = await clerkClient.sessions.getSession(token);
      if (session) {
        return res.status(200).json({ authenticated: true });
      }
      return res.status(401).json({ error: 'Invalid token' });
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 