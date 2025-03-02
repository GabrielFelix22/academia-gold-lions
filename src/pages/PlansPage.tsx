import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
	{
		id: "basic",
		name: "Básico",
		price: "R$ 89,90",
		period: "/mês",
		features: [
			"Acesso à área de musculação",
			"Horário limitado (8h às 16h)",
			"Avaliação física inicial",
			"Acesso ao app da academia",
		],
		popular: false,
		color: "bg-gray-100",
		buttonColor: "bg-gray-800 hover:bg-gray-900",
	},
	{
		id: "premium",
		name: "Premium",
		price: "R$ 129,90",
		period: "/mês",
		features: [
			"Acesso total à academia",
			"Horário integral",
			"Aulas coletivas inclusas",
			"Avaliações físicas trimestrais",
			"Acesso ao app da academia",
			"Direito a 1 convidado por mês",
		],
		popular: true,
		color: "bg-red-500",
		buttonColor: "bg-white hover:bg-gray-100 text-red-500",
	},
	{
		id: "family",
		name: "Família",
		price: "R$ 249,90",
		period: "/mês",
		features: [
			"Acesso para até 3 pessoas",
			"Horário integral",
			"Aulas coletivas inclusas",
			"Avaliações físicas trimestrais",
			"Acesso ao app da academia",
			"Armário exclusivo",
			"Estacionamento gratuito",
		],
		popular: false,
		color: "bg-gray-100",
		buttonColor: "bg-gray-800 hover:bg-gray-900",
	},
];

const PlansPage = () => {
	const [billingPeriod, setBillingPeriod] = useState("monthly");

	return (
		<div className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold mb-4">Nossos Planos</h1>
					<p className="text-gray-600 max-w-2xl mx-auto mb-8">
						Escolha o plano que melhor se adapta às suas necessidades e comece
						sua jornada de transformação hoje mesmo.
					</p>

					<div className="inline-flex items-center bg-gray-200 p-1 rounded-full mb-8">
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							className={`py-2 px-6 rounded-full ${
								billingPeriod === "monthly" ? "bg-white shadow-md" : ""
							}`}
							onClick={() => setBillingPeriod("monthly")}
						>
							Mensal
						</button>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							className={`py-2 px-6 rounded-full ${
								billingPeriod === "annual" ? "bg-white shadow-md" : ""
							}`}
							onClick={() => setBillingPeriod("annual")}
						>
							Anual <span className="text-green-500 text-sm">(-20%)</span>
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans.map((plan) => (
						<div
							key={plan.id}
							className={`rounded-2xl shadow-lg overflow-hidden ${
								plan.popular ? "transform md:-translate-y-4" : ""
							}`}
						>
							{plan.popular && (
								<div className="bg-red-600 text-white text-center py-2 font-semibold">
									MAIS POPULAR
								</div>
							)}

							<div
								className={`${plan.color} ${plan.popular ? "text-white" : ""} p-8`}
							>
								<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
								<div className="flex items-end mb-4">
									<span className="text-4xl font-bold">
										{billingPeriod === "annual"
											? `R$ ${(Number.parseFloat(plan.price.replace("R$ ", "").replace(",", ".")) * 0.8 * 12).toFixed(2).replace(".", ",")}`
											: plan.price}
									</span>
									<span className="ml-1 text-sm opacity-80">
										{billingPeriod === "annual" ? "/ano" : plan.period}
									</span>
								</div>
								{billingPeriod === "annual" && (
									<p className="text-sm mb-4 font-medium">
										Equivalente a{" "}
										{(
											Number.parseFloat(
												plan.price.replace("R$ ", "").replace(",", "."),
											) * 0.8
										)
											.toFixed(2)
											.replace(".", ",")}{" "}
										por mês
									</p>
								)}
								{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
								<button
									className={`w-full py-3 rounded-lg font-bold ${plan.buttonColor} transition-colors`}
								>
									ASSINAR AGORA
								</button>
							</div>

							<div className="bg-white p-8">
								<ul className="space-y-4">
									{plan.features.map((feature, index) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<li key={index} className="flex items-start">
											<Check
												size={20}
												className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
											/>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<h3 className="text-2xl font-bold mb-4">Ainda com Dúvidas?</h3>
					<p className="text-gray-600 max-w-2xl mx-auto mb-6">
						Entre em contato com nossa equipe para mais informações ou visite
						nossa academia para conhecer nossas instalações.
					</p>
					<a
						href="tel:+551199999999"
						className="inline-flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors"
					>
						Fale Conosco: (11) 99999-9999
					</a>
				</div>
			</div>
		</div>
	);
};

export default PlansPage;
