'use client'

import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D2538] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        {/* Coluna de Informações Gerais */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Contato</h3>
          <p className="text-sm">Telefone: (11) 99999-9999</p>
          <p className="text-sm">E-mail: contato@chavereal.com</p>
          <p className="text-sm">Endereço: Rua Exemplo, 123, Cidade, Estado</p>
        </div>
        {/* Coluna de Links Rápidos */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Links Rápidos</h3>
          <ul>
            <li>
              <Link href="/terms" className="text-sm hover:text-[#F6AE2D]">Termos</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm hover:text-[#F6AE2D]">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-[#F6AE2D]">Contato</Link>
            </li>
          </ul>
        </div>
        {/* Coluna de Redes Sociais */}
        <div>
          <h3 className="text-lg font-bold">Redes Sociais</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="#">
              <FaFacebookSquare className="h-6 w-6" />
            </Link>
            <Link href="#">
              <AiFillInstagram className="h-6 w-6" />
            </Link>
            <Link href="#">
              <RiWhatsappFill className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2025 ChaveReal - Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;