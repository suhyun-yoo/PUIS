import React from "react";
import { Link } from 'react-router-dom';

// 풀페이지 연결
import { FullPage, Slide } from "react-full-page";
// css 연결
import "../css/reset.css";
import "../css/style.css";

// section1 영역 img 
import pudding1 from '../img/조선향미푸딩.jpg';
import pudding2 from '../img/바나나푸딩.jpg';
import pudding3 from '../img/바나나카라멜푸딩.jpg';
import pudding4 from '../img/베리치즈푸딩.jpg';
import pudding5 from '../img/다크초코푸딩.jpg';
import pudding6 from '../img/민트초코푸딩.jpg';
import pudding7 from '../img/제주말차푸딩.jpg';
import pudding8 from '../img/티라미수푸딩.jpg';
import pudding9 from '../img/인절미푸딩.jpg';
import pudding10 from '../img/흑임자푸딩.jpg';
import pudding11 from '../img/쑥푸딩.jpg';
import pudding12 from '../img/밀크티푸딩.jpg';
// section2 영역 img
import financier1 from '../img/플레인휘낭시에.jpg';
import financier2 from '../img/마카다미아휘낭시에.jpg';
import financier3 from '../img/스카치헤이즐넛휘낭시에.jpg';
import financier4 from '../img/아몬드카라멜휘낭시에.jpg';
import financier5 from '../img/레몬홍차휘낭시에.jpg';
import financier6 from '../img/소금초코휘낭시에.jpg';
import financier7 from '../img/코코넛휘낭시에.jpg';
import financier8 from '../img/흑임자휘낭시에.jpg';
import financier9 from '../img/바질치즈휘낭시에.jpg';
import financier10 from '../img/애플크럼블휘낭시에.jpg';


// jquey 연결
import $ from "jquery";

function Main() {
    // window 화면의 위치값에 따라 slide-page-btn 영역 활성화 및 제거
    const wh = $(window).height();
    $(window).on('scroll', function(){
      let sct = $(window).scrollTop();
      // console.log('sct : ', sct);
      // console.log('height : ', wh);
  
      if(sct < wh){
        $('.slide-page-btns .page-btn:nth-child(1)').addClass('active');
        $('.slide-page-btns .page-btn:nth-child(2)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(3)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(4)').removeClass('active');
      } else if(sct === wh){
        $('.slide-page-btns .page-btn:nth-child(2)').addClass('active');
        $('.slide-page-btns .page-btn:nth-child(1)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(3)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(4)').removeClass('active');
      } else if(sct === wh*2){
        $('.slide-page-btns .page-btn:nth-child(3)').addClass('active');
        $('.slide-page-btns .page-btn:nth-child(1)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(2)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(4)').removeClass('active');
      } else if(sct > wh*3){
        $('.slide-page-btns .page-btn:nth-child(4)').addClass('active');
        $('.slide-page-btns .page-btn:nth-child(1)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(2)').removeClass('active');
        $('.slide-page-btns .page-btn:nth-child(3)').removeClass('active');
      }
    });
  return (
    <>
    <FullPage controls>
      {/* banner 영역 */}
      <Slide>
        <div className="banner">
          <div className="banner-box-left"></div>
          <div className="banner-box-right">
            <div className="txt-box">
              <h2>" PUIS DESSERT "</h2>
              <p>take out pudding house</p>
              <div className="time">
                <p>Open _ 12:00</p>
                <p>Close _ 20:00</p>
              </div>
            </div>
            <div className="img-box"></div>
          </div>
        </div>
      </Slide>

      {/* section1 영역 */}
      <Slide>
        <section className="sec1">
          <div className="sec1-head">
            <div className="txt-box">
              <h2>pudding</h2>
              <p>탱글탱글한 일본식 푸딩이 아닌 떠먹는 케이크 스타일의 푸딩</p>
              <p>닐라웨이퍼(계란과자)와 신선한 크림 그리고 각종 충전물들을 조화롭게 풀어낸 디저트</p>
            </div>
          </div>
          <div className="sec1-body">
            <div className="prevBtn"></div>
            <div className="slide-wrap-outer">
              <div className="slide-wrap">
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <p className="tag">Signature</p>
                    <img src={pudding1} alt="조선향미푸딩" title="조선향미푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>조선향미 푸딩</p>
                    <span>4.3</span>
                  </div>
                  </div>
                </Link>
                <Link href="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding2} alt="바나나푸딩" title="바나나푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>바나나 푸딩</p>
                    <span>4.0</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding3} alt="바나나카라멜푸딩" title="바나나카라멜푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>바나나카라멜 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding4} alt="베리치즈푸딩" title="베리치즈푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>베리치즈 푸딩</p>
                    <span>5.3</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding5} alt="다크초코푸딩" title="다크초코푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>다크초코 푸딩</p>
                    <span>5.0</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding6} alt="민트초코푸딩" title="민트초코푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>민트초코 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding7} alt="제주말차푸딩" title="제주말차푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>제주말차 푸딩</p>
                    <span>5.0</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding8} alt="티라미수푸딩" title="티라미수푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>티라미수 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding9} alt="인절미푸딩" title="인절미푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>인절미 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding10} alt="흑임자푸딩" title="흑임자푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>흑임자 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding11} alt="쑥푸딩" title="쑥푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>쑥 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className="slide">
                  <div className="img-box">
                    <img src={pudding12} alt="밀크티푸딩" title="밀크티푸딩"/>
                  </div>
                  <div className="txt-box">
                    <p>밀크티 푸딩</p>
                    <span>4.5</span>
                  </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="nextBtn"></div>
          </div>
        </section>
      </Slide>

      {/* section2 영역 */}
      <Slide>
        <section className="sec1 sec2">
          <div className="sec1-head sec2-head">
            <div className="txt-box">
              <h2>Financier</h2>
              <p>특별한 레시피로 프랑스 고메버터와 100% 아몬드 가루를 사용한 휘낭시에</p>
              <p>버터의 색을 진하게 내어 풍미를 더욱 살리는 방식으로 구워낸 휘낭시에</p>
            </div>
          </div>
          <div className="sec2-body">
            <div className="prevBtn"></div>
            <div className="slide-wrap-outer">
              <div className="slide-wrap">
                <div className="slide">
                  <div className="img-box">
                    <img src={financier1} alt="플레인휘낭시에" title="플레인휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>플레인 휘낭시에</p>
                    <span>2.0</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier2} alt="마카다미아휘낭시에" title="마카다미아휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>마카다미아 휘낭시에</p>
                    <span>2.3</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier3} alt="스카치헤이즐넛휘낭시에" title="스카치헤이즐넛휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>스카치 헤이즐넛 휘낭시에</p>
                    <span>2.3</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier4} alt="아몬드카라멜휘낭시에" title="아몬드카라멜휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>아몬드 카라멜 휘낭시에</p>
                    <span>2.3</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier5} alt="레몬홍차휘낭시에" title="레몬홍차휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>레몬홍차 휘낭시에</p>
                    <span>2.3</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier6} alt="소금초코휘낭시에" title="소금초코휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>소금초코 휘낭시에</p>
                    <span>2.6</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier7} alt="코코넛휘낭시에" title="코코넛휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>코코넛 휘낭시에</p>
                    <span>2.6</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier8} alt="흑임자휘낭시에" title="흑임자휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>흑임자 휘낭시에</p>
                    <span>2.6</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier9} alt="바질치즈휘낭시에" title="바질치즈휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>바질치즈 휘낭시에</p>
                    <span>2.6</span>
                  </div>
                </div>
                <div className="slide">
                  <div className="img-box">
                    <img src={financier10} alt="애플크럼블휘낭시에" title="애플크럼블휘낭시에"/>
                  </div>
                  <div className="txt-box">
                    <p>애플크럼블 휘낭시에</p>
                    <span>2.6</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="nextBtn"></div>
          </div>
        </section>
      </Slide>
    </FullPage>

    <div className="slide-page-btns">
      <div className="page-btn active"></div>
      <div className="page-btn"></div>
      <div className="page-btn"></div>
      <div className="page-btn"></div>
    </div>
    </>
  );
}

export default Main;
