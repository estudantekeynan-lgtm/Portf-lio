import { Braces, Database, GitBranch, Globe, Terminal } from "lucide-react";
import { repoUrl } from "@/data/portfolio";

const groups = [
  {
    name: "Interfaces",
    comment: "o que aparece na tela",
    icon: Globe,
    tech: [
      { name: "HTML5", code: "HTML", color: "#ed8760" },
      { name: "CSS3", code: "CSS", color: "#76b7f4" },
      { name: "JavaScript", code: "JS", color: "#e4d775" },
    ],
  },
  {
    name: "Lógica & dados",
    comment: "o que acontece por trás",
    icon: Terminal,
    tech: [
      { name: "Node.js", code: "N", color: "#9cce80" },
      { name: "Python", code: "Py", color: "#92bde4" },
      { name: "SQL", code: "SQL", color: "#b1a0ef" },
    ],
  },
  {
    name: "Ferramentas",
    comment: "o que conecta o trabalho",
    icon: GitBranch,
    tech: [
      { name: "Git", code: "git", color: "#e78975" },
      { name: "GitHub", code: "GH", color: "#e0e3dc" },
    ],
  },
];
export default function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="section-heading" data-reveal>
        <div>
          <span className="eyebrow">03 / MINHA CAIXA DE FERRAMENTAS</span>
          <h2>
            Stack em construção<span className="lime">_</span>
          </h2>
        </div>
        <p>
          As tecnologias que estou explorando
          <br />e colocando em prática nos meus estudos.
        </p>
      </div>
      <div className="tech-groups" data-reveal>
        {groups.map(group => (
          <div className="tech-group" key={group.name}>
            <h3>
              <group.icon size={18} />
              {group.name}
            </h3>
            <span className="tech-comment">// {group.comment}</span>
            <div className="tech-list">
              {group.tech.map(tech => (
                <div className="tech" key={tech.name}>
                  <span
                    style={{
                      color: tech.color,
                      backgroundColor: `${tech.color}12`,
                      borderColor: `${tech.color}26`,
                    }}
                  >
                    {tech.code}
                  </span>
                  <strong>{tech.name}</strong>
                  <small>em estudo</small>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="module-heading" data-reveal>
        <span className="eyebrow">
          UM REPOSITÓRIO. TRÊS FRENTES DE APRENDIZADO.
        </span>
      </div>
      <div className="modules" data-reveal>
        {[
          {
            id: "LIMA",
            title: "Linguagem de Marcação",
            text: "HTML semântico, formulários, páginas estáticas e CSS.",
            icon: Braces,
          },
          {
            id: "PBE",
            title: "Programação Back-End",
            text: "JavaScript, Node.js, lógica, funções, arrays e módulos.",
            icon: Terminal,
          },
          {
            id: "BCD",
            title: "Banco de Dados",
            text: "Modelagem conceitual e lógica, entidades, relacionamentos e SQL.",
            icon: Database,
          },
        ].map(module => (
          <a
            href={repoUrl + "/tree/main/" + module.id}
            target="_blank"
            rel="noreferrer"
            key={module.id}
            className="module"
          >
            <span className={`module-icon module-${module.id}`}>
              <module.icon size={20} />
            </span>
            <span className="module-label">
              {module.id}
              <strong>{module.title}</strong>
              <small>{module.text}</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
