import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Github,
  Menu,
  X,
} from "lucide-react";
import CodeWindow from "@/components/portfolio/CodeWindow";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Stack from "@/components/portfolio/Stack";
import Contact from "@/components/portfolio/Contact";
import { githubUrl, repoUrl } from "@/data/portfolio";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const item = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            item.classList.add("is-visible");
            item.classList.remove("reveal-pending");
            observer.unobserve(item);
          } else if (!item.classList.contains("is-visible")) {
            item.classList.add("reveal-pending");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const links = [
    { href: "#projetos", label: "Projetos" },
    { href: "#sobre", label: "Sobre mim" },
    { href: "#stack", label: "Stack" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <>
      <a className="skip-link" href="#principal">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#" aria-label="Keynan Santos, início">
            <span className="logo-mark">{"<k/>"}</span>
            <span>
              keynan<span className="wordmark-light">.dev</span>
            </span>
          </a>
          <nav
            id="mobile-navigation"
            className={menuOpen ? "main-nav open" : "main-nav"}
            aria-label="Navegação principal"
          >
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}.</span>
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="header-github"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de Keynan no GitHub"
          >
            <Github size={18} />
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>
          <button
            className="menu-toggle icon-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <main id="principal">
        <section className="hero section">
          <div className="hero-main">
            <div className="hero-copy">
              <div className="hero-status">
                <span className="status-dot" /> DESENVOLVEDOR EM FORMAÇÃO
              </div>
              <p className="hero-hello">{"<olá, mundo />"}</p>
              <h1 aria-label="Keynan Santos">
                <span className="name-line name-line-first" aria-hidden="true">
                  Keynan
                </span>
                <span className="name-line name-line-second" aria-hidden="true">
                  Santos<span className="lime">.</span>
                </span>
              </h1>
              <p className="hero-description">
                Transformando curiosidade em código
                <span className="lime">.</span>
                <br />
                Estudo, experimento e construo soluções enquanto desenvolvo
                minha jornada na tecnologia.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">
                  Conheça meus projetos <ArrowDown size={17} />
                </a>
                <a
                  className="button button-outline"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> GitHub <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="hero-school">
                <span className="school-line" />
                <span>
                  Desenvolvimento de Sistemas
                  <br />
                  <strong>
                    SENAI Luiz Varga <span>·</span> SESI CE 005
                  </strong>
                </span>
              </div>
            </div>
            <CodeWindow />
          </div>
          <div className="hero-bottom">
            <span className="mono">
              <span className="lime">//</span> aprender. criar. evoluir.
            </span>
            <a href="#projetos">
              ROLE PARA EXPLORAR <ArrowDown size={14} />
            </a>
            <span className="mono hero-repo">
              logica_de_programacao2 <span className="lime">↗</span>
            </span>
          </div>
        </section>
        <div className="stack-strip" aria-label="Tecnologias em estudo">
          <div>
            <span>HTML & CSS</span>
            <i>✦</i>
            <span>JavaScript</span>
            <i>✦</i>
            <span>Node.js</span>
            <i>✦</i>
            <span>SQL</span>
            <i>✦</i>
            <span>Python</span>
            <i>✦</i>
            <span>Git & GitHub</span>
          </div>
        </div>
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <footer className="site-footer section">
        <a className="wordmark" href="#">
          <span className="logo-mark">{"<k/>"}</span>
          <span>
            keynan<span className="wordmark-light">.dev</span>
          </span>
        </a>
        <p>Feito com curiosidade, dedicação e código.</p>
        <a className="back-top" href="#" aria-label="Voltar ao topo">
          Voltar ao topo <ArrowUp size={16} />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Keynan Santos</span>
          <a href={repoUrl} target="_blank" rel="noreferrer">
            Portfólio acadêmico <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
    </>
  );
}
