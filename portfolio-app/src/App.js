import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PizzaAppWriteUp from './projects/PizzaAppWriteUp';
import CardAppWriteUp from './projects/CardAppWriteUp';
import TravelListAppWriteUp from './projects/TravelListAppWriteUp';
import WasteWiseWriteUp from './projects/WasteWiseWriteUp';
import BaroWriteUp from './projects/BaroWriteUp';
import EduReminderWriteUp from './projects/EduReminderWriteUp';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  
  function ResetScroll() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return null;
}
  return (
    <Router basename='portfolio'>
      <ResetScroll />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/baro" element={<BaroWriteUp />} />
        <Route path="/projects/pizza-app" element={<PizzaAppWriteUp />} />
        <Route path="/projects/travel-list-app" element={<TravelListAppWriteUp />} />
        <Route path="/projects/card-app" element={<CardAppWriteUp />} />
        <Route path="/projects/waste-wise" element={<WasteWiseWriteUp />} />
        <Route path="/projects/edureminder" element={<EduReminderWriteUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
