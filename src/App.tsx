import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Fingerprint,
  Github,
  Globe2,
  Mail,
  Menu,
  Monitor,
  Radio,
  Smartphone,
  X,
} from 'lucide-react';
import {useState} from 'react';

const organization = 'https://github.com/GothwadTech';

const projects = [
  {
    name: 'Gothwad Accounts',
    type: 'IDENTITY · WEB',
    description: 'The shared identity and sign-in layer used across Gothwad products.',
    icon: Fingerprint,
    repo: 'accounts',
    href: 'https://accounts.gothwadtech.com',
    source: 'accounts',
    color: 'blue',
  },
  {
    name: 'Gothwad Mail',
    type: 'PRODUCTIVITY · WEB',
    description: 'A webmail client connected to Gothwad Accounts, with its own Mail API.',
    icon: Mail,
    repo: 'mail',
    href: 'https://mail.gothwadtech.com',
    source: 'mail',
    color: 'violet',
  },
  {
    name: 'GrixChat',
    type: 'COMMUNICATION · WEB + ANDROID',
    description: 'A messaging project with separate web and Android repositories.',
    icon: Radio,
    repo: 'grixchat',
    href: 'https://grixchat.gothwadtech.com',
    source: 'grixchat',
    color: 'mint',
  },
  {
    name: 'Gothwad Browser',
    type: 'ANDROID · TV',
    description: 'An Android browser project with a focus on phones, TVs and remote input.',
    icon: Globe2,
    repo: 'browser',
    href: 'https://browser.gothwadtech.com',
    source: 'browser',
    color: 'blue',
  },
  {
    name: 'Gothwad Education',
    type: 'EDUCATION · WEB + ANDROID',
    description: 'A school management and learning platform with web and Android projects.',
    icon: BookOpen,
    repo: 'education',
    href: 'https://edu.gothwadtech.com',
    source: 'education',
    color: 'amber',
  },
  {
    name: 'Gothwad AI Studio',
    type: 'DEVELOPER TOOLS · WEB',
    description: 'A mobile-first workspace for browsing and working with GitHub repositories.',
    icon: Braces,
    repo: 'ai',
    href: 'https://ai.gothwadtech.com',
    source: 'ai',
    color: 'violet',
  },
];

const focusAreas = [
  {number: '01', title: 'Identity & access', detail: 'Accounts · OAuth · shared sign-in', icon: Fingerprint},
  {number: '02', title: 'Everyday software', detail: 'Mail · Drive · Meet · Store', icon: Monitor},
  {number: '03', title: 'Apps & devices', detail: 'Android · browser · communication', icon: Smartphone},
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Gothwad Tech home">
          <span className="brand-mark">G<span>.</span></span>
          <span>GOTHWAD<span className="brand-light">TECH</span></span>
        </a>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>How we build</a>
          <a href="https://docs.gothwadtech.com">Documentation <ArrowUpRight size={13} /></a>
          <a className="nav-cta" href={organization} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> INDEPENDENT SOFTWARE STUDIO <span className="eyebrow-line" /></div>
          <h1>Good software<br />should feel <span>inevitable.</span></h1>
          <p className="hero-lede">
            Gothwad Tech is building a connected set of useful products — from identity and communication to tools for the devices people use every day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <ArrowRight size={16} /></a>
            <a className="text-link" href="https://gothwadtech.com" target="_blank" rel="noreferrer">Visit the official website <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-footnote"><span>BUILT IN PUBLIC</span><span className="footnote-divider" />
            Independent projects. Public repositories. Clear boundaries.</div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of connected software systems" role="img">
          <div className="art-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-crosshair crosshair-one" /><div className="art-crosshair crosshair-two" />
          <div className="art-label label-top">SYSTEMS / 01</div><div className="art-label label-bottom">A CONNECTED PRACTICE</div>
          <div className="core-glow" />
          <div className="core"><span className="core-symbol">G<span>.</span></span><span className="core-caption">GOTHWAD<br />TECH</span></div>
          <div className="orbit-node node-a"><Fingerprint size={17} /></div>
          <div className="orbit-node node-b"><Mail size={17} /></div>
          <div className="orbit-node node-c"><Smartphone size={17} /></div>
          <div className="signal signal-a" /><div className="signal signal-b" /><div className="signal signal-c" />
          <div className="art-index">01—06<br /><span>PROJECTS</span></div>
        </div>
        <a className="scroll-cue" href="#work"><ArrowDownRight size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip" id="approach">
        <div className="section-kicker">A CONNECTED PRACTICE <span>—</span> 2026</div>
        <p>Not another list of promises.<br /><strong>A growing body of software, built in the open.</strong></p>
        <div className="focus-list">
          {focusAreas.map(({number, title, detail, icon: Icon}) => (
            <article className="focus-item" key={number}>
              <span className="focus-number">{number}</span><Icon size={19} strokeWidth={1.6} />
              <div><h3>{title}</h3><p>{detail}</p></div><ArrowUpRight className="focus-arrow" size={15} />
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><div className="section-kicker">SELECTED PROJECTS <span>—</span> 01 / 06</div>
            <h2>Made to be <span>useful.</span></h2></div>
          <p>Explore product projects and their source repositories. Availability and feature details can change; the source repo is the best place to verify implementation.</p>
        </div>
        <div className="project-grid">
          {projects.map(({name, type, description, icon: Icon, repo, href, source, color}, index) => (
            <article className={`project-card color-${color}`} key={repo}>
              <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-type">{type}</span><Icon className="project-icon" size={21} strokeWidth={1.5} /></div>
              <h3>{name}</h3><p>{description}</p>
              <div className="project-bottom"><span className="repo-label"><span className="repo-dot" /> {repo}</span>
                <div className="project-links"><a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${name} website`}><Globe2 size={15} /> Visit</a>
                  <a href={`${organization}/${source}`} target="_blank" rel="noreferrer" aria-label={`View ${name} source repository`}><Github size={15} /> Source</a></div>
              </div>
            </article>
          ))}
        </div>
        <div className="work-footer"><span>Curated from public Gothwad Tech repositories.</span><a href={organization} target="_blank" rel="noreferrer">Browse all repositories <ArrowRight size={15} /></a></div>
      </section>

      <section className="principles">
        <div className="principles-left"><div className="section-kicker">ENGINEERING, NOT HYPE <span>—</span> 02</div>
          <h2>Say what’s true.<br /><span>Show the work.</span></h2>
        </div>
        <div className="principles-right">
          <p>Gothwad Tech’s public repositories span web apps, Android apps, shared identity and developer documentation. Each project has its own scope, maturity and setup; we keep those distinctions visible.</p>
          <div className="principle-row"><span>01</span><div><h3>Source is the reference</h3><p>Read the project README and linked docs for current implementation details.</p></div></div>
          <div className="principle-row"><span>02</span><div><h3>Not every repo is a release</h3><p>A public repository is not, by itself, a promise of production readiness or support.</p></div></div>
          <div className="principle-row"><span>03</span><div><h3>Built for real contexts</h3><p>Projects range from Android and TV experiences to web applications and backend services.</p></div></div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-mark">G<span>.</span></div>
        <div><div className="section-kicker">FOLLOW THE BUILD</div><h2>Curious what’s next?</h2><p>See the code, read the docs, or start with the official Gothwad Tech site.</p></div>
        <div className="closing-links"><a href={organization} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15} /></a><a href="https://docs.gothwadtech.com" target="_blank" rel="noreferrer">Read the docs <ArrowUpRight size={15} /></a><a href="https://gothwadtech.com" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={15} /></a></div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">G<span>.</span></span><span>GOTHWAD<span className="brand-light">TECH</span></span></a>
        <span>Independent software, in progress.</span><div><a href={organization} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a><span>© {new Date().getFullYear()} Gothwad Tech</span></div>
      </footer>
    </main>
  );
}

export default App;
