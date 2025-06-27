import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800/90 to-blue-900/90 text-white py-20 mt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/95d848e1-3fd8-4048-840f-085f7d286be0.jfif)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Строительство и ремонт
              <span className="block text-blue-200">любой сложности</span>
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Профессиональное строительство жилых и нежилых помещений,
              качественный ремонт и благоустройство территории с гарантией
              результата
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Заказать звонок
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                Наши проекты
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
              alt="Строительство"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Icon name="Award" className="h-8 w-8 text-blue-800 mr-3" />
                <div>
                  <p className="font-bold">15+ лет</p>
                  <p className="text-sm text-gray-600">на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
