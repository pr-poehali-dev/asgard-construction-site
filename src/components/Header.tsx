import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Icon name="Building2" className="h-8 w-8 text-blue-800 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                ООО СК "Асгард"
              </h1>
              <p className="text-sm text-gray-600">Строительная компания</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              О компании
            </a>
            <a
              href="#construction"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Строительство
            </a>
            <a
              href="#repair"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Ремонт
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Проекты
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              className="h-6 w-6 text-gray-700"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                О компании
              </a>
              <a
                href="#construction"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Строительство
              </a>
              <a
                href="#repair"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Ремонт
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Проекты
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
