import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

// img 임포트
import pudding from '../img/다크초코푸딩.jpg'
// css 연결
import "../css/reset.css";
// import "../css/style.css";
import styles from '../css/MenuDetail.module.css';


function MenuDetail() {
  // param 사용하여 넘어온 menu의 idx 값 확인하기
  const params = useParams();
  console.log(params.menuidx);
  const menuNum = params.menuidx;

  // 메뉴 데이터 담기
  const [menu, setMenu] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/menuDetail')
    .then((res) => {
      // console.log(res.data.result)
      setMenu(res.data.result);
      }
    )
  },[])

  console.log(menu);

    return (
    <div className={styles.menuDetail}>
      <Link to='/'><button style={{cursor : 'pointer'}}> 뒤로가기 </button></Link>
      {menu && menu.filter(menu => (menu.item_num === Number(menuNum))).map(menu => (
        <>
          <div key={menu.item_num} className={styles.menuDetail_head}>
            <div className={styles.menuDetail_head_left}>
              <div className={styles.tag}>{menu.category}</div>
              <div className={styles.imgBox}>
                <img src={pudding} alt={menu.item} />
              </div>
            </div>
            <div className={styles.menuDetail_head_right}>
              <p className={styles.menuName}>{menu.item}</p>
              <p className={styles.price}>Price : <span>{menu.price}</span></p>
              <div className={styles.order_wrap}>
                <input type="number" step={1} placeholder='수량을 선택하세요'/>
                <div className={styles.btn_wrap}>
                  <button type="submit" className={styles.cartBtn}>장바구니 추가</button>
                  <button type="submit">주문하러 가기</button>
                </div>
              </div>
              <p className={styles.cnt}>재고수량 : <span>{menu.item_stock}</span>개</p>
            </div>
          </div>
          <hr />
          <div className={styles.menuDetail_body}>
            <div className={styles.imgBox}></div>
          </div>
          <div className={styles.menuDetail_bottom}>
            <div className={styles.reviewBox}></div>
          </div>
        </>
      ))}

    </div>
  );
}

export default MenuDetail;
