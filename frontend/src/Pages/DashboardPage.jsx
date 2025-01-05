import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardPage = () => {
  return (
    <section className="flex justify-between">
      <Sidebar />
      <div className="mt-20 w-full px-8">
        <Dashboard />
      </div>
    </section>
  );
};

export default DashboardPage;
