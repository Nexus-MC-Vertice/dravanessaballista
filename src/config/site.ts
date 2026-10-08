// Informações editáveis da landing page.
export const SITE = {
  name: "Dra. Vanessa Ballista",
  specialty: "Psiquiatria",
  qualification: "Médica com pós-graduação em Psiquiatria",
  paymentMethods: ["Pix", "Cartão de crédito"],
  consultationType: "Particular",
  crm: "CRM/SP 214.721",
  whatsappNumber: "5518996452218",
  whatsappMessage: "Olá! Vim através do site e gostaria de saber mais sobre o acompanhamento com a Dra. Vanessa.",
  instagram: "https://www.instagram.com/dravanessaballista/",
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

export const whatsappLink = (number: string = SITE.whatsappNumber) =>
  number
    ? `https://wa.me/${number}?text=${encodeURIComponent(SITE.whatsappMessage).replace(/!/g, "%21")}`
    : "#contato";
