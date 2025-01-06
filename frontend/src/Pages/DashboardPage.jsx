import Dashboard from "../components/Dashboard/Dashboard";
import ManageBills from "../components/Dashboard/ManageBills";
import ManageUsers from "../components/Dashboard/ManageUsers";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardPage = () => {
  return (
    <section className="flex justify-between">
      <Sidebar />
      <div className="mt-20 w-full px-8">
        <Dashboard />
        <ManageUsers />
        <ManageBills />
      </div>
    </section>
  );
};

export default DashboardPage;
