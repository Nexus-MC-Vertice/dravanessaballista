import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Identification, TreatmentCards } from "@/components/landing/Top";
import { MethodCuidar, IntegralView, AboutDoctor, OfficePhoto, CareJourney, PrivateCare } from "@/components/landing/Middle";
import { TestimonialsCarousel, Location, FAQ, FinalCta, Footer, FloatingWhatsApp } from "@/components/landing/Bottom";

const TITLE = "Psiquiatra em Presidente Prudente | Dra. Vanessa Ballista";
const DESC = "Dra. Vanessa Ballista, psiquiatra (CRM/SP 214.721). Atendimento psiquiátrico individualizado presencial em Presidente Prudente e online para jovens, adultos e idosos.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Vanessa Ballista",
  medicalSpecialty: "Psychiatric",
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
    ],
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
