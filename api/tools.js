// API endpoint for AI tools data
const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced conversational AI for various tasks",
    category: "Conversational AI",
    pricing: "Freemium",
    features: ["Natural language processing", "Code generation", "Creative writing"],
    website: "https://chat.openai.com",
    rating: 4.8
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation from text prompts",
    category: "Image Generation",
    pricing: "Subscription",
    features: ["Text-to-image", "High quality art", "Style variations"],
    website: "https://midjourney.com",
    rating: 4.7
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "AI pair programmer for code completion",
    category: "Development",
    pricing: "Subscription",
    features: ["Code completion", "Multiple languages", "IDE integration"],
    website: "https://github.com/features/copilot",
    rating: 4.6
  },
  {
    id: 4,
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion",
    category: "Productivity",
    pricing: "Add-on",
    features: ["Content generation", "Summarization", "Translation"],
    website: "https://notion.so/ai",
    rating: 4.5
  },
  {
    id: 5,
    name: "Runway ML",
    description: "Creative AI tools for video and image editing",
    category: "Creative",
    pricing: "Freemium",
    features: ["Video editing", "Background removal", "Style transfer"],
    website: "https://runwayml.com",
    rating: 4.4
  }
];

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
    const { category, search } = req.query;
    
    let filteredTools = aiTools;
    
    // Filter by category
    if (category && category !== 'all') {
      filteredTools = filteredTools.filter(tool => 
        tool.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by search term
    if (search) {
      filteredTools = filteredTools.filter(tool =>
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.features.some(feature => 
          feature.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    
    res.status(200).json({
      tools: filteredTools,
      total: filteredTools.length,
      categories: [...new Set(aiTools.map(tool => tool.category))]
    });
  } else if (req.method === 'POST') {
    // Add a new tool (for demo purposes)
    const newTool = {
      id: aiTools.length + 1,
      ...req.body,
      rating: 0
    };
    
    res.status(201).json({
      message: 'Tool added successfully',
      tool: newTool
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}