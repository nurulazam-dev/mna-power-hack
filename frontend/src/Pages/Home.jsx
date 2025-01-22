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
                  <time className="font-mono italic">1984</time>
                  <div className="text-lg font-black">
                    First Macintosh computer
                  </div>
                  The Apple Macintosh—later rebranded as the Macintosh 128K—is
                  the original Apple Macintosh personal computer. It played a
                  pivotal role in establishing desktop publishing as a general
                  office function. The motherboard, a 9 in (23 cm) CRT monitor,
                  and a floppy drive were housed in a beige case with integrated
                  carrying handle; it came with a keyboard and single-button
                  mouse.
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
                  <time className="font-mono italic">1998</time>
                  <div className="text-lg font-black">iMac</div>
                  iMac is a family of all-in-one Mac desktop computers designed
                  and built by Apple Inc. It has been the primary part of
                  consumer desktop offerings since its debut in August 1998, and
                  has evolved through seven distinct forms
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
                  <time className="font-mono italic">2001</time>
                  <div className="text-lg font-black">iPod</div>
                  The iPod is a discontinued series of portable media players
                  and multi-purpose mobile devices designed and marketed by
                  Apple Inc. The first version was released on October 23, 2001,
                  about 8+1⁄2 months after the Macintosh version of iTunes was
                  released. Apple sold an estimated 450 million iPod products as
                  of 2022. Apple discontinued the iPod product line on May 10,
                  2022. At over 20 years, the iPod brand is the oldest to be
                  discontinued by Apple
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
                  <time className="font-mono italic">2007</time>
                  <div className="text-lg font-black">iPhone</div>
                  iPhone is a line of smartphones produced by Apple Inc. that
                  use own iOS mobile operating system. The first-generation
                  iPhone was announced by then-Apple CEO Steve Jobs on January
                  9, 2007. Since then, Apple has annually released new iPhone
                  models and iOS updates. As of November 1, 2018, more than 2.2
                  billion iPhones had been sold. As of 2022, the iPhone accounts
                  for 15.6% of global smartphone market share
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
                  <time className="font-mono italic">2015</time>
                  <div className="text-lg font-black">Apple Watch</div>
                  The Apple Watch is a line of smartwatches produced by Apple
                  Inc. It incorporates fitness tracking, health-oriented
                  capabilities, and wireless telecommunication, and integrates
                  with iOS and other Apple products and services
                </div>
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
