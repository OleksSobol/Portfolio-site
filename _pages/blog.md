---
layout: default
title: "Engineering Blog"
permalink: /blog/
---

<div style="margin-bottom: 2.5rem;">
  <h1 class="md-hero-title">Engineering Blog & Notes</h1>
  <p class="md-hero-sub">Technical deep dives, API design patterns, automation scripts, and software engineering lessons.</p>
</div>

<div style="margin-bottom: 2rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
  <div style="position: relative; flex: 1; min-width: 250px;">
    <i class="fas fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--md-sys-color-on-surface-variant);"></i>
    <input type="text" id="postSearchInput" class="md-input" placeholder="Search articles by title or keyword..." style="padding-left: 2.5rem;">
  </div>
</div>

<div class="md-grid" id="blogPostGrid">
  {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="md-card post-item" data-title="{{ post.title | downcase }}" data-excerpt="{{ post.excerpt | strip_html | downcase }}">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.8rem; color: var(--md-sys-color-secondary); font-family: var(--md-font-mono);">
          <i class="far fa-calendar-alt"></i> {{ post.date | date: "%B %d, %Y" }}
        </span>
        <span class="md-chip" style="font-size: 0.7rem;">{{ post.categories | first | default: "Article" }}</span>
      </div>

      <h2 class="md-card-title" style="font-size: 1.3rem;">{{ post.title }}</h2>
      <p class="md-card-desc">{{ post.excerpt | strip_html | truncate: 150 }}</p>

      <div style="color: var(--md-sys-color-primary); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 0.4rem;">
        Read Post <i class="fas fa-arrow-right"></i>
      </div>
    </a>
  {% else %}
    <div class="md-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem;">
      <i class="fas fa-edit" style="font-size: 2.5rem; color: var(--md-sys-color-primary); margin-bottom: 1rem;"></i>
      <h3 style="margin-bottom: 0.5rem;">No posts published yet</h3>
      <p style="color: var(--md-sys-color-on-surface-variant);">Ready to post something new? Run <code>python scripts/new_post.py</code> to publish instantly!</p>
    </div>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('postSearchInput');
    const posts = document.querySelectorAll('.post-item');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        posts.forEach(post => {
          const title = post.getAttribute('data-title');
          const excerpt = post.getAttribute('data-excerpt');
          if (title.includes(query) || excerpt.includes(query)) {
            post.style.display = 'flex';
          } else {
            post.style.display = 'none';
          }
        });
      });
    }
  });
</script>
