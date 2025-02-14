import Image from "next/image";
import Link from "next/link";

interface Service {
    id: number;
    image: string;
    title: string;
    description: string;
    oldPrice: string;
    newPrice: string;
}

interface CardServiceProps {
    services: Service[];
}

const CardService: React.FC<CardServiceProps> = ({ services }) => {
    return (
        <>
            {services.map((service) => (
                <div key={service.id} className="promo-card bg-[#FFF8E1] shadow-xl rounded-lg p-6 border border-[#F6AE2D] relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute top-0 right-0 bg-[#F6AE2D] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                        Oferta Limitada
                    </div>
                    <Image src={service.image} alt={service.title} width={300} height={200} className="w-full h-auto rounded-lg" />
                    <h3 className="text-xl font-bold mt-3 text-[#0D2538]">{service.title}</h3>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                    <div className="flex items-center mt-3">
                        <span className="text-gray-500 line-through text-lg">{service.oldPrice}</span>
                        <span className="text-[#F6AE2D] font-bold text-2xl ml-3">{service.newPrice}</span>
                    </div>
                    <Link
                        href="/promocoes"
                        className="block mt-4 bg-[#F6AE2D] text-[#0D2538] py-2 px-4 text-center no-underline rounded-[5px] font-medium transition-colors duration-300 hover:bg-[#0D2538] hover:text-white shadow-md"
                    >
                        Aproveitar Oferta
                    </Link>
                </div>
            ))}
        </>
    );
};

export default CardService;