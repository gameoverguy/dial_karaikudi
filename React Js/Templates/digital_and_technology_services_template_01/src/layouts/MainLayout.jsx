import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
