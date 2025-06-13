# AI Tools Showcase

A modern React showcase application for discovering and exploring AI tools with beautiful UI, animations, and backend API functionality.

## Features

- 🎨 Beautiful, responsive design with Tailwind CSS
- ✨ Smooth animations and interactive elements
- 🔍 Search and filter functionality
- 🌐 Backend API integration with Vercel serverless functions
- 📱 Mobile-friendly responsive design
- 🎯 Custom cursor and hover effects
- 🚀 Fast performance with Vite

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Vercel Serverless Functions (Node.js)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Uday-132/ai-tools-showcase.git
   cd ai-tools-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## API Endpoints

The application includes serverless API endpoints:

### GET /api/tools
Returns a list of AI tools with filtering capabilities.

**Query Parameters:**
- `category` - Filter by tool category
- `search` - Search in tool names, descriptions, and features

**Example:**
```bash
curl "https://your-domain.vercel.app/api/tools?category=Image&search=generation"
```

### GET /api/hello
A simple hello world endpoint for testing.

**Example:**
```bash
curl "https://your-domain.vercel.app/api/hello"
```

### POST /api/tools
Add a new tool (demo endpoint).

**Example:**
```bash
curl -X POST "https://your-domain.vercel.app/api/tools" \
  -H "Content-Type: application/json" \
  -d '{"name":"New Tool","description":"A new AI tool","category":"Productivity"}'
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Upload to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop your `dist` folder

## Environment Variables

No environment variables are required for basic functionality. For production, you might want to add:

- `VITE_API_URL` - Custom API URL if using external APIs
- `DATABASE_URL` - If connecting to a database

## Project Structure

```
ai-tools-showcase/
├── api/                    # Vercel serverless functions
│   ├── hello.js           # Sample API endpoint
│   └── tools.js           # AI tools API endpoint
├── public/                # Static assets
├── src/                   # React source code
│   ├── AIToolsShowcase.jsx # Main component
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vercel.json            # Vercel deployment configuration
└── vite.config.js         # Vite configuration
```

## Features in Detail

### Data Sources
The application supports two data sources:
- **Static Data**: Predefined list of AI tools (default)
- **API Data**: Dynamic data from serverless functions

Use the toggle switch in the UI to switch between data sources.

### Search & Filter
- Real-time search across tool names, descriptions, and categories
- Category-based filtering
- Responsive design for all screen sizes

### Animations
- Custom CSS animations with Tailwind
- Hover effects and transitions
- Loading states and micro-interactions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
