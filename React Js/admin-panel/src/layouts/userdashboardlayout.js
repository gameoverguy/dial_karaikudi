import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Userdashboardlayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
