import { Link } from "react-router-dom";

const CallToAction = () => {
	return (
		<section
			className="py-20 bg-cover bg-center text-white"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
			}}
		>
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Pronto para Começar Sua Jornada?
				</h2>
				<p className="text-xl max-w-2xl mx-auto mb-8">
					Junte-se a milhares de pessoas que já transformaram suas vidas com a
					PowerFit. O primeiro passo para uma vida mais saudável começa aqui.
				</p>
				<Link
					to="/planos"
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
				>
					COMECE AGORA
				</Link>
			</div>
		</section>
	);
};

export default CallToAction;
