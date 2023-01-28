import React from "react";
// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";

function SideBar() {  
    // sideBtn 클릭 시, 이벤트 버블링이 발생하여 중복 클릭됨.
    // click 이벤트만 제거할 수 있도록 .off('click') 추가하여 구현
    $('aside .sideBtn').off('click').on('click',function(){
        $('.sideBtn-menu-wrap .sideBtn-menu').toggleClass('active');
    });
  return (
    <aside>
        <div className="sideBtn">
            <div className="imgBox"></div>
            <p>PUIS</p>
        </div>

        <div className="sideBtn-menu-wrap">
            <div className="sideBtn-menu">
                <a href="#none">TOP</a>
                <a href="#none">MENU</a>
                <a href="#none">ASK</a>
                <a href="#none">DARK</a>
            </div>
        </div>
    </aside>
  );
}

export default SideBar;
