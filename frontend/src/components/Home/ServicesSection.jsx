import { servicesData } from "../../assets/data/data";

const ServicesSection = () => {
  return (
    <section className="pt-3 text-gray-800 px-8">
      <div className="text-center">
        <h2 className="text-3xl mb-2 font-bold text-slate-600 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {servicesData?.map((service, index) => (
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
