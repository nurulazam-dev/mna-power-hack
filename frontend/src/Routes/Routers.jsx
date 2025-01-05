import { Route, Routes } from "react-router-dom";
import BillingPage from "../Pages/BillingPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../Pages/NotFound";
import DashboardPage from "../Pages/DashboardPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/billing-list" element={<BillingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route
        path="/billing-list"
        element={
          <ProtectedRoutes allowedRoles={["accountant"]}>
            <BillingPage />
          </ProtectedRoutes>
        }
      />
      {/* <Route path="/about" element={<AboutUs />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
