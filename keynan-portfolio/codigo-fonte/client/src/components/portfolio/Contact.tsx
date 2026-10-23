import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Mail, Send } from "lucide-react";
import { email, githubUrl } from "@/data/portfolio";

export default function Contact() {
  const [notice, setNotice] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const reply = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    if (!name || !reply || !message) return;
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nNome: ${name}\nE-mail para resposta: ${reply}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setNotice(true);
  }
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-copy" data-reveal>
        <span className="eyebrow">04 / VAMOS TROCAR UMA IDEIA?</span>
        <h2>
          A próxima conexão
          <br />
          pode começar
          <br />
          <span className="lime">por aqui.</span>
        </h2>
        <p>
          Quer conversar sobre tecnologia, compartilhar uma ideia ou acompanhar
          os meus projetos? Estou sempre aprendendo e aberto a novas conexões.
        </p>
        <a className="contact-email" href={`mailto:${email}`}>
          <Mail size={18} />
          {email}
          <ArrowUpRight size={18} />
        </a>
        <a
          className="contact-social"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} />
          Encontre-me no GitHub <ArrowUpRight size={15} />
        </a>
      </div>
      <form className="contact-form" onSubmit={prepareEmail} data-reveal>
        <div className="form-title">
          <span className="status-dot" />
          <span>Uma boa conversa começa com um olá.</span>
        </div>
        <label htmlFor="contact-name">Seu nome</label>
        <input
          id="contact-name"
          name="name"
          placeholder="Como posso chamar você?"
          autoComplete="name"
          required
          maxLength={100}
        />
        <label htmlFor="contact-email">Seu e-mail</label>
        <input
          id="contact-email"
          name="email"
          placeholder="voce@exemplo.com"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
        <label htmlFor="contact-message">Mensagem</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="O que você tem em mente?"
          required
          rows={4}
          maxLength={4000}
        />
        <button className="button button-primary" type="submit">
          Preparar e-mail <Send size={16} />
        </button>
        <p className="form-note" role="status">
          {notice
            ? "Sua mensagem está pronta para ser enviada no seu aplicativo de e-mail. Se ele não abriu, use o endereço ao lado."
            : "Abre seu aplicativo de e-mail com a mensagem preenchida. Nenhum dado é armazenado neste site."}
        </p>
      </form>
    </section>
  );
}
