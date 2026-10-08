import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

const title = "Termos de Uso | Dra. Vanessa Ballista";
const description = "Condições de uso das informações e dos canais de contato da Dra. Vanessa Ballista.";
export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    { property: "og:url", content: "https://dravanessaballista.lovable.app/termos" },
  ], links: [{ rel: "canonical", href: "https://dravanessaballista.lovable.app/termos" }] }),
  component: Terms,
});
function Terms() {
  return <LegalPage title="Termos de Uso">
    <section><h2>Finalidade informativa</h2><p>O conteúdo apresenta o atendimento da Dra. Vanessa Ballista, médica com especialização em Psiquiatria, CRM/SP 214.721. As informações não substituem uma avaliação médica individualizada nem constituem diagnóstico, prescrição ou promessa de resultado.</p></section>
    <section><h2>Agendamento e atendimento</h2><p>O contato pelo WhatsApp é uma solicitação de informações ou agendamento. A consulta depende de confirmação de disponibilidade e das condições informadas pela equipe. Os atendimentos são particulares; o pagamento pode ser realizado por Pix ou cartão de crédito, conforme as condições do agendamento.</p><p>O atendimento presencial ocorre em Presidente Prudente, SP. A possibilidade de atendimento online é avaliada conforme a adequação clínica e as normas aplicáveis à telemedicina. Eventual reembolso por convênio depende das regras do plano do paciente.</p></section>
    <section><h2>Abordagem CUIDAR e avaliações</h2><p>CUIDAR é a forma própria de conduzir o acompanhamento da Dra. Vanessa, não um protocolo científico validado. Os depoimentos apresentados descrevem experiências individuais de pacientes e não garantem que outras pessoas terão a mesma experiência ou evolução.</p></section>
    <section><h2>Links externos</h2><p>WhatsApp, Instagram e Google Maps são serviços de terceiros. Ao abrir seus links, aplicam-se as condições dos respectivos provedores. A disponibilidade desses serviços não é controlada por esta página.</p></section>
    <section><h2>Urgências</h2><p>O site e o canal de agendamento não substituem atendimento de urgência ou emergência. Em situações de risco imediato, procure um serviço de emergência.</p></section>
  </LegalPage>;
}