import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LeftPanel from "../components/leftPanel";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <LeftPanel />
      <Outlet />
    </div>
  );
};

export default MainLayout;
