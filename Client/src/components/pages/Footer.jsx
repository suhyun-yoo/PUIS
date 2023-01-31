import React from "react";
// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";

function Footer() {
    // let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    // console.log(scrollBottom);

    // $(window).on('scroll', function(){
    //     let sct = $(window).scrollTop();
    //     if(sct >= $('.sec2').offset().top-5){
    //         $('html, body').animate({
    //             scrollTop : scrollBottom
    //         }, 1000)
    //     }
    // });
    
  return (
    <footer>
        <h1>footer</h1>
    </footer>
  );
}

export default Footer;
