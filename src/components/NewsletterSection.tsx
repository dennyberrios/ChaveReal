import { useState } from "react";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() === "") return;
        alert(`Obrigado por se inscrever! 📩 (${email})`);
        setEmail("");
    };

    return (
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl text-[#F6AE2D] font-bold mb-4">
                Receba ofertas exclusivas e novidades no seu e-mail!
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-[300px] p-3 border border-[#F6AE2D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F6AE2D] transition-all"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#F6AE2D] text-[#0D2538] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-[#0D2538] hover:text-white"
                >
                    Quero Receber
                </button>
            </form>
        </div>
    );
};

export default NewsletterSection;