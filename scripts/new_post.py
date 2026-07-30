#!/usr/bin/env python3
"""
Interactive Post Generator for Oleksandr Sobol's Blog
Creates a new Markdown post with frontmatter in _posts/
Usage:
    python scripts/new_post.py "My New Post Title" --category "engineering" --tags "python, automation"
    or run interactively:
    python scripts/new_post.py
"""

import os
import sys
import datetime
import re

# Ensure UTF-8 output on Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text).strip('-')
    return text

def main():
    print("=== Material Design Blog Post Creator ===")
    
    title = ""
    if len(sys.argv) > 1:
        title = sys.argv[1]
    else:
        title = input("Enter Post Title: ").strip()

    if not title:
        print("Error: Title cannot be empty.")
        sys.exit(1)

    category = input("Category [Engineering/Notes/Experiments/Career] (default: Engineering): ").strip() or "Engineering"
    tags_input = input("Tags comma-separated (e.g. python, fast-api, automation): ").strip()
    tags = [t.strip() for t in tags_input.split(',')] if tags_input else ["automation"]

    today = datetime.datetime.now()
    date_str = today.strftime("%Y-%m-%d")
    datetime_str = today.strftime("%Y-%m-%d %H:%M:%S -0700")
    
    slug = slugify(title)
    filename = f"{date_str}-{slug}.md"
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, ".."))
    posts_dir = os.path.join(project_root, "_posts")

    os.makedirs(posts_dir, exist_ok=True)
    filepath = os.path.join(posts_dir, filename)

    tags_yaml = "\n".join([f"  - {t}" for t in tags])

    content = f"""---
layout: post
title: "{title}"
date: {datetime_str}
categories:
  - {category}
tags:
{tags_yaml}
excerpt: "A brief summary of what this article covers."
---

Write your article content here in standard GitHub Flavored Markdown.

## Overview

Key takeaways and introduction...

```python
# Code snippet example
def hello_world():
    print("Hello from Material Design 3 blog!")
```

### Highlights

- Bullet point 1
- Bullet point 2
"""

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"\n[+] Success! New post created at:")
    print(f"   {filepath}")
    print(f"\nTo publish, commit and push to git:")
    print(f"   git add _posts/{filename}")
    print(f'   git commit -m "Add post: {title}"')
    print(f"   git push origin main\n")

if __name__ == "__main__":
    main()
