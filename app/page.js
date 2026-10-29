import ThemeToggle from "../components/ThemeToggle";
import { profile, flow, flowTags, services, stack, projects, experience, education, languages } from "../data/profile";

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a className="logo" href="#top">{profile.name}</a>
            <a className="l" href="#build">What I build</a>
            <a className="l" href="#stack">Stack</a>
            {projects.length > 0 && <a className="l" href="#projects">Projects</a>}
            <a className="l" href="#work">Experience</a>
            <a className="l" href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap">
          <div className="hero">
            <h1>{profile.headline}</h1>
            <p className="lead">{profile.intro}</p>
            <div className="cta">
              <a className="btn p" href="#contact">Work with me</a>
              <a className="btn" href={profile.github}>See my GitHub</a>
            </div>
            <div className="flow" aria-label="How a request travels through a MERN application">
              <h2>One request, through the whole stack I work in</h2>
              <div className="path">
                {flow.map((n, i) => (
                  <div className="node" key={n.title}>
                    <div className="dot">{i + 1}</div>
                    <b>{n.title}</b>
                    <span>{n.sub}</span>
                  </div>
                ))}
              </div>
              <div className="tags">{flowTags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          </div>
        </div>

        <section id="build"><div className="wrap">
          <h2 className="t">What I build</h2>
          <div className="grid3">
            {services.map((s) => (<div className="card" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>))}
          </div>
        </div></section>

        <section id="stack"><div className="wrap">
          <h2 className="t">Tools I use</h2>
          <div className="stack">
            {stack.map((s) => (<div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>))}
          </div>
        </div></section>

        {projects.length > 0 && (
          <section id="projects"><div className="wrap">
            <h2 className="t">Projects</h2>
            <div className="grid3">
              {projects.map((p) => (
                <div className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  {p.tech && <div className="tags"><span className="tag">{p.tech}</span></div>}
                  {p.link && <p style={{ marginTop: 12 }}><a href={p.link}>View project</a></p>}
                </div>
              ))}
            </div>
          </div></section>
        )}

        <section id="work"><div className="wrap">
          <h2 className="t">Experience</h2>
          <ol className="tl">
            {experience.map((e) => (
              <li key={e.role + e.company}>
                <h3>{e.role}, {e.company}</h3>
                <div className="meta">{e.meta}</div>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div></section>

        <section><div className="wrap">
          <div className="two">
            <div className="card"><h3>Education</h3><p>{education}</p></div>
            <div className="card"><h3>Languages</h3><p>{languages}</p></div>
          </div>
        </div></section>

        <section id="contact"><div className="wrap">
          <h2 className="t">Let&rsquo;s build something.</h2>
          <div className="big"><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="links">
            <a className="btn p" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn" href={profile.linkedin}>LinkedIn</a>
            <a className="btn" href={profile.github}>GitHub</a>
            <a className="btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </div>
        </div></section>
      </main>

      <footer><div className="wrap">{profile.name} · {profile.location} · Open to remote work</div></footer>
    </>
  );
}
