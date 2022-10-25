import React from "react";
import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <>
      <OverlayProvider>
        <Overlay />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="reports" element={<Reports />} />
          <Route path="team" element={<Team />} />
          <Route path="getinvolved" element={<GetInvolved />} />
        </Routes>
        <Footer />
      </OverlayProvider>
    </>
  );
}

export default App;
