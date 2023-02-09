import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Link 이동 시, 페이지 최상단으로 이동하며 새로고침 되도록 하기
import ScrollToTop from './components/pages/scrollTop';

// 페이지 import
import Nav from './components/pages/Nav';
import Main from './components/pages/Main';
import Footer from './components/pages/Footer';
import SideBar from './components/pages/Side-bar';
import MenuDetail from './components/pages/MenuDetail';
import ReviewRead from './components/pages/Review-read';

function App() {
  return (
    <BrowserRouter className='root'>
      <Nav/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/menu/:menuidx' element={<MenuDetail/>} />
        <Route path='/review/read' element={<ReviewRead/>} />
        {/* <Route path='/review/read/:no' element={<ReviewRead/>} /> */}
      </Routes>
      <SideBar/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
