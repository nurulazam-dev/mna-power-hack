import BillBarChart from "./Overview/BillBarChart";
import BillsUsersSummary from "./Overview/BillsUsersSummary";
import MyDayPicker from "./Overview/MyDayPicker";
import OverviewCards from "./Overview/OverviewCards";
import OverviewUserBanner from "./Overview/OverviewUserBanner";
import TopBillHolder from "./Overview/TopBillHolder";

const Overview = () => {
  return (
    <section className="text-black">
      <h1 className="lg:text-4xl text-[23px] mb-2 font-bold text-slate-800">
        Welcome to the Dashboard!
      </h1>
      {/* ======================================= */}
      <div className="lg:flex justify-center w-full">
        {/* middle part */}
        <div className="w-full lg:w-[65%] lg:mr-5 mb-6 min-h-screen">
          <OverviewUserBanner />
          <BillsUsersSummary />
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
