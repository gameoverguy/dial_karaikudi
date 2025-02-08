import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import bgImage from "../images/bg.png";

export default function Userdashboardlayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative z-100">
        <Navbar />
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
