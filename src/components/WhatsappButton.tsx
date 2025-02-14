'use client'

import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    const phoneNumber = "5581999571340";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-4 bg-green-500  text-white p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
            <FaWhatsapp size={40} />
        </a>
    );
};

export default WhatsappButton;
