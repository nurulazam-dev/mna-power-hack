import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardPage = () => {
  return (
    <section className="flex justify-between">
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default DashboardPage;
