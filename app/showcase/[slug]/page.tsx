import type { Metadata } from "next";
import { getProject, projects } from "../../../lib/projects";
import Showcase from "./showcase";

export async function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Hafidz Frontend Portfolio` : "Frontend Showcase", description: project?.summary };
}

export default async function ShowcasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Showcase slug={slug}/>;
}
