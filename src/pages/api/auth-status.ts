import { useAuth } from '@clerk/clerk-react';

export default async function handler(req: Request) {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405 });
  }

  const { userId } = useAuth();
  
  if (!userId) {
    return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
  }

  return new Response(JSON.stringify({ authenticated: true }), { status: 200 });
} 