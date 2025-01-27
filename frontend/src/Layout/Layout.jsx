import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 py-4">
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
