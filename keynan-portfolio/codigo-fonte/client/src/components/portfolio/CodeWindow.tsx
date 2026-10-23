import { Braces, Check, Code2, Terminal } from "lucide-react";

export default function CodeWindow() {
  return (
    <div
      className="code-scene"
      aria-label="Perfil de Keynan Santos apresentado como código"
    >
      <div className="floating-tag tag-js">
        <span>JS</span> aprendendo na prática
      </div>
      <div className="editor-window">
        <div className="editor-top">
          <div className="traffic-lights">
            <i />
            <i />
            <i />
          </div>
          <span>keynan.config.js</span>
          <Code2 size={15} />
        </div>
        <div className="editor-tab">
          <Braces size={14} />
          <span>keynan.config.js</span>
          <span className="tab-dot" />
        </div>
        <div className="editor-code">
          <div>
            <b>01</b>
            <code>
              <em>// construindo minha próxima versão</em>
            </code>
          </div>
          <div>
            <b>02</b>
            <code>
              <span className="syntax-purple">const</span>{" "}
              <span className="syntax-blue">keynan</span> = {"{"}
            </code>
          </div>
          <div>
            <b>03</b>
            <code>
              {" "}
              nome: <span className="syntax-green">"Keynan Santos"</span>,
            </code>
          </div>
          <div>
            <b>04</b>
            <code>
              {" "}
              área:{" "}
              <span className="syntax-green">
                "Desenvolvimento de Sistemas"
              </span>
              ,
            </code>
          </div>
          <div>
            <b>05</b>
            <code>
              {" "}
              formação: <span className="syntax-green">"SENAI Luiz Varga"</span>
              ,
            </code>
          </div>
          <div>
            <b>06</b>
            <code> foco: [</code>
          </div>
          <div>
            <b>07</b>
            <code>
              {" "}
              <span className="syntax-green">"lógica"</span>,{" "}
              <span className="syntax-green">"web"</span>,{" "}
              <span className="syntax-green">"dados"</span>
            </code>
          </div>
          <div>
            <b>08</b>
            <code> ],</code>
          </div>
          <div>
            <b>09</b>
            <code>
              {" "}
              aprendendo: <span className="syntax-purple">true</span>
            </code>
          </div>
          <div>
            <b>10</b>
            <code>{"}"};</code>
          </div>
          <div>
            <b>11</b>
            <code> </code>
          </div>
          <div>
            <b>12</b>
            <code>
              <span className="syntax-blue">keynan</span>.
              <span className="syntax-yellow">evoluir</span>();
              <span className="code-cursor" />
            </code>
          </div>
        </div>
        <div className="editor-console">
          <Terminal size={13} />
          <span>uma linha de código de cada vez.</span>
          <Check size={14} />
        </div>
        <div className="editor-status">
          <span>⎇ main</span>
          <span>
            JavaScript <span>UTF-8</span>
          </span>
        </div>
      </div>
      <div className="floating-tag tag-status">
        <span className="status-dot" /> em constante evolução
      </div>
      <span className="scene-bracket bracket-one" aria-hidden="true">
        {"{"}
      </span>
      <span className="scene-bracket bracket-two" aria-hidden="true">
        {"}"}
      </span>
    </div>
  );
}
