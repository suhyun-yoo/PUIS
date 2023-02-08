import React from "react";

// img 임포트
import pudding from '../img/다크초코푸딩.jpg'
// css 연결
import "../css/reset.css";
// import "../css/style.css";
import styles from '../css/MenuDetail.module.css';

function MenuDetail() {
    return (
    <div className={styles.menuDetail}>
      <div className={styles.menuDetail_head}>
        <div className={styles.menuDetail_head_left}>
          <div className={styles.tag}>Pudding</div>
          <div className={styles.imgBox}>
            <img src={pudding} alt="다크초코푸딩" />
          </div>
        </div>
        <div className={styles.menuDetail_head_right}>
          <p className={styles.menuName}>다크초코푸딩</p>
          <p className={styles.price}>Price : <span>4.0</span></p>
          <div className={styles.order_wrap}>
            <input type="number" step={1} placeholder='수량을 선택하세요'/>
            <div className={styles.btn_wrap}>
              <button type="submit" className={styles.cartBtn}>장바구니 추가</button>
              <button type="submit">주문하러 가기</button>
            </div>
          </div>
          <p className={styles.cnt}>재고수량 : <span>15</span>개</p>
        </div>
      </div>
      <hr />
      <div className={styles.menuDetail_body}>
        <div className={styles.imgBox}></div>
      </div>
      <div className={styles.menuDetail_bottom}>
        <div className={styles.reviewBox}></div>
      </div>
    </div>
  );
}

export default MenuDetail;
