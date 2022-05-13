import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
