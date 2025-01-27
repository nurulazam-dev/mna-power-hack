import { Link } from "react-router-dom";
import powerPlanImg from "../assets/images/power-plan.jpg";
import { chooseUsData } from "../assets/data/data";

const About = () => {
  const missionVision = [
    {
      title: "Our Mission",
      desc: "To deliver safe, reliable, and affordable electricity, enhancing lives and driving sustainable progress.",
    },
    {
      title: "Our Vision",
      desc: "To be a leading electricity provider, setting benchmarks in innovation, efficiency, and customer satisfaction globally.",
    },
  ];
  return (
    <div className="lg:mt-6 mt-3 py-6 lg:px-10 px-6">
      <section className="lg:flex items-center mb-5">
        <div className="text-center md:text-left lg:w-1/2 w-full lg:pr-3">
          <h1 className="text-[33px] lg:text-[39px] font-bold text-black">
            Our <span className="text-orange-600">Power Hack</span>
          </h1>
          <p className="text-gray-600 mt-3 lg:text-lg text-[16px] text-justify">
            At Power Hack, we provide seamless electricity solutions for
            residential and commercial clients. Our commitment lies in ensuring
            a smooth billing process, reliable services, and round-the-clock
            customer support to keep your lights on.
          </p>
          <button className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin lg:text-[20px] text-[17px] text-white hover:text-orange-500 mt-4 px-8">
            Get Started
          </button>
        </div>
        <div className="lg:block hidden lg:w-1/2 mt-8 md:mt-0">
          <img
            src={powerPlanImg}
            alt="Power Plan image"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-[32px] lg:text-[38px]  font-bold text-slate-600 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
          {chooseUsData?.map((data, index) => (
            <div
              key={index}
              className="card shadow-md rounded bg-white py-3 px-6 text-center"
            >
              <div className="text-primary text-5xl mb-2">{data?.icon}</div>
              <h3 className="lg:text-xl text-[18px] font-bold text-slate-500">
                {data?.title}
              </h3>
              <p className="text-gray-500 mt-1">{data?.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center my-6 shadow-lg py-5 bg-violet-50">
        <h2 className="text-[31px] lg:text-[39px] font-bold text-slate-600">
          Ready to Power Your Home or Business?
        </h2>
        <p className="text-gray-600">
          Join thousands of satisfied customers who trust Power-Hack for their
          electricity needs.
        </p>
        <div className="mt-6">
          <Link
            to="/login"
            className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin lg:text-[20px] text-[18px] text-white hover:text-orange-500 px-10"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {missionVision.map((data, index) => (
          <div key={index} className="shadow-lg bg-white px-6 py-4 rounded-md">
            <h2 className="text-[31px] lg:text-[38px] font-semibold">
              {data?.title}
            </h2>
            <p className="text-gray-600">{data?.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
