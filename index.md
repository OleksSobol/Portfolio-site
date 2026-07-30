---
layout: default
permalink: /
title: "Oleksandr Sobol — Backend Automation & Software Engineer"
---

<div class="md-hero">
  <div class="md-hero-badge">
    <span class="md-hero-badge-pulse"></span>
    Backend Systems & Automation Specialist
  </div>

  <h1 class="md-hero-title">I build high-scale backend systems that eliminate manual work.</h1>
  
  <p class="md-hero-sub">
    Production automation serving 4,000+ clients with 99.9% uptime. Transforming complex manual workflows into fast, resilient API services.
  </p>

  <div class="md-chip-group">
    <span class="md-chip">Python</span>
    <span class="md-chip">Go</span>
    <span class="md-chip">FastAPI</span>
    <span class="md-chip">Flask</span>
    <span class="md-chip">Docker</span>
    <span class="md-chip">REST APIs</span>
    <span class="md-chip">MySQL</span>
    <span class="md-chip">Linux</span>
  </div>

  <div class="md-hero-actions">
    <a href="{{ '/projects/' | relative_url }}" class="md-btn md-btn-filled"><i class="fas fa-rocket"></i> Explore Work</a>
    <a href="{{ '/playground/' | relative_url }}" class="md-btn md-btn-tonal"><i class="fas fa-terminal"></i> Interactive Tools</a>
    <a href="{{ '/assets/resume.pdf' | relative_url }}" class="md-btn md-btn-tonal" target="_blank"><i class="fas fa-file-pdf"></i> Resume</a>
  </div>
</div>

<div class="md-stats-grid">
  <div class="md-stat-card">
    <div class="md-stat-num">4,000+</div>
    <div class="md-stat-label">Clients Served</div>
  </div>
  <div class="md-stat-card">
    <div class="md-stat-num">95%</div>
    <div class="md-stat-label">Faster Onboarding</div>
  </div>
  <div class="md-stat-card">
    <div class="md-stat-num">15+ hrs</div>
    <div class="md-stat-label">Saved Weekly / Tech</div>
  </div>
  <div class="md-stat-card">
    <div class="md-stat-num">99.9%</div>
    <div class="md-stat-label">System Uptime</div>
  </div>
</div>

<section style="margin: 4rem 0;">
  <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
    <div>
      <h2 style="font-size: 1.8rem;">Featured Projects</h2>
      <p style="margin: 0; color: var(--md-sys-color-on-surface-variant);">Production automation & engineering systems</p>
    </div>
    <a href="{{ '/projects/' | relative_url }}" class="md-btn md-btn-tonal" style="padding: 0.4rem 1rem; font-size: 0.85rem;">View All <i class="fas fa-arrow-right"></i></a>
  </div>

  <div class="md-grid">
    <a href="{{ '/projects/' | relative_url }}" class="md-card">
      <div class="md-chip-group">
        <span class="md-chip">Python</span>
        <span class="md-chip">Flask</span>
        <span class="md-chip">ISP API</span>
      </div>
      <h3 class="md-card-title">Utopia Account Creation (UAC)</h3>
      <p class="md-card-desc">Production ISP onboarding automation serving 4000+ active subscribers. Reduced provisioning time from 20 minutes to under 1 minute with 90% error reduction.</p>
      <div style="color: var(--md-sys-color-primary); font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.4rem;">
        Explore Case Study <i class="fas fa-arrow-right"></i>
      </div>
    </a>

    <a href="{{ '/projects/' | relative_url }}" class="md-card">
      <div class="md-chip-group">
        <span class="md-chip">Python</span>
        <span class="md-chip">Multi-threading</span>
        <span class="md-chip">Network</span>
      </div>
      <h3 class="md-card-title">DHCP Lease Runner (DLR)</h3>
      <p class="md-card-desc">ISP field equipment management tool. Automated IP & lease resolution across multi-vendor devices, saving 15+ hours per technician each week.</p>
      <div style="color: var(--md-sys-color-primary); font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.4rem;">
        Explore Case Study <i class="fas fa-arrow-right"></i>
      </div>
    </a>

    <a href="{{ '/projects/' | relative_url }}" class="md-card">
      <div class="md-chip-group">
        <span class="md-chip">Flutter</span>
        <span class="md-chip">Dart</span>
        <span class="md-chip">AES-256</span>
      </div>
      <h3 class="md-card-title">CodeLedger</h3>
      <p class="md-card-desc">Offline-first mobile application for freelance developer billing. Automated timer logging, customizable PDF invoicing, and encrypted cloud backups.</p>
      <div style="color: var(--md-sys-color-primary); font-size: 0.875rem; font-weight: 600; display: flex; align-items: center; gap: 0.4rem;">
        Explore Case Study <i class="fas fa-arrow-right"></i>
      </div>
    </a>
  </div>
</section>

<section style="margin: 4rem 0;">
  <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
    <div>
      <h2 style="font-size: 1.8rem;">Latest Posts</h2>
      <p style="margin: 0; color: var(--md-sys-color-on-surface-variant);">Engineering notes, technical deep dives & updates</p>
    </div>
    <a href="{{ '/blog/' | relative_url }}" class="md-btn md-btn-tonal" style="padding: 0.4rem 1rem; font-size: 0.85rem;">All Posts <i class="fas fa-arrow-right"></i></a>
  </div>

  <div class="md-grid">
    {% for post in site.posts limit:3 %}
      <a href="{{ post.url | relative_url }}" class="md-card">
        <div style="font-size: 0.8rem; color: var(--md-sys-color-secondary); font-family: var(--md-font-mono);">
          <i class="far fa-calendar-alt"></i> {{ post.date | date: "%B %d, %Y" }}
        </div>
        <h3 class="md-card-title" style="font-size: 1.2rem;">{{ post.title }}</h3>
        <p class="md-card-desc" style="font-size: 0.9rem;">{{ post.excerpt | strip_html | truncate: 140 }}</p>
        <div style="color: var(--md-sys-color-primary); font-size: 0.85rem; font-weight: 600;">
          Read Article <i class="fas fa-arrow-right"></i>
        </div>
      </a>
    {% else %}
      <div class="md-card" style="grid-column: 1 / -1;">
        <p style="margin: 0; color: var(--md-sys-color-on-surface-variant);">No blog posts published yet. Stay tuned for upcoming articles on backend architecture, Python automation, and system design!</p>
      </div>
    {% endfor %}
  </div>
</section>
