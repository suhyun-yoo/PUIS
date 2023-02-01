import React from "react";
// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";

function Footer() {
  return (
    <footer>
        <div className="footer-left">
            <div className="footer-left-top"></div>
            <div className="footer-left-body"></div>
        </div>
        <div className="footer-right"></div>
    </footer>
  );
}

export default Footer;
