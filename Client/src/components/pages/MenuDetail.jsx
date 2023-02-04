import React from "react";

// img 임포트
import pudding from '../img/다크초코푸딩.jpg'
// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";

function MenuDetail() {
    return (
    <div className="menuDetail">
      <div className="menuDetail-head">
        <div className="menuDetail-head-left">
          <div className="tag">Pudding</div>
          <div className="img-box">
            <img src={pudding} alt="다크초코푸딩" />
          </div>
        </div>
        <div className="menuDetail-head-right">
          <p className="menuName">다크초코푸딩</p>
          <p className="price">Price : <span>4.0</span></p>
          <div className="order-wrap">
            <input type="number" step={1} placeholder='수량을 선택하세요'/>
            <div className="btn-wrap">
              <button type="submit" className="cartBtn">장바구니 추가</button>
              <button type="submit">주문하러 가기</button>
            </div>
          </div>
          <p className="cnt">재고수량 : <span>15</span>개</p>
        </div>
      </div>
      <hr />
      <div className="menuDetail-body">
        <div className="img-box"></div>
      </div>
      <div className="menuDetail-bottom">
        <div className="review-box"></div>
      </div>
    </div>
  );
}

export default MenuDetail;
