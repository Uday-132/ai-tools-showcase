// Sample API endpoint for Vercel serverless functions
export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Hello from your AI Tools Showcase API!',
      timestamp: new Date().toISOString(),
      method: req.method,
      query: req.query
    });
  } else if (req.method === 'POST') {
    const { name } = req.body || {};
    res.status(200).json({
      message: `Hello ${name || 'Anonymous'}!`,
      timestamp: new Date().toISOString(),
      receivedData: req.body
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}