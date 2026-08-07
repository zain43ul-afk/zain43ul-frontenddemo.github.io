"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import type { DemoProps } from "../app/showcase/[slug]/showcase";

const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

const architecture = [
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=92", title: "Monolith House", place: "Mexico City · 2026" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=92", title: "Courtyard Light", place: "Kyoto · 2025" },
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=92", title: "Living in Light", place: "Melbourne · 2025" },
];

function AtlasStudio({ announce }: DemoProps) {
  const [slide, setSlide] = useState(0);
  const [menu, setMenu] = useState(false);
  const change = (next: number) => { const value = (next + architecture.length) % architecture.length; setSlide(value); announce(`${architecture[value].title} selected`); };
  return <div className="atlas-site">
    <nav className="atlas-nav"><b>ATLAS<span>°</span></b><div className={menu ? "open" : ""}><a href="#atlas-work">Work</a><a href="#atlas-about">Studio</a><a href="mailto:zain43ul@gmail.com">Contact</a></div><button onClick={() => setMenu(!menu)} aria-expanded={menu}>{menu ? "Close" : "Menu"}</button></nav>
    <section className="atlas-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.58),rgba(0,0,0,.04)),url(${architecture[slide].image})` }}>
      <div><span>Architecture for a changing climate</span><h2>Places that move<br/>people <em>forward.</em></h2><a href="#atlas-work">Explore the practice ↘</a></div>
      <aside><span>{String(slide + 1).padStart(2, "0")} / 03</span><strong>{architecture[slide].title}</strong><small>{architecture[slide].place}</small><div><button onClick={() => change(slide - 1)} aria-label="Previous project">←</button><button onClick={() => change(slide + 1)} aria-label="Next project">→</button></div></aside>
    </section>
    <section className="atlas-intro" id="atlas-about"><span>Independent practice<br/>Jakarta · Singapore</span><h3>We shape generous spaces where culture, community and nature meet.</h3></section>
    <section className="atlas-stats"><div><b>18</b><span>Years in practice</span></div><div><b>46</b><span>Built projects</span></div><div><b>12</b><span>Design awards</span></div><div><b>07</b><span>Countries</span></div></section>
    <section className="atlas-work" id="atlas-work">{architecture.slice(1).map((item, i) => <article key={item.title}><img src={item.image} alt={`${item.title} architecture project`} loading="lazy"/><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.place}</p></div></article>)}</section>
  </div>;
}

type TaskStatus = "Backlog" | "In progress" | "Review" | "Done";
type Task = { id: number; title: string; status: TaskStatus; tag: string; owner: string };
const initialTasks: Task[] = [
  { id: 1, title: "Map onboarding flow", status: "Backlog", tag: "Research", owner: "AM" }, { id: 2, title: "Build account settings", status: "In progress", tag: "Frontend", owner: "HZ" },
  { id: 3, title: "Review empty states", status: "In progress", tag: "Design", owner: "NK" }, { id: 4, title: "QA mobile navigation", status: "Review", tag: "QA", owner: "HZ" }, { id: 5, title: "Ship billing update", status: "Done", tag: "Release", owner: "RS" },
];

function Flowdesk({ announce }: DemoProps) {
  const statuses: TaskStatus[] = ["Backlog", "In progress", "Review", "Done"];
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState("");
  const [newTask, setNewTask] = useState("");
  const [adding, setAdding] = useState(false);
  const move = (task: Task, direction: number) => { const next = Math.max(0, Math.min(statuses.length - 1, statuses.indexOf(task.status) + direction)); setTasks(tasks.map((item) => item.id === task.id ? { ...item, status: statuses[next] } : item)); announce(`${task.title} moved to ${statuses[next]}`); };
  const create = () => { if (!newTask.trim()) return; setTasks([{ id: Date.now(), title: newTask.trim(), status: "Backlog", tag: "New", owner: "HZ" }, ...tasks]); setNewTask(""); setAdding(false); announce("Task created"); };
  const shown = tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()));
  return <div className="flow-app">
    <aside className="flow-sidebar"><b><i>F</i>flowdesk</b><nav><button className="active">▦ <span>Projects</span></button><button>⌁ <span>My tasks</span></button><button>◌ <span>Inbox</span></button></nav><div className="flow-team"><span>Workspace</span><button><i className="green-dot"/>Atlas Website</button><button><i className="purple-dot"/>Mobile App</button></div><div className="flow-user"><i>HZ</i><span><b>Hafidz Z.</b><small>Product team</small></span><button>•••</button></div></aside>
    <main className="flow-main"><header><div><span>Projects / Atlas Website</span><h2>Website launch</h2></div><div className="flow-actions"><label><span className="sr-only">Search tasks</span>⌕<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search"/></label><button className="flow-add" onClick={() => setAdding(true)}>＋ Add task</button></div></header>
      <div className="flow-tabs"><button className="active">Board</button><button>Timeline</button><button>Files</button><span>{tasks.length} tasks · 67% complete</span></div>
      <section className="kanban">{statuses.map((status) => <div className="kanban-column" key={status}><div className="kanban-head"><span><i className={`status-${status.replace(" ", "-").toLowerCase()}`}/>{status}</span><b>{shown.filter((task) => task.status === status).length}</b></div>{shown.filter((task) => task.status === status).map((task) => <article className="task-card" key={task.id}><span>{task.tag}</span><h3>{task.title}</h3><div><i>{task.owner}</i><span><button disabled={status === "Backlog"} onClick={() => move(task, -1)} aria-label={`Move ${task.title} backward`}>←</button><button disabled={status === "Done"} onClick={() => move(task, 1)} aria-label={`Move ${task.title} forward`}>→</button></span></div></article>)}<button className="column-add" onClick={() => { setAdding(true); announce(`New task will be added to backlog`); }}>＋ Add task</button></div>)}</section>
    </main>
    {adding && <div className="flow-modal" role="dialog" aria-modal="true"><form onSubmit={(e) => { e.preventDefault(); create(); }}><div><span>New task</span><button type="button" onClick={() => setAdding(false)}>×</button></div><label>Task name<input autoFocus value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="What needs to be done?"/></label><div className="modal-actions"><button type="button" onClick={() => setAdding(false)}>Cancel</button><button>Create task</button></div></form></div>}
  </div>;
}

const shopProducts = [
  { id: 1, name: "Koya Lounge", cat: "Living", price: 340, image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=92" },
  { id: 2, name: "Studio Watch", cat: "Wear", price: 129, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=92" },
  { id: 3, name: "Contour Audio", cat: "Audio", price: 189, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=92" },
  { id: 4, name: "Orbit Camera", cat: "Objects", price: 579, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=92" },
  { id: 5, name: "Field Runner", cat: "Wear", price: 148, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=92" },
  { id: 6, name: "No. 04 Eau", cat: "Objects", price: 96, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=92" },
];

function FormStore({ announce }: DemoProps) {
  const [filter, setFilter] = useState("All"); const [cart, setCart] = useState<Record<number, number>>({}); const [open, setOpen] = useState(false);
  const products = filter === "All" ? shopProducts : shopProducts.filter((item) => item.cat === filter);
  const count = Object.values(cart).reduce((a, b) => a + b, 0); const total = shopProducts.reduce((sum, item) => sum + item.price * (cart[item.id] || 0), 0);
  const update = (id: number, by: number) => { setCart((current) => { const next = Math.max(0, (current[id] || 0) + by); const value = { ...current, [id]: next }; if (!next) delete value[id]; return value; }); };
  return <div className="form-shop"><nav><a href="#form-products" className="form-logo">FORM<sup>®</sup></a><div><a href="#form-products">New</a><a href="#form-products">Objects</a><a href="#form-story">Journal</a></div><button onClick={() => setOpen(true)}>Bag ({String(count).padStart(2, "0")})</button></nav>
    <section className="form-hero"><div><span>Collection No. 06 · 2026</span><h2>Considered objects<br/>for <em>every day.</em></h2><a href="#form-products">Shop the collection ↓</a></div><figure><img src={shopProducts[0].image} alt="Natural wood Koya lounge chair"/><figcaption>01 / Koya lounge</figcaption></figure></section>
    <section className="form-products" id="form-products"><header><div><span>Current collection</span><b>{String(products.length).padStart(2, "0")} objects</b></div><div>{["All", "Wear", "Audio", "Living", "Objects"].map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></header><div className="form-grid">{products.map((product) => <article key={product.id}><div><img src={product.image} alt={product.name} loading="lazy"/><span>{product.cat}</span><button onClick={() => { update(product.id, 1); announce(`${product.name} added to bag`); }}>＋</button></div><h3>{product.name}</h3><p>{money(product.price)}</p></article>)}</div></section>
    <section className="form-story" id="form-story"><span>Designed to last</span><p>Fewer, better things. Selected for honest materials, useful details and quiet character.</p><a href="#form-products">Our approach ↗</a></section>
    {open && <><button className="drawer-backdrop" onClick={() => setOpen(false)} aria-label="Close bag"/><aside className="shop-drawer"><header><h2>Your bag <span>({count})</span></h2><button onClick={() => setOpen(false)}>×</button></header><div className="drawer-items">{count === 0 ? <div className="drawer-empty"><span>○</span><p>Your bag is empty.</p></div> : shopProducts.filter((item) => cart[item.id]).map((item) => <article key={item.id}><img src={item.image} alt=""/><div><h3>{item.name}</h3><span>{item.cat}</span><div><button onClick={() => update(item.id, -1)}>−</button><b>{cart[item.id]}</b><button onClick={() => update(item.id, 1)}>＋</button></div></div><strong>{money(item.price * cart[item.id])}</strong></article>)}</div>{count > 0 && <footer><p><span>Subtotal</span><b>{money(total)}</b></p><small>Shipping and taxes calculated at checkout.</small><button onClick={() => announce("Demo checkout opened — no payment required")}>Checkout <span>→</span></button></footer>}</aside></>}
  </div>;
}

const analytics = {
  "7 days": { revenue: 18240, orders: 428, customers: 312, conversion: "3.7%", values: [18, 28, 25, 42, 38, 56, 65, 74] },
  "30 days": { revenue: 86490, orders: 2184, customers: 1648, conversion: "4.2%", values: [24, 35, 31, 48, 45, 62, 68, 82] },
  "90 days": { revenue: 241860, orders: 6921, customers: 4902, conversion: "4.6%", values: [16, 27, 39, 35, 55, 61, 72, 88] },
};

function NovaAnalytics({ announce }: DemoProps) {
  const [range, setRange] = useState<keyof typeof analytics>("30 days"); const data = analytics[range];
  const points = data.values.map((value, index) => `${index * 100},${105 - value}`).join(" ");
  return <div className="nova-app"><aside><b>N<span>OVA</span></b><nav><button className="active">⌁ <span>Overview</span></button><button>↗ <span>Analytics</span></button><button>◎ <span>Customers</span></button><button>□ <span>Products</span></button></nav><div><i>HZ</i><span><b>Hafidz Z.</b><small>Administrator</small></span></div></aside><main><header><div><span>Friday, August 7</span><h2>Good afternoon, Hafidz.</h2></div><div><button aria-label="Search">⌕</button><button aria-label="Notifications">○</button></div></header><div className="nova-toolbar"><div><button className="active">Overview</button><button>Reports</button></div><div>{(Object.keys(analytics) as (keyof typeof analytics)[]).map((item) => <button key={item} className={range === item ? "active" : ""} onClick={() => { setRange(item); announce(`${item} analytics loaded`); }}>{item}</button>)}</div></div>
    <section className="nova-kpis"><article className="primary"><span>Net revenue</span><b>{money(data.revenue)}</b><small>↗ 12.8% vs previous period</small></article><article><span>Orders</span><b>{data.orders.toLocaleString()}</b><small>↗ 7.2% vs previous period</small></article><article><span>Customers</span><b>{data.customers.toLocaleString()}</b><small>↗ 11.5% vs previous period</small></article><article><span>Conversion</span><b>{data.conversion}</b><small>↗ 0.6% vs previous period</small></article></section>
    <section className="nova-panels"><article className="revenue-chart"><div><span>Total revenue</span><b>{money(data.revenue)}</b></div><svg viewBox="0 0 700 120" role="img" aria-label={`Revenue trend for ${range}`} preserveAspectRatio="none"><defs><linearGradient id="novaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6d69f7" stopOpacity=".3"/><stop offset="1" stopColor="#6d69f7" stopOpacity="0"/></linearGradient></defs>{[20, 50, 80, 110].map((y) => <line key={y} x1="0" x2="700" y1={y} y2={y}/>) }<polygon points={`0,120 ${points} 700,120`} fill="url(#novaFill)"/><polyline points={points}/></svg><div className="chart-dates"><span>08 Jul</span><span>16 Jul</span><span>24 Jul</span><span>01 Aug</span><span>Today</span></div></article><article className="channel-chart"><span>Sales by channel</span><b>{money(data.revenue)}</b><div className="nova-donut"><span>100%<small>Sales</small></span></div><ul><li><i/>Website <b>62%</b></li><li><i/>Marketplace <b>24%</b></li><li><i/>Social <b>14%</b></li></ul></article></section>
  </main></div>;
}

const destinations = [
  { place: "Uluwatu", type: "Cliff retreat", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=92", price: 148 },
  { place: "Ubud", type: "Forest hideaway", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=92", price: 126 },
  { place: "Nusa Penida", type: "Island escape", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=1800&q=92", price: 112 },
];

function NusaTravel({ announce }: DemoProps) {
  const [menu, setMenu] = useState(false); const [guests, setGuests] = useState(2); const [selected, setSelected] = useState(0);
  return <div className="nusa-site"><nav><a href="#nusa-top" className="nusa-logo">NUSA<span>°</span></a><div className={menu ? "open" : ""}><a href="#nusa-stays">Stays</a><a href="#nusa-story">Journal</a><a href="mailto:zain43ul@gmail.com">Contact</a></div><button onClick={() => setMenu(!menu)} aria-expanded={menu}>{menu ? "Close" : "Menu"}</button></nav>
    <section className="nusa-hero" id="nusa-top"><img src={destinations[selected].image} alt={`${destinations[selected].place} tropical destination`}/><div className="nusa-copy"><span>Slow stays across Indonesia</span><h2>Go where<br/>you <em>feel alive.</em></h2><p>Independent stays, wild landscapes and thoughtful journeys—selected for curious travellers.</p></div><div className="nusa-book"><label>Destination<select value={selected} onChange={(e) => setSelected(Number(e.target.value))}>{destinations.map((item, index) => <option value={index} key={item.place}>{item.place}</option>)}</select></label><label>Check in<input type="date" defaultValue="2026-09-12"/></label><div><span>Guests</span><p><button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button><b>{guests}</b><button onClick={() => setGuests(guests + 1)}>＋</button></p></div><button className="search-stay" onClick={() => announce(`${guests} guest stay search for ${destinations[selected].place}`)}>Find a stay ↗</button></div></section>
    <section className="nusa-stays" id="nusa-stays"><header><span>Selected escapes</span><h3>Rest well.<br/>Remember more.</h3></header><div>{destinations.map((item, index) => <article key={item.place}><button onClick={() => { setSelected(index); document.getElementById("nusa-top")?.scrollIntoView({ behavior: "smooth" }); }}><img src={item.image} alt={`${item.place} — ${item.type}`} loading="lazy"/><span>View stay ↗</span></button><div><h4>{item.place}</h4><p>{item.type}</p><b>from ${item.price} / night</b></div></article>)}</div></section>
    <section className="nusa-story" id="nusa-story"><span>Travel slowly</span><blockquote>“The best journeys leave room for surprise.”</blockquote><p>Local hosts · Smaller footprints · Real places</p></section>
  </div>;
}

function NadiUI({ announce }: DemoProps) {
  const [dark, setDark] = useState(false); const [hidden, setHidden] = useState(false); const [amount, setAmount] = useState(250000);
  const formatIdr = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
  return <div className={`nadi-app ${dark ? "dark" : ""}`}><aside><a href="#nadi-home" className="nadi-logo"><i>n</i>nadi</a><nav><button className="active">⌂ <span>Overview</span></button><button>↗ <span>Transfers</span></button><button>▤ <span>Transactions</span></button><button>□ <span>Cards</span></button></nav><div className="nadi-aside-bottom"><button onClick={() => setDark(!dark)}>{dark ? "☀" : "☾"} <span>{dark ? "Light" : "Dark"} mode</span></button><div><i>HZ</i><p><b>Hafidz Zainul</b><small>Personal account</small></p></div></div></aside><main id="nadi-home"><header><div><span>Overview</span><h2>Good morning, Hafidz</h2></div><div><button aria-label="Notifications">○</button><i>HZ</i></div></header><section className="nadi-grid"><article className="balance-card"><span>Available balance <button onClick={() => setHidden(!hidden)} aria-label={hidden ? "Show balance" : "Hide balance"}>{hidden ? "Show" : "Hide"}</button></span><h3>{hidden ? "Rp ••••••••" : formatIdr(12750000)}</h3><p>+8.6% this month</p><div><button>＋ Add money</button><button>↗ Transfer</button></div></article><article className="nadi-card"><div><span>NADI</span><i>VISA</i></div><p>•••• &nbsp; •••• &nbsp; •••• &nbsp; 2048</p><small>HZ MUSTOFA <span>12/29</span></small></article><article className="quick-transfer"><div><span>Quick transfer</span><a href="#nadi-activity">See all</a></div><div className="people"><button><i>AM</i><span>Amel</span></button><button><i>RS</i><span>Rizky</span></button><button><i>NW</i><span>Nadia</span></button><button><i>＋</i><span>Add</span></button></div><label>Amount <b>{formatIdr(amount)}</b><input type="range" min="50000" max="2000000" step="50000" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/></label><button className="nadi-send" onClick={() => announce(`${formatIdr(amount)} transfer ready to review`)}>Continue transfer →</button></article><article className="spending"><div><span>Spending</span><b>This month⌄</b></div><h3>{formatIdr(4680000)}</h3><div className="nadi-bars">{[42,64,35,78,55,86,68].map((height, i) => <i key={i} style={{ height: `${height}%` }}/>)}</div><p><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></p></article></section><section className="nadi-activity" id="nadi-activity"><header><div><span>Recent activity</span><b>5 transactions</b></div><button>View all →</button></header>{[["◎","Tokopedia","Shopping","− Rp 425.000"],["↙","Salary payment","Income","+ Rp 8.500.000"],["♫","Spotify","Subscription","− Rp 54.990"]].map((item) => <article key={item[1]}><i>{item[0]}</i><div><b>{item[1]}</b><span>{item[2]} · 7 Aug</span></div><strong>{item[3]}</strong></article>)}</section></main></div>;
}

export const demosOne: Record<string, ComponentType<DemoProps>> = {
  "atlas-studio": AtlasStudio,
  "flowdesk-app": Flowdesk,
  "form-store": FormStore,
  "nova-analytics": NovaAnalytics,
  "nusa-travel": NusaTravel,
  "nadi-ui": NadiUI,
};
