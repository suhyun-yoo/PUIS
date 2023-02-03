import React from "react";

// css 연결
import "../css/reset.css";
import "../css/style.css";

// jquey 연결
import $ from "jquery";

function MenuDetail() {
  $(window).on('scroll', function(){
    $('.slide-page-btns .page-btn:nth-child(1)').addClass('active');
    $('.slide-page-btns .page-btn:nth-child(2)').removeClass('active');
    $('.slide-page-btns .page-btn:nth-child(3)').removeClass('active');
    $('.slide-page-btns .page-btn:nth-child(4)').removeClass('active');
  });
    return (
    <div className="menuDetail">
      <h1>MENU DETAIL</h1>
    </div>
  );
}

export default MenuDetail;
