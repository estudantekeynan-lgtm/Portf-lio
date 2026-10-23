import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  X,
} from "lucide-react";
import { projects, repoUrl, type Project } from "@/data/portfolio";

const filters = [
  { value: "Todos", label: "Todos" },
  { value: "LIMA", label: "Front-end" },
  { value: "PBE", label: "Back-end" },
  { value: "BCD", label: "Banco de dados" },
];

function ProjectPreview({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className={`project-visual visual-${project.id}`}>
        <span className="visual-caption">
          {project.id === "smartcoffee"
            ? "SMARTCOFFEE / WEB DESIGN"
            : "NOSTALGIA PLAY / HTML + CSS"}
        </span>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        {project.id === "nostalgia" && (
          <div className="nostalgia-title">
            Histórias que
            <br />
            atravessaram
            <br />
            <em>gerações.</em>
            <small>80 • 90 • 2000</small>
          </div>
        )}
      </div>
    );
  return (
    <div className={`project-visual code-preview preview-${project.module}`}>
      <div className="preview-title">
        <span />
        <span />
        <span />
        <small>{project.filename}</small>
      </div>
      <pre>{project.preview}</pre>
      <span className="preview-watermark" aria-hidden="true">
        {project.module === "BCD"
          ? "SQL"
          : project.module === "PBE"
            ? "JS"
            : "</>"}
      </span>
    </div>
  );
}

function ProjectModal({
  project,
  close,
}: {
  project: Project;
  close: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      onCancel={close}
      onClick={event => {
        if (event.target === dialog.current) close();
      }}
      aria-labelledby="project-dialog-title"
    >
      <div className="dialog-content">
        <button
          className="dialog-close icon-button"
          onClick={close}
          aria-label="Fechar detalhes"
        >
          <X size={20} />
        </button>
        <span className="eyebrow">{project.module} / PROJETO ACADÊMICO</span>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="tags">
          {project.tech.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <h3>O que explorei</h3>
        <ul>
          {project.learning.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="source-path">
          <Code2 size={16} />
          <code>{project.path}</code>
        </div>
        <a
          className="button button-primary"
          href={repoUrl + "/tree/main/" + project.path}
          target="_blank"
          rel="noreferrer"
        >
          Explorar o código <ArrowUpRight size={17} />
        </a>
        <p className="dialog-note">
          Este trabalho faz parte do meu repositório de estudos. O link abre os
          arquivos no GitHub.
        </p>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(
    project => filter === "Todos" || project.module === filter
  );
  const visible =
    filter === "Todos" && !expanded ? filtered.slice(0, 6) : filtered;
  return (
    <section id="projetos" className="section projects-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / DO ESTUDO À PRÁTICA</span>
          <h2>
            Projetos & estudos<span className="lime">_</span>
          </h2>
        </div>
        <a
          className="text-link"
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Repositório completo <ArrowUpRight size={17} />
        </a>
      </div>
      <div
        className="project-filter"
        role="group"
        aria-label="Filtrar projetos por módulo"
      >
        {filters.map(item => (
          <button
            key={item.value}
            className={filter === item.value ? "active" : ""}
            aria-pressed={filter === item.value}
            onClick={() => {
              setFilter(item.value);
              setExpanded(false);
            }}
          >
            {item.label}
            <span>
              {projects
                .filter(
                  project =>
                    item.value === "Todos" || project.module === item.value
                )
                .length.toString()
                .padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
            data-reveal
            style={{ transitionDelay: `${(index % 3) * 90}ms` }}
          >
            <button
              className="project-cover"
              onClick={() => setSelected(project)}
              aria-label={`Ver detalhes de ${project.title}`}
            >
              <ProjectPreview project={project} />
              <span className="cover-open">
                <ArrowUpRight size={20} />
              </span>
            </button>
            <div className="project-body">
              <div className="project-kicker">
                <span className={`module-dot module-${project.module}`} />
                {project.category}
                <span>{project.module}</span>
              </div>
              <h3>
                <button onClick={() => setSelected(project)}>
                  {project.title}
                </button>
              </h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-footer">
                <a
                  href={repoUrl + "/tree/main/" + project.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={15} /> Código <ExternalLink size={12} />
                </a>
                <button onClick={() => setSelected(project)}>
                  Detalhes <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filter === "Todos" && (
        <button
          className="button button-outline load-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Mostrar menos projetos" : "Ver mais estudos"}
          <ArrowDown size={16} className={expanded ? "rotate-arrow" : ""} />
        </button>
      )}
      {selected && (
        <ProjectModal
          key={selected.id}
          project={selected}
          close={() => setSelected(null)}
        />
      )}
    </section>
  );
}
