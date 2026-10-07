// Informações editáveis da landing page.
export const SITE = {
  name: "Dra. Vanessa Ballista",
  specialty: "Psiquiatria",
  crm: "CRM/SP 214.721",
  // TODO: inserir número real no formato DDI+DDD+número, ex: "5518999999999"
  whatsappNumber: "",
  whatsappMessage: "Olá, Dra. Vanessa! Gostaria de informações sobre uma consulta de Psiquiatria.",
  instagram: "", // adicionar quando fornecido
  address: {
    street: "Rua Sete de Setembro, 2038",
    district: "Vila do Estádio",
    city: "Presidente Prudente – SP",
    zip: "19015-080",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Sete+de+Setembro+2038+Vila+do+Estadio+Presidente+Prudente+SP",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Sete+de+Setembro+2038,+Presidente+Prudente+-+SP&output=embed",
};

export const whatsappLink = () =>
  SITE.whatsappNumber
    ? `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`
    : "#contato";
