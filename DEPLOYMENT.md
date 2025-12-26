# GitHub Pages Deployment Guide

This guide will help you deploy the CORE Careers website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. The repository pushed to GitHub
3. GitHub Pages enabled in repository settings

## Deployment Methods

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your site to the `gh-pages` branch when you push to the main branch.

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click **Save**

3. **Update Base Path (if needed):**
   - If your repository is NOT named "careersatcore", update `vite.config.js`:
     ```javascript
     base: '/YOUR-REPO-NAME/',
     ```
   - If deploying to `username.github.io` (root domain), use:
     ```javascript
     base: '/',
     ```

4. **Trigger Deployment:**
   - Push any change to the `main` branch to trigger the workflow
   - Or go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

5. **Check Deployment:**
   - Go to **Actions** tab to see the deployment progress
   - Once complete, the workflow will push to the `gh-pages` branch
   - Your site will be available at:
     - `https://corebursan.github.io/careersatcore/` (for this repository)
     - `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` (for other repositories)

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages (if not installed):**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click **Save**

## Important Notes

### Base Path Configuration

The `base` path in `vite.config.js` must match your repository structure:

- **Repository named "careersatcore"**: `/careersatcore/` (current setup)
- **Repository named "username.github.io"**: `/`
- **Any other repository name**: `/REPOSITORY-NAME/`

### Environment Variables

If you need to use environment variables:
1. Create `.env.production` file
2. Add your variables (e.g., `VITE_API_URL=...`)
3. Access them in code with `import.meta.env.VITE_API_URL`

### Troubleshooting

1. **404 errors on routes:**
   - Ensure the base path in `vite.config.js` matches your repository name
   - Check that GitHub Pages is serving from the correct branch/folder

2. **Assets not loading:**
   - Verify the base path is correct
   - Clear browser cache
   - Check browser console for errors

3. **Build fails:**
   - Check for linting errors: `npm run lint`
   - Ensure all dependencies are installed: `npm install`
   - Check the build output for specific errors

## Post-Deployment Checklist

- [ ] Test all routes/pages
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test API connections (if any)
- [ ] Verify search functionality
- [ ] Check job listings display correctly
- [ ] Test form submissions
- [ ] Verify chatbot functionality

## Updating the Site

After making changes:

1. **For Automatic Deployment:**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```
   The GitHub Action will automatically build and deploy to the `gh-pages` branch.

2. **For Manual Deployment:**
   ```bash
   npm run build
   npm run deploy
   ```

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review browser console for errors
3. Verify all configuration files are correct
4. Ensure the base path matches your repository name

