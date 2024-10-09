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
import About from "./pages/About/About";
import VinsumAxpressHistory from "./pages/About/VinsumAxpressHistory";
import MissionVision from "./pages/About/MissionVision";
import Chairman from "./pages/About/Chairman";
import LeadershipTeam from "./pages/About/LeadershipTeam";
import OurClients from "./pages/About/OurClients";
import OurNetwork from "./pages/About/OurNetwork";

export default function App() {
  return (
    <>
      <ChatBot />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.ABOUT.ABOUTUS} element={<About />}>
          <Route index element={<VinsumAxpressHistory />} />
          <Route
            path={ROUTES.ABOUT.MISSION_VISIONOUR_VALUES}
            element={<MissionVision />}
          />
          <Route
            path={ROUTES.ABOUT.CHAIRMAAN_AND_MANAGING_DIRECTOR}
            element={<Chairman />}
          />
          <Route path={ROUTES.ABOUT.OUR_NETWORK} element={<OurNetwork />} />
          <Route path={ROUTES.ABOUT.OUR_CLIENTS} element={<OurClients />} />
          <Route
            path={ROUTES.ABOUT.LEADERSHIP_TEAM}
            element={<LeadershipTeam />}
          />
        </Route>
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
