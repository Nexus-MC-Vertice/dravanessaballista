import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Monitor, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE, whatsappLink } from "@/config/site";
import { CtaButton, Reveal, SectionHeading, WhatsAppIcon } from "./ui";
import { Logo, NAV } from "./Top";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  ["Laira Silva Gomes", "Não tenho palavras para descrever a Dra Vanessa foi incrível, médica super humana, profissional excelente, sabe muito bem conduzir a consulta e sempre me sinto muito acolhida"],
  ["Anelize Fernanda", "As consultas sempre são uma troca muito boa.\nMe fez virar várias chaves dentro de mim, e nunca parece uma consulta e sim uma conversa com uma amiga."],
  ["Vanessa Furlanetto Gomes", "Dra. Vanessa é extremamente cuidadosa, carinhosa, tem uma escuta excelente! O ambiente de atendimento é extremamente agradável."],
  ["Eunice Lopes Rodrigueso", "A Dra Vanessa é maravilhosa, muito competente, carismática, e muito humana, eu e minha família somos muito gratos a ela!"],
  ["Natali Zem", "Profissional excelente, atendimento humanizado, preocupação genuína com o paciente. Estou me sentindo verdadeiramente acolhida."],
  ["Rose Fachiano", "A médica compreendeu não apenas os sintomas, mas também o impacto deles na minha vida, conduzindo a consulta com sensibilidade, profissionalismo e responsabilidade.\nSou muito grata pelo cuidado recebido e recomendo o atendimento a quem busca um psiquiatra humano e comprometido."],
  ["Mailza Silva", "Foi muito bom ser apresentada a Dra.vanessa , fui muito bem atendida, e aumentou ainda mais as minhas expectativas de melhoras com relação a minha saúde. Só tenho a agradecer. Muito obrigada Dra.Vanessa."],
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-label="Google">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

export function TestimonialsCarousel() {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const max = TESTIMONIALS.length - perView;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const mq2 = window.matchMedia("(min-width: 640px)");
    const upd = () => setPerView(mq.matches ? 3 : mq2.matches ? 2 : 1);
    upd();
    mq.addEventListener("change", upd); mq2.addEventListener("change", upd);
    return () => { mq.removeEventListener("change", upd); mq2.removeEventListener("change", upd); };
  }, []);
  useEffect(() => { setIndex((i) => Math.min(i, max)); }, [max]);

  const go = useCallback((d: number) => setIndex((i) => (i + d > max ? 0 : i + d < 0 ? max : i + d)), [max]);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <section id="depoimentos" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal><SectionHeading eyebrow="Depoimentos" title="O que os pacientes dizem" text="Relatos sobre acolhimento, escuta e experiência de cuidado." /></Reveal>
          <div className="flex gap-2">
            {[[-1, ChevronLeft, "Anterior"], [1, ChevronRight, "Próximo"]].map(([d, Icon, l]) => {
              const I = Icon as typeof ChevronLeft;
              return (
                <button key={l as string} onClick={() => { setPaused(true); go(d as number); }} aria-label={`Depoimento ${l}`}
                  className="flex size-12 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  <I className="size-5" />
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => { setPaused(true); touchX.current = e.touches[0]?.clientX ?? null; }}
          onTouchEnd={(e) => {
            const touch = e.changedTouches[0];
            if (touchX.current === null || !touch) return;
            const dx = touch.clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}>
          <div className="flex transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)]" style={{ transform: `translateX(-${(index * 100) / perView}%)` }}>
            {TESTIMONIALS.map(([name, text]) => (
              <div key={name} className="shrink-0 px-2.5" style={{ width: `${100 / perView}%` }}>
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-chart-4" aria-label="5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current text-secondary" />)}
                    </div>
                    <GoogleG />
                  </div>
                  <blockquote className="mt-5 flex-1 whitespace-pre-line leading-relaxed text-muted-foreground">“{text}”</blockquote>
                  <figcaption className="mt-6 font-semibold text-primary">{name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => { setPaused(true); setIndex(i); }} aria-label={`Ir para depoimento ${i + 1}`}
              className={cn("h-2 rounded-full transition-all duration-500", i === index ? "w-8 bg-primary" : "w-2 bg-primary/20")} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const a = SITE.address;
  return (
    <section id="contato" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHeading eyebrow="Localização" title="Onde você será atendido" /></Reveal>
        {!SITE.whatsappNumber && <p className="mt-5 text-sm text-muted-foreground" role="status">Agendamento pelo WhatsApp disponível em breve.</p>}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="overflow-hidden rounded-3xl bg-card">
            <iframe title="Mapa do consultório" src={SITE.mapsEmbed} loading="lazy" className="h-64 w-full border-0 sm:h-80" referrerPolicy="no-referrer-when-downgrade" />
            <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between">
              <address className="flex gap-3 not-italic leading-relaxed text-primary">
                <MapPin className="mt-1 size-5 shrink-0 text-secondary" />
                <span><strong className="font-semibold">{a.street}</strong><br />{a.district}<br />{a.city}<br />{a.zip}</span>
              </address>
              <CtaButton variant="ghost" href={SITE.mapsUrl}>Ver no Google Maps</CtaButton>
            </div>
          </Reveal>
          <Reveal className="flex flex-col rounded-3xl bg-primary p-8 text-primary-foreground">
            <Monitor className="size-7 text-primary-foreground/70" strokeWidth={1.6} />
            <h3 className="mt-6 text-2xl font-semibold !text-primary-foreground">Atendimento online</h3>
            <p className="mt-4 flex-1 leading-relaxed text-primary-foreground/80">
              Consultas por videochamada para pacientes elegíveis, com a mesma escuta e cuidado do atendimento presencial, observando as normas aplicáveis à telemedicina.
            </p>
            <CtaButton variant="light" className="mt-8">Consultar disponibilidade</CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["Por que o atendimento da Dra. Vanessa é particular?", "O modelo de atendimento foi estruturado para proporcionar uma consulta com tempo adequado para escuta, avaliação e compreensão do contexto individual do paciente. A proposta é oferecer um cuidado mais próximo e personalizado, desde a primeira consulta até o acompanhamento ao longo do tratamento."],
  ["A Dra. Vanessa atende algum convênio?", "Não. Atualmente, os atendimentos são realizados exclusivamente de forma particular. Essa escolha está relacionada ao modelo de cuidado oferecido, que prioriza tempo adequado de consulta, escuta individualizada e acompanhamento próximo."],
  ["O atendimento particular significa que a consulta é apenas para quem precisa de medicação?", "Não. A consulta começa pela avaliação médica. A necessidade ou não de medicamentos depende do quadro, da avaliação clínica e das particularidades de cada paciente. A conduta é individualizada e pode envolver diferentes estratégias de cuidado."],
  ["Como é a primeira consulta?", "A primeira consulta é um momento de escuta e avaliação. Dra. Vanessa busca compreender não apenas os sintomas, mas também a história, o contexto de vida, a rotina e os impactos que aquele momento está produzindo. A partir disso, são discutidas as possibilidades de cuidado."],
  ["O paciente participa das decisões sobre o tratamento?", "Sim. A proposta da Dra. Vanessa é construir o tratamento de forma compartilhada. As possibilidades são explicadas e discutidas para que o paciente compreenda o caminho proposto e participe das decisões relacionadas ao próprio cuidado."],
  ["A Dra. Vanessa acompanha o paciente entre as consultas?", "Sim. O acompanhamento pode incluir contato por mensagem para dúvidas relacionadas ao tratamento, proporcionando mais proximidade e segurança durante o processo. Esse acompanhamento respeita os limites e orientações definidos para cada paciente."],
  ["A Dra. Vanessa avalia aspectos físicos além da saúde mental?", "Quando clinicamente pertinente, sim. A avaliação pode considerar aspectos relacionados ao sono, hábitos, condições metabólicas, alterações hormonais e outros fatores de saúde que possam ser relevantes para compreender o quadro individual. Isso não significa que exames sejam necessários para todos os pacientes."],
  ["A Dra. Vanessa atende online?", "Sim. Há possibilidade de atendimento online para pacientes elegíveis, observando as normas aplicáveis à telemedicina e a adequação dessa modalidade para cada caso."],
  ["Quais pacientes podem ser atendidos?", "A Dra. Vanessa acompanha jovens, adultos e idosos. A indicação e a modalidade de acompanhamento são avaliadas individualmente."],
  ["Quais são as principais áreas de atendimento?", "Entre as demandas acompanhadas estão depressão, transtornos de ansiedade, luto, burnout e esgotamento emocional, além de outras condições relacionadas à saúde mental que podem ser avaliadas durante a consulta."],
  ["Onde fica o consultório?", "Rua Sete de Setembro, 2038, Vila do Estádio, Presidente Prudente – SP, CEP 19015-080."],
  ["Como faço para agendar?", "Clique em qualquer botão de WhatsApp disponível na página e envie uma mensagem. A equipe poderá informar disponibilidade, valores e orientações para o agendamento."],
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal><SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas antes do primeiro contato" /></Reveal>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map(([q, a], i) => (
            <AccordionItem key={q} value={`f${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-3 pb-20 sm:px-5 sm:pb-28">
      <Reveal className="mx-auto max-w-6xl rounded-[2.5rem] bg-primary px-6 py-20 text-center text-primary-foreground sm:px-12 sm:py-24">
        <h2 className="mx-auto max-w-2xl text-[1.85rem] font-semibold leading-tight !text-primary-foreground sm:text-[2.6rem]">Talvez o primeiro passo seja simplesmente conversar.</h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-primary-foreground/80 sm:text-lg">
          Se você sente que algo mudou e gostaria de compreender melhor o que está acontecendo, uma avaliação profissional pode ajudar a organizar esse momento e definir os próximos passos.
        </p>
        <CtaButton variant="light" className="mt-9"><WhatsAppIcon className="size-5" /> Agendar uma consulta</CtaButton>
        <p className="mt-6 text-sm text-primary-foreground/70">Presencial em Presidente Prudente | Atendimento online</p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const a = SITE.address;
  return (
    <footer className="border-t border-border bg-sand-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{SITE.crm}</p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">{a.street}<br />{a.district}, {a.city}<br />CEP {a.zip}</address>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map((n) => <a key={n.href} href={n.href} className="text-muted-foreground hover:text-primary">{n.label}</a>)}
        </nav>
        <div className="flex flex-col items-start gap-3 text-sm">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-primary"><WhatsAppIcon className="size-5" /> WhatsApp</a>
          {SITE.instagram && <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary">Instagram</a>}
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs leading-relaxed text-muted-foreground">
        As informações apresentadas nesta página têm caráter informativo e não substituem uma avaliação médica individualizada.
        <br />© {new Date().getFullYear()} {SITE.name} · {SITE.specialty}
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"
      className="animate-wa fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition-transform duration-300 hover:scale-105 sm:size-16">
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
