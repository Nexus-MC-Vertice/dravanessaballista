import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Identification, TreatmentCards } from "@/components/landing/Top";
import { MethodCuidar, IntegralView, AboutDoctor, OfficePhoto, CareJourney, PrivateCare } from "@/components/landing/Middle";
import { TestimonialsCarousel, Location, FAQ, FinalCta, Footer, FloatingWhatsApp } from "@/components/landing/Bottom";
import { SITE } from "@/config/site";

const TITLE = "Psiquiatria em Presidente Prudente e online | Dra. Vanessa Ballista";
const DESC = "Dra. Vanessa Ballista, médica com especialização em Psiquiatria, CRM/SP 214.721. Consultas particulares em Presidente Prudente, Santo Anastácio e online, com cuidado individualizado.";

const URL_BASE = "https://dravanessaballista.com.br";
const OG_IMAGE = `${URL_BASE}/og-image.jpg`;
const postal = (a: typeof SITE.address, locality: string) => ({
  "@type": "PostalAddress",
  streetAddress: `${a.street} - ${a.district}`,
  addressLocality: locality,
  addressRegion: "SP",
  postalCode: a.zip,
  addressCountry: "BR",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${URL_BASE}/#website`,
      url: `${URL_BASE}/`,
      name: SITE.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${URL_BASE}/#physician` },
    },
    {
      "@type": "WebPage",
      "@id": `${URL_BASE}/#webpage`,
      url: `${URL_BASE}/`,
      name: TITLE,
      description: DESC,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${URL_BASE}/#website` },
      about: { "@id": `${URL_BASE}/#physician` },
    },
    {
      "@type": "Physician",
      "@id": `${URL_BASE}/#physician`,
      name: SITE.name,
      description: `${SITE.qualification}, ${SITE.crm}. Atendimento particular em Psiquiatria, presencial em Presidente Prudente e Santo Anastácio, além de online.`,
      url: `${URL_BASE}/`,
      image: OG_IMAGE,
      logo: OG_IMAGE,
      telephone: `+${SITE.whatsappNumber}`,
      medicalSpecialty: "Psychiatric",
      paymentAccepted: SITE.paymentMethods.join(", "),
      areaServed: ["Presidente Prudente, SP", "Santo Anastácio, SP", "Brasil (online)"],
      sameAs: [SITE.instagram],
      address: [postal(SITE.address, "Presidente Prudente"), postal(SITE.address2, "Santo Anastácio")],
      availableService: { "@type": "MedicalTherapy", name: "Avaliação e acompanhamento em Psiquiatria" },
    },
  ],
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
      { property: "og:url", content: `${URL_BASE}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logo Dra. Vanessa Ballista — Psiquiatria" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${URL_BASE}/` }],
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
