import { Clock, Dumbbell, Heart, Users } from "lucide-react";

const services = [
	{
		icon: <Dumbbell size={48} className="text-red-500 mb-4" />,
		title: "Musculação",
		description:
			"Equipamentos modernos e de alta qualidade para todos os grupos musculares, com orientação de profissionais qualificados.",
	},
	{
		icon: <Users size={48} className="text-red-500 mb-4" />,
		title: "Aulas Coletivas",
		description:
			"Diversas modalidades como Spinning, Zumba, Pilates, Funcional e muito mais para você se exercitar em grupo.",
	},
	{
		icon: <Heart size={48} className="text-red-500 mb-4" />,
		title: "Personal Trainer",
		description:
			"Treinamento personalizado com profissionais experientes para atingir seus objetivos de forma mais rápida e segura.",
	},
	{
		icon: <Clock size={48} className="text-red-500 mb-4" />,
		title: "Horário Estendido",
		description:
			"Academia aberta todos os dias da semana, com horários amplos para se adequar à sua rotina.",
	},
];

const Services = () => {
	return (
		<section id="servicos" className="py-20 bg-gray-100">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16" data-aos="fade-up">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Nossos Serviços
					</h2>
					<p
						className="text-gray-600 max-w-2xl mx-auto"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						Oferecemos uma variedade de serviços para atender a todas as suas
						necessidades de fitness e bem-estar.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<div
							className="bg-white p-6 rounded-lg shadow-md"
							data-aos="fade-up"
							data-aos-delay={`${index * 200}`}
							key={service.title}
						>
							{service.icon}
							<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
							<p>{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
