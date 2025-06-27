import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building",
      title: "Строительство жилых помещений",
      description:
        "Частные дома, коттеджи, таунхаусы. Полный цикл от проекта до сдачи под ключ.",
      features: [
        "Проектирование",
        "Фундамент",
        "Стены и кровля",
        "Внутренняя отделка",
      ],
    },
    {
      icon: "Warehouse",
      title: "Строительство нежилых зданий",
      description:
        "Офисные центры, склады, производственные помещения, торговые объекты.",
      features: [
        "Промышленное строительство",
        "Офисные здания",
        "Складские комплексы",
        "Торговые центры",
      ],
    },
    {
      icon: "Wrench",
      title: "Ремонт и реконструкция",
      description:
        "Капитальный и косметический ремонт, реконструкция зданий любой сложности.",
      features: [
        "Капитальный ремонт",
        "Косметический ремонт",
        "Реконструкция",
        "Модернизация",
      ],
    },
    {
      icon: "Trees",
      title: "Благоустройство территории",
      description:
        "Ландшафтный дизайн, устройство подпорных стен, клумб, пешеходных дорожек, спортивных площадок. Озеленение, организация систем полива",
      features: [
        "Ландшафтный дизайн",
        "Озеленение",
        "Дорожки и площадки",
        "Системы полива",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к строительству и ремонту — от идеи до реализации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
