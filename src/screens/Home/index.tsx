import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        {/* Seção Hero com Banner */}
        <section id="hero" className="section mb-12">
          {/* Banner (imagem de destaque) */}
          <div className="banner">
            <Image
              src="/imagens/banners/banner-home.jpg"
              alt="Banner Home"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          {/* Conteúdo do Hero */}
          <div className="hero-content container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">
              Proteja o que realmente importa
            </h1>
            <p className="text-lg mb-6">
              Na ChaveReal, unimos tecnologia e segurança para oferecer as melhores
              soluções em chaves, fechaduras e controle de acessos.
            </p>
            <Link
              href="/produtos"
              className="btn bg-[#F6AE2D] text-[#0D2538] py-[0.7rem] px-[1.2rem] no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white"
            >
              Conheça nossos produtos
            </Link>
          </div>
        </section>

        {/* Seção Serviços */}
        <section id="servicos" className="section mb-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
              Nossos Serviços
            </h2>
            <p className="text-lg mb-6">
              Oferecemos uma ampla gama de serviços para garantir sua segurança e
              tranquilidade.
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Confecção de chaves codificadas</li>
              <li>Abertura de portas e cofres</li>
              <li>Instalação de fechaduras eletrônicas</li>
              <li>Soluções de controle de acesso</li>
            </ul>
            <Link
              href="/servicos"
              className="btn bg-[#F6AE2D] text-[#0D2538] py-[0.7rem] px-[1.2rem] no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white"
            >
              Saiba mais
            </Link>
          </div>
        </section>

        {/* Seção Diferenciais */}
        <section id="diferenciais" className="section mb-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
              Por que escolher a ChaveReal?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="diferencial">
                <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
                <p>
                  Estamos disponíveis para atender emergências a qualquer momento.
                </p>
              </div>
              <div className="diferencial">
                <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
                <p>
                  Trabalhamos com os melhores equipamentos do mercado.
                </p>
              </div>
              <div className="diferencial">
                <h3 className="text-xl font-semibold mb-2">
                  Profissionais Especializados
                </h3>
                <p>
                  Equipe treinada e experiente para garantir seu conforto e segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section id="depoimentos" className="section mb-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4 inline-block border-b-2 border-[#F6AE2D] pb-[0.2rem]">
              O que nossos clientes dizem
            </h2>
            <div className="depoimento mb-4">
              <p className="text-lg">
                "Excelente atendimento e serviço impecável! Recomendo a ChaveReal para
                qualquer necessidade."
              </p>
              <span className="text-sm">- João Silva</span>
            </div>
            <div className="depoimento">
              <p className="text-lg">
                "Rápidos e eficientes! Resolveram meu problema com a chave codificada em
                minutos."
              </p>
              <span className="text-sm">- Maria Santos</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
