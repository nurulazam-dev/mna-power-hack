import { Link } from "react-router-dom";
import powerPlanImg from "../assets/images/power-plan.jpg";

const About = () => {
  return (
    <div className="mt-6 py-12">
      <div className="px-6 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-[39px] font-bold text-black">
              Welcome to <span className="text-orange-600">Power Hack</span>
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
            Discover the unique benefits of using Power Hack for all your
            billing needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="card shadow-lg bg-white p-6 text-center">
              <div className="text-primary text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-slate-500">
                User-Friendly Design
              </h3>
              <p className="text-gray-500 mt-3">
                Experience an intuitive platform that makes managing bills a
                breeze.
              </p>
            </div>
            <div className="card shadow-lg bg-white p-6 text-center">
              <div className="text-primary text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-500">
                Secure Payments
              </h3>
              <p className="text-gray-500 mt-3">
                Rest easy with robust security measures safeguarding your
                transactions.
              </p>
            </div>
            <div className="card shadow-lg bg-white p-6 text-center">
              <div className="text-primary text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-slate-500">24/7 Support</h3>
              <p className="text-gray-500 mt-3">
                Get assistance whenever you need it with our dedicated support
                team.
              </p>
            </div>
          </div>
        </div>

        {/* action btn part */}
        <div className="text-center mt-5 shadow-lg py-5 bg-violet-50">
          <h2 className="text-4xl font-bold text-slate-600">
            Ready to Simplify Your Bills?
          </h2>
          <p className="text-gray-600 mt-3">
            Join thousands of satisfied users who trust Power Hack for their
            bill management needs.
          </p>
          <div className="mt-6">
            <Link
              to="/login"
              className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin text-[20px] text-white hover:text-orange-500 px-10"
            >
              Sign Up Now
            </Link>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
          <div className="card shadow-lg bg-white p-6">
            <h2 className="text-3xl font-bold ">Our Mission</h2>
            <p className="text-gray-600 mt-4">
              To empower users with an innovative and secure platform that
              simplifies bill payments while offering unmatched convenience and
              transparency.
            </p>
          </div>
          <div className="card shadow-lg bg-white p-6">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              To be a global leader in digital bill management solutions,
              setting new standards in reliability, security, and user
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
