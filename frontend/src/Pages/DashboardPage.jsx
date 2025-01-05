import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Dashboard/Sidebar";

const DashboardPage = () => {
  return (
    <section className="flex justify-between">
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default DashboardPage;
