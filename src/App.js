import Overlay from "./layouts/Overlay";
// import Home from "./pages/Home";
import "./styles/main.scss";
import OverlayProvider from "./overlay/overlayContext";
import NavBar from "./layouts/NavBar";

function App() {
  return (
    <>
      <OverlayProvider>
        <Overlay />
        <NavBar />
      </OverlayProvider>
    </>
  );
}

export default App;
