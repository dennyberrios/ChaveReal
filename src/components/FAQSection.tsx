const FAQSection = () => {
    return (
      <section id="faq" className="section mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="border border-[#F6AE2D] rounded-lg bg-white shadow-md transition-all duration-300"
              >
                <summary className="p-4 cursor-pointer font-semibold text-[#0D2538] bg-[#FFF8E1] hover:bg-[#F6AE2D] hover:text-white rounded-lg transition-all duration-300">
                  {item.pergunta}
                </summary>
                <p className="mt-2 p-4 text-gray-700">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const faqItems = [
    {
      pergunta: "Como faço para contratar um serviço?",
      resposta: "Você pode agendar seu serviço diretamente pelo nosso site ou entrando em contato pelo telefone.",
    },
    {
      pergunta: "Quais são as formas de pagamento aceitas?",
      resposta: "Aceitamos cartões de crédito, débito, Pix e pagamento em dinheiro.",
    },
    {
      pergunta: "O atendimento é 24 horas?",
      resposta: "Sim, oferecemos atendimento 24h para serviços emergenciais.",
    },
    {
      pergunta: "Qual é o prazo para realização do serviço?",
      resposta: "O prazo depende do tipo de serviço, mas a maioria é concluída no mesmo dia.",
    },
  ];
  
  export default FAQSection;
  