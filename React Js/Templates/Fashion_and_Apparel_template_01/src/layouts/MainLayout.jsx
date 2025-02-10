import { Outlet } from "react-router-dom";
import Header from "../components/shared/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
