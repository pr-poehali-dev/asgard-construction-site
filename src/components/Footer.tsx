import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Building2" className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-xl font-bold">ООО СК "Асгард"</h3>
                <p className="text-gray-400 text-sm">Строительная компания</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональное строительство и ремонт с 2008 года. Более 500
              успешно реализованных проектов.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Строительство домов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Коммерческое строительство
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ремонт и реконструкция
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Благоустройство
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 mr-3" />
                <span>г. Красноярск ул. Дубенского д. 4 к. 1 офис 322</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-3" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-3" />
                <span>info@asgard-sk.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 mr-3" />
                <div>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб-Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 ООО СК "Асгард". Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Facebook" className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Youtube" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
