import { Link } from "react-router-dom";
import powerPlanImg from "../assets/images/power-plan.jpg";

const About = () => {
  return (
    <div className="mt-6 py-8">
      <div className="px-6 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-5">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-[39px] font-bold text-black">
              Our <span className="text-orange-600">Power Hack</span>
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              At Power Hack, we provide seamless electricity solutions for
              residential and commercial clients. Our commitment lies in
              ensuring a smooth billing process, reliable services, and
              round-the-clock customer support to keep your lights on.
            </p>
            <button className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin text-[20px] text-white hover:text-orange-500 mt-4 px-8">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={powerPlanImg}
              alt="Power Plan image"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-600">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4">
            Discover the unique benefits of choosing Power-Hack for all your
            electricity supply needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="card shadow-lg bg-white p-6 text-center">
              <div className="text-primary text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-500">
                Reliable Power Supply
              </h3>
              <p className="text-gray-500 mt-3">
                Enjoy uninterrupted electricity with our dependable and robust
                infrastructure.
              </p>
            </div>
            <div className="card shadow-lg bg-white p-6 text-center">
              <div className="text-primary text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-slate-500">
                Energy Efficiency
              </h3>
              <p className="text-gray-500 mt-3">
                Save on energy costs with our innovative and eco-friendly power
                solutions.
              </p>
            </div>
            <div className="card shadow-lg bg-white p-6 text-center">
              <div className="text-primary text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-slate-500">24/7 Support</h3>
              <p className="text-gray-500 mt-3">
                Get assistance anytime with our dedicated customer support team.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button Section */}
        <div className="text-center my-12 shadow-lg py-5 bg-violet-50">
          <h2 className="text-4xl font-bold text-slate-600">
            Ready to Power Your Home or Business?
          </h2>
          <p className="text-gray-600 mt-3">
            Join thousands of satisfied customers who trust Power-Hack for their
            electricity needs.
          </p>
          <div className="mt-6">
            <Link
              to="/login"
              className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin text-[20px] text-white hover:text-orange-500 px-10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="card shadow-lg bg-white p-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              To deliver safe, reliable, and affordable electricity, enhancing
              lives and driving sustainable progress.
            </p>
          </div>
          <div className="card shadow-lg bg-white p-6">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              To be a leading electricity provider, setting benchmarks in
              innovation, efficiency, and customer satisfaction globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
