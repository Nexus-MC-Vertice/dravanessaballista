import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Identification, TreatmentCards } from "@/components/landing/Top";
import { MethodCuidar, IntegralView, AboutDoctor, OfficePhoto, CareJourney, PrivateCare } from "@/components/landing/Middle";
import { TestimonialsCarousel, Location, FAQ, FinalCta, Footer, FloatingWhatsApp } from "@/components/landing/Bottom";
import { SITE } from "@/config/site";

const TITLE = "Psiquiatria em Presidente Prudente e online | Dra. Vanessa Ballista";
const DESC = "Dra. Vanessa Ballista, médica com pós-graduação em Psiquiatria, CRM/SP 214.721. Consultas particulares em Presidente Prudente, SP, e online, com cuidado individualizado.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Vanessa Ballista",
  description: `${SITE.qualification}. Atendimento particular em Psiquiatria, presencial em Presidente Prudente e online.`,
  url: "https://dravanessaballista.lovable.app/",
  telephone: `+${SITE.whatsappNumber}`,
  sameAs: [SITE.instagram],
  availableService: { "@type": "MedicalTherapy", name: "Avaliação e acompanhamento em Psiquiatria" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Sete de Setembro, 2038 - Vila do Estádio",
    addressLocality: "Presidente Prudente",
    addressRegion: "SP",
    postalCode: "19015-080",
    addressCountry: "BR",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dravanessaballista.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://dravanessaballista.lovable.app/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Identification />
        <TreatmentCards />
        <MethodCuidar />
        <IntegralView />
        <AboutDoctor />
        <OfficePhoto />
        <CareJourney />
        <PrivateCare />
        <TestimonialsCarousel />
        <Location />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
