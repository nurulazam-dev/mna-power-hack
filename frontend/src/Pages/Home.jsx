import HeroSection from "../components/Home/HeroSection";
import HomeCopy from "./HomeCopy";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeCopy />

      {/* Home copy test */}
      <div className="bg-gray-50 text-gray-800">
        {/* About Section */}
        <section className="py-16 px-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-violet-600">
              About Power Hack
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              At Power Hack, we provide seamless electricity solutions for
              residential and commercial clients. Our commitment lies in
              ensuring a smooth billing process, reliable services, and
              round-the-clock customer support to keep your lights on.
            </p>
            <img
              src="https://www.bcpcl.org.bd/img/payra-plant/20240814-bcpcl-payra-plant.jpg"
              alt="Power Hack Services"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-5 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-violet-600">
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
        <section className="py-16 px-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-violet-600">
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
        <section className="py-16 px-5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-violet-600 text-center">
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
