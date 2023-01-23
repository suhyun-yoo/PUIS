import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 페이지 import
import Nav from './components/pages/Nav';
import Main from './components/pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
