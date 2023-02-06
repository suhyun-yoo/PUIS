# puis database 생성하기
drop database if exists PUIS;
CREATE DATABASE IF NOT EXISTS PUIS;

# databases 확인 후, puis db 사용하기
SHOW DATABASES;
Use PUIS;

# 1. 유저정보 User 테이블
 CREATE TABLE IF NOT EXISTS User(
	uid char(20) NOT NULL PRIMARY KEY,
	pw VARCHAR(255)	NOT NULL,
	email varchar(10) NOT NULL,
	address varchar(50)	NULL,
	phone int(11) NULL,
	reg_date datetime NOT NULL
);
select * from User;

# 2. 주소상세 addr_detail 테이블
CREATE TABLE IF NOT EXISTS addr_detail(
	addr_detail_num int(10)	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	uid char(20) NOT NULL,
	user_addr1 int(11) NOT NULL,
	user_addr2 varchar(50) NOT NULL,
	user_addr3 varchar(20) NOT NULL,
    FOREIGN KEY(UID) REFERENCES USER(UID)
);
SELECT * FROM ADDR_DETAIL;

# 3. 메뉴 Menu 테이블
CREATE TABLE IF NOT EXISTS Menu(
	item_num int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	item varchar(20) NOT NULL,
	price int(11) NOT NULL,
	category char(20) NOT NULL,
	item_stock int(10) NOT NULL,
	reg_date datetime NULL
);
SELECT * FROM MENU;

# 4. 메뉴상세 menu_detail 테이블
CREATE TABLE IF NOT EXISTS menu_detail(
	menu_img_num int(10) NOT NULL PRIMARY KEY,
	item_num int(10) NOT NULL, # 상품번호인데 AUTO_INCREMENT가 필요한 이유를 모르겠음
	item_img1 varchar(100) NOT NULL,
	item_img2 varchar(100) NULL,
	item_img3 varchar(100) NULL,
	item_img4 varchar(100) NULL,
	item_img5 varchar(100) NULL,
	item_desc varchar(100) NOT NULL,
    FOREIGN KEY(ITEM_NUM) REFERENCES MENU(ITEM_NUM)
);
SELECT * FROM MENU_DETAIL;

# 5. 제품리뷰 item_review 테이블
CREATE TABLE IF NOT EXISTS item_review(
	review_num int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	item_num int(10) NOT NULL, #제품번호 AUTO_INCREMENT 사용 이유가 무엇인가 자네.
	contents varchar(255) NOT NULL, #리뷰내용 NULL값 허용 막자
	WRITER varchar(20) NOT NULL, #작성자도 굳이 NULL로 할 이유가 없는 것 같슈
	reg_date datetime NOT NULL,
    FOREIGN KEY(ITEM_NUM) REFERENCES MENU(ITEM_NUM),
    FOREIGN KEY(WRITER) REFERENCES USER(UID)
);
SELECT * FROM ITEM_REVIEW;

# 6. 장바구니 Cart 테이블
CREATE TABLE Cart (
	cart_num int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT, #PK는 NULL값으로 지정할 수 없음
	item_num int(10) NOT NULL,
	count int(10) NULL DEFAULT 0,
	item varchar(20) NOT NULL,
	uid char(20) NOT NULL,
    FOREIGN KEY(ITEM_NUM) REFERENCES MENU(ITEM_NUM),
    FOREIGN KEY(UID) REFERENCES USER(UID) #MYPAGE에서 UID를 가져와야 하는 이유가 뭐얌?
);
SELECT * FROM CART;

# 7. 주문 Order_item 테이블
CREATE TABLE IF NOT EXISTS Order_item(
	order_num int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	cart_num int(10) NOT NULL,
	item_num int(10) NOT NULL,
	receiver_name varchar(20) NOT NULL,
	receiver_phone varchar(20) NOT NULL,
	addr1 int(10) NOT NULL, #우편번호
	addr2 varchar(50) NOT NULL, #주소
	addr3 varchar(20) NULL, #상세주소
	order_date datetime	NOT NULL,
    FOREIGN KEY(CART_NUM) REFERENCES CART(CART_NUM),
    FOREIGN KEY(ITEM_NUM) REFERENCES CART(ITEM_NUM) #CART에서 가져올지 MENU에서 가져올지
);
SELECT * FROM ORDER_ITEM;

# 8. 주문상세 Order_detail 테이블
CREATE TABLE IF NOT EXISTS Order_detail(
	order_detail_num int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT, #주문상세번호를 유일하게 INDEX 번호를 주기 위해 AUTO_INCREMENT 사용하면 안되남
	item_num int(10) NOT NULL,
	order_num int(10) NOT NULL,
	count int(10) NOT NULL,
	price int(11) NOT NULL,
    FOREIGN KEY(ITEM_NUM) REFERENCES ORDER_ITEM(ITEM_NUM),
    FOREIGN KEY(ORDER_NUM) REFERENCES ORDER_ITEM(ORDER_NUM)
);
SELECT * FROM ORDER_DETAIL;

# 9. 마이페이지 Mypage 테이블
CREATE TABLE IF NOT EXISTS Mypage(
	idx int(10)	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	uid char(20) NOT NULL,
	order_num int(10) NULL, #AUTO_INCREMENT
	review_num int(10)	NULL, #AUTO_INCREMENT 
    FOREIGN KEY(UID) REFERENCES USER(UID),
    FOREIGN KEY(ORDER_NUM) REFERENCES ORDER_ITEM(ORDER_NUM),
    FOREIGN KEY(REVIEW_NUM) REFERENCES ITEM_REVIEW(REVIEW_NUM)
);
SELECT * FROM MYPAGE;

