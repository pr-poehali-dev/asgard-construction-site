import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Готовы начать ваш проект?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Получите бесплатную консультацию и расчет стоимости
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center">
            <Icon name="Phone" className="h-6 w-6 mr-3" />
            <span className="text-lg">+7 (908) 222 97 90</span>
          </div>
          <div className="flex items-center">
            <Icon name="Mail" className="h-6 w-6 mr-3" />
            <span className="text-lg">S.K.ASGARD@YANDEX.RU</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
            <Icon name="Phone" className="mr-2 h-5 w-5" />
            Заказать звонок
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors flex items-center justify-center">
            <Icon name="Calculator" className="mr-2 h-5 w-5" />
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
