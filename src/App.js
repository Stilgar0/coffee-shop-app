import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import CoffeeDetail from './components/CoffeeDetail';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(/background.png)`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/coffee/:id" element={<CoffeeDetail />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;