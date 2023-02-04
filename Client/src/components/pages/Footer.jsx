import React from "react";
import { Link } from "react-router-dom";
// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";
// img 연결
import instagram from '../img/instagram.png';
import kakaoTalk from '../img/kakao-talk.png';


function Footer() {
  return (
    <footer>
        <div className="footer-left">
            <div className="footer-left-top"><span>PUIS</span> DESSERT</div>
            <div className="footer-left-middle">TEL : 010-4111-2238</div>
            <div className="footer-left-bottom">
              <Link className="footer-icon" to="https://www.instagram.com/__puis/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram icon" />
              </Link>
              <Link className="footer-icon" to="https://smartstore.naver.com/__puis" target="_blank" rel="noreferrer">
                <p>N</p>
              </Link>
              <Link className="footer-icon" to="https://open.kakao.com/" target="_blank" rel="noreferrer">
                <img src={kakaoTalk} alt="kakao-talk icon"/>
              </Link>
            </div>
        </div>
        <div className="footer-right">
          <p>상호명 : 퓨이 (Puis)</p>
          <p>대표자 : 선승완</p>
          <p>사업자등록번호 : 3880302461</p>
          <p>사업장 소재지 : 경기도 고양시 일산로316번길 53-6</p>
          <p>E-mail : topsun416@naver.com</p>
        </div>
    </footer>
  );
}

export default Footer;
