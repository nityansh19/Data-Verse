"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BookOpenText,
  BrainCircuit, Check, ChevronDown, Code2, Compass, Database,
  GraduationCap, Lightbulb, Menu, MousePointer2, Play, Rocket,
  Sparkles, Terminal, UsersRound, X
} from "lucide-react";

type TrackId = "python" | "data" | "ai";

const tracks = [
  { id: "python" as TrackId, short: "PYTHON", headline: "From an idea to a program.",
    detail: "Learn the basics, solve problems and discover how much you can build with Python.",
    focus: ["Logic & coding", "Hands-on exercises"] },
  { id: "data" as TrackId, short: "DATA", headline: "Make data make sense.",
    detail: "Explore datasets, ask questions and turn discoveries into clear visual stories.",
    focus: ["Data exploration", "Charts & dashboards"] },
  { id: "ai" as TrackId, short: "AI", headline: "Get curious about AI.",
    detail: "Understand the foundations behind machine learning and experiment responsibly.",
    focus: ["AI foundations", "Team experiments"] }
];

const activities = [
  { n: "01", icon: BookOpenText, tag: "LEARN", title: "Workshops that make sense.",
    description: "Beginner-friendly sessions in Python, analytics and AI. Less memorising, more understanding.",
    foot: "Discover a new skill" },
  { n: "02", icon: Database, tag: "BUILD", title: "Ideas you can actually make.",
    description: "Mini projects, real-world datasets and practical exercises to connect theory with doing.",
    foot: "Create with real data" },
  { n: "03", icon: UsersRound, tag: "TOGETHER", title: "People to learn alongside.",
    description: "Share knowledge, meet collaborators, improve communication and grow as a community.",
    foot: "Find your people" }
];

const phases = [
  { number: "01", title: "Connect", label: "BUILD THE COMMUNITY",
    summary: "Meet curious people and introduce DataVerse.",
    detail: "Our first step is to bring interested students together, introduce the club's purpose and discover what everyone wants to learn.",
    tags: ["Student introductions", "Shared interests", "Getting started"] },
  { number: "02", title: "Explore", label: "LEARN BY DOING",
    summary: "Try the fundamentals through hands-on sessions.",
    detail: "We plan to explore Python, basic data analysis and visualisation through approachable workshops and small group challenges.",
    tags: ["Practical workshops", "Beginner challenges", "Peer learning"] },
  { number: "03", title: "Create", label: "MAKE IT REAL",
    summary: "Turn new skills into collaborative projects.",
    detail: "With time and faculty guidance, we'd like to build meaningful mini-projects and share what we've learned with the wider community.",
    tags: ["Team projects", "Demo sessions", "Project showcases"] }
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Integral DataVerse — back to top">
      <Image className="brand-crest" src="/integral-university-seal.webp" alt="Integral University seal" width={51} height={51} priority />
      <span className="brand-lockup">
        <span className="brand-name">Integral <strong>DataVerse<span className="brand-dot">.</span></strong></span>
        <span className="brand-caption">A STUDENT-LED INITIATIVE · LUCKNOW</span>
      </span>
    </a>
  );
}

function LabVisual({ selected }: { selected: TrackId }) {
  if (selected === "python") return (
    <div className="lab-visual code-visual" aria-label="Example Python code">
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>hello_dataverse.py</span>
        <Terminal size={15} />
      </div>
      <div className="code-body">
        <div><span>01</span><code><em># learning is better together</em></code></div>
        <div><span>02</span><code><b>club</b> = <i>&quot;DataVerse&quot;</i></code></div>
        <div><span>03</span><code><b>skills</b> = [<i>&quot;learn&quot;</i>, <i>&quot;build&quot;</i>, <i>&quot;grow&quot;</i>]</code></div>
        <div><span>04</span><code>&nbsp;</code></div>
        <div><span>05</span><code><strong>for</strong> skill <strong>in</strong> skills:</code></div>
        <div><span>06</span><code>&nbsp;&nbsp;<strong>print</strong>(skill)</code></div>
      </div>
      <div className="window-output"><span>›</span> learn <span className="output-sep">·</span> build <span className="output-sep">·</span> grow <span className="cursor" /></div>
    </div>
  );
  if (selected === "data") return (
    <div className="lab-visual data-visual" aria-label="Illustrative example bar chart for learning data visualisation">
      <div className="visual-topline"><span><span className="signal" /> VISUALISATION PRACTICE</span><span>SAMPLE DATA</span></div>
      <div className="bar-graph" role="img" aria-label="Illustrative bars for sample categories A through F">
        {[37,66,48,80,56,95].map((v,i) => <div className="graph-column" key={i}>
          <span className="graph-bar" style={{height:v+"%"}} />
          <small>{String.fromCharCode(65+i)}</small>
        </div>)}
      </div>
      <div className="data-visual-footer"><span><Check size={14} /> ASK A QUESTION</span><span><Check size={14} /> FIND A PATTERN</span></div>
    </div>
  );
  return (
    <div className="lab-visual ai-visual" aria-label="The steps of a beginner machine learning concept">
      <div className="visual-topline"><span><span className="signal" /> THE BASICS OF INTELLIGENT SYSTEMS</span><BrainCircuit size={18}/></div>
      <div className="ai-flow">
        <div className="ai-node"><Database size={27}/><strong>Data</strong><span>Observe</span></div>
        <ArrowRight size={22} className="flow-arrow"/>
        <div className="ai-node selected"><Sparkles size={27}/><strong>Patterns</strong><span>Learn</span></div>
        <ArrowRight size={22} className="flow-arrow"/>
        <div className="ai-node"><Lightbulb size={27}/><strong>Ideas</strong><span>Explore</span></div>
      </div>
      <div className="ai-visual-footer">Explore the concepts. Ask what comes next. <span>✳</span></div>
    </div>
  );
}

function InteractiveLab() {
  const [selected,setSelected]=useState<TrackId>("python");
  const active=tracks.find(track=>track.id===selected)!;
  return (
    <div className="lab-shell">
      <div className="lab-halo halo-one"/><div className="lab-halo halo-two"/>
      <div className="lab-floating floating-one"><Sparkles size={15}/> START WITH CURIOSITY</div>
      <div className="lab-floating floating-two"><MousePointer2 size={14}/> TRY THE LAB ↓</div>
      <div className="lab-card">
        <div className="lab-header">
          <div className="lab-header-main"><span className="lab-sparkle">✳</span><span>INSIDE THE VERSE</span></div>
          <span className="lab-label"><span className="signal"/> EXPLORE</span>
        </div>
        <div className="lab-intro lab-intro-branded">
          <div className="lab-intro-text">
            <span>WELCOME TO DATAVERSE</span>
            <h2>What could you <em>explore?</em></h2>
            <small>YOUR CLUB. YOUR IDEAS. YOUR UNIVERSE.</small>
          </div>
          <div className="club-logo-frame">
            <Image
              src="/dataverse-club-logo.webp"
              alt="DataVerse club logo — glowing purple DV emblem with a connected data globe"
              width={112}
              height={112}
              className="club-identity-logo"
              priority
            />
          </div>
        </div>
        <div className="lab-tabs" role="tablist" aria-label="Explore DataVerse learning topics">
          {tracks.map(track=><button type="button" key={track.id} role="tab" id={"tab-"+track.id} aria-controls="lab-content" aria-selected={selected===track.id}
            className={selected===track.id?"lab-tab active":"lab-tab"} onClick={()=>setSelected(track.id)}>{track.short}</button>)}
        </div>
        <div className="lab-content" role="tabpanel" id="lab-content" aria-labelledby={"tab-"+selected} key={selected}>
          <LabVisual selected={selected}/>
          <div className="lab-details">
            <div className="lab-detail-heading"><h3>{active.headline}</h3><ArrowUpRight size={18}/></div>
            <p>{active.detail}</p>
            <div className="lab-skills">{active.focus.map(x=><span key={x}><Check size={12}/>{x}</span>)}</div>
          </div>
        </div>
        <div className="lab-footer"><span><span className="lab-sparkle">✳</span> A PLACE TO TRY THINGS</span><span>{String(tracks.findIndex(t=>t.id===selected)+1).padStart(2,"0")} / 03</span></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [openPhase,setOpenPhase]=useState<number>(0);
  return (
    <>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Brand/>
          <nav id="main-navigation" className={menuOpen?"main-nav open":"main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={()=>setMenuOpen(false)}>About the club</a>
            <a href="#activities" onClick={()=>setMenuOpen(false)}>What we&apos;ll do</a>
            <a href="#plan" onClick={()=>setMenuOpen(false)}>Our plan</a>
          </nav>
          <a href="#activities" className="nav-action">Explore DataVerse <ArrowUpRight size={17}/></a>
          <button type="button" className="menu-toggle" aria-label={menuOpen?"Close menu":"Open menu"} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={22}/>:<Menu size={22}/>}</button>
        </div>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-background"><div className="hero-noise"/></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-sparkle">✳</span> AT INTEGRAL UNIVERSITY, LUCKNOW</div>
              <div className="hero-label"><span className="label-line"/> DATA SCIENCE &amp; ANALYTICS CLUB INITIATIVE</div>
              <h1 id="hero-title">Learn data.<br/><em>Build what&apos;s next.</em></h1>
              <p className="hero-description"><strong>Integral DataVerse</strong> is a student-led initiative where curious students explore <b>Python, data science and AI</b>, work on practical ideas and grow together.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#about">What is DataVerse? <ArrowUpRight size={20}/></a>
                <a className="btn btn-outline" href="#activities"><Play size={16}/> See what we&apos;ll do</a>
              </div>
              <div className="hero-promises"><span><Check size={15}/> Beginners welcome</span><span><Check size={15}/> Projects over theory</span></div>
            </div>
            <InteractiveLab/>
          </div>
          <div className="container hero-bottom"><span>LEARNING STARTS WITH ONE QUESTION.</span><a href="#about">MEET THE CLUB <ArrowDownRight size={18}/></a></div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <div className="about-quick">
              <div className="about-identify">
                <span className="section-index">01 / ABOUT DATAVERSE</span>
                <h2>Not just a club.<br/><em>A place to start.</em></h2>
              </div>
              <div className="about-intro">
                <p>We&apos;re building a learning community for students of Integral University who want to go <strong>beyond the classroom</strong>.</p>
                <p>No need to be an expert. Just bring your curiosity and a willingness to try.</p>
                <span className="about-location"><GraduationCap size={17}/> Integral University · Lucknow</span>
              </div>
            </div>
            <div className="quick-strip" aria-label="Our three values">
              <div><span className="quick-icon"><BookOpenText size={22}/></span><strong>Learn</strong><p>Understand something new.</p></div>
              <div><span className="quick-icon"><Rocket size={22}/></span><strong>Build</strong><p>Turn ideas into projects.</p></div>
              <div><span className="quick-icon"><UsersRound size={22}/></span><strong>Connect</strong><p>Get better together.</p></div>
            </div>
          </div>
        </section>

        <section id="activities" className="activities-section">
          <div className="container">
            <div className="activities-heading">
              <div><span className="section-index">02 / THE EXPERIENCE</span><h2>Less just watching.<br/><em>More actually doing.</em></h2></div>
              <p>Here&apos;s the kind of student-led learning we want to create as the club takes shape.</p>
            </div>
            <div className="activity-grid">
              {activities.map((item,i)=>{
                const Icon=item.icon;
                return <article className={"activity-card activity-"+(i+1)} key={item.n}>
                  <div className="activity-top"><span>{item.n} / {item.tag}</span><ArrowUpRight size={19}/></div>
                  <div className="activity-art"><div className="activity-ring"/><Icon size={60} strokeWidth={1.3}/><div className="activity-spark">✳</div></div>
                  <h3>{item.title}</h3><p>{item.description}</p>
                  <div className="activity-foot"><span>{item.foot}</span><ArrowRight size={17}/></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="plan" className="plan-section">
          <div className="container plan-grid">
            <div className="plan-copy">
              <span className="section-index">03 / OUR FIRST CHAPTER</span>
              <h2>Start small.<br/><em>Think bigger.</em></h2>
              <p>A simple beginning: get students together, explore new skills, then create something meaningful. Activities will be shaped by participation and faculty guidance.</p>
              <div className="plan-note"><Compass size={20}/><span>We&apos;re at the beginning, and that&apos;s the exciting part.</span></div>
            </div>
            <div className="phase-list">
              {phases.map((phase,i)=>
                <div className={openPhase===i?"phase open":"phase"} key={phase.number}>
                  <button type="button" className="phase-button" aria-expanded={openPhase===i} aria-controls={"phase-"+i} onClick={()=>setOpenPhase(openPhase===i?-1:i)}>
                    <span className="phase-no">{phase.number}</span>
                    <span className="phase-main"><span>{phase.label}</span><strong>{phase.title}</strong><small>{phase.summary}</small></span>
                    <span className="phase-arrow"><ChevronDown size={22}/></span>
                  </button>
                  {openPhase===i&&<div className="phase-details" id={"phase-"+i}>
                    <p>{phase.detail}</p>
                    <div>{phase.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
                  </div>}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner">
            <span>THE VERSE IS JUST BEGINNING ✳</span>
            <h2>Different minds.<br/><em>One shared curiosity.</em></h2>
            <p>Learn together. Build together. Grow together.</p>
            <a href="#top">Back to the beginning <ArrowUpRight size={19}/></a>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-content"><Brand/><p>A student-led Data Science &amp; Analytics initiative at Integral University, Lucknow.</p><span>MADE FOR THE CURIOUS · {new Date().getFullYear()}</span></div></footer>
    </>
  );
}
