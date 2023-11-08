import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
