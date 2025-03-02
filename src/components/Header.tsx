import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-black text-white shadow-md">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<Link to="/" className="flex items-center space-x-2">
						<Dumbbell size={32} className="text-red-500" />
						<span className="text-2xl font-bold">Gold Lions</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<Link to="/" className="hover:text-red-500 transition-colors">
							Início
						</Link>
						<a
							href="/#servicos"
							className="hover:text-red-500 transition-colors"
						>
							Serviços
						</a>
						<a
							href="/#depoimentos"
							className="hover:text-red-500 transition-colors"
						>
							Depoimentos
						</a>
						<Link to="/planos" className="hover:text-red-500 transition-colors">
							Planos
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className="md:hidden text-white"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
						<Link
							to="/"
							className="hover:text-red-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Início
						</Link>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a
							href="/#servicos"
							className="hover:text-red-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Serviços
						</a>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a
							href="/#depoimentos"
							className="hover:text-red-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Depoimentos
						</a>
						<Link
							to="/planos"
							className="hover:text-red-500 transition-colors"
							onClick={() => setIsMenuOpen(false)}
						>
							Planos
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
