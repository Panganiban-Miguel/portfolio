import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PizzaAppWriteUp from './projects/PizzaAppWriteUp';
import CardAppWriteUp from './projects/CardAppWriteUp';
import TravelListAppWriteUp from './projects/TravelListAppWriteUp';
import WasteWiseWriteUp from './projects/WasteWiseWriteUp';
import BaroWriteUp from './projects/BaroWriteUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <main className="home-page">
      <header>
        <p>
          Programmer. Developer. Learner.
        </p>
      </header>
      
    </main>
  );
}

function App() {
  return (
    <Router basename='portfolio'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pizza-app" element={<PizzaAppWriteUp />} />
          <Route path="/projects/card-app" element={<CardAppWriteUp />} />
          <Route path="/projects/travel-list-app" element={<TravelListAppWriteUp />} />
          <Route path="/projects/waste-wise" element={<WasteWiseWriteUp />} />
          <Route path="/projects/baro" element={<BaroWriteUp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
