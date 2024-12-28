import { Link } from "react-router-dom";
import powerPlan from "../../assets/images/power-plan.jpg";

const HeroSection = () => {
  return (
    <section
      style={{
        background: `url(${powerPlan})`,
        backgroundSize: "cover",
        height: "80vh",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-center items-center"
    >
      <div className="text-center text-black">
        <h2 className="text-2xl lg:text-4xl font-semibold">Welcome to</h2>
        <h1 className="text-3xl lg:text-5xl font-bold">
          Power Hack&apos;s Website
        </h1>
        <Link
          to="/billing-list"
          className="btn btn-wide bg-violet-700 btn-md mt-5 text-xl text-white"
        >
          Billing page
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
