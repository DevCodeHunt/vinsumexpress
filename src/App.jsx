import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ROUTES from "./utils/routes";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <>
      <ChatBot />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.CAREER} element={<Career />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}
