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
            {/* ====================== */}
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <div className="text-lg font-black">📝Submit Application</div>
                  Begin the process by submitting a detailed application form,
                  either online or at our nearest office. Include all required
                  documents, such as proof of identity, property ownership, and
                  a description of your electricity needs.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <div className="text-lg font-black">
                    ✔️Inspection & Approval
                  </div>
                  Once your application is received, our technical team will
                  schedule an inspection to assess your property and ensure it
                  meets safety and regulatory standards. After a successful
                  inspection, the application will be approved for the next
                  steps.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <div className="text-lg font-black">🔧Meter Installation</div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <div className="text-lg font-black">⚡Power Connection</div>
                </div>
                <hr />
              </li>
            </ul>
            {/* ====================== */}
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
