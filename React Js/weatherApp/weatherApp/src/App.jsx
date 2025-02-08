import "./App.css";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/home";
import Users from "./pages/users";
import Userdashboard from "./pages/userdashboard";
import ContactUs from "./pages/contactus/contactus";

//layouts
import Mainlayout from "./layouts/mainlayout";
import Userdashboardlayout from "./layouts/userdashboardlayout";
import { WeatherProvider } from "./context/WeatherContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Mainlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>

      <Route path="/contactus" element={<ContactUs />} />

      <Route path="/userdashboard/:id" element={<Userdashboardlayout />}>
        <Route path="/userdashboard/:id" element={<Userdashboard />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <WeatherProvider>
      <RouterProvider router={router}></RouterProvider>
    </WeatherProvider>
  );
}

export default App;
