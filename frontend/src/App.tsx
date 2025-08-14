import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

function App() {
  return (
    <HashRouter> {/* 2. BrowserRouter를 HashRouter로 교체하고, basename 속성은 삭제합니다. */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
