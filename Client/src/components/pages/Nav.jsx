import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";
// axios 연결
import axios from "axios";

function Nav() {
  // 1. window 스크롤 발생 시, 위치값에 따라 header 영역에 active 클래스 추가 및 제거하기
  $(window).on('scroll', function(){
    let sct = $(window).scrollTop();
    const wh = $(window).height();
    if(sct > wh){
      $('.wrap header').addClass('active');
    } else {
     $('.wrap header').removeClass('active');
    }
  })

  // 2. hamgurger 버튼 클릭 시, submenu 보이기
  const menuClick = () => {
    $(".wrap header .hamburger").toggleClass("active");
    $(".wrap .submenu").toggleClass("active");
  };

  // 3-1. submenu > menu 버튼 클릭 시, menu slide 영역으로 화면 이동하기
  const click_menuSub = () => {
    $(".wrap header .hamburger").removeClass("active");
    $(".wrap .submenu").removeClass("active");
    $("html,body").animate(
      {
        scrollTop: $(".sec1").offset().top,
      },
      1000
    );
  };
  // 3-2. submenu > review 버튼 클릭 시, review 페이지 이동하기
  const navigate = useNavigate();
  const review = () => {
    $(".wrap header .hamburger").removeClass("active");
    $('.wrap .submenu').removeClass('active');
    navigate('/review/read');
  }

  // 4. icon-box 영역 클릭 시, 로그인 및 회원가입 팝업창 띄우기
  const iconBox = () => {
    $(".wrap .loginBox").addClass("active");
  };
  // 5. closeBtn 클릭 시, 로그인 및 회원가입 팝업창 닫기
  const closeModal = () => {
    $(".wrap .loginBox").removeClass("active");
    $(".wrap .signupBox").removeClass("active");
  };
  // 6. 로그인 팝업창 입력 내용 axios 백단으로 보내기
  // 6-1. 입력창에 입력된 내용 변수에 담기
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    // 6-2. ID, PW 백단으로 넘기기
    const url = "http://localhost:5000/login";
    // const headers = {
    //   "Content-Type": "application/json",
    // };
    const body = {
      ID: ID,
      PW: PW,
    };
    axios.post(url, body)
    .then((res) => {
      console.log(res.data.result);
      if(res.data.result === 'success'){
        // 전송 후, 입력창 초기화 및 팝업 닫기
        setID("");
        setPW("");
        $(".wrap .loginBox").removeClass("active");
        alert('로그인 성공');
      } else {
        alert('존재하지 않는 회원입니다. 회원가입 후 이용해주세요.');
        setID("");
        setPW("");
        // 회원가입 팝업 띄우기
        $(".wrap .signupBox").addClass("active");
        $(".wrap .loginBox").removeClass("active");
      }
    });
  };

  // 7. 회원가입하기 버튼 클릭 시, 회원가입 팝업창 띄우기
  const signup = () => {
    $(".wrap .loginBox").removeClass("active");
    $(".wrap .signupBox").addClass("active");
  };
  // 8. 회원가입하기 버튼 클릭 시, 회원가입 팝업창 띄우기
  const login = () => {
    $(".wrap .loginBox").addClass("active");
    $(".wrap .signupBox").removeClass("active");
  };

  // 9. 회원가입 팝업창 입력 내용 유효성 검사 후, axios 백단으로 넘기기
  // 9-1. 입력창에 입력된 내용 변수에 담기 (id pw는 앞서 선언했기 때문에 패스)
  const [PWcheck, setPWcheck] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState();
  const [Phone, setPhone] = useState();

  const signupUser = (e) => {
    e.preventDefault();

    // 9-2. 입력값 검사하기
    if (PW !== PWcheck) {
      // 비밀번호 검사하기
      alert("비밀번호를 확인해주세요");
    } else if (ID === "" || PW === "" || PWcheck === "" || Email === "") {
      alert("필수 입력창을 확인해주세요");
      // 필수입력창 확인하기
      if(ID === ""){
        $('.wrap .signupBox.active .signup-txt .input-box input:nth-child(1)').addClass('essential');
      };
      if(PW === ""){
        $('.wrap .signupBox.active .signup-txt .input-box input:nth-child(2)').addClass('essential');
      };
      if(PWcheck === ""){
        $('.wrap .signupBox.active .signup-txt .input-box input:nth-child(3)').addClass('essential');
      };
      if(Email === ""){
        $('.wrap .signupBox.active .signup-txt .input-box input:nth-child(4)').addClass('essential');
      };
    } else if (Email.includes("@") === false) {
      // 이메일 검사하기
      alert("[example@naver.com] 형식으로 입력해주세요");
    } else {
      $('.wrap .signupBox.active .signup-txt .input-box input').removeClass('essential');

      // 9-3. 회원가입 정보 백단으로 넘기기
      const url = "http://localhost:5000/signup";
      //   const headers = {
      //     "Content-Type": "application/json",
      //   };
      const body = {
        ID: ID,
        PW: PW,
        Email: Email,
        Address: Address,
        Phone: Phone,
      };
      axios.post(url, body)
      .then((res) => {
        console.log(res.data.regist);
        // 회원가입 입력창 초기화
        setID("");
        setPW("");
        setPWcheck("");
        setEmail("");
        setAddress();
        setPhone();

        if(res.data.regist === 'success'){
          // 회원가입 완료 알림창 띄우기
          alert("회원가입 완료! 로그인하기");

          // 로그인 팝업 띄우기
          $(".wrap .signupBox").removeClass("active");
          $(".wrap .loginBox").addClass("active");
        } else {
          alert('실패')
        }


      });
    }
  };

  // 10. logo 클릭 시, html 문서 최상단으로 이동하기
  $('.wrap header .logo').on('click', function(){
    $('html, body').animate({
      scrollTop : 0
    }, 1000)
  });

  return (
    <div className="wrap">
      <header>
        <div className="container">
          <div className="hamburger" onClick={menuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/"><div className="logo"> PUIS </div></Link>
          <div className="icon-box" onClick={iconBox}>
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 70.0002H20C17.7909 70.0002 16 68.2094 16 66.0002V64.6639C16 58.8513 19.6061 53.6486 25.049 51.6087C34.6889 47.9957 45.3111 47.9957 54.951 51.6087C60.3939 53.6486 64 58.8513 64 64.6639V66.0002C64 68.2094 62.2091 70.0002 60 70.0002Z"
                stroke="#F1F2F0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.901 38.8673C37.729 40.8336 42.2702 40.8336 46.0981 38.8673C49.6607 37.0373 52.2131 33.7042 53.0512 29.7878L53.2748 28.7425C54.1318 24.7375 53.2164 20.5576 50.764 17.2773L50.4049 16.797C47.9521 13.5163 44.0958 11.5845 39.9996 11.5845C35.9034 11.5845 32.047 13.5163 29.5943 16.797L29.2352 17.2773C26.7827 20.5576 25.8674 24.7375 26.7243 28.7425L26.948 29.7878C27.786 33.7042 30.3385 37.0373 33.901 38.8673Z"
                stroke="#F1F2F0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* submenu 영역 */}
      <ul className="submenu">
        <li onClick={click_menuSub}>MENU</li>
        <li onClick={review}>REVIEW</li>
        <li>ORDER</li>
      </ul>

      {/* 로그인 팝업 */}
      <div className="loginBox">
        <div className="login-txt">
          <div className="closeBtn" onClick={closeModal}>
            <span></span>
            <span></span>
          </div>
          <h2>Login</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="ID"
              onChange={(e) => setID(e.target.value)}
              value={ID}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPW(e.target.value)}
              value={PW}
            />
            <p className="submitBtn" onClick={loginUser}>
              로그인
            </p>
          </div>
          <p className="alarm" onClick={signup}>
            회원가입하기
          </p>
        </div>
      </div>

      {/* 회원가입 팝업 */}
      <div className="signupBox">
        <div className="signup-txt">
          <div className="closeBtn" onClick={closeModal}>
            <span></span>
            <span></span>
          </div>
          <h2>Sign UP</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="* ID"
              onChange={(e) => setID(e.target.value)}
              value={ID}
            />
            <input
              type="password"
              placeholder="* Password"
              onChange={(e) => setPW(e.target.value)}
              value={PW}
            />
            <input
              type="password"
              placeholder="* Password Check"
              onChange={(e) => setPWcheck(e.target.value)}
              value={PWcheck}
            />
            <input
              type="email"
              placeholder="* E - mail"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={Address}
            />
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={Phone}
            />

            <p className="submitBtn" onClick={signupUser}>
              회원가입
            </p>
          </div>
          <p className="alarm" onClick={login}>
            로그인하기
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
