import { Routes, Route } from 'react-router-dom';
import ScrollManager from './components/ScrollManager.jsx';
import { MotionManager } from './components/Motion.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Corner from './pages/Corner.jsx';
import MedicareCaseStudy from './pages/MedicareCaseStudy.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <MotionManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/corner" element={<Corner />} />
        <Route path="/work/medicare" element={<MedicareCaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
