import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Nav from "./Components/Nav";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Nav />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
