export type ProjectCategory = "web" | "mobile" | "automation";

export interface Project {
  title: string;
  desc: string;
  url: string;
  techTags: string[];
  category: ProjectCategory;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "ProVar Agricultural Variety Management",
    desc: "Architected a complete CSS theme redesign and modern UI overhaul for ProVar Management, streamlining fruit variety licensing, agricultural logistics, and grower reporting.",
    url: "https://provarmanagement.com/pvm/about-pvm/",
    techTags: ["HTMX", "CSS", "HTML", "PHP", "JS"],
    category: "web",
    featured: true,
  },
  {
    title: "CampFinder PWA: National Forest Campground Finder",
    desc: "Lightweight PWA for discovering open campgrounds in the Okanogan-Wenatchee National Forest — featuring an automated USFS scraper, live fee badges, GPS 'Near Me' distance sorting, and an interactive Leaflet map deployed with Docker & Coolify.",
    url: "https://camp.lab.osobol.com/",
    techTags: ["Python", "FastAPI", "HTMX", "Docker"],
    category: "web",
    featured: true,
  },
  {
    title: "Custom Wedding Website & Guest RSVP Platform",
    desc: "Designed and built a fast, mobile-first wedding website deployed on Cloudflare Pages — featuring a live countdown, Google Apps Script & Sheets RSVP backend (with song requests and dietary tracking), photo gallery, and guest uploads.",
    url: "https://solstice2026.party",
    techTags: ["HTML", "CSS", "JS", "Cloudflare"],
    category: "web",
  },
  {
    title: "Kindle-OS: Minimalist E-Ink Web Kiosk & Browser",
    desc: "Built a distraction-free, high-contrast E-Ink reading and web browsing environment for jailbroken Amazon Kindle (11th Gen) devices using Node.js and HTMX 4, bypassing store bloatware and telemetry.",
    url: "https://github.com/OleksSobol/Kindle-os",
    techTags: ["Node.js", "HTMX"],
    category: "web",
  },
  {
    title: "CodeLedger: An Offline-First Time Tracking & Invoicing App for Freelance Developers",
    desc: "Built a Flutter mobile app from scratch to solve my own freelance billing problem — offline-first, encrypted backups, GitHub-integrated time tracking.",
    url: "https://codeledger.osobol.com",
    techTags: ["Flutter"],
    category: "mobile",
  },
  {
    title: "Expenses Tracker: A Privacy-First Personal Finance App",
    desc: "Built an offline-first Flutter app to track personal income, expenses, and recurring bills — no accounts, no cloud, no subscriptions.",
    url: "https://expenses-tracker.osobol.com/",
    techTags: ["Flutter"],
    category: "mobile",
  },
  {
    title: "AI Auto Caller: Voice-Powered Call Answering App",
    desc: "Mobile application that automatically answers incoming phone calls with customizable AI-generated voice responses via ElevenLabs and free TTS engines, pairing a Flutter frontend with a Python backend.",
    url: "https://github.com/OleksSobol/AI-Auto-Caller",
    techTags: ["Flutter", "Python"],
    category: "mobile",
  },
  {
    title: "Enhanced Telegram Bot with AI Code Sandbox",
    desc: "Dockerized Python Telegram bot featuring an isolated AI Python code execution sandbox, Wake-on-LAN homelab control, dynamic weather lookups, and automated container deployment.",
    url: "https://github.com/OleksSobol/TelegramBot",
    techTags: ["Python", "Docker", "Automation"],
    category: "automation",
  },
  {
    title: "Utopia API Handler: ISP Customer Onboarding Automation",
    desc: "Built a custom API service connecting Utopia Fiber webhook events directly to PowerCode management — reducing onboarding from 20 minutes to under 60 seconds and eliminating 99% of manual provisioning for 4,000+ subscribers.",
    url: "https://github.com/OleksSobol/Utopia-Account-Creation---UAC",
    techTags: ["Python", "Automation"],
    category: "automation",
    featured: true,
  },
  {
    title: "Automating ISP Equipment Management: 15+ Hours Saved Per Week",
    desc: "Multi-threaded DHCP lease processing for ISP operations.",
    url: "https://github.com/OleksSobol/DHCP-LEASE-RUNNER---DLR",
    techTags: ["Python", "Automation"],
    category: "automation",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
