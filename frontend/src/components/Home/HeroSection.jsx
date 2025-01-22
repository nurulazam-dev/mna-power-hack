import { Link } from "react-router-dom";
import powerPlan from "../../assets/images/power-plan.jpg";
import { MdArrowOutward } from "react-icons/md";

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
          className=" hover:bg-white py-[7px] rounded font-normal text-[17px] mb-2  hover:text-black flex justify-center items-center px-5 btn btn-md max-w-64 bg-violet-700 mt-5 text-xl text-white mx-auto"
        >
          Bill Add Page <MdArrowOutward className="h-5 w-5 ml-1" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
