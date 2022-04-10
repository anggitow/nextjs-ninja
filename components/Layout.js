import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="py-5 container-ninja flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
