# DNA_CORE - Deployment Guide

## 🚀 Deploy to Netlify

### Method 1: Deploy via GitHub (Recommended)

#### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `DNA_CORE`
4. Description: "NeuroAlly - AI-Driven Education Platform with Futuristic Dark Theme"
5. Choose: **Public** or **Private**
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

#### Step 2: Push Code to GitHub

GitHub will show you commands. Here's what to run:

```bash
# Initialize git (if not already done)
cd /app
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: DNA_CORE futuristic dark theme"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/DNA_CORE.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com) and sign up/log in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the `DNA_CORE` repository
6. Configure build settings:
   - **Build command:** `yarn build`
   - **Publish directory:** `.next`
   - **Node version:** 18
7. Click "Deploy site"

✅ Your site will be live in 2-3 minutes!

---

### Method 2: Manual Deploy (Drag & Drop)

1. Build the project locally:
   ```bash
   cd /app
   yarn build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `.next` folder
4. Your site will be deployed instantly!

---

## 🔧 Environment Variables

If you need environment variables on Netlify:

1. Go to your site in Netlify dashboard
2. Site settings → Environment variables
3. Add variables:
   - `NEXT_PUBLIC_BASE_URL`: Your Netlify site URL
   - `MONGO_URL`: Your MongoDB connection string (if needed)

---

## 📝 Post-Deployment

### Custom Domain (Optional)

1. In Netlify dashboard → Domain settings
2. Click "Add custom domain"
3. Follow instructions to configure DNS

### Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests get preview deployments
- Rollback to previous versions anytime

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Issue:** Module not found errors
**Solution:** Make sure all dependencies are in `package.json`

```bash
# Check if all packages are listed
cat package.json
```

**Issue:** Environment variable errors
**Solution:** Add them in Netlify dashboard (Site settings → Environment variables)

### Site Shows 404

**Issue:** Routing not working
**Solution:** Check `netlify.toml` has correct redirects

---

## 📚 Useful Commands

```bash
# Local development
yarn dev

# Build for production
yarn build

# Start production server locally
yarn start

# Check for issues
yarn lint
```

---

## 🎯 Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Netlify
3. 🔄 Connect backend APIs (when ready)
4. 🔄 Add MongoDB connection
5. 🔄 Configure custom domain

---

## 📞 Support

If you encounter issues:
- Check [Netlify Docs](https://docs.netlify.com)
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Review build logs in Netlify dashboard

---

**Built with ❤️ for Trithon 2026**
