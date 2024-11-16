
import './App.css';
import Homepage from './pages/Homepage';
import Architecture from './components/Architecture';
import Detection from './components/Detection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/architecture" element={<Detection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
