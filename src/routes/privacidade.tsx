import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

const title = "Política de Privacidade | Dra. Vanessa Ballista";
const description = "Informações sobre navegação, links externos e contato na página da Dra. Vanessa Ballista.";
export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    { property: "og:url", content: "https://dravanessaballista.lovable.app/privacidade" },
  ], links: [{ rel: "canonical", href: "https://dravanessaballista.lovable.app/privacidade" }] }),
  component: Privacy,
});
function Privacy() {
  return <LegalPage title="Política de Privacidade">
    <section><h2>Sobre esta página</h2><p>Esta página apresenta informações sobre a atuação e o atendimento da Dra. Vanessa Ballista. Não possui formulário de cadastro, área de pacientes ou envio de prontuários.</p></section>
    <section><h2>Contato pelo WhatsApp</h2><p>Os botões de agendamento são links diretos para o WhatsApp. A mensagem sugerida pode ser alterada antes do envio. Clicar no link não envia automaticamente a mensagem nem confirma um agendamento.</p><p>Ao enviar uma mensagem, você compartilha com o destinatário os dados disponibilizados pelo WhatsApp e o conteúdo que decidir informar. Evite encaminhar documentos ou informações sensíveis de saúde em um primeiro contato, salvo orientação da equipe.</p></section>
    <section><h2>Serviços externos</h2><p>O site inclui links para WhatsApp, Instagram e Google Maps, além de um mapa incorporado do Google. Fontes tipográficas são carregadas pelo Google Fonts. Ao acessar esses serviços, informações técnicas, como endereço IP e dados do navegador, podem ser recebidas pelos respectivos provedores, conforme suas políticas.</p><p>As regras de privacidade e os eventuais cookies utilizados por esses serviços são definidos por eles. Esta página não representa suas políticas nem controla seu funcionamento.</p></section>
    <section><h2>Informações técnicas de navegação</h2><p>A infraestrutura que entrega o site pode processar informações técnicas necessárias ao funcionamento e à segurança da navegação. Esta página não recebe pagamentos nem solicita dados clínicos para sua consulta.</p></section>
    <section><h2>Cookies e consentimento</h2><p>Ao acessar o site, você pode aceitar ou recusar cookies de medição de visitas e de anúncios. Ferramentas desse tipo, como as do Google (Google Ads e Google Analytics), só são ativadas após sua aceitação, para medir acessos e o desempenho de campanhas. Sua escolha, a data e a versão deste aviso ficam registradas apenas no seu navegador.</p><p>Você pode mudar sua decisão a qualquer momento pelo link “Preferências de cookies”, no rodapé do site. A recusa não impede o uso da página nem o contato pelo WhatsApp.</p></section>
    <section><h2>Seus dados e suas dúvidas</h2><p>Para esclarecer o uso de dados compartilhados com a equipe ou solicitar informações sobre acesso, correção ou exclusão, entre em contato pelo canal de atendimento. Solicitações relacionadas a dados médicos devem considerar as obrigações legais de guarda e sigilo aplicáveis.</p></section>
  </LegalPage>;
}