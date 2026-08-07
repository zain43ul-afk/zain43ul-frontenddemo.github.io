"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../lib/projects";

const categories = ["All", "Marketing", "Product", "Commerce", "Systems"];
const categoryFor = (service: string) => service.includes("E-commerce") ? "Commerce" : service.includes("Application") || service.includes("Mobile") || service.includes("PWA") ? "Product" : service.includes("Dashboard") || service.includes("CMS") || service.includes("API") || service.includes("Performance") ? "Systems" : "Marketing";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [time, setTime] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const drag = useRef({ active: false, moved: false, startX: 0, currentX: 0 });

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update(); const id = window.setInterval(update, 30_000); return () => window.clearInterval(id);
  }, []);

  const visible = useMemo(() => filter === "All" ? projects : projects.filter((project) => categoryFor(project.service) === filter), [filter]);

  const goToSlide = (index: number) => setActiveSlide(Math.max(0, Math.min(visible.length - 1, index)));

  const moveSlider = (direction: -1 | 1) => setActiveSlide((current) => (current + direction + visible.length) % visible.length);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    drag.current = { active: true, moved: false, startX: event.clientX, currentX: event.clientX };
    event.currentTarget.classList.add("is-dragging");
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    drag.current.currentX = event.clientX;
    const distance = drag.current.currentX - drag.current.startX;
    if (Math.abs(distance) > 6) drag.current.moved = true;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const distance = drag.current.currentX - drag.current.startX;
    drag.current.active = false;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (Math.abs(distance) > 50) moveSlider(distance > 0 ? -1 : 1);
    window.setTimeout(() => { drag.current.moved = false; }, 0);
  };

  return (
    <main className="portfolio-home" id="top">
      <header className="portfolio-nav">
        <a className="portfolio-brand" href="#top" aria-label="Hafidz Zainul portfolio home">Hafidz<span>®</span></a>
        <button className="portfolio-menu" aria-expanded={menuOpen} aria-controls="portfolio-links" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? "Close" : "Menu"}</span><i /><i /></button>
        <nav id="portfolio-links" className={menuOpen ? "open" : ""}>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="mailto:zain43ul@gmail.com">Start a project ↗</a>
        </nav>
      </header>

      <section className="portfolio-hero">
        <div className="hero-meta"><span>Frontend developer</span><span>Ponorogo, ID · {time || "WIB"}</span><span>Available for remote work</span></div>
        <h1><span>Digital</span><span>products with</span><em>clarity + character.</em></h1>
        <div className="hero-statement"><p>I design and build responsive interfaces that look considered, feel intuitive, and work in the real world.</p><a href="#projects">Explore 12 builds <b>↓</b></a></div>
        <div className="hero-mark" aria-hidden="true"><span>HZ</span></div>
      </section>

      <section className="portfolio-projects" id="projects">
        <div className="portfolio-section-head"><div><span>01</span><p>Selected frontend work</p></div><strong>12 independent, usable experiences</strong></div>
        <div className="swiper-controls-row">
          <div className="project-filters" aria-label="Filter projects">{categories.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => { setFilter(item); setActiveSlide(0); }}>{item}<span>{item === "All" ? projects.length : projects.filter((p) => categoryFor(p.service) === item).length}</span></button>)}</div>
        </div>
        <div className="project-swiper">
          <div
            className="swiper-card-stage"
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected frontend projects"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") { event.preventDefault(); moveSlider(-1); }
              if (event.key === "ArrowRight") { event.preventDefault(); moveSlider(1); }
              if (event.key === "Home") { event.preventDefault(); goToSlide(0); }
              if (event.key === "End") { event.preventDefault(); goToSlide(visible.length - 1); }
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onClickCapture={(event) => { if (drag.current.moved) { event.preventDefault(); event.stopPropagation(); } }}
          >
            {visible.map((project, index) => {
              const position = index === activeSlide ? "is-active" : index === (activeSlide - 1 + visible.length) % visible.length ? "is-prev" : index === (activeSlide + 1) % visible.length ? "is-next" : "is-hidden";
              return (
                <a className={`portfolio-card slider-card ${position} card-${project.slug} ${project.image ? "has-image" : "has-ui"}`} href={`/showcase/${project.slug}`} key={project.slug} style={{ "--accent": project.accent } as React.CSSProperties} draggable={false} tabIndex={index === activeSlide ? 0 : -1} aria-hidden={index !== activeSlide} onClick={(event) => { if (index !== activeSlide) { event.preventDefault(); setActiveSlide(index); } }}>
                  <div className="card-visual">
                    {project.image ? <img src={project.image} alt={`${project.title} interface preview`} loading={Math.abs(index - activeSlide) > 1 ? "lazy" : "eager"} decoding="async" draggable={false}/> : <div className={`mini-ui mini-${project.slug}`} aria-hidden="true"><span/><span/><span/><i/><b/></div>}
                    <span className="card-index">Project / {project.number}</span>
                    <span className="card-open">View project ↗</span>
                  </div>
                  <div className="card-title"><span>{project.number}</span><div><h2>{project.title}</h2><p>{project.service}</p></div><b>↗</b></div>
                  <p className="card-summary">{project.summary}</p>
                  <div className="card-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </a>
              );
            })}
          </div>
          <div className="swiper-stage-copy">
            <span>Interactive portfolio</span>
            <h2><b>Project</b><em>slider.</em></h2>
            <p>Explore twelve production-minded frontend experiences—each with its own visual system, responsive behavior, and working interactions.</p>
            <div className="slider-tech"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>React</span><span>Next.js</span><span>TypeScript</span></div>
            <div className="slider-quality"><span><b>HD</b> visual media</span><span><b>12</b> separate builds</span><span><b>100%</b> responsive</span></div>
            <div className="swiper-arrows" aria-label="Project slider controls">
              <span aria-live="polite"><b>{String(activeSlide + 1).padStart(2, "0")}</b> / {String(visible.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => moveSlider(-1)} aria-label="Previous project">←</button>
              <button type="button" onClick={() => moveSlider(1)} aria-label="Next project">→</button>
            </div>
          </div>
          <div className="swiper-footer">
            <div className="swiper-pagination" aria-label="Choose project slide">
              {visible.map((project, index) => <button type="button" key={project.slug} className={index === activeSlide ? "active" : ""} onClick={() => goToSlide(index)} aria-label={`Go to ${project.title}`} aria-current={index === activeSlide ? "true" : undefined}><span /></button>)}
            </div>
            <p className="swiper-hint"><span>Drag sideways</span><span>Swipe · arrows · keyboard</span></p>
          </div>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="portfolio-section-head"><div><span>02</span><p>How I build</p></div><strong>From interface direction to production-ready frontend</strong></div>
        <div className="capability-list"><article><span>01</span><h3>Interface design</h3><p>Clear hierarchy, strong typography, useful component states, and visual systems that support the product.</p></article><article><span>02</span><h3>Frontend engineering</h3><p>Responsive React interfaces, practical state management, API connections, and reusable component architecture.</p></article><article><span>03</span><h3>Quality by default</h3><p>Keyboard access, semantic structure, reduced-motion support, responsive QA, and performance-conscious media.</p></article></div>
      </section>

      <section className="portfolio-contact"><span>Have an interface in mind?</span><a href="mailto:zain43ul@gmail.com">Let&apos;s build it together <i>↗</i></a></section>
      <footer className="portfolio-footer"><span>Hafidz Zainul Mustofa © 2026</span><span>Photography from Unsplash</span><a href="https://www.linkedin.com/in/hafidz-zainul-77267a296" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
