import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
	{
		id: 1,
		name: "Carlos Silva",
		role: "Membro há 2 anos",
		image:
			"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
		quote:
			"Desde que comecei a treinar na Gold Lions, perdi 15kg e ganhei muita disposição. Os treinadores são excelentes e o ambiente é muito motivador!",
		rating: 5,
	},
	{
		id: 2,
		name: "Ana Oliveira",
		role: "Membro há 1 ano",
		image:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
		quote:
			"As aulas coletivas são incríveis! Nunca me diverti tanto fazendo exercícios. Recomendo a todos que querem se exercitar de forma divertida.",
		rating: 5,
	},
	{
		id: 3,
		name: "Pedro Santos",
		role: "Membro há 6 meses",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
		quote:
			"O atendimento é excelente e os equipamentos são de primeira linha. Estou vendo resultados muito mais rápido do que esperava!",
		rating: 4,
	},
];

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length,
		);
	};

	return (
		<section id="depoimentos" className="py-20 bg-black text-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						O Que Nossos Clientes Dizem
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Veja os depoimentos de quem já transformou sua vida com a Gold
						Lions.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<div className="flex items-center justify-between">
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							onClick={prevTestimonial}
							className="absolute left-0 z-10 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none"
							aria-label="Previous testimonial"
						>
							<ChevronLeft size={24} />
						</button>

						<div className="w-full px-12">
							<div className="bg-gray-900 rounded-lg p-8 text-center">
								<img
									src={testimonials[currentIndex].image}
									alt={testimonials[currentIndex].name}
									className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
								/>
								<div className="flex justify-center mb-4">
									{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
										<Star
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
											size={20}
											className="text-yellow-400 fill-current"
										/>
									))}
									{[...Array(5 - testimonials[currentIndex].rating)].map(
										(_, i) => (
											<Star
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={i + testimonials[currentIndex].rating}
												size={20}
												className="text-gray-600"
											/>
										),
									)}
								</div>
								<p className="text-lg italic mb-6">
									"{testimonials[currentIndex].quote}"
								</p>
								<h4 className="text-xl font-bold">
									{testimonials[currentIndex].name}
								</h4>
								<p className="text-gray-400">
									{testimonials[currentIndex].role}
								</p>
							</div>
						</div>

						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							onClick={nextTestimonial}
							className="absolute right-0 z-10 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none"
							aria-label="Next testimonial"
						>
							<ChevronRight size={24} />
						</button>
					</div>

					<div className="flex justify-center mt-6 space-x-2">
						{testimonials.map((testimonial) => (
							// biome-ignore lint/a11y/useButtonType: <explanation>
							<button
								key={testimonial.id}
								onClick={() => setCurrentIndex(testimonial.id)}
								className={`w-3 h-3 rounded-full ${
									testimonial.id === currentIndex ? "bg-red-500" : "bg-gray-600"
								}`}
								aria-label={`Go to testimonial ${testimonial.id}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
