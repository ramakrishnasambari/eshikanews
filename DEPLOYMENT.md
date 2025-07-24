# GitHub Pages Deployment Guide

## 🚀 Deploy Eshika News to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your computer
- Your project pushed to a GitHub repository

### Step 1: Update Homepage URL
Before deploying, update the `homepage` field in `package.json`:

```json
"homepage": "https://eshikanews.in"
```

**Note:** This project is configured for the custom domain `eshikanews.in`.

### Step 2: Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 3: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `eshikanews`
4. Make it public
5. Don't initialize with README (we already have one)

### Step 4: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/eshikanews.git
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Push the build files to GitHub Pages

### Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

### Step 7: Access Your Website
Your website will be available at:
```
https://eshikanews.in
```

### Troubleshooting

#### If deployment fails:
1. Check that your GitHub username is correct in `package.json`
2. Ensure your repository is public
3. Try running `npm run deploy` again

#### If the website doesn't load:
1. Wait 5-10 minutes for GitHub Pages to update
2. Check the "Actions" tab in your repository for deployment status
3. Clear your browser cache

#### If images don't load:
- All images are using external URLs (Unsplash), so they should work fine

### Custom Domain (Optional)
To use a custom domain:
1. Add your domain to the "Custom domain" field in GitHub Pages settings
2. Update the `homepage` field in `package.json` to your custom domain
3. Redeploy with `npm run deploy`

### Automatic Deployment
Every time you push changes to the main branch, you can redeploy by running:
```bash
npm run deploy
```

## 🎉 Your Telugu News Website is Live!

Your Eshika News website with Telugu articles will be accessible to anyone on the internet! 