import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Mainlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>

      <Route path="/contactus" element={<ContactUs />} />

      <Route path="/userdashboard" element={<Userdashboardlayout />}>
        <Route path=":id" element={<Userdashboard />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
