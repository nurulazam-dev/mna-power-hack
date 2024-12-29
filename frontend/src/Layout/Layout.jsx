import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Routers from "../Routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
