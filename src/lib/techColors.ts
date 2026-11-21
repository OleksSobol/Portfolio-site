export const TECH_BADGE_COLORS: Record<string, string> = {
  Python: "bg-amber-400 text-slate-900 border-transparent",
  Flutter: "bg-sky-500 text-white border-transparent",
  FastAPI: "bg-teal-500 text-white border-transparent",
  HTMX: "bg-indigo-500 text-white border-transparent",
  "Node.js": "bg-emerald-600 text-white border-transparent",
  Docker: "bg-blue-600 text-white border-transparent",
  Cloudflare: "bg-orange-500 text-white border-transparent",
  HTML: "bg-red-500 text-white border-transparent",
  CSS: "bg-blue-500 text-white border-transparent",
  "HTML/JS": "bg-rose-500 text-white border-transparent",
  Automation: "bg-purple-500 text-white border-transparent",
  PHP: "bg-violet-500 text-white border-transparent",
  JS: "bg-yellow-400 text-slate-900 border-transparent",
  AJAX: "bg-cyan-600 text-white border-transparent",
};

export function getTechBadgeClass(tech: string): string {
  return TECH_BADGE_COLORS[tech] ?? "badge-secondary";
}
