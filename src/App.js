
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wallet from './pages/Wallet';

import Connect from './pages/Connect';
import Header from './component/Header';




function App() {
  return (
    <div className='bg-black mx-auto'>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>

      </Router>
    </div>
    
  );
}

export default App;
