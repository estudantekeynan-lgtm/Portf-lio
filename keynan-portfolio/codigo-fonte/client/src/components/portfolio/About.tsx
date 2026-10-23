import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  GraduationCap,
  Layers,
} from "lucide-react";
import { repoUrl } from "@/data/portfolio";

export default function About() {
  const [tab, setTab] = useState("sobre");
  return (
    <section id="sobre" className="section about-section">
      <div className="about-side" data-reveal>
        <span className="eyebrow">02 / UM POUCO SOBRE MIM</span>
        <h2>
          Curiosidade como
          <br />
          ponto de partida<span className="lime">_</span>
        </h2>
        <div className="journey-card">
          <div className="journey-top">
            <span className="status-dot" /> APRENDIZADO EM ANDAMENTO
          </div>
          <div className="journey-mark">
            {"<"}
            <span>KS</span>
            {"/>"}
          </div>
          <div className="journey-bottom">
            <span>próxima versão</span>
            <strong>melhor que a anterior.</strong>
          </div>
        </div>
      </div>
      <div className="about-content" data-reveal>
        <div
          className="about-tabs"
          role="tablist"
          aria-label="Informações sobre Keynan"
        >
          <button
            id="tab-sobre"
            role="tab"
            aria-selected={tab === "sobre"}
            aria-controls="panel-sobre"
            className={tab === "sobre" ? "active" : ""}
            onClick={() => setTab("sobre")}
          >
            Sobre mim <span>_</span>
          </button>
          <button
            id="tab-aprendizado"
            role="tab"
            aria-selected={tab === "aprendizado"}
            aria-controls="panel-aprendizado"
            className={tab === "aprendizado" ? "active" : ""}
            onClick={() => setTab("aprendizado")}
          >
            O que estou aprendendo
          </button>
        </div>
        {tab === "sobre" ? (
          <div id="panel-sobre" role="tabpanel" aria-labelledby="tab-sobre">
            <h3>Olá! Eu sou o Keynan.</h3>
            <p>
              Sou estudante de{" "}
              <strong>Desenvolvimento de Sistemas no SENAI Luiz Varga</strong> e
              aluno do <strong>SESI CE 005</strong>. Tenho interesse em entender
              como as coisas funcionam e transformar esse conhecimento em
              projetos práticos.
            </p>
            <p>
              Meu repositório reúne atividades do 2º termo de Análise e
              Desenvolvimento de Sistemas, com foco em lógica de programação,
              desenvolvimento web, banco de dados e programação back-end.
            </p>
            <p>
              Cada exercício é uma oportunidade de resolver um novo problema,
              organizar melhor o código e dar o próximo passo na minha evolução.
            </p>
            <div className="education-block">
              <GraduationCap size={23} />
              <div>
                <span>FORMAÇÃO EM ANDAMENTO</span>
                <strong>Desenvolvimento de Sistemas</strong>
                <small>SENAI Luiz Varga · SESI CE 005</small>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="panel-aprendizado"
            role="tabpanel"
            aria-labelledby="tab-aprendizado"
          >
            <h3>Uma base sólida, na prática.</h3>
            <p>
              O objetivo dos meus estudos é fortalecer a base em programação e
              acompanhar minha evolução através de desafios reais de
              aprendizagem.
            </p>
            <div className="learning-list">
              {[
                {
                  icon: Code2,
                  title: "Resolver problemas",
                  text: "Algoritmos, condicionais, arrays e funções para desenvolver o raciocínio lógico.",
                },
                {
                  icon: Layers,
                  title: "Construir para a web",
                  text: "Páginas semânticas, formulários e interfaces usando HTML e CSS.",
                },
                {
                  icon: Database,
                  title: "Organizar informações",
                  text: "Modelagem de dados, entidades, relacionamentos e consultas SQL.",
                },
                {
                  icon: BookOpen,
                  title: "Explorar o back-end",
                  text: "Aplicações simples, módulos e entrada de dados com JavaScript e Node.js.",
                },
              ].map(item => (
                <div key={item.title}>
                  <item.icon size={20} />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <a
          className="text-link"
          href={repoUrl + "#sobre-mim"}
          target="_blank"
          rel="noreferrer"
        >
          Acompanhe minha evolução no GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
