import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section
			className="relative bg-cover bg-center h-[80vh] flex items-center"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
			}}
			data-aos="fade-up"
		>
			<div className="container mx-auto px-4 text-center text-white">
				<h1
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					className="text-4xl font-bold"
				>
					TRANSFORME SUA VIDA
				</h1>
				<p
					data-aos="fade-up"
					data-aos-delay="200"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
				>
					Na Gold Lions, oferecemos equipamentos de última geração, treinadores
					especializados e um ambiente motivador para ajudar você a alcançar
					seus objetivos.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<Link
						to="/planos"
						className="bg-yellow-500 hover:bg-black text-white font-bold py-3 px-8 rounded-full transition-colors"
					>
						CONHEÇA NOSSOS PLANOS
					</Link>
					<a
						href="#servicos"
						className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-colors"
					>
						NOSSOS SERVIÇOS
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
