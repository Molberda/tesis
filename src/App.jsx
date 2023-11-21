import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Nav from './Components/Nav.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav/>
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
