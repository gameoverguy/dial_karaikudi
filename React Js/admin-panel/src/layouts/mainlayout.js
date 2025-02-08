import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function mainlayout() {
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
