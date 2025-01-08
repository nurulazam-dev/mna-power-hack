import MyDayPicker from "./Overview/MyDayPicker";
import OverviewCards from "./Overview/OverviewCards";

const Overview = () => {
  return (
    <section className="text-black">
      <h1 className="text-4xl mb-6 font-bold">Welcome to the Dashboard!</h1>
      {/* ======================================= */}
      <div className="flex justify-center w-full">
        {/* middle part */}
        <div className="w-full lg:w-[75%] lg:mr-5 mb-6 min-h-screen border border-green-700">
          {/* Cards */}
          <OverviewCards />
        </div>
        {/* last part */}
        <div className="w-full lg:w-[25%]  mb-6 min-h-screen border border-red-700">
          {/* Calendar */}
          <MyDayPicker />
        </div>
      </div>
      {/* ======================================= */}
    </section>
  );
};

export default Overview;
