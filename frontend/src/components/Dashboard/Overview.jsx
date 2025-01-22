import BillBarChart from "./Overview/BillBarChart";
import MyDayPicker from "./Overview/MyDayPicker";
import OverviewCards from "./Overview/OverviewCards";
import OverviewUserBanner from "./Overview/OverviewUserBanner";
import Summary from "./Overview/summary";
import TopBillHolder from "./Overview/TopBillHolder";

const Overview = () => {
  return (
    <section className="text-black">
      <h1 className="text-4xl mb-4 font-bold">Welcome to the Dashboard!</h1>
      {/* ======================================= */}
      <div className="flex justify-center w-full">
        {/* middle part */}
        <div className="w-full lg:w-[65%] lg:mr-5 mb-6 min-h-screen">
          <OverviewUserBanner />
          <Summary />
          <BillBarChart />
          <OverviewCards />
        </div>
        {/* last part */}
        <div className="w-full lg:w-[35%]  mb-6 min-h-screen">
          <MyDayPicker />
          <TopBillHolder />
        </div>
      </div>
      {/* ======================================= */}
    </section>
  );
};

export default Overview;
