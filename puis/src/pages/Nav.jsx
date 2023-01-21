import React from 'react';
// css 연결
import '../css/reset.css';
import '../css/style.css';
// jquey 연결
import $ from 'jquery';

function Nav() {
    // hamgurger 버튼 클릭 시, submenu 보이기
    const menuClick = () => {
        $('.wrap header .hamburger').toggleClass('active');
        $('.wrap .submenu').toggleClass('active');
    };

    return (
        <div className="wrap">
            <header>
                <div className="container">
                    <div className='hamburger' onClick={menuClick}>
                        <span></span><span></span><span></span>
                    </div>
                    <div className="logo"> PUIS </div>
                    <div className="icon-box">
                        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 70.0002H20C17.7909 70.0002 16 68.2094 16 66.0002V64.6639C16 58.8513 19.6061 53.6486 25.049 51.6087C34.6889 47.9957 45.3111 47.9957 54.951 51.6087C60.3939 53.6486 64 58.8513 64 64.6639V66.0002C64 68.2094 62.2091 70.0002 60 70.0002Z" stroke="#F1F2F0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33.901 38.8673C37.729 40.8336 42.2702 40.8336 46.0981 38.8673C49.6607 37.0373 52.2131 33.7042 53.0512 29.7878L53.2748 28.7425C54.1318 24.7375 53.2164 20.5576 50.764 17.2773L50.4049 16.797C47.9521 13.5163 44.0958 11.5845 39.9996 11.5845C35.9034 11.5845 32.047 13.5163 29.5943 16.797L29.2352 17.2773C26.7827 20.5576 25.8674 24.7375 26.7243 28.7425L26.948 29.7878C27.786 33.7042 30.3385 37.0373 33.901 38.8673Z" stroke="#F1F2F0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </header>

            <ul className="submenu">
                <li>MENU</li>
                <li>REVIEW</li>
                <li>ORDER</li>
            </ul>
        </div>
    );
}

export default Nav;
