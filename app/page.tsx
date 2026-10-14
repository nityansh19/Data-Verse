import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3,
  BookOpen, BrainCircuit, Code2, Compass, Lightbulb,
  MoveUpRight, Sparkles, UsersRound, Workflow
} from "lucide-react";

const subjects = ["Python", "Data Analytics", "Statistics", "Data Visualization", "AI Foundations"];

const features = [
  {
    number: "01", Icon: BookOpen, type: "LEARNING",
    title: "Learn together.",
    description: "Beginner-friendly sessions where questions are encouraged and new skills feel achievable."
  },
  {
    number: "02", Icon: Code2, type: "BUILDING",
    title: "Make things real.",
    description: "Practical exercises, useful datasets and small projects that turn theory into experience."
  },
  {
    number: "03", Icon: UsersRound, type: "COMMUNITY",
    title: "Grow with people.",
    description: "Connect with students, share ideas, practise teamwork and support each other's progress."
  }
];

const steps = [
  { number: "01", title: "Connect", description: "Bring curious students together and introduce the community." },
  { number: "02", title: "Explore", description: "Start practical sessions, workshops and small shared challenges." },
  { number: "03", title: "Create", description: "Build collaborative projects and present what we've learned." }
];

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="DataVerse, back to top">
      <span className="logo-mark" aria-hidden="true">d<span>/</span>v</span>
      <span className="logo-word">data<span>verse</span><i>.</i></span>
    </a>
  );
}

function Visual() {
  return (
    <div className="visual" role="img" aria-label="Abstract illustration of connected ideas and data">
      <div className="visual-grid" aria-hidden="true" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbit-accent" />
      <div className="visual-core">
        <small>THE IDEA ENGINE</small>
        <strong>data<span>.</span></strong>
        <small>curiosity → possibility</small>
      </div>
      <div className="visual-tag visual-tag-top"><span className="signal" /> LEARN / BUILD / GROW</div>
      <div className="visual-tag visual-tag-bottom"><BarChart3 size={16} /> IDEAS BECOME INSIGHTS</div>
      <div className="visual-dot dot-one" /><div className="visual-dot dot-two" />
      <div className="visual-plus plus-one">+</div><div className="visual-plus plus-two">+</div>
      <span className="visual-caption">DATA / CURIOSITY / COMMUNITY</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="header" id="top">
        <div className="container header-inner">
          <Logo />
          <nav className="nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#activities">What we do</a>
            <a href="#plan">Our plan</a>
          </nav>
          <a href="#plan" className="nav-link">Our beginning <ArrowUpRight size={15} /></a>
        </div>
      </header>
      <main>
        <section className="container hero" aria-labelledby="main-title">
          <div className="hero-content">
            <div className="eyebrow"><span className="signal" /> A STUDENT-LED INITIATIVE · JUST GETTING STARTED</div>
            <h1 id="main-title">Curious minds.<br /><em>Limitless ideas.</em></h1>
            <p>Meet <strong>DataVerse</strong> — a growing Data Science &amp; Analytics community where students can explore technology, learn by doing and build things together.</p>
            <div className="hero-actions">
              <a href="#about" className="button button-primary">Discover DataVerse <ArrowUpRight size={18} /></a>
              <a href="#plan" className="button button-secondary">Our starting plan <ArrowRight size={18} /></a>
            </div>
            <p className="hero-note"><Sparkles size={15} /> No experience needed. Curiosity is enough to begin.</p>
          </div>
          <Visual />
          <a href="#about" className="scroll-label"><ArrowDownRight size={17} /> SCROLL TO EXPLORE</a>
        </section>

        <div className="ticker" aria-label="Our philosophy">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, i) => <div className="ticker-item" key={i}>
              <span>STAY CURIOUS</span><b>✳</b><span>LEARN TOGETHER</span><b>✳</b><span>BUILD SOMETHING REAL</span><b>✳</b>
            </div>)}
          </div>
        </div>

        <section id="about" className="container about section-space">
          <div className="section-label"><span>01 / 03</span><i /> THE IDEA</div>
          <div className="about-grid">
            <h2>More than a club.<br /><em>A place to begin.</em></h2>
            <div className="about-copy">
              <p>DataVerse is our idea for a welcoming space between <strong>classroom learning and real-world skills.</strong> A place to ask questions, try new technologies and work on ideas together.</p>
              <p>We&apos;re at the beginning — shaping our plans and community as we go. Whether you&apos;re a beginner or already love coding, there&apos;s room to explore.</p>
            </div>
          </div>
          <div className="subjects"><span>WHAT WE'LL EXPLORE</span><div>{subjects.map(subject => <span className="subject" key={subject}>{subject}</span>)}</div></div>
        </section>

        <section id="activities" className="activity-background">
          <div className="container section-space">
            <div className="section-label"><span>02 / 03</span><i /> WHAT WE HOPE TO DO</div>
            <div className="section-heading"><h2>Learn it. <em>Try it.</em><br />Make it matter.</h2><p>Simple ideas, meaningful practice and a community moving forward together.</p></div>
            <div className="feature-grid">
              {features.map(({ number, Icon, title, description, type }) => (
                <article className="feature" key={number}>
                  <div className="feature-top"><span>{number} / {type}</span><MoveUpRight size={19} /></div>
                  <div className="feature-icon"><Icon size={36} strokeWidth={1.4} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="benefits">
              <div><Lightbulb size={21} /><p><strong>For students</strong><span>Practical skills, confidence, teamwork and room to experiment.</span></p></div>
              <div><BrainCircuit size={21} /><p><strong>For faculty &amp; college</strong><span>Opportunities for mentoring, projects and student-led academic collaboration.</span></p></div>
            </div>
          </div>
        </section>

        <section id="plan" className="container plan section-space">
          <div className="plan-header">
            <div><div className="section-label"><span>03 / 03</span><i /> OUR FIRST STEPS</div><h2>Small starts.<br /><em>Big possibilities.</em></h2></div>
            <p>We&apos;re keeping our first chapter simple. With student participation and faculty guidance, here&apos;s how we hope to begin.</p>
          </div>
          <div className="steps">
            {steps.map(step => <div className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
              <Compass size={22} strokeWidth={1.3} />
            </div>)}
          </div>
          <div className="final-note"><div className="final-icon"><Workflow size={27} strokeWidth={1.5} /></div><div><span>THE BEGINNING OF SOMETHING NEW</span><h3>Let&apos;s learn something <em>remarkable.</em></h3></div><ArrowUpRight size={28} className="final-arrow" /></div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-inner">
        <Logo />
        <p>For curious minds. By curious minds.</p>
        <div><span>STUDENT-LED · DATA SCIENCE &amp; ANALYTICS</span><a href="#top">BACK TO TOP ↑</a></div>
      </div></footer>
    </>
  );
}
