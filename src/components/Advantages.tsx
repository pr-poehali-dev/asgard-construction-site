import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "5 лет гарантии на все виды работ",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Точно в срок без задержек",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Квалифицированные специалисты",
    },
    {
      icon: "FileText",
      title: "Полная документация",
      description: "Все разрешения и документы",
    },
    {
      icon: "Truck",
      title: "Собственная техника",
      description: "Современное оборудование",
    },
    {
      icon: "Calculator",
      title: "Честные цены",
      description: "Прозрачное ценообразование",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Надежность, качество и профессионализм в каждом проекте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-900 transition-colors">
                <Icon name={advantage.icon} className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
