'use client'

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    const pathname = usePathname(); // Hook para obter o pathname da rota atual

    // Verifica se a rota atual é a de login
    if (pathname === '/admin/login') {
        return (
            <div>
                {/* Aqui você pode renderizar apenas a página de login */}
                {children}
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0D2538] text-white flex flex-col p-4">
                <h2 className="text-xl font-semibold text-[#F6AE2D] mb-6">
                    Painel Administrativo
                </h2>
                <nav className="space-y-4">
                    <Link href="/admin/dashboard" className="block py-2 px-3 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Dashboard
                    </Link>
                    <Link href="/admin/users" className="block py-2 px-3 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Usuários
                    </Link>
                    <Link href="/admin/products" className="block py-2 px-3 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Produtos
                    </Link>
                    <Link href="/admin/settings" className="block py-2 px-3 rounded hover:bg-[#F6AE2D] hover:text-[#0D2538]">
                        Configurações
                    </Link>
                </nav>
            </aside>

            {/* Conteúdo principal */}
            <main className="flex-1 p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Área Administrativa
                </h2>
                <p className="text-gray-600">Rotas protegidas - acesso restrito</p>

                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default AdminLayout;
