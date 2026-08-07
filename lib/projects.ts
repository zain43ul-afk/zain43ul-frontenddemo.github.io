export type Project = {
  slug: string;
  number: string;
  title: string;
  service: string;
  summary: string;
  stack: string[];
  accent: string;
  image?: string;
};

export const projects: Project[] = [
  { slug: "atlas-studio", number: "01", title: "Atlas Studio", service: "Website Frontend", summary: "An editorial architecture website with immersive imagery and measured typography.", stack: ["Next.js", "Responsive", "Motion"], accent: "#ff6b3d", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=95" },
  { slug: "flowdesk-app", number: "02", title: "Flowdesk", service: "Web Application Frontend", summary: "A focused project workspace with live task controls and useful operational states.", stack: ["React state", "Kanban", "Forms"], accent: "#8b7cff" },
  { slug: "form-store", number: "03", title: "Form Objects", service: "E-commerce Frontend", summary: "A premium storefront with product filtering, cart controls and checkout feedback.", stack: ["Commerce UI", "Cart", "Filters"], accent: "#f35b3f", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=2200&q=95" },
  { slug: "nova-analytics", number: "04", title: "Nova Analytics", service: "Dashboard & Data Visualization", summary: "A decision-ready revenue dashboard with responsive charts and period filters.", stack: ["SVG charts", "KPI", "Data UI"], accent: "#6366f1" },
  { slug: "nusa-travel", number: "05", title: "Nusa Escape", service: "Responsive Web Development", summary: "A mobile-first travel experience designed to remain expressive on every screen.", stack: ["Mobile-first", "Fluid type", "Touch UI"], accent: "#ffdf69", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2200&q=95" },
  { slug: "nadi-ui", number: "06", title: "Nadi Finance", service: "Figma-to-Code / UI Implementation", summary: "A token-driven fintech interface translated into precise reusable components.", stack: ["Design tokens", "Components", "Dark mode"], accent: "#bcff5c" },
  { slug: "lumen-gallery", number: "07", title: "Lumen Archive", service: "Interactive Frontend", summary: "A cinematic image archive with filtering, keyboard navigation and lightbox viewing.", stack: ["Lightbox", "Keyboard", "Animation"], accent: "#ff5c8a", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=2200&q=95" },
  { slug: "storypress-cms", number: "08", title: "Storypress", service: "CMS Frontend", summary: "An editorial workspace to create, search, edit and publish content locally.", stack: ["CRUD UI", "Local storage", "Search"], accent: "#1f8f66" },
  { slug: "climate-now", number: "09", title: "Climate Now", service: "API Integration", summary: "A live city forecast that turns external weather data into a clear interface.", stack: ["Open-Meteo", "Async states", "Search"], accent: "#56c7ff" },
  { slug: "focus-pwa", number: "10", title: "Focus PWA", service: "Progressive Web App (PWA)", summary: "An installable daily focus app with offline-ready shell and device-local tasks.", stack: ["Service worker", "Manifest", "Offline"], accent: "#ff775d" },
  { slug: "bite-mobile", number: "11", title: "Bite Mobile", service: "Mobile/Cross-platform Frontend", summary: "A touch-first food discovery flow framed for mobile and adaptable to desktop.", stack: ["App shell", "Touch", "Responsive"], accent: "#ffcc3d", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=94" },
  { slug: "clear-journal", number: "12", title: "Clear Journal", service: "Frontend Performance & Accessibility", summary: "A readable editorial experience with adaptive controls and performance-minded media.", stack: ["WCAG", "Core Web Vitals", "Reduced motion"], accent: "#27c47d", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=94" },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
