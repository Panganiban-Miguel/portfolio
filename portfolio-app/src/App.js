import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
