import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 페이지 import
import Nav from './pages/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      {/* <Routes>
        <Route path='/' element={</>} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
