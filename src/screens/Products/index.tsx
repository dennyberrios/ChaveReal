'use client'

import Image from "next/image";

const products = [
  { name: "Chave Yale", price: "R$ 5,00", image: "/imagens/chave-yale.jpg" },
  { name: "Chave Interna", price: "R$ 10,00", image: "/imagens/chave-interna.jpg" },
  { name: "Chave Tetra", price: "R$ 20,00", image: "/imagens/chave-tetra.jpg" },
  { name: "Chave para Carro (sem código)", price: "R$ 20,00", image: "/imagens/chave-carro-sem-codigo.jpg" },
  { name: "Chave para Carro (com código)", price: "A partir de R$ 90,00", image: "/imagens/chave-carro-com-codigo.jpg" },
];

const carKeys = [
  { name: "Honda Civic", price: "R$ 95,00", image: "/images/products/yale/yale-gold.jpg" },
  { name: "Toyota Corolla", price: "R$ 105,00", image: "/images/products/yale/yale-gold.jpg" },
  { name: "Ford Focus", price: "R$ 110,00", image: "/images/products/yale/yale-gold.jpg" },
  { name: "Chevrolet Cruze", price: "R$ 120,00", image: "/images/products/yale/yale-gold.jpg" },
];

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Chaves Gerais */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-yellow-500 border-b-2 border-yellow-500 inline-block pb-1 mb-4">Chaves Gerais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Mini Catálogo – Chaves para Carro */}
      <section>
        <h2 className="text-2xl font-bold text-yellow-500 border-b-2 border-yellow-500 inline-block pb-1 mb-4">Mini Catálogo – Chaves para Carro</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carKeys.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <Image src={car.image} alt={car.name} width={300} height={200} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-600">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}