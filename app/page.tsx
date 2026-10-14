"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, Check,
  ChevronDown, Code2, Github, Globe2, Menu,
  MoveUpRight, Sparkles, Target, Terminal, UsersRound, X,
  Zap, Activity, Trophy, Blocks
} from "lucide-react";

const assessmentUrl = "https://ds-test-roan.vercel.app";
const githubUrl = "https://github.com/nityansh19/Data-Verse";

const navigation = [
  { label: "The vision", href: "#vision" },
  { label: "Learning tracks", href: "#tracks" },
  { label: "What we do", href: "#experience" },
  { label: "Our roadmap", href: "#roadmap" },
  { label: "FAQs", href: "#faq" }
];

const tracks = [
  {
    no: "01", icon: Code2, name: "Python & Programming", short: "Build the language of possibility.",
    topic: "CODE / CREATE / DEBUG", tag: "YOUR STARTING POINT",
    description: "From your first print statement to writing programs that solve real problems. We start at the basics and level up together.",
    skills: ["Python fundamentals", "Problem-solving", "NumPy & Pandas", "Clean coding"],
    output: "A working Python mini-project",
    code: ["# curiosity.py", "skills = ['learn', 'build', 'repeat']", "for skill in skills:", "    print('We ' + skill + ' together')"]
  },
  {
    no: "02", icon: BarChart3, name: "Data Analytics", short: "Find the story hidden in numbers.",
    topic: "CLEAN / EXPLORE / EXPLAIN", tag: "TURN DATA INTO INSIGHT",
    description: "Learn to ask better questions, work with messy data, and tell compelling stories through analysis and dashboards.",
    skills: ["Excel & SQL", "Pandas analysis", "Data cleaning", "Power BI basics"],
    output: "A real-world data dashboard",
    code: ["-- find a story in the data", "SELECT category, COUNT(*) AS total", "FROM community_projects", "GROUP BY category;"]
  },
  {
    no: "03", icon: Activity, name: "Statistics & Visualization", short: "Turn uncertainty into understanding.",
    topic: "MEASURE / QUESTION / VISUALIZE", tag: "THINK LIKE AN ANALYST",
    description: "Get comfortable with the numbers behind decisions. Use statistics, charts, and thoughtful interpretation to make information meaningful.",
    skills: ["Descriptive statistics", "Probability basics", "Matplotlib", "Storytelling with charts"],
    output: "An insight-led visual report",
    code: ["# discover the bigger picture", "import matplotlib.pyplot as plt", "plt.plot([1, 2, 3], [2, 5, 8])", "plt.title('Progress, visualized')"]
  },
  {
    no: "04", icon: BrainCircuit, name: "AI & Machine Learning", short: "Explore what intelligent systems can do.",
    topic: "PREDICT / EXPERIMENT / IMPROVE", tag: "LOOK TOWARD TOMORROW",
    description: "Once the foundations click, explore models, patterns, and responsible AI through approachable experiments.",
    skills: ["ML foundations", "Model evaluation", "Scikit-learn", "Responsible AI"],
    output: "A beginner ML prototype",
    code: ["# ideas become experiments", "from sklearn.model_selection import train_test_split", "X_train, X_test = train_test_split(data)", "# learn. test. improve."]
  }
];

const experiences = [
  { no: "01", icon: Terminal, title: "Workshops that click.", text: "Less watching, more making. Small, practical sessions where you leave knowing how to do something new.", tag: "HANDS-ON" },
  { no: "02", icon: Blocks, title: "Projects with purpose.", text: "Work with real datasets and team up to build dashboards, tools, and ideas worth sharing.", tag: "BUILD TOGETHER" },
  { no: "03", icon: Trophy, title: "Challenges worth trying.", text: "Friendly data challenges, quizzes, and hackathon-style problem solving that sharpen your thinking.", tag: "LEVEL UP" },
  { no: "04", icon: UsersRound, title: "People who push you forward.", text: "A welcoming place for beginners and builders to find teammates, share knowledge, and grow.", tag: "YOUR PEOPLE" }
];

const roadmap = [
  { m: "01", period: "MONTH ONE", status: "FOUNDATIONS", heading: "Find your people. Find your spark.", text: "Launch the community, meet your peers, and get comfortable with Python and the essentials of data thinking.", tags: ["Club orientation", "Python sessions", "Meet the community"] },
  { m: "02", period: "MONTH TWO", status: "EXPLORATION", heading: "Turn theory into something real.", text: "Explore SQL, statistics, and data visualization. Try mini challenges and get your hands on real datasets.", tags: ["Analytics workshops", "Team exercises", "Mini challenges"] },
  { m: "03", period: "MONTH THREE", status: "CREATION", heading: "Build it. Show it. Own it.", text: "Work in teams, create portfolio-worthy projects, and present what you've learned in a community showcase.", tags: ["Group projects", "Project demos", "What's next?"] }
];

const faqs = [
  { q: "Do I need to know Python or coding already?", a: "Not at all. DataVerse is designed to welcome curious beginners alongside people who already have experience. We'll build from the foundations and grow together." },
  { q: "Is DataVerse only for Data Science students?", a: "No. If you're curious about data, programming, AI, design, or solving problems, there's room to learn here. Our focus is interdisciplinary, hands-on learning." },
  { q: "What is the Founding Five?", a: "It's the initial five-person core team that will help organize sessions, projects, and club activities. The assessment is for core team selection; it is not a requirement for ordinary students to learn with the club." },
  { q: "What will members actually do?", a: "Our plan includes learning sessions, coding practice, collaborative projects, beginner challenges, and project showcases. Activities will grow based on student interest and faculty guidance." },
  { q: "Will I receive a certificate?", a: "We don't want a certificate to be the reason you join. Our priority is real skills, completed projects, and shared learning. Any official recognition will depend on the events and approvals involved." },
  { q: "How do I become part of the community?", a: "We are in the founding stage. You can explore our plans here and follow our updates. If you want to help organize the club, the Founding Five assessment is linked below." }
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={"brand" + (light ? " brand-light" : "")} href="#home" aria-label="DataVerse — back to top">
      <span className="brand-symbol" aria-hidden="true"><span>d</span><span className="brand-slash">/</span><span>v</span><span className="brand-signal" /></span>
      <span className="brand-name">data<span>verse</span><span className="brand-period">.</span></span>
    </a>
  );
}

function SectionHeading({ number, kicker, title, italic, description }: { number: string; kicker: string; title: string; italic?: string; description?: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker"><span>{number}</span><span className="kicker-line" />{kicker}</div>
      <h2>{title}{italic && <> <em>{italic}</em></>}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HeroVisual() {
  const ref = useRef<HTMLDivElement | null>(null);
  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = ref.current.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width - 0.5) * 12;
    const y = ((e.clientY - box.top) / box.height - 0.5) * 12;
    ref.current.style.setProperty("--pointer-x", x.toFixed(2) + "px");
    ref.current.style.setProperty("--pointer-y", y.toFixed(2) + "px");
  }
  function reset() {
    ref.current?.style.setProperty("--pointer-x", "0px");
    ref.current?.style.setProperty("--pointer-y", "0px");
  }
  return (
    <div className="hero-art" ref={ref} onMouseMove={move} onMouseLeave={reset} aria-label="Abstract interactive data universe illustration" role="img">
      <div className="art-grid" />
      <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
      <div className="orbit-dash dash-one" /><div className="orbit-dash dash-two" />
      <div className="art-core">
        <div className="core-cross core-cross-one" /><div className="core-cross core-cross-two" />
        <div className="core-inner"><span>D</span><span className="core-slash">/</span><span>V</span></div>
        <small>CURIOUS MINDS <span>↗</span> BIG IDEAS</small>
      </div>
      <div className="art-particle particle-one" /><div className="art-particle particle-two" /><div className="art-particle particle-three" />
      <div className="art-float data-pill float-a"><span className="float-dot lime" />LIVE CURIOSITY <span>↗</span></div>
      <div className="art-float code-pill float-b"><span className="terminal-glyph">›_</span><span>ideas.<b>execute()</b></span></div>
      <div className="art-float stat-pill float-c">
        <div className="stat-pill-head"><Activity size={13} /> GROWTH SIGNAL <span>+∞</span></div>
        <svg viewBox="0 0 188 55" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b7fa68" stopOpacity=".32"/><stop offset="100%" stopColor="#b7fa68" stopOpacity="0"/></linearGradient></defs><path d="M0 48L27 40L50 43L70 24L94 31L118 14L144 19L164 9L188 4L188 55H0Z" fill="url(#chart-fill)"/><path d="M0 48L27 40L50 43L70 24L94 31L118 14L144 19L164 9L188 4" fill="none" stroke="#b7fa68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <div className="art-tick top-tick">LAT 26.8467° N</div>
      <div className="art-tick bottom-tick">CURIOSITY ENGINE / 001</div>
      <span className="art-plus plus-one">+</span><span className="art-plus plus-two">+</span>
    </div>
  );
}

function AppHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="nav-container">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(link => <a href={link.href} key={link.label}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href={assessmentUrl} target="_blank" rel="noreferrer">Founding Five <ArrowUpRight size={15}/></a>
          <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>
      {open && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">{navigation.map(link => <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label} <ArrowUpRight size={15}/></a>)}<a href={assessmentUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Founding Five Assessment <ArrowUpRight size={15}/></a></nav>}
    </header>
  );
}

export default function Home() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, window.scrollY / max * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  const track = tracks[activeTrack];
  const TrackIcon = track.icon;
  return (
    <>
      <div className="site-progress" style={{ width: progress + "%" }} aria-hidden="true" />
      <AppHeader />
      <main id="home">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-backword" aria-hidden="true">data<span>verse</span></div>
          <div className="hero-left">
            <div className="eyebrow-chip hero-enter"><span className="pulsing-dot"/> THE NEXT GENERATION OF CURIOUS MINDS <span className="chip-arrow">↗</span></div>
            <h1 id="hero-title" className="hero-title hero-enter-delay">Curiosity, <br />meet <em>possibility.</em><span className="hero-star">✳</span></h1>
            <p className="hero-intro hero-enter-delay-two">A new kind of student community for the next generation of <strong>data thinkers, builders and changemakers.</strong> Come curious. Leave capable.</p>
            <div className="hero-buttons hero-enter-delay-three">
              <a href="#vision" className="btn btn-lime">Enter the Verse <ArrowUpRight size={20}/></a>
              <a href={assessmentUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Join the Founding Five <ArrowRight size={18}/></a>
            </div>
            <div className="hero-smallprint hero-enter-delay-three"><div className="avatar-stack" aria-hidden="true"><span><Code2 size={16}/></span><span><BarChart3 size={15}/></span><span><BrainCircuit size={16}/></span></div><span>Built by students. Driven by curiosity.<br /><b>Everyone starts somewhere.</b></span></div>
          </div>
          <HeroVisual />
          <div className="hero-bottom"><span>SCROLL TO EXPLORE THE UNIVERSE</span><a href="#vision" aria-label="Scroll to the vision"><ArrowDown size={19}/></a><span>001 / WELCOME TO DATAVERSE</span></div>
        </section>

        <section className="marquee" aria-label="Our philosophy"><div className="marquee-track" aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <div className="marquee-group" key={i}><span>STAY CURIOUS</span><Sparkles size={17}/><span>THINK BIGGER</span><Sparkles size={17}/><span>BUILD TOGETHER</span><Sparkles size={17}/></div>)}</div></section>

        <section id="vision" className="vision section-wrap section-spacing">
          <div className="vision-main">
            <SectionHeading number="01 / 06" kicker="THE VISION" title="Not just another" italic="college club." />
            <div className="vision-quote reveal">We&apos;re creating the place we wish existed when we were just getting started.</div>
            <div className="vision-sign reveal"><span className="sign-line"/><span>FROM LEARNING ABOUT THE FUTURE<br/>TO ACTUALLY BUILDING IT.</span></div>
          </div>
          <div className="vision-side reveal">
            <div className="vision-art"><div className="vision-ring"/><div className="vision-art-mark"><span>?</span><ArrowUpRight size={31}/></div><div className="vision-label">THE BEST STARTING POINT IS A QUESTION.</div></div>
            <p>DataVerse is a student-led <strong>Data Science &amp; Analytics Club</strong> created to bridge the gap between what we study and what we can do.</p>
            <p>Think real skills, shared discoveries, ambitious ideas and a community where asking questions is celebrated—not judged.</p>
            <div className="vision-values"><span><Check size={15}/> Beginner-first</span><span><Check size={15}/> Hands-on</span><span><Check size={15}/> People-powered</span></div>
          </div>
        </section>

        <section className="numbers-strip section-wrap" aria-label="How we begin">
          <div className="number-panel reveal"><strong>04<span>+</span></strong><p>learning tracks</p><small>Different paths. Shared growth.</small></div>
          <div className="number-panel reveal"><strong>03</strong><p>month launch plan</p><small>From zero to your first showcase.</small></div>
          <div className="number-panel reveal"><strong>05</strong><p>founding team roles</p><small>Help shape what comes next.</small></div>
          <div className="number-panel number-callout reveal"><span><Zap size={17}/> THE FORMULA</span><strong>YOU <em>+</em> US</strong><p>Unlimited possibilities.</p></div>
        </section>

        <section id="tracks" className="tracks-section section-spacing">
          <div className="section-wrap">
            <div className="tracks-head">
              <SectionHeading number="02 / 06" kicker="YOUR PLAYGROUND" title="Choose a direction." italic="Find your thing." description="You don't need to know it all. Pick what excites you and start where you are." />
              <span className="head-aside reveal">NO GATEKEEPING. <br/>JUST GROWTH. ↗</span>
            </div>
            <div className="tracks-layout reveal">
              <div className="track-list" role="tablist" aria-label="Learning tracks">{tracks.map((t,i) => {const Icon = t.icon; return <button key={t.no} id={"track-tab-" + i} role="tab" aria-selected={activeTrack===i} aria-controls="track-panel" className={"track-tab" + (activeTrack===i?" selected":"")} onClick={()=>setActiveTrack(i)}><span className="track-number">{t.no}</span><span className="track-name"><b>{t.name}</b><small>{t.short}</small></span><span className="track-tab-icon"><Icon size={22}/></span><ArrowUpRight className="track-chevron" size={20}/></button>})}</div>
              <div className="track-content" id="track-panel" role="tabpanel" aria-labelledby={"track-tab-" + activeTrack} key={track.no}>
                <div className="track-content-top"><span className="track-label"><span className="pulsing-dot"/> {track.tag}</span><TrackIcon size={25} strokeWidth={1.35}/></div>
                <h3>{track.name}<span className="lime-period">.</span></h3>
                <p>{track.description}</p>
                <div className="track-skills">{track.skills.map(s=><span key={s}>{s}</span>)}</div>
                <div className="code-window"><div className="code-header"><div className="code-dots"><i/><i/><i/></div><span>dataverse / learning-lab</span><Terminal size={14}/></div><div className="code-lines">{track.code.map((line,i)=><div key={i}><span>{String(i+1).padStart(2,"0")}</span><code>{line}</code></div>)}</div></div>
                <div className="track-output"><span>YOUR FIRST MILESTONE</span><b>{track.output} <ArrowUpRight size={16}/></b></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-wrap section-spacing">
          <div className="experience-top">
            <SectionHeading number="03 / 06" kicker="LIFE INSIDE THE VERSE" title="Less scrolling." italic="More doing." description="We're not here to collect event certificates. We're here to collect actual experiences." />
            <div className="experience-annotation reveal"><Globe2 size={22}/><span>THE CLASSROOM IS JUST<br/>THE BEGINNING.</span></div>
          </div>
          <div className="experience-grid">
            {experiences.map((item,index) => {const Icon=item.icon;return <article className={"experience-card experience-card-" + index + " reveal"} key={item.no}><div className="experience-card-top"><span>{item.no} / WHAT WE DO</span><ArrowUpRight size={20}/></div><div className="experience-graphic"><Icon size={index===0?72:64} strokeWidth={1.1}/><div className="graphic-line"/><div className="graphic-circle"/></div><div className="experience-card-bottom"><span className="experience-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>})}
          </div>
          <div className="experience-footer reveal"><span>NO EXPERIENCE REQUIRED. JUST THE WILLINGNESS TO TRY.</span><a href="#roadmap">See how we begin <ArrowUpRight size={17}/></a></div>
        </section>

        <section className="project-idea section-wrap">
          <div className="project-inner reveal">
            <div className="project-copy"><div className="section-kicker"><span>✳</span><span className="kicker-line"/> A GLIMPSE OF WHAT'S POSSIBLE</div><h2>Don't just read<br/>about <em>impact.</em><br/>Make some.</h2><p>Picture real datasets becoming campus dashboards, meaningful insights, or a prototype nobody thought to build. These are the kinds of projects we want to explore together.</p><a href="#roadmap" className="inline-link">See our launch plan <ArrowUpRight size={17}/></a></div>
            <div className="project-dashboard">
              <div className="dashboard-head"><span><span className="dash-dot"/> DATA LAB / CONCEPT</span><span>OVERVIEW <ArrowUpRight size={14}/></span></div>
              <div className="dashboard-body">
                <div className="dashboard-title"><span>Curiosity in motion</span><strong>Insights / 001</strong></div>
                <div className="dashboard-stat"><div><small>IDEAS EXPLORED</small><strong>∞</strong></div><span>↗ YOUR POTENTIAL</span></div>
                <div className="dashboard-chart" aria-hidden="true"><div className="chart-lines"><i/><i/><i/><i/></div>{[24,38,31,54,47,69,57,80,68,93,79,98].map((h,i)=><span key={i} style={{height:h+"%"}}/>)}</div>
                <div className="dashboard-foot"><span>IMAGINE → ANALYZE → CREATE</span><span className="dash-active">● LIVE IDEAS</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="roadmap section-wrap section-spacing">
          <div className="roadmap-header"><SectionHeading number="04 / 06" kicker="OUR FIRST CHAPTER" title="Big things start" italic="small." description="A practical first-three-month plan. One step at a time, and always together." /><div className="roadmap-stamp reveal"><span>THE<br/>LAUNCH<br/>PLAN</span><MoveUpRight size={30}/></div></div>
          <div className="roadmap-steps">{roadmap.map(step=><article className="roadmap-step reveal" key={step.m}><div className="roadmap-count"><span>{step.m}</span><div className="roadmap-connector"/></div><div className="roadmap-info"><div className="roadmap-period">{step.period}<span> / {step.status}</span></div><h3>{step.heading}</h3><p>{step.text}</p><div className="roadmap-tags">{step.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="roadmap-side-icon"><ArrowUpRight size={26}/></div></article>)}</div>
          <div className="roadmap-note reveal"><Target size={20}/><span>THIS IS OUR STARTING BLUEPRINT. THE BEST IDEAS WILL COME FROM THE PEOPLE WHO JOIN US.</span></div>
        </section>

        <section className="founding-section" id="founding">
          <div className="section-wrap founding-layout">
            <div className="founding-copy reveal"><div className="founding-flag"><span className="pulsing-dot"/> THE FOUNDING FIVE</div><h2>Every universe<br/>needs its <em>first<br/>explorers.</em></h2><p>We're assembling a small founding team to help shape DataVerse from day one. If you love taking initiative, learning new things and bringing people together, this might be your starting line.</p><div className="founding-actions"><a className="btn btn-dark" href={assessmentUrl} target="_blank" rel="noreferrer">Explore the assessment <ArrowUpRight size={20}/></a></div><small>Founding-team selection is separate from general club participation.</small></div>
            <div className="founding-art reveal"><span className="founding-topline">INITIATIVE / COLLABORATION / CURIOSITY</span><div className="founding-five" aria-hidden="true"><span>0</span><span>5</span></div><div className="founding-art-bottom"><span>FOUNDING POSITIONS</span><span>ONE SHARED MISSION <ArrowUpRight size={17}/></span></div><div className="founding-scribble">✳</div></div>
          </div>
        </section>

        <section id="faq" className="faq section-wrap section-spacing">
          <div className="faq-heading"><SectionHeading number="05 / 06" kicker="GOOD QUESTIONS" title="Still thinking" italic="about it?" description="We're glad you're curious. Here are a few things you might want to know." /></div>
          <div className="faq-list reveal">{faqs.map((item,i)=><details key={item.q} className="faq-item"><summary><span className="faq-number">{String(i+1).padStart(2,"0")}</span><span>{item.q}</span><span className="faq-plus"><ChevronDown size={19}/></span></summary><p>{item.a}</p></details>)}</div>
        </section>

        <section className="final-cta section-wrap" aria-labelledby="last-heading"><div className="final-inner reveal"><div className="final-kicker"><Sparkles size={16}/> 06 / THE BEGINNING OF SOMETHING BIG</div><h2 id="last-heading">The next big idea<br/>could start <em>here.</em></h2><p>Different backgrounds. Different interests. One shared curiosity. Welcome to DataVerse.</p><div className="final-buttons"><a href={assessmentUrl} target="_blank" rel="noreferrer" className="btn btn-lime">Join the Founding Five <ArrowUpRight size={20}/></a><a className="btn btn-text" href="#tracks">Discover your track <ArrowRight size={19}/></a></div><span className="final-decoration" aria-hidden="true">✳</span></div></section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <div className="footer-top"><div className="footer-brand"><Brand light/><p>A space to ask bigger questions,<br/>build better things, and grow together.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#vision">Our vision</a><a href="#tracks">Learning tracks</a><a href="#experience">Experiences</a><a href="#roadmap">Launch roadmap</a></div><div><span>THE CLUB</span><a href="#founding">Founding Five</a><a href="#faq">FAQs</a><a href={assessmentUrl} target="_blank" rel="noreferrer">Recruitment portal ↗</a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a></div></div></div>
          <div className="footer-divider"/>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} DATAVERSE. MADE FOR THE CURIOUS.</span><span>STUDENT-LED · DATA SCIENCE &amp; ANALYTICS</span><a href="#home">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </>
  );
}
