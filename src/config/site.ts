// Dados da oficina — edite aqui. Campos vazios ("") ficam ocultos ou mostram "A definir".
export const site = {
  nome: "Auto Center",
  slogan: "Cuidado completo para o seu veículo",
  // Somente números, com DDI e DDD. Ex.: "5511999999999"
  whatsapp: "",
  // Exibição do telefone. Ex.: "(11) 99999-9999"
  telefone: "",
  email: "",
  endereco: "",
  // Link do Google Maps (opcional)
  mapsUrl: "",
  horarios: [] as { dias: string; horas: string }[],
  // Ex.: [{ dias: "Segunda a Sexta", horas: "08h às 18h" }]
  instagram: "",
};

export const whatsappLink = (msg = "Olá! Gostaria de solicitar um orçamento.") =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}` : "#contato";
