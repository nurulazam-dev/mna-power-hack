import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Dashboard";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Overview from "../components/Dashboard/Overview";
import ManageUsers from "../components/Dashboard/ManageUser/ManageUsers";
import ManageBills from "../components/Dashboard/ManageBills";
import Settings from "../components/Dashboard/Settings";
import Profile from "../components/Dashboard/Profile";
import UnpaidBills from "../components/Dashboard/UnpaidBills";
import AddBill from "../components/Dashboard/AddBill";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/billing-list" element={<AddBill />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* dashboard */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="manage-bills" element={<ManageBills />} />
        <Route path="add-bill" element={<AddBill />} />
        <Route path="unpaid-bills" element={<UnpaidBills />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* dashboard */}

      {/*  <Route
        path="/billing-list"
        element={
          <ProtectedRoutes allowedRoles={["billingOfficer"]}>
            <AddBill />
          </ProtectedRoutes>
        }
      /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
