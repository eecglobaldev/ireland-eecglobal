# DigitalOcean Deployment Guide for ireland-ssr

## Overview

This guide explains how to deploy the `ireland-ssr` Next.js application to DigitalOcean App Platform.

## Prerequisites

- GitHub repository: `git@github-eec:eecglobaldev/ireland-ssr.git`
- DigitalOcean account with App Platform access

## Environment Variables Configuration

### Required Environment Variables

**None required** - This application does not use Firebase, Gemini API, or other external services that require environment variables.

> [!NOTE]
> If you need to add environment variables in the future, configure them in DigitalOcean App Platform → Settings → Environment Variables.

## Build Configuration

### App Platform Settings

1. **Source**: `eecglobaldev/ireland-ssr` (main branch)
2. **Build Command**: `npm run build`
3. **Run Command**: `npm run start`
4. **Environment**: Node.js
5. **Node Version**: 20.x or higher

### Port Configuration

- Next.js uses port `3000` by default
- Ensure DigitalOcean's HTTP Port matches this (usually auto-detected)

## Deployment Steps

### 1. Create New App in DigitalOcean

```bash
# Via DigitalOcean Web Console:
1. Go to Apps → Create App
2. Choose GitHub as source
3. Select eecglobaldev/ireland-ssr repository
4. Choose 'main' branch
5. Auto-detect should identify it as Node.js
```

### 2. Configure Build Settings

```yaml
# App Spec (YAML format)
name: ireland-ssr
region: lon1  # London (closest to Ireland)
services:
  - name: web
    github:
      repo: eecglobaldev/ireland-ssr
      branch: main
      deploy_on_push: true
    build_command: npm run build
    run_command: npm run start
    environment_slug: node-js
    instance_size_slug: basic-xxs
    instance_count: 1
    http_port: 3000
```

### 3. Deploy

Click "Create Resources" or "Deploy" to start the deployment.

## Troubleshooting

### Common Issues

#### Build Fails with "Missing Dependencies"

**Solution**: Ensure `package-lock.json` is committed to the repository.

```bash
git add package-lock.json
git commit -m "Add package-lock.json for DigitalOcean deployment"
git push origin main
```

#### Build Timeout

**Solution**: Increase build instance size in App Platform settings.

#### Port Configuration Error

**Symptom**: App fails to start or shows connection errors.

**Solution**: 
- Verify HTTP Port is set to `3000` in App Platform settings
- Check that `next.config.ts` doesn't override the default port

#### Hydration Warnings in Console

**Symptom**: Console shows hydration mismatch warnings related to SVG elements and Dark Reader attributes:
```
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
- style={{--darkreader-inline-stroke:"currentColor"}}
- data-darkreader-inline-stroke=""
```

**Cause**: Browser extensions (like Dark Reader) modify SVG attributes **before** React hydrates, causing React to detect a mismatch between server-rendered HTML and client DOM.

**Why This Happens**:
1. Server renders HTML with clean SVG elements
2. Browser receives HTML
3. **Dark Reader modifies SVG elements** (adds `--darkreader-inline-stroke` style and `data-darkreader-inline-stroke` attribute)
4. React hydrates and compares server HTML with modified client DOM
5. React detects mismatch and shows warnings

**Solution**: 
- ✅ These warnings are **expected and harmless** when users have browser extensions installed
- ✅ They do **not** affect functionality, performance, or user experience
- ✅ The app works correctly despite these warnings
- ✅ The app includes cleanup code (`SuppressHydrationWarnings` component) that removes Dark Reader attributes after hydration
- ✅ `suppressHydrationWarning` is configured on key container elements
- ⚠️ **Note**: `suppressHydrationWarning` on parent elements doesn't suppress warnings from child SVG elements, which is why some warnings may still appear
- 📝 **No action required** - this is normal behavior for production apps when users have browser extensions

**For Development**:
- If you want to test without warnings, temporarily disable Dark Reader or other browser extensions
- The warnings only appear in development mode (Next.js suppresses them in production builds)

### Getting Deployment Logs

```bash
# Via DigitalOcean CLI (doctl)
doctl apps logs <app-id> --type BUILD
doctl apps logs <app-id> --type RUN

# Via Web Console
Apps → ireland-ssr → Runtime Logs
Apps → ireland-ssr → Build Logs
```

## Verifying Deployment

After successful deployment:

1. **Check Health**: Visit the app URL provided by DigitalOcean
2. **Test Pages**: Navigate through different routes (/, /visa, /cities, /money, etc.)
3. **Check Console**: Open browser DevTools Console for any errors
4. **Verify SEO**: Check that sitemap and robots.txt are accessible
5. **Test Responsiveness**: Verify the app works on mobile devices

## Differences from Other Deployments

| Feature | ireland-ssr | germany-eecglobal | australia-eecglobal |
|---------|-------------|-------------------|---------------------|
| Framework | Next.js | Next.js | Vite/React |
| Build Command | `npm run build` | `npm run build` | `vite build` |
| Run Command | `npm run start` | `npm run start` | Static hosting |
| Environment Variables | None | Firebase + Gemini | Firebase + Gemini |
| Region | `lon1` (London) | `fra1` (Frankfurt) | Varies |

## Next Steps

1. **Configure custom domain** (if applicable) - e.g., `ireland.eecglobal.com`
2. **Set up monitoring** via DigitalOcean App Platform metrics
3. **Enable auto-deploy** on push to main branch (already configured in YAML)
4. **Set up staging environment** (optional) for testing before production

## Support

If deployment continues to fail:
- Check DigitalOcean App Platform status page
- Review build and runtime logs in App Platform console
- Verify GitHub repository access permissions are correct
- Ensure `package-lock.json` is committed and up to date

