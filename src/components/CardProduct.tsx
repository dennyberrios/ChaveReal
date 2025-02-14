'use client'

import Image from "next/image";
import LinkButton from "./LinkButton";

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface FeaturedProductsProps {
    featuredProducts: Product[];
}

const CardProduct: React.FC<FeaturedProductsProps> = ({ featuredProducts }) => {
    return (
        <>
            {featuredProducts.map((product) => (
                <div
                    key={product.id}
                    className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-3 text-[#0D2538]">
                        {product.name}
                    </h3>
                    <p className="text-[#F6AE2D] font-bold text-xl">{product.price}</p>
                    <LinkButton href="/products" className="mt-4">
                        Ver mais
                    </LinkButton>
                </div>
            ))}
        </>
    );
}

export default CardProduct;