import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Overview from "../components/Dashboard/Overview";
import ManageUsers from "../components/Dashboard/ManageUser/ManageUsers";
import ManageBills from "../components/Dashboard/ManageBills";
import Settings from "../components/Dashboard/Settings";
import Profile from "../components/Dashboard/Profile";
import UnpaidBills from "../components/Dashboard/UnpaidBills";
import AddBill from "../components/Dashboard/AddBill";
import RequireAuth from "./RequireAuth";
import ContactPage from "../Pages/ContactPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* dashboard routes */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route index element={<Overview />} />
        <Route
          path="manage-users"
          element={
            <ProtectedRoutes allowedRoles={["admin"]}>
              <ManageUsers />
            </ProtectedRoutes>
          }
        />
        <Route
          path="manage-bills"
          element={
            <ProtectedRoutes allowedRoles={["admin"]}>
              <ManageBills />
            </ProtectedRoutes>
          }
        />
        <Route
          path="add-bill"
          element={
            <ProtectedRoutes allowedRoles={["billingOfficer", "admin"]}>
              <AddBill />
            </ProtectedRoutes>
          }
        />
        <Route
          path="unpaid-bills"
          element={
            <ProtectedRoutes allowedRoles={["accountant", "admin"]}>
              <UnpaidBills />
            </ProtectedRoutes>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
