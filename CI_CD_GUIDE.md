# 🚀 CI/CD Pipeline Guide

## Overview

This project uses GitHub Actions for continuous integration and deployment (CI/CD). The pipeline automatically builds, tests, and deploys the Coderhouse Metaverse application.

## 📋 Pipeline Workflows

### 1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
**Triggers**: Push to `main`/`develop` branches, Pull Requests
**Purpose**: Full deployment pipeline

#### Jobs:
- **Lint and Test**: Code quality checks
- **Build Client**: Frontend build
- **Build Server**: Backend build  
- **Deploy Frontend**: Netlify deployment
- **Deploy Backend**: Railway deployment
- **Update Environment**: Set environment variables
- **Notify**: Deployment success notification

### 2. **Development Workflow** (`.github/workflows/development.yml`)
**Triggers**: Pull Requests
**Purpose**: Pre-merge testing

#### Jobs:
- **Code Quality**: Linting, type checking, formatting
- **Build Test**: Verify builds work
- **Security Check**: Security audits
- **Performance Check**: Bundle size analysis

### 3. **Deployment Status** (`.github/workflows/deployment-status.yml`)
**Triggers**: Every 6 hours, after CI/CD completion
**Purpose**: Monitor deployment health

#### Jobs:
- **Check Frontend**: Netlify status
- **Check Backend**: Railway status
- **Status Report**: Generate health report
- **Notify Issues**: Alert on failures

## 🔧 Setup Instructions

### 1. **GitHub Secrets Configuration**

Add these secrets to your GitHub repository (`Settings > Secrets and variables > Actions`):

```bash
# Netlify Configuration
NETLIFY_SITE_ID=candid-queijadas-964325
NETLIFY_AUTH_TOKEN=your_netlify_token

# Railway Configuration  
RAILWAY_TOKEN=your_railway_token
RAILWAY_PROJECT_ID=your_railway_project_id
```

### 2. **Get Netlify Token**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and get token
netlify login
netlify status
```

### 3. **Get Railway Token**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and get token
railway login
railway whoami
```

## 🚀 Deployment Flow

### **Automatic Deployment**
1. **Push to `main` branch**
2. **GitHub Actions triggers**:
   - Lint and test code
   - Build client and server
   - Deploy to Netlify (frontend)
   - Deploy to Railway (backend)
   - Update environment variables
   - Send success notification

### **Manual Deployment**
```bash
# Build and deploy manually
npm run build
cd client && npm run build
cd .. && netlify deploy --prod --dir=client/dist
```

## 📊 Monitoring

### **Deployment Status**
- **Frontend**: https://candid-queijadas-964325.netlify.app
- **Backend**: https://web-production-249c7.up.railway.app
- **GitHub Actions**: https://github.com/athsb009/coders-house/actions

### **Health Checks**
- Automated status checks every 6 hours
- Performance monitoring
- Error notifications

## 🔍 Troubleshooting

### **Common Issues**

#### 1. **Build Failures**
```bash
# Check local build
npm ci --legacy-peer-deps
cd client && npm ci --legacy-peer-deps
npm run build
cd client && npm run build
```

#### 2. **Deployment Failures**
- Check GitHub secrets are configured
- Verify Netlify/Railway tokens are valid
- Check deployment logs in GitHub Actions

#### 3. **Environment Variables**
```bash
# Update Netlify environment variables
netlify env:set VITE_SERVER_URL wss://web-production-249c7.up.railway.app
```

### **Debug Commands**
```bash
# Check deployment status
curl -I https://candid-queijadas-964325.netlify.app
curl -I https://web-production-249c7.up.railway.app

# Check build artifacts
ls -la client/dist/
ls -la server/dist/
```

## 📈 Performance Metrics

### **Target Metrics**
- **Frontend Load Time**: < 2 seconds
- **Backend Response Time**: < 500ms
- **WebSocket Latency**: < 100ms
- **Bundle Size**: < 5MB total

### **Monitoring Tools**
- GitHub Actions logs
- Netlify analytics
- Railway metrics
- Custom health checks

## 🔄 Rollback Strategy

### **Automatic Rollback**
- Previous deployment remains active during new deployment
- Automatic rollback on deployment failure
- Health checks before switching traffic

### **Manual Rollback**
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or manually redeploy previous version
git checkout <previous-commit>
# Follow deployment steps
```

## 📝 Best Practices

### **Code Quality**
- All code must pass linting
- TypeScript strict mode enabled
- Security audits run automatically
- Performance checks on every PR

### **Deployment**
- Deployments are atomic (all-or-nothing)
- Environment variables are versioned
- Health checks before traffic switch
- Rollback capability always available

### **Monitoring**
- Automated status checks
- Performance monitoring
- Error tracking
- User experience metrics

## 🎯 Next Steps

### **Advanced Features**
- [ ] Add automated testing
- [ ] Implement staging environment
- [ ] Add performance budgets
- [ ] Set up error tracking (Sentry)
- [ ] Add user analytics

### **Optimizations**
- [ ] Implement caching strategies
- [ ] Add CDN configuration
- [ ] Optimize bundle splitting
- [ ] Add service worker for offline support

## 📞 Support

For CI/CD issues:
1. Check GitHub Actions logs
2. Review deployment status
3. Verify secrets configuration
4. Contact maintainers if needed

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Maintainer**: athsb009 