import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Backend from './pages/Backend';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/backend">Backend</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backend" element={<Backend />} />
      </Routes>
      </>
  );
}

export default App;
