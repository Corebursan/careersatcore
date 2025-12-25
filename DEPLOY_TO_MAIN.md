# Deploy to Main Branch - Quick Guide

## Steps to Deploy from Main Branch

### 1. Merge CORE-1 to Main

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge CORE-1 into main
git merge CORE-1

# Push to main
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### 3. Verify Deployment

- Go to **Actions** tab to see the deployment workflow running
- Once complete, your site will be live at:
  - `https://YOUR-USERNAME.github.io/Core/`

## Alternative: Direct Push to Main

If you want to push directly to main:

```bash
# Add all changes
git add .

# Commit
git commit -m "Deploy to production"

# Switch to main
git checkout main

# Merge or cherry-pick your changes
git merge CORE-1
# OR
git cherry-pick <commit-hash>

# Push to main
git push origin main
```

## Important Notes

- The GitHub Actions workflow is now configured to **only deploy from main branch**
- Every push to main will automatically trigger a deployment
- The deployment takes about 2-3 minutes to complete
- You can monitor the deployment in the **Actions** tab

