import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// 페이지 import
import Nav from './components/pages/Nav';
import Main from './components/pages/Main';
import Footer from './components/pages/Footer';
import SideBar from './components/pages/Side-bar';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
      <SideBar/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
