import { useState } from "react";
import { Menu, X, MapPin, Monitor, Plus } from "lucide-react";
import { SITE, whatsappLink } from "@/config/site";
import { CtaButton, Reveal, SectionHeading, WhatsAppIcon } from "./ui";
import doctorPhoto from "@/assets/dra-vanessa-real.webp";
import logoAsset from "@/assets/logo-vanessa-ballista-transparente.webp";
import { Button } from "@/components/ui/button";


export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Tratamentos" },
  { href: "#metodo", label: "Método CUIDAR" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Logo({ placement = "navbar" }: { placement?: "navbar" | "footer" }) {
  return (
    <a href="#inicio" aria-label="Dra. Vanessa Ballista — início" className="inline-flex shrink-0 items-center">
      <img src={logoAsset} alt="Dra. Vanessa Ballista — Saúde Mental / Psiquiatria" width={1469} height={784}
        className={placement === "footer" ? "h-32 w-auto max-w-full object-contain" : "h-[64px] w-auto object-contain sm:h-[74px]"} />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {NAV.slice(1, 6).map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CtaButton className="hidden min-h-[44px] px-5 text-sm sm:inline-flex">Agendar consulta</CtaButton>
          <Button variant="ghost" size="icon" className="size-11 rounded-full text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
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
          <p className="eyebrow mb-5">Psiquiatria · Presidente Prudente, Santo Anastácio e online</p>
          <p className="mb-4 text-lg font-semibold text-primary">{SITE.name}</p>
          <h1 className="text-[1.85rem] font-semibold leading-[1.16] sm:text-[2.35rem] lg:text-[2.8rem]">
            Quando cuidar de você passa a ser uma necessidade, não adie esse cuidado.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Atendimento psiquiátrico particular em Presidente Prudente, Santo Anastácio e online, com escuta individualizada, visão integrativa do cuidado e acompanhamento próximo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton><WhatsAppIcon className="size-5" /> Agendar uma consulta</CtaButton>
            <CtaButton variant="ghost" href="#sobre">Conhecer a Dra. Vanessa</CtaButton>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-secondary">
            <li className="flex items-center gap-1.5"><MapPin className="size-4" /> Presencial em Presidente Prudente e Santo Anastácio</li>
            <li className="flex items-center gap-1.5"><Monitor className="size-4" /> Atendimento online</li>
            <li>Consultas particulares</li>
          </ul>
          <p className="mt-8 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
            {SITE.qualification} | {SITE.crm}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none" style={{ animationDelay: ".15s" }}>
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-secondary/30" aria-hidden />
          <img src={doctorPhoto} alt="Dra. Vanessa Ballista" width={1280} height={1920} fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-soft" />
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
          Nem sempre é fácil perceber quando mudanças no humor, no sono, na energia ou na forma de viver começam a ultrapassar aquilo que você consegue administrar sozinho.
        </p>
        <ul className="mt-8 grid gap-x-8 gap-y-3 text-left text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
          {["Ansiedade persistente", "Alterações importantes do sono", "Tristeza ou desânimo prolongados", "Mudanças persistentes de humor", "Cansaço ou falta de energia", "Dificuldade de concentração", "Esgotamento emocional", "Mudanças que interferem na rotina, nos relacionamentos ou na qualidade de vida"].map((s) => <li key={s} className="border-l-2 border-secondary/40 pl-4">{s}</li>)}
        </ul>
        <p className="mt-6 text-base font-medium leading-relaxed text-primary sm:text-lg">
          Uma avaliação pode ajudar a compreender melhor o que está acontecendo e definir os próximos passos do cuidado.
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
  { t: "TDAH", d: "Avaliação de dificuldades persistentes de atenção, organização, inquietação ou impulsividade, em adolescentes e adultos, considerando a história de vida e o impacto na rotina." },
  { t: "Transtorno Bipolar", d: "Acompanhamento de oscilações importantes de humor, energia e comportamento, com atenção contínua e plano de cuidado individualizado." },
  { t: "TOC (Transtorno Obsessivo-Compulsivo)", d: "Avaliação de pensamentos intrusivos e comportamentos repetitivos que geram sofrimento ou ocupam tempo significativo do dia a dia." },
  { t: "Transtorno do Pânico", d: "Tratamento diante de crises súbitas de medo intenso, com sintomas físicos marcantes, e da preocupação constante com novas crises." },
  { t: "Transtorno do Espectro Autista (TEA)", d: "Avaliação e acompanhamento de características do espectro autista, respeitando a singularidade de cada pessoa e suas necessidades." },
  { t: "Demências e Alterações Cognitivas", d: "Avaliação de mudanças na memória, no raciocínio ou no comportamento, com orientação ao paciente e à família ao longo do tratamento." },
  { t: "Esquizofrenia e Outros Transtornos Psicóticos", d: "Acompanhamento psiquiátrico cuidadoso de alterações na percepção, no pensamento e no comportamento, com proximidade e continuidade." },
  { t: "Transtorno de Estresse Pós-Traumático", d: "Tratamento diante de lembranças intrusivas, evitação, alerta constante ou sofrimento persistente após experiências traumáticas." },
];

export function TreatmentCards() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="areas" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading eyebrow="Áreas de tratamento" title="Algumas situações em que uma avaliação psiquiátrica pode ajudar"
            text="Cada pessoa chega ao consultório com uma história diferente. A avaliação considera os sintomas, o contexto e as particularidades de cada paciente para definir a melhor estratégia de cuidado." />
        </Reveal>
        <div className="mt-12 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => {
            const open = openIdx === i;
            return (
              <div key={a.t} className={`rounded-3xl border bg-card transition-all duration-300 ${open ? "border-secondary/50 shadow-soft" : "border-border hover:border-secondary/40"}`}>
                <button type="button" onClick={() => setOpenIdx(open ? null : i)} aria-expanded={open} aria-controls={`area-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <h3 className="text-base font-semibold leading-snug sm:text-lg">{a.t}</h3>
                  <span className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-secondary/40 text-secondary transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden>
                    <Plus className="size-4" />
                  </span>
                </button>
                <div id={`area-${i}`} className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">{a.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
