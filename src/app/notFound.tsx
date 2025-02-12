'use client'

import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-[#0D2538]">404</h1>
                <p className="mt-4 text-2xl text-gray-700">Página Não Encontrada</p>
                <p className="mt-2 text-lg text-gray-500">
                    A página que você está procurando não existe ou foi movida.
                </p>
                <Link href="/" className="mt-6 inline-block px-6 py-3 bg-[#F6AE2D] text-white rounded-lg text-xl hover:bg-[#0D2538] hover:text-[#F6AE2D] transition">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
};

export default NotFound;