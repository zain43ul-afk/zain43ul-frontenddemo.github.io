"use client";

import { useEffect } from "react";
import Link from "next/link";
import { getProject, projects } from "../../../lib/projects";
import { demosOne } from "../../../components/demos-one";
import { demosTwo } from "../../../components/demos-two";

export type DemoProps = { announce: (message: string) => void };

export default function Showcase({ slug }: { slug: string }) {
  const project = getProject(slug);
  const Demo = demosOne[slug] || demosTwo[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project || !Demo) return <main className="missing-project"><h1>Project not found.</h1><Link href="/">Return to portfolio</Link></main>;
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const announce = (message: string) => {
    const node = document.getElementById("global-announcer");
    if (node) { node.textContent = ""; window.setTimeout(() => { node.textContent = message; }, 20); }
  };

  return (
    <main className="showcase-page" style={{ "--project-accent": project.accent } as React.CSSProperties}>
      <a className="skip-link" href="#demo-main">Skip to demo</a>
      <header className="showcase-bar"><Link href="/" aria-label="Back to portfolio">HZ<span>®</span></Link><div><span>{project.number} / 12</span><b>{project.service}</b></div><Link href="/">All projects <i>×</i></Link></header>
      <section className="showcase-intro"><div><span>Live frontend build</span><span>Designed &amp; developed · 2026</span></div><h1>{project.title}</h1><p>{project.summary}</p><div className="showcase-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></section>
      <div id="demo-main" className={`demo-stage demo-${slug}`}><Demo announce={announce}/></div>
      <section className="next-project"><span>Next project · {next.number}</span><a href={`/showcase/${next.slug}`}><strong>{next.title}</strong><i>↗</i></a></section>
      <div id="global-announcer" className="sr-only" aria-live="polite" />
    </main>
  );
}
