const ServicesSection = () => {
  const services = [
    {
      title: "Power Distribution",
      description: "Efficient power supply to all areas.",
      icon: "🔌",
    },
    {
      title: "Bill Management",
      description: "Hassle-free billing and records update.",
      icon: "💵",
    },
    {
      title: "Customer Support",
      description: "24/7 assistance for queries and emergencies.",
      icon: "📞",
    },
    {
      title: "Connection Services",
      description: "Quick and easy new electricity connections.",
      icon: "⚡",
    },
    {
      title: "Maintenance Services",
      description: "On-site maintenance and repair for power systems.",
      icon: "🔧",
    },
    {
      title: "Load Management",
      description: "Dynamic load management for optimized usage.",
      icon: "📈",
    },
    {
      title: "Energy Audits",
      description: "Comprehensive audits to ensure efficient power usage.",
      icon: "📋",
    },
    {
      title: "Street Lighting Services",
      description: "Reliable installation and maintenance of streetlights.",
      icon: "🛣️",
    },
    {
      title: "Power Backup Solutions",
      description: "Installation of generators and UPS systems.",
      icon: "🔋",
    },
    {
      title: "Substation Management",
      description: "Operation and upkeep of electrical substations.",
      icon: "🏭",
    },
  ];

  return (
    <section className="pt-3 text-gray-800 px-8">
      <div className="text-center">
        <h2 className="text-3xl mb-2 font-bold text-slate-600 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {services?.map((service, index) => (
            <div
              key={index}
              className="bg-white px-4 py-2 rounded shadow-md hover:shadow-lg border border-violet-100 hover:border-violet-500 transition"
            >
              <div className="text-4xl mb-2">{service?.icon}</div>
              <h3 className="text-xl font-bold mb-1 text-violet-600">
                {service?.title}
              </h3>
              <p className="text-sm text-gray-600">{service?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
