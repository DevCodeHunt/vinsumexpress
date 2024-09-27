import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ROUTES from "./utils/routes";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}


