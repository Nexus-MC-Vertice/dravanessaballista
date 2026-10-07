import { Clock, Ear, MessageCircle, UserRound } from "lucide-react";
import { SITE } from "@/config/site";
import { CtaButton, Reveal, SectionHeading } from "./ui";
import doctorPhoto from "@/assets/dra-vanessa.jpg";
import officePhoto from "@/assets/consultorio.jpg";

const PILLARS = [
  ["C", "Compreender", "Antes de pensar em condutas, compreender a história, o momento atual, os sintomas e o contexto de vida."],
  ["U", "Unificar", "Olhar para saúde mental e saúde física de maneira integrada, considerando, quando clinicamente pertinente, sono, hábitos, condições metabólicas, exames laboratoriais e aspectos hormonais."],
  ["I", "Individualizar", "Nenhuma pessoa é igual à outra. A estratégia de cuidado é construída considerando necessidades, características e realidade individual."],
  ["D", "Decidir junto", "O paciente participa das decisões. As possibilidades de tratamento são discutidas com clareza, respeitando suas necessidades e preferências."],
  ["A", "Acompanhar", "O cuidado continua entre as consultas. A Dra. Vanessa oferece acompanhamento por mensagem para dúvidas que possam surgir durante o tratamento, dentro dos limites definidos para cada paciente."],
  ["R", "Reavaliar", "A evolução é acompanhada ao longo do tempo e a estratégia pode ser revista sempre que necessário."],
];

export function MethodCuidar() {
  return (
    <section id="metodo" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 !text-primary-foreground/70">Método CUIDAR</p>
          <h2 className="text-[1.75rem] font-semibold leading-tight !text-primary-foreground sm:text-4xl">Um jeito diferente de cuidar da saúde mental</h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            O Método CUIDAR traduz a forma como a Dra. Vanessa conduz o acompanhamento: com proximidade, individualização e participação ativa do paciente nas decisões.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(([l, t, d]) => (
            <Reveal key={l} className="bg-primary p-7 sm:p-9">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-primary-foreground/25">{l}</span>
                <h3 className="text-lg font-semibold !text-primary-foreground">{t}</h3>
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-primary-foreground/75">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/15 pt-10 md:flex-row md:items-center">
          <p className="text-xl font-medium italic text-primary-foreground sm:text-2xl">“Melhores escolhas constroem melhores resultados.”</p>
          <CtaButton variant="light">Quero conhecer esse jeito de cuidar</CtaButton>
        </Reveal>
        <p className="mt-8 text-xs text-primary-foreground/55">O Método CUIDAR representa a abordagem própria de cuidado da Dra. Vanessa e não constitui protocolo científico.</p>
      </div>
    </section>
  );
}

const ASPECTS = ["Sono", "Estresse", "Metabolismo", "Hormônios", "Hábitos", "Rotina", "Saúde física", "Saúde emocional"];

export function IntegralView() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="Visão integral" title="Olhar para a pessoa, não apenas para o sintoma."
            text="A saúde mental está inserida em uma vida real — com sono, rotina, trabalho, relacionamentos, hábitos e condições físicas. Por isso, quando fizer sentido clinicamente, esses aspectos também podem fazer parte da avaliação." />
        </Reveal>
        <Reveal className="flex flex-wrap gap-3">
          {ASPECTS.map((a) => (
            <span key={a} className="rounded-full border border-secondary/30 bg-sand-soft px-5 py-3 text-sm font-medium text-primary">{a}</span>
          ))}
          <p className="mt-3 w-full text-sm text-muted-foreground">Avaliados quando clinicamente pertinente, de forma individualizada.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutDoctor() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <img src={doctorPhoto} alt="Dra. Vanessa Ballista em seu consultório" width={896} height={1152} loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
        </Reveal>
        <Reveal>
          <p className="eyebrow mb-4">Sobre</p>
          <h2 className="text-[1.75rem] font-semibold leading-tight sm:text-4xl">Conheça a Dra. Vanessa Ballista</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>Sou Dra. Vanessa Ballista, médica com especialização em Psiquiatria.</p>
            <p>Realizo atendimento em saúde mental com foco em escuta qualificada, cuidado individualizado e acompanhamento próximo.</p>
            <p>Atendo jovens, adultos e idosos em consultas presenciais em Presidente Prudente e também de forma online.</p>
            <p>Acredito que melhores escolhas constroem melhores resultados. Por isso, o tratamento é construído de forma compartilhada, respeitando a história de vida, o estilo de viver e as individualidades de cada pessoa.</p>
            <p>Meu propósito é oferecer um espaço em que o paciente possa ser ouvido com atenção, compreendido em sua individualidade e acompanhado ao longo do processo de cuidado.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Escuta qualificada", "Cuidado individualizado", "Acompanhamento próximo", "Visão integral"].map((h) => (
              <div key={h} className="rounded-2xl bg-background px-4 py-4 text-sm font-semibold text-primary">{h}</div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold tracking-wide text-secondary">{SITE.crm}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function OfficePhoto() {
  return (
    <section className="py-16 sm:py-24" aria-label="Consultório">
      <Reveal className="mx-auto max-w-7xl px-3 sm:px-5">
        <img src={officePhoto} alt="Consultório da Dra. Vanessa Ballista em Presidente Prudente" width={1920} height={896} loading="lazy"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover sm:aspect-[21/9]" />
        <p className="mx-auto mt-6 max-w-xl px-4 text-center text-base italic text-muted-foreground">
          “Um espaço pensado para proporcionar privacidade, tranquilidade e acolhimento.”
        </p>
      </Reveal>
    </section>
  );
}

const STEPS = [
  ["01", "Entender", "A consulta começa pela escuta: história, sintomas, contexto e momento de vida."],
  ["02", "Construir", "A partir da avaliação, Dra. Vanessa e paciente definem juntos a estratégia de cuidado mais adequada."],
  ["03", "Acompanhar", "O tratamento é acompanhado ao longo do tempo, com espaço para reavaliar e ajustar a conduta quando necessário."],
];

export function CareJourney() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><SectionHeading eyebrow="Experiência do atendimento" title="Um cuidado que começa na primeira conversa" /></Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map(([n, t, d]) => (
            <Reveal key={n} className="border-t-2 border-primary pt-6">
              <span className="text-sm font-semibold text-secondary">{n}</span>
              <h3 className="mt-2 text-xl font-semibold">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12"><CtaButton>Agendar uma consulta</CtaButton></div>
      </div>
    </section>
  );
}

const VALUES = [
  [Clock, "Mais tempo para conversar", "Uma consulta com espaço adequado para uma avaliação cuidadosa."],
  [Ear, "Mais espaço para compreender", "A história e o contexto do paciente fazem parte da avaliação."],
  [MessageCircle, "Mais proximidade no acompanhamento", "O cuidado não termina necessariamente quando a consulta termina. A Dra. Vanessa oferece acompanhamento por mensagem para dúvidas relacionadas ao tratamento, dentro dos limites estabelecidos para cada paciente."],
  [UserRound, "Uma relação de cuidado mais individualizada", "Cada paciente possui uma história e necessidades próprias."],
] as const;

export function PrivateCare() {
  return (
    <section className="bg-sand-soft py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Atendimento particular</p>
          <h2 className="text-[1.75rem] font-semibold leading-tight sm:text-4xl">Um atendimento pensado para ter tempo, escuta e acompanhamento.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            O atendimento da Dra. Vanessa é exclusivamente particular porque seu modelo de consulta foi estruturado para oferecer uma experiência de cuidado individualizada, com tempo adequado para ouvir a história do paciente e acompanhá-lo de perto.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Na Psiquiatria, compreender o que está por trás de uma queixa exige mais do que identificar sintomas. É preciso conhecer a pessoa, seu momento de vida e a forma como aquilo está impactando sua rotina.
          </p>
          <p className="mt-8 text-lg font-semibold text-primary">O objetivo não é apenas realizar uma consulta. É construir uma relação de cuidado.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map(([Icon, t, d]) => (
            <Reveal key={t} className="rounded-3xl bg-card p-6">
              <Icon className="size-6 text-secondary" strokeWidth={1.6} />
              <h3 className="mt-4 font-semibold leading-snug">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
