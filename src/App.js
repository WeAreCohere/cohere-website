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
          <Route path="getinvolved" element={<GetInvolved />} />
        </Routes>
      </OverlayProvider>
    </>
  );
}

export default App;
