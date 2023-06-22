import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";

import Overlay from "./layouts/Overlay";
import "./styles/main.scss";
import OverlayProvider from "./overlay/overlayContext";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Reports from "./pages/Reports";
import GetInvolved from "./pages/GetInvolved";
import Footer from "./layouts/Footer";
import Team from "./pages/Team";
import Funding from "./pages/Funding";
import Advocacy from "./pages/Advocacy";
import Capacity from "./pages/Capacity";
import Coordination from "./pages/Coordination";
import NotFound from "./pages/NotFound";
import Reframe from "./pages/Reframe";
import Careers from "./pages/Careers";

const TRACKING_ID = "G-49VGBE0RLB";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <OverlayProvider>
        <Overlay />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="advocacy" element={<Advocacy />} />
          <Route path="capacity" element={<Capacity />} />
          <Route path="coordination" element={<Coordination />} />
          <Route path="funding" element={<Funding />} />
          <Route path="reports" element={<Reports />} />
          <Route path="team" element={<Team />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="reframe" element={<Reframe />} />
          <Route path="careers" element={<Careers />} />
        </Routes>
        <Footer />
      </OverlayProvider>
    </>
  );
}

export default App;
