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
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route path="/search" element={<h1>Search</h1>} />
          <Route>404 - Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
