import {
	Dumbbell,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-black text-white pt-12 pb-6" data-aos="fade-in">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div className="col-span-1" data-aos="fade-up">
						<div
							className="flex items-center space-x-2 mb-4"
							data-aos="fade-up"
						>
							<Dumbbell size={24} className="text-red-500" />
							<span
								className="text-xl font-bold"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								Gold Lions
							</span>
						</div>
						<p
							className="text-gray-400 mb-4"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							Transformando vidas através do fitness desde 2010. Nossa missão é
							ajudar você a alcançar seus objetivos de saúde e bem-estar.
						</p>
						<div
							className="flex space-x-4"
							data-aos="fade-up"
							data-aos-delay="600"
						>
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="text-gray-400 hover:text-red-500 transition-colors"
							>
								<Instagram size={20} />
							</a>
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="text-gray-400 hover:text-red-500 transition-colors"
							>
								<Facebook size={20} />
							</a>
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="text-gray-400 hover:text-red-500 transition-colors"
							>
								<Twitter size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className="col-span-1" data-aos="fade-up" data-aos-delay="800">
						<h3
							className="text-lg font-semibold mb-4"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Links Rápidos
						</h3>
						<ul className="space-y-2">
							<li data-aos="fade-up" data-aos-delay="1000">
								<Link
									to="/"
									className="text-gray-400 hover:text-red-500 transition-colors"
								>
									Início
								</Link>
							</li>
							<li data-aos="fade-up" data-aos-delay="1200">
								<a
									href="/#servicos"
									className="text-gray-400 hover:text-red-500 transition-colors"
								>
									Serviços
								</a>
							</li>
							<li data-aos="fade-up" data-aos-delay="1400">
								<a
									href="/#depoimentos"
									className="text-gray-400 hover:text-red-500 transition-colors"
								>
									Depoimentos
								</a>
							</li>
							<li data-aos="fade-up" data-aos-delay="1600">
								<Link
									to="/planos"
									className="text-gray-400 hover:text-red-500 transition-colors"
								>
									Planos
								</Link>
							</li>
						</ul>
					</div>

					{/* Hours */}
					<div className="col-span-1" data-aos="fade-up" data-aos-delay="1800">
						<h3
							className="text-lg font-semibold mb-4"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Horário de Funcionamento
						</h3>
						<ul className="space-y-2 text-gray-400">
							<li data-aos="fade-up" data-aos-delay="2000">
								Segunda - Sexta: 6:00 - 22:00
							</li>
							<li data-aos="fade-up" data-aos-delay="2200">
								Sábado: 8:00 - 18:00
							</li>
							<li data-aos="fade-up" data-aos-delay="2400">
								Domingo: 8:00 - 14:00
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="col-span-1" data-aos="fade-up" data-aos-delay="2600">
						<h3
							className="text-lg font-semibold mb-4"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Contato
						</h3>
						<ul className="space-y-2">
							<li
								className="flex items-center space-x-2 text-gray-400"
								data-aos="fade-up"
								data-aos-delay="2800"
							>
								<Phone size={16} />
								<span>(11) 99999-9999</span>
							</li>
							<li
								className="flex items-center space-x-2 text-gray-400"
								data-aos="fade-up"
								data-aos-delay="3000"
							>
								<Mail size={16} />
								<span>contato@goldlions.com</span>
							</li>
							<li
								className="flex items-center space-x-2 text-gray-400"
								data-aos="fade-up"
								data-aos-delay="3200"
							>
								<MapPin size={16} />
								<span>
									Av. José Rangel Filho, 1088 - Jardim Pte. Alta I - Guarulhos,
									SP
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div
					className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500"
					data-aos="fade-up"
					data-aos-delay="3400"
				>
					<p data-aos="fade-up" data-aos-delay="200">
						&copy; {new Date().getFullYear()} Gold Lions. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
