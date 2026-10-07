import { useState } from "react";
import { Menu, X, MapPin, Monitor } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";
import { CtaButton, Reveal, SectionHeading, WhatsAppIcon } from "./ui";
import doctorPhoto from "@/assets/dra-vanessa.jpg";

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de cuidado" },
  { href: "#metodo", label: "Método CUIDAR" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Logo() {
  return (
    <a href="#inicio" className="flex flex-col leading-none">
      <span className="text-[1.05rem] font-semibold tracking-tight text-primary">Dra. Vanessa Ballista</span>
      <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.3em] text-secondary">Psiquiatria</span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.slice(1, 6).map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CtaButton className="hidden min-h-[44px] px-5 text-sm sm:inline-flex">Agendar consulta</CtaButton>
          <button className="rounded-full p-2.5 text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden" aria-label="Menu móvel">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3.5 font-medium text-primary">{n.label}</a>
          ))}
          <CtaButton className="mt-5 w-full">Agendar uma consulta</CtaButton>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-sand lg:block" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="animate-fade-up">
          <p className="eyebrow mb-5">Psiquiatria · Presidente Prudente e online</p>
          <h1 className="text-[2.1rem] font-semibold leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
            Cuidar da sua saúde mental também é cuidar da sua vida por inteiro.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um atendimento psiquiátrico individualizado, com escuta qualificada, olhar integral e acompanhamento próximo para compreender o que você está vivendo e construir, junto com você, o melhor caminho de cuidado.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton><WhatsAppIcon className="size-5" /> Agendar uma consulta</CtaButton>
            <CtaButton variant="ghost" href="#sobre">Conhecer a Dra. Vanessa</CtaButton>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-secondary">
            <li className="flex items-center gap-1.5"><MapPin className="size-4" /> Presencial em Presidente Prudente</li>
            <li className="flex items-center gap-1.5"><Monitor className="size-4" /> Atendimento online</li>
            <li>Consultas particulares</li>
          </ul>
          <p className="mt-8 border-t border-border pt-5 text-xs tracking-wide text-muted-foreground">
            {SITE.name} | {SITE.specialty} | {SITE.crm}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none" style={{ animationDelay: ".15s" }}>
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-secondary/30" aria-hidden />
          <img
            src={doctorPhoto}
            alt="Dra. Vanessa Ballista, psiquiatra em Presidente Prudente"
            width={896} height={1152}
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}

export function Identification() {
  return (
    <section className="bg-sand-soft py-20 sm:py-28">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-[1.75rem] font-semibold leading-tight sm:text-4xl">Quando algo dentro de você começa a pedir atenção.</h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ansiedade, tristeza, esgotamento, alterações no sono, perda de energia ou mudanças importantes na vida podem afetar muito mais do que o estado emocional. Podem interferir no trabalho, nos relacionamentos, na rotina e na forma como você se sente no dia a dia.
        </p>
        <p className="mt-6 text-base font-medium leading-relaxed text-primary sm:text-lg">
          Nem sempre é fácil entender sozinho o que está acontecendo. Uma avaliação psiquiátrica pode ser o primeiro passo para compreender melhor esse momento.
        </p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-primary/40 pb-1 font-semibold text-primary transition-colors hover:border-primary">
          Falar com a Dra. Vanessa →
        </a>
      </Reveal>
    </section>
  );
}

const AREAS = [
  { t: "Depressão", d: "Acompanhamento psiquiátrico diante de sintomas como tristeza persistente, perda de interesse, alterações de sono, energia ou concentração." },
  { t: "Transtornos de Ansiedade", d: "Avaliação e acompanhamento de quadros de ansiedade que podem interferir na rotina, no sono, nos relacionamentos e no bem-estar." },
  { t: "Luto", d: "Cuidado profissional diante de perdas e períodos de sofrimento emocional, respeitando a história e o tempo de cada pessoa." },
  { t: "Burnout e Esgotamento Emocional", d: "Avaliação de situações de sobrecarga e esgotamento, considerando também o contexto pessoal e profissional que pode estar relacionado ao sofrimento." },
];

export function TreatmentCards() {
  return (
    <section id="areas" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Áreas de cuidado" title="Cuidado psiquiátrico para diferentes momentos da vida"
            text="Cada pessoa chega ao consultório com uma história diferente. A avaliação considera os sintomas, o contexto e as particularidades de cada paciente para definir a melhor estratégia de cuidado." />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a, i) => (
            <Reveal key={a.t} className="group rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
              <span className="text-sm font-semibold text-secondary">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold leading-snug">{a.t}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{a.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
