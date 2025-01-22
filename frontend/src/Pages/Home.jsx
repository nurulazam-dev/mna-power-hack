import HeroSection from "../components/Home/HeroSection";
import HomeCopy from "./HomeCopy";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeCopy />

      {/* Home copy test */}
      <div className=" text-gray-800">
        {/* Services Section */}
        <section className="py-3 px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3 text-violet-600">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
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
                  description:
                    "On-site maintenance and repair for power systems.",
                  icon: "🔧",
                },
                {
                  title: "Load Management",
                  description: "Dynamic load management for optimized usage.",
                  icon: "📈",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-violet-600">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Departments Section */}
        <section className="py-3 px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3 text-violet-600">
              Our Departments
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Billing Department",
                  description: "Handles bill generation and payment records.",
                },
                {
                  name: "Customer Service",
                  description:
                    "Provides assistance for all power-related queries.",
                },
                {
                  name: "Technical Team",
                  description: "Manages power systems and maintenance.",
                },
              ].map((dept, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-3 text-violet-600">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-600">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Electricity Connection Process */}
        <section className="py-3 px-5">
          <div className="">
            <h2 className="text-3xl font-bold mb-3 text-violet-600 text-center">
              Electricity Connection Process
            </h2>
            <div className="relative border-l-4 border-violet-600">
              {[
                { step: "Submit Application", icon: "📝" },
                { step: "Inspection & Approval", icon: "✔️" },
                { step: "Meter Installation", icon: "🔧" },
                { step: "Power Connection", icon: "⚡" },
              ].map((process, index) => (
                <div key={index} className="mb-8 flex items-center gap-4 pl-6">
                  <span className="text-2xl">{process.icon}</span>
                  <p className="text-lg text-gray-700">{process.step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
