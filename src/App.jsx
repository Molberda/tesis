import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav.jsx";
import Modal from "./Components/Modal/Modal.jsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <Nav modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <AnimatedRoutes />
      <Footer />
      <AnimatePresence
      initial={false}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </Router>
  );
}

export default App;
