# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with VuePress 2.0 using the Hope theme. The blog is written in Chinese and focuses on frontend development topics including React, Vue, JavaScript, CSS, and various frameworks.

- **Framework**: VuePress 2.0 (Beta 67)
- **Theme**: vuepress-theme-hope 2.0 (Beta 236)
- **Language**: TypeScript (config), Markdown (content)
- **Deploy Targets**: GitHub Pages (primary), Vercel (backup)

## Common Commands

### Development
```bash
# Start development server (alias: npm start)
npm run docs:dev
```

### Build
```bash
# Build for production
npm run docs:build
```

### Deployment
```bash
# Deploy to GitHub Pages (uses gh-pages package)
npm run deploy

# Build and deploy in one step
npm run deploy:build

# Deploy to OSS (custom script)
npm run deploy:oss
```

### Package Management
```bash
# Install dependencies
yarn install

# Note: project uses yarn.lock but pnpm-lock.yaml also exists
```

## Project Structure

```
├── docs/                    # Source directory
│   ├── .vuepress/          # VuePress configuration
│   │   ├── config.ts       # Main VuePress configuration (TypeScript)
│   │   ├── client.ts       # Client-side setup, component registration
│   │   ├── public/         # Static assets (images, icons, manifest)
│   │   ├── styles/         # Global styles (SCSS)
│   │   ├── supabase/       # Supabase integration
│   │   ├── ContactMe.vue   # Custom component
│   │   └── .cache/         # Build cache (gitignored)
│   ├── 文章专栏/           # Blog articles
│   ├── 实战分享/           # Practical guides
│   └── README.md           # Homepage (BlogHome layout)
├── static/imgs/            # Additional static images
├── .github/workflows/      # CI/CD configuration
│   └── build_docs.yml      # GitHub Actions for auto-deployment
└── dist/                   # Build output (gitignored)
```

## Architecture

### VuePress Configuration
- **Main Config**: `docs/.vuepress/config.ts` - Contains all site-wide settings, theme config, and plugin setup
- **Client Setup**: `docs/.vuepress/client.ts` - Registers custom components globally (e.g., `<ContactMe>`) and provides Supabase credentials
- **Base Path**: Controlled by `IS_VERCEL` env var
  - Vercel: `/`
  - GitHub Pages: `/xx-blog/`

### Content Organization
- **Articles**: Markdown files in `docs/文章专栏/` and `docs/实战分享/`
- **Frontmatter**: Uses standard VuePress frontmatter with custom fields:
  ```yaml
  title: Article Title
  created: YYYY/MM/DD
  updated: YYYY/MM/DD
  tag:
    - Tag1
    - Tag2
  ```
- **Homepage**: Uses `BlogHome` layout from Hope theme, configured in `docs/README.md`

### Theme Features (Hope Theme)
- **Blog Plugin**: Enables blog functionality with post listing
- **PWA Plugin**: Progressive Web App support with offline caching
- **Sitemap**: Auto-generated sitemap
- **Copy Code**: Code block copy functionality
- **Reading Time**: Estimated reading time calculation
- **Git**: Git metadata (contributors, edit link)

### Analytics & SEO
- Baidu Analytics (`hm.js` script in head)
- Google Analytics (G-1HXVHRSBB0)
- Custom meta tags for SEO
- Site verification for Baidu and Google

### Supabase Integration
- Client config in `client.ts` provides `supabaseUrl` and `supabaseKey`
- Supabase module in `docs/.vuepress/supabase/supabase.js`
- Used by `ContactMe.vue` component for article search functionality
- **Note**: Actual credentials are placeholders, need to be filled in for production

### Styling
- Global styles in `.vuepress/styles/index.scss`
- Theme colors in `.vuepress/styles/palette.scss`
- Config overrides in `.vuepress/styles/config.scss`

### Custom Components
- `ContactMe` component is globally registered and can be used anywhere in markdown

## Deployment

### GitHub Actions (Automatic)
- Triggered on push to `master` branch
- Builds with Node 16.x and Yarn
- Deploys to GitHub Pages using `actions/deploy-pages@v2`
- Workflow: `.github/workflows/build_docs.yml`

### Manual Deployment
- Use `npm run deploy:build` for local deployment
- Uses `gh-pages` package to deploy `dist/` directory

## Important Notes

- Build output goes to `dist/` directory (configurable in config.ts)
- Cache and temp directories are gitignored (`.vuepress/.cache`, `.vuepress/.temp`)
- The site supports PWA with manifest.json in public directory
- Font used: Noto Serif SC (loaded from Google Fonts)
- Theme color: #FAD95C (yellow) and #12a182 (teal for PWA)
