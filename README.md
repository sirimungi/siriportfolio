# Siri M - Portfolio Website

A professional portfolio website showcasing backend and distributed systems engineering expertise.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vercel** - Deployment platform

## 📦 Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub:
```bash
git add .
git commit -m "Portfolio website"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Your site will be live in ~60 seconds at `https://your-project.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: "#0f172a",  // Dark background
  accent: "#38bdf8",   // Blue accent
}
```

### Content
Edit `src/App.jsx` to update:
- Experience details
- Projects
- Skills
- Contact information

## 📈 Next Steps to Stand Out

1. **Add case studies** - Create detailed project pages
2. **Add blog** - Write technical posts about your work
3. **Add GitHub links** - Link to your open source projects
4. **Add metrics** - Show performance improvements with graphs
5. **Add architecture diagrams** - Visual system designs

## 📝 License

MIT
