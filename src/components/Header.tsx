'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#0D2538] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logotipo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center">
                        <div className="relative h-12 w-32"> {/* Garante que a imagem preencha esse espaço */}
                            <Image
                                src="/images/logo/logo-chavereal.svg"
                                alt="ChaveReal"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>
                {/* Menu Desktop */}
                <nav className="hidden md:flex md:items-center md:space-x-6">
                    <Link href="/" className="hover:text-[#F6AE2D]">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-[#F6AE2D]">
                        Produtos
                    </Link>
                    <Link href="/services" className="hover:text-[#F6AE2D]">
                        Serviços
                    </Link>
                    <Link href="/promotions" className="hover:text-[#F6AE2D]">
                        Promoções
                    </Link>
                    <Link href="/about" className="hover:text-[#F6AE2D]">
                        Sobre Nós
                    </Link>
                    <Link href="/contact" className="hover:text-[#F6AE2D]">
                        Contato
                    </Link>
                    {/* Campo de busca */}
                    <div>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6AE2D]"
                        />
                    </div>
                </nav>
                {/* Botão Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white hover:text-[#F6AE2D] focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Menu Mobile */}
            {menuOpen && (
                <nav className="md:hidden bg-[#0D2538] px-2 pt-2 pb-3 space-y-1">
                    <Link href="/" className="block px-3 py-2 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Home
                    </Link>
                    <Link href="/products" className="block px-3 py-2 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Produtos
                    </Link>
                    <Link href="/services" className="block px-3 py-2 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Serviços
                    </Link>
                    <Link href="/promotions" className="block px-3 py-2 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Promoções
                    </Link>
                    <Link href="/about" className="block px-3 py-2 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Sobre Nós
                    </Link>
                    <Link href="/contact" className="block px-3 py-2 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Contato
                    </Link>
                    <div className="px-3 py-2">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6AE2D]"
                        />
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;