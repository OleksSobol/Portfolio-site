# Oleksandr Sobol - Portfolio Website

Professional portfolio website showcasing backend development projects, automation systems, and aerial drone cinematography.

🌐 **Live Site:** [osobol.com](https://osobol.com)

## Features

- **Homepage** - Animated metrics showcasing 95% efficiency improvements and 4000+ clients served
- **Projects** - Interactive project cards with detailed stats and tech stacks
- **Playground** - 6 interactive developer tools (API Tester, JSON Formatter, Base64, URL Encoder, Subnet Calculator, UUID Generator)
- **About** - Story-driven journey from network engineer to software developer
- **Videos** - Professional drone cinematography portfolio (FAA Part 107 certified)
- **Blog** - Technical articles and insights

## Tech Stack

- **Static Site Generator:** Jekyll
- **Theme:** Minimal Mistakes
- **Hosting:** Cloudflare Pages (migrated from GitHub Pages)
- **Languages:** HTML, CSS, JavaScript, Ruby
- **Features:** Responsive design, dark theme, interactive tools

## Project Structure

```
.
├── cloudflare/           # Cloudflare Pages configuration
│   ├── wrangler.toml
│   ├── .cloudflare-pages.yml
│   ├── deploy-cloudflare.sh
│   └── README.md
├── docs/                 # Documentation
│   ├── DEPLOYMENT_GUIDE.md
│   ├── CLOUDFLARE_DEPLOYMENT.md
│   └── README.md
├── _pages/               # Content pages
│   ├── about.md
│   ├── projects.md
│   ├── playground.md
│   ├── videos.md
│   ├── blog.md
│   ├── contact.md
│   ├── commits.md
│   └── post.md
├── _data/                # Site data (navigation, etc.)
├── _layouts/             # Custom layouts
├── _posts/               # Blog posts
├── assets/               # Images, CSS, JS
├── scripts/              # Build scripts
├── admin/                # Netlify CMS (if used)
├── _headers              # HTTP headers config
├── _redirects            # URL redirects
├── _config.yml           # Jekyll configuration
├── index.md              # Homepage
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## Local Development

### Prerequisites

- Ruby 3.x
- Bundler
- Jekyll

### Setup

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Build

```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Output in _site/
```

## Deployment

### Cloudflare Pages (Recommended)

**Via Dashboard:**
1. See [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md)

**Via CLI:**
```bash
./cloudflare/deploy-cloudflare.sh
```

Full documentation: [`docs/`](docs/)

## Key Metrics

- **95%** faster customer onboarding
- **4000+** clients served
- **90%** reduction in manual errors
- **80%** faster deployments
- **15+ hours** saved weekly per automation system

## Pages

- **[Homepage](/)** - Overview with key metrics and featured projects
- **[Projects](/projects/)** - Detailed project showcase with stats
- **[Playground](/playground/)** - Interactive developer tools
- **[About](/about/)** - Professional background and journey
- **[Videos](/videos/)** - Aerial cinematography portfolio
- **[Blog](/blog/)** - Technical articles

## Contact

- **Email:** oleks@osobol.com
- **LinkedIn:** [linkedin.com/in/olekssobol](https://www.linkedin.com/in/olekssobol/)
- **GitHub:** [github.com/OleksSobol](https://github.com/OleksSobol)
- **YouTube:** [youtube.com/@Life2freedom](https://www.youtube.com/@Life2freedom)

## License

© 2024 Oleksandr Sobol. All rights reserved.

---

**Built with:** Jekyll • Minimal Mistakes • Cloudflare Pages • ❤️
