import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Templates from "./pages/templates";
import Support from "./pages/support";
import ContactUs from "./pages/contactUs";
import Pricing from "./pages/pricing";
import { ScrollToTop, ScrollToTopOnReload } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopOnReload />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/support" element={<Support />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
