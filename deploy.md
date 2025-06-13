# Deployment Guide

## Quick Deployment to Vercel

### Method 1: One-Click Deploy (Recommended)

1. **Push to GitHub first:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-tools-showcase.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

### Method 3: Manual Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the entire project folder (not just dist)

## Other Free Hosting Options

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Drag and drop to [netlify.com](https://netlify.com)

### GitHub Pages (Static only)
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Environment Setup

Your project is ready to deploy with:
- ✅ Vercel configuration (`vercel.json`)
- ✅ API endpoints (`/api` folder)
- ✅ Build optimization
- ✅ Tailwind CSS production build
- ✅ React production build

## Post-Deployment

After deployment, your app will have:
- Frontend: Your React app
- API: `/api/tools` and `/api/hello` endpoints
- Toggle between static and API data sources

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

**Build fails?**
- Check Node.js version (requires 16+)
- Run `npm install` to ensure all dependencies

**API not working?**
- Check `/api` folder is included in deployment
- Verify `vercel.json` configuration

**Styles not loading?**
- Ensure Tailwind CSS is properly configured
- Check `postcss.config.js` and `tailwind.config.js`