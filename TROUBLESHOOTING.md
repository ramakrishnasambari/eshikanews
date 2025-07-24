# GitHub Pages Troubleshooting Guide

## 🚨 Issue: GitHub Pages showing README instead of React App

### ✅ **What we've done:**
1. ✅ Deployed React app to `gh-pages` branch
2. ✅ Created `CNAME` file with `eshikanews.in`
3. ✅ Updated `package.json` homepage to `https://eshikanews.in`

### 🔧 **Next Steps to Fix:**

#### Step 1: Check GitHub Pages Settings
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, make sure it's set to:
   - **Deploy from a branch**
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Under **Custom domain**, enter: `eshikanews.in`
5. Check **"Enforce HTTPS"**
6. Click **Save**

#### Step 2: Check gh-pages Branch
1. Go to your repository
2. Click the branch dropdown (should show `main`)
3. Select `gh-pages` branch
4. You should see these files:
   - `index.html`
   - `static/` folder
   - `CNAME` file with `eshikanews.in`

#### Step 3: Configure GoDaddy DNS
1. Log into GoDaddy
2. Go to **Domain Management** → **Manage DNS**
3. Add these records:

**Record 1:**
- **Type:** CNAME
- **Name:** @ (or leave blank)
- **Value:** `YOUR_GITHUB_USERNAME.github.io`
- **TTL:** 600

**Record 2:**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `185.199.108.153`
- **TTL:** 600

**Record 3:**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `185.199.109.153`
- **TTL:** 600

**Record 4:**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `185.199.110.153`
- **TTL:** 600

**Record 5:**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `185.199.111.153`
- **TTL:** 600

#### Step 4: Wait for DNS Propagation
- DNS changes can take 24-48 hours
- You can check propagation at: https://www.whatsmydns.net/

#### Step 5: Test Your Domain
1. Try accessing: `https://eshikanews.in`
2. If it doesn't work, try: `https://YOUR_GITHUB_USERNAME.github.io/eshikanews`

### 🔍 **Common Issues & Solutions:**

#### Issue 1: Still showing README
**Solution:** Make sure GitHub Pages is set to `gh-pages` branch, not `main`

#### Issue 2: 404 Error
**Solution:** 
- Check if `gh-pages` branch exists
- Re-deploy: `npm run deploy`

#### Issue 3: Domain not working
**Solution:**
- Wait for DNS propagation
- Check DNS records in GoDaddy
- Verify CNAME file in `gh-pages` branch

#### Issue 4: Mixed content errors
**Solution:** Enable HTTPS in GitHub Pages settings

### 📞 **Need Help?**
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Verify your repository is public
3. Check GitHub Pages documentation: https://pages.github.com/

### 🎯 **Expected Result:**
After following these steps, `https://eshikanews.in` should show your Telugu news website with:
- Header with navigation
- Featured articles
- Category sections
- Footer with links 