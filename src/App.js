import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalCSS from './global.css';

function App() {
  return (
    <div>
      <GlobalCSS />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/search" element={<h1>Search</h1>} />
        </Routes>
      </BrowserRouter>
      App Placeholder
    </div>
  );
}

export default App;
