'use client'

import Image from "next/image";
import LinkButton from "./LinkButton";

interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    oldPrice: string;
    newPrice: string;
}

interface CardProductProps {
    products: Product[];
}

const CardProductPromotion: React.FC<CardProductProps> = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="promo-card bg-[#FFF8E1] shadow-xl rounded-lg p-6 border border-[#F6AE2D] relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute top-0 right-0 bg-[#F6AE2D] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                        Oferta Limitada
                    </div>
                    <Image src={product.image} alt={product.title} width={300} height={200} className="w-full h-auto rounded-lg" />
                    <h3 className="text-xl font-bold mt-3 text-[#0D2538]">{product.title}</h3>
                    <p className="text-gray-700 text-sm">{product.description}</p>
                    <div className="flex items-center mt-3">
                        <span className="text-gray-500 line-through text-lg">{product.oldPrice}</span>
                        <span className="text-[#F6AE2D] font-bold text-2xl ml-3">{product.newPrice}</span>
                    </div>
                    <LinkButton href="/promotions" className="mt-4">
                        Aproveitar Oferta
                    </LinkButton>
                </div>
            ))}
        </>
    );
};

export default CardProductPromotion;