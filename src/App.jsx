import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage.jsx';
import Landingpage from './pages/landingpage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}