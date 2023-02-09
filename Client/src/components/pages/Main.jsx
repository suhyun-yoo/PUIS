import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
// css 연결
import "../css/reset.css";
import styles from '../css/Main.module.css';
import axios from "axios";

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
// import $ from "jquery";

function Main() {
  // 더미 데이터 가져오기
  const [item, setItem] = useState();
  // const [pudding, setPudding] = useState();

  useEffect(() => {
    axios.get('/main',{withCredentials: true})
      .then((res) => 
        setItem(res.data.result),
        // setPudding(item.map(item => (item.item_img1)))
        )
  }, []);
  
  // console.log(item);

  return (
    <>
      {/* banner 영역 */}
        <div className={styles.banner}>
          <div className={styles.bannerBox_left}></div>
          <div className={styles.bannerBox_right}>
            <div className={styles.txtBox}>
              <h2>" PUIS DESSERT "</h2>
              <p>take out pudding house</p>
              <div className={styles.time}>
                <p>Open _ 12:00</p>
                <p>Close _ 20:00</p>
              </div>
            </div>
            <div className={styles.imgBox}></div>
          </div>
        </div>

      {/* section1 영역 */}
        {/* <section className={styles.sec1}>
          <div className={styles.sec1_head}>
            <div className={styles.txtBox}>
              <h2>pudding</h2>
              <p>탱글탱글한 일본식 푸딩이 아닌 떠먹는 케이크 스타일의 푸딩</p>
              <p>닐라웨이퍼(계란과자)와 신선한 크림 그리고 각종 충전물들을 조화롭게 풀어낸 디저트</p>
            </div>
          </div>
          <div className={styles.sec1_body}>
            <div className={styles.prevBtn}></div>
            <div className={styles.slide_wrap_outer}>
              <div className={styles.slide_wrap}>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <p className={styles.tag}>Signature</p>
                      <img src={pudding1} alt="조선향미푸딩" title="조선향미푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>조선향미 푸딩</p>
                      <span>4.3</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding2} alt="바나나푸딩" title="바나나푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>바나나 푸딩</p>
                      <span>4.0</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding3} alt="바나나카라멜푸딩" title="바나나카라멜푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>바나나카라멜 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding4} alt="베리치즈푸딩" title="베리치즈푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>베리치즈 푸딩</p>
                      <span>5.3</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding5} alt="다크초코푸딩" title="다크초코푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>다크초코 푸딩</p>
                      <span>5.0</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding6} alt="민트초코푸딩" title="민트초코푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>민트초코 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding7} alt="제주말차푸딩" title="제주말차푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>제주말차 푸딩</p>
                      <span>5.0</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding8} alt="티라미수푸딩" title="티라미수푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>티라미수 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding9} alt="인절미푸딩" title="인절미푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>인절미 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding10} alt="흑임자푸딩" title="흑임자푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>흑임자 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding11} alt="쑥푸딩" title="쑥푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>쑥 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
                <Link to="/menu">
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={pudding12} alt="밀크티푸딩" title="밀크티푸딩"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>밀크티 푸딩</p>
                      <span>4.5</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.nextBtn}></div>
          </div>
        </section> */}

        <section className={styles.sec1}>
          <div className={styles.sec1_head}>
            <div className={styles.txtBox}>
              <h2>pudding</h2>
              <p>탱글탱글한 일본식 푸딩이 아닌 떠먹는 케이크 스타일의 푸딩</p>
              <p>닐라웨이퍼(계란과자)와 신선한 크림 그리고 각종 충전물들을 조화롭게 풀어낸 디저트</p>
            </div>
          </div>
          <div className={styles.sec1_body}>
            <div className={styles.prevBtn}></div>
            <div className={styles.slide_wrap_outer}>
              <div className={styles.slide_wrap}>
                {item && item.filter((item) => item.category === '푸딩').map((item) => (
                    <Link to="/menu" key={item.item}>
                      <div className={styles.slide}>
                        <div className={styles.imgBox}>
                          {/* <p className={styles.tag}>Signature</p> */}
                          <img src={pudding1} alt={item.item} title={item.item}/>
                        </div>
                        <div className={styles.txtBox}>
                          <p>{item.item}</p>
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
            <div className={styles.nextBtn}></div>
          </div>
        </section>

      {/* section2 영역 */}
        <section className={`${styles.sec1} ${styles.sec2}`}>
          <div className={`${styles.sec1_head} ${styles.sec2_head}`}>
            <div className={styles.txtBox}>
              <h2>Financier</h2>
              <p>특별한 레시피로 프랑스 고메버터와 100% 아몬드 가루를 사용한 휘낭시에</p>
              <p>버터의 색을 진하게 내어 풍미를 더욱 살리는 방식으로 구워낸 휘낭시에</p>
            </div>
          </div>
          <div className={styles.sec2_body}>
            {/* <div className={styles.prevBtn}></div> */}
            <div className={styles.slide_wrap_outer}>
              <div className={styles.slide_wrap}>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier1} alt="플레인휘낭시에" title="플레인휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>플레인 휘낭시에</p>
                      <span>2.0</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier2} alt="마카다미아휘낭시에" title="마카다미아휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>마카다미아 휘낭시에</p>
                      <span>2.3</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier3} alt="스카치헤이즐넛휘낭시에" title="스카치헤이즐넛휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>스카치 헤이즐넛 휘낭시에</p>
                      <span>2.3</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier4} alt="아몬드카라멜휘낭시에" title="아몬드카라멜휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>아몬드 카라멜 휘낭시에</p>
                      <span>2.3</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier5} alt="레몬홍차휘낭시에" title="레몬홍차휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>레몬홍차 휘낭시에</p>
                      <span>2.3</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier6} alt="소금초코휘낭시에" title="소금초코휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>소금초코 휘낭시에</p>
                      <span>2.6</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier7} alt="코코넛휘낭시에" title="코코넛휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>코코넛 휘낭시에</p>
                      <span>2.6</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier8} alt="흑임자휘낭시에" title="흑임자휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>흑임자 휘낭시에</p>
                      <span>2.6</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier9} alt="바질치즈휘낭시에" title="바질치즈휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>바질치즈 휘낭시에</p>
                      <span>2.6</span>
                    </div>
                  </div>
                </Link>
                <Link to='/menu'>
                  <div className={styles.slide}>
                    <div className={styles.imgBox}>
                      <img src={financier10} alt="애플크럼블휘낭시에" title="애플크럼블휘낭시에"/>
                    </div>
                    <div className={styles.txtBox}>
                      <p>애플크럼블 휘낭시에</p>
                      <span>2.6</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* <div className={styles.nextBtn}></div> */}
          </div>
        </section>
    </>
  );
}

export default Main;
