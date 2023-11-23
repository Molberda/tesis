import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav.jsx";
import Modal from "./Components/Modal/Modal.jsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ArtModal from "./ArtPage/ArtModal.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [artModalOpen, setArtModalOpen] = useState(false);

  const close = () => {
    document.body.classList.remove("modalOpen");
    setModalOpen(false);
  };

  const closeArt = () => {
    document.body.classList.remove("modalOpen");
    setArtModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <Nav modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <AnimatedRoutes
        artModalOpen={artModalOpen}
        setArtModalOpen={setArtModalOpen}
      />
      <Footer />
      <AnimatePresence initial={false}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        {artModalOpen && (
          <ArtModal modalOpen={artModalOpen} handleClose={closeArt} />
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
