import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Seção Hero com Banner */}
      <section id="hero" className="section mb-12">
        {/* Banner (imagem de destaque) */}
        <div className="banner overflow-hidden flex items-end">
          {/* Conteúdo do Hero */}
          <div className="hero-content container mx-8 rounded-md w-auto px-4 py-8 bg-[#0d25388f] mb-10">
            <h1 className="text-4xl font-bold mb-4 text-yellow-300">
              Proteja o que realmente importa
            </h1>
            <p className="text-lg mb-6 text-white">
              Na ChaveReal, unimos tecnologia e segurança para oferecer as melhores
              soluções em chaves, fechaduras e controle de acessos.
            </p>
            <Link
              href="/products"
              className="btn bg-[#F6AE2D] text-[#0D2538] py-[0.7rem] px-[1.2rem] no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white"
            >
              Conheça nossos produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Promoções */}
      <section id="promocoes" className="section mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
            Promoções Imperdíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Promoção 1 */}
            <div className="promo-card bg-[#FFF8E1] shadow-xl rounded-lg p-6 border border-[#F6AE2D] relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 right-0 bg-[#F6AE2D] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                Oferta Limitada
              </div>
              <Image
                src="/images/services/opening.jpg"
                alt="Promoção Abertura Domiciliar"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-bold mt-3 text-[#0D2538]">Abertura Domiciliar + Confecção + Cópia</h3>
              <p className="text-gray-700 text-sm">Promoção especial para novos clientes.</p>
              <div className="flex items-center mt-3">
                <span className="text-gray-500 line-through text-lg">R$100,00</span>
                <span className="text-[#F6AE2D] font-bold text-2xl ml-3">R$80,00</span>
              </div>
              <Link
                href="/promocoes"
                className="block mt-4 bg-[#F6AE2D] text-[#0D2538] py-2 px-4 text-center no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white shadow-md"
              >
                Aproveitar Oferta
              </Link>
            </div>

            {/* Promoção 2 */}
            <div className="promo-card bg-[#FFF8E1] shadow-xl rounded-lg p-6 border border-[#F6AE2D] relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/services/opening.jpg"
                alt="Promoção Cópia de Chaves Automotivas"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-bold mt-3 text-[#0D2538]">Cópia de Chaves Automotivas</h3>
              <p className="text-gray-700 text-sm">Descontos especiais para chaves codificadas.</p>
              <div className="flex items-center mt-3">
                <span className="text-gray-500 line-through text-lg">R$200,00</span>
                <span className="text-[#F6AE2D] font-bold text-2xl ml-3">R$150,00</span>
              </div>
              <Link
                href="/promocoes"
                className="block mt-4 bg-[#F6AE2D] text-[#0D2538] py-2 px-4 text-center no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white shadow-md"
              >
                Aproveitar Oferta
              </Link>
            </div>

            {/* Promoção 3 */}
            <div className="promo-card bg-[#FFF8E1] shadow-xl rounded-lg p-6 border border-[#F6AE2D] relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/services/opening.jpg"
                alt="Promoção Instalação de Fechadura Digital"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-bold mt-3 text-[#0D2538]">Instalação de Fechadura Digital</h3>
              <p className="text-gray-700 text-sm">Ganhe 10% de desconto na primeira instalação.</p>
              <div className="flex items-center mt-3">
                <span className="text-gray-500 line-through text-lg">R$300,00</span>
                <span className="text-[#F6AE2D] font-bold text-2xl ml-3">R$270,00</span>
              </div>
              <Link
                href="/promocoes"
                className="block mt-4 bg-[#F6AE2D] text-[#0D2538] py-2 px-4 text-center no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white shadow-md"
              >
                Aproveitar Oferta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="section mb-12">
        <div className="container mx-auto px-4">
          {/* Título e Subtítulo alinhados à esquerda */}
          <div className="mb-10">
            <h2 className="text-2xl text-[#F6AE2D] font-bold border-b-2 border-[#F6AE2D] inline-block pb-[0.2rem]">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mt-2">
              Oferecemos uma ampla gama de serviços para garantir sua segurança e tranquilidade.
              Contamos com tecnologia de ponta e uma equipe altamente qualificada para atender suas necessidades com eficiência e agilidade.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Serviço 1 */}
            <Link href="/services/chaves-codificadas" passHref>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 bg-[#F6AE2D] text-white rounded-full mb-4">
                  🔑 {/* Ícone de chave */}
                </div>
                <h3 className="text-xl font-semibold text-[#0D2538] mb-2">Chaves Codificadas</h3>
                <p className="text-gray-600 text-sm">
                  Confecção e programação de chaves codificadas para veículos e sistemas de segurança modernos.
                </p>
              </div>
            </Link>

            {/* Serviço 2 */}
            <Link href="/services/abertura-de-portas" passHref>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 bg-[#F6AE2D] text-white rounded-full mb-4">
                  🔓 {/* Ícone de cadeado aberto */}
                </div>
                <h3 className="text-xl font-semibold text-[#0D2538] mb-2">Abertura de Portas</h3>
                <p className="text-gray-600 text-sm">
                  Atendimento rápido para abertura de portas residenciais, comerciais e cofres, 24 horas por dia.
                </p>
              </div>
            </Link>

            {/* Serviço 3 */}
            <Link href="/services/fechaduras-eletronicas" passHref>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 bg-[#F6AE2D] text-white rounded-full mb-4">
                  🏠 {/* Ícone de casa com cadeado */}
                </div>
                <h3 className="text-xl font-semibold text-[#0D2538] mb-2">Fechaduras Eletrônicas</h3>
                <p className="text-gray-600 text-sm">
                  Instalação de fechaduras digitais e biométricas para maior praticidade e segurança.
                </p>
              </div>
            </Link>

            {/* Serviço 4 */}
            <Link href="/services/controle-de-acesso" passHref>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 bg-[#F6AE2D] text-white rounded-full mb-4">
                  📡 {/* Ícone de sinal de Wi-Fi */}
                </div>
                <h3 className="text-xl font-semibold text-[#0D2538] mb-2">Controle de Acesso</h3>
                <p className="text-gray-600 text-sm">
                  Implementação de sistemas inteligentes para monitoramento e controle de entrada e saída.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Diferenciais */}
      <section id="diferenciais" className="section mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
            Por que escolher a ChaveReal?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="diferencial bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#F6AE2D] p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3.5l2.5 2.5a.5.5 0 0 1-.7.7L8 8.707V4.5A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-4">Atendimento 24h</h3>
              </div>
              <p className="text-gray-600">
                Estamos disponíveis para atender emergências a qualquer momento.
              </p>
            </div>

            <div className="diferencial bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#F6AE2D] p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11.838 10.467a1.5 1.5 0 0 0 .06 1.84l1.049 1.05a1.5 1.5 0 0 0 1.97.03c.669-.669.823-1.695.46-2.574a13.97 13.97 0 0 0-3.5-5.775C8.296 4.146 6.175 2.02 4.103 1.201a1.5 1.5 0 0 0-2.14 1.853c.831 1.536 1.781 2.67 2.788 3.845a10.977 10.977 0 0 0 4.45 3.096c.834.444 1.802.173 2.356-.665a1.5 1.5 0 0 0-.46-2.574z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-4">Tecnologia de Ponta</h3>
              </div>
              <p className="text-gray-600">
                Trabalhamos com os melhores equipamentos do mercado.
              </p>
            </div>

            <div className="diferencial bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-[#F6AE2D] p-3 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                    <path d="M8 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 1a1 1 0 0 1 1 1v3.293a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-1.414-1.414L14.586 12H9.414l-.293.293a1 1 0 0 1-1.414-1.414l3-3V10.5a1 1 0 0 1 1-1h5zM8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-4">Profissionais Especializados</h3>
              </div>
              <p className="text-gray-600">
                Equipe treinada e experiente para garantir seu conforto e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="section mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-[#F6AE2D] font-bold mb-6 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="depoimento bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <Image
                    src="/images/avatars/joao.jpg"
                    alt="João Silva"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D2538]">João Silva</h4>
                  <span className="text-sm text-gray-500">Cliente Satisfeito</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                &quot;Excelente atendimento e serviço impecável! Recomendo a ChaveReal para qualquer necessidade.&quot;
              </p>
            </div>

            <div className="depoimento bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <Image
                    src="/images/avatars/maria.jpg"
                    alt="Maria Santos"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D2538]">Maria Santos</h4>
                  <span className="text-sm text-gray-500">Cliente Satisfeita</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                &quot;Rápidos e eficientes! Resolveram meu problema com a chave codificada em minutos.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
