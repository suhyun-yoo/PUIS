# puis database 생성하기
drop database if exists PUIS;
CREATE DATABASE IF NOT EXISTS PUIS;

# databases 확인 후, puis db 사용하기
SHOW DATABASES;
Use PUIS;

# 1. 유저정보 User 테이블
 CREATE TABLE IF NOT EXISTS User(
	uid char(20) NOT NULL,
	pw VARCHAR(255)	NOT NULL,
	email varchar(10) NOT NULL,
	address varchar(50)	NULL,
	phone int(11) NULL,
	reg_date datetime NOT NULL
);
select * from User;

# 2. 마이페이지 Mypage 테이블
CREATE TABLE IF NOT EXISTS Mypage(
	idx int(10)	NOT NULL,
	uid char(20) NOT NULL,
	order_num int(10) NULL,
	review_num int(10)	NULL
);
SELECT * FROM MYPAGE;

# 3. 메뉴 Menu 테이블
CREATE TABLE IF NOT EXISTS Menu(
	item_num int(10) NOT NULL,
	item varchar(20) NOT NULL,
	price int(11) NOT NULL,
	category char(20) NOT NULL,
	item_stock int(10) NOT NULL,
	reg_date datetime NULL
);
SELECT * FROM MENU;

# 4. 주문 Order_item 테이블
CREATE TABLE IF NOT EXISTS Order_item(
	order_num int(10) NULL,
	cart_num int(10) NULL,
	item_num int(10) NOT NULL,
	receiver_name varchar(20) NOT NULL,
	receiver_phone varchar(20) NOT NULL,
	addr1 int(10) NOT NULL, #우편번호
	addr2 varchar(50) NOT NULL, #주소
	addr3 varchar(20) NULL, #상세주소
	order_date datetime	NOT NULL
);
SELECT * FROM ORDER_ITEM;

# 5. 장바구니 Cart 테이블
CREATE TABLE Cart (
	cart_num int(10) NULL,
	item_num int(10) NOT NULL,
	count int(10) NULL DEFAULT 0,
	item varchar(20) NOT NULL,
	uid char(20) NOT NULL
);
SELECT * FROM CART;

# 6. 메뉴상세 menu_detail 테이블
CREATE TABLE IF NOT EXISTS menu_detail(
	menu_img_num int(10) NULL,
	item_num int(10) NOT NULL,
	item_img1 varchar(100) NOT NULL,
	item_img2 varchar(100) NULL,
	item_img3 varchar(100) NULL,
	item_img4 varchar(100) NULL,
	item_img5 varchar(100) NULL,
	item_desc varchar(100) NOT NULL
);
SELECT * FROM MENU_DETAIL;

# 7. 주문상세 Order_detail 테이블
CREATE TABLE IF NOT EXISTS Order_detail(
	order_detail_num int(10) NULL,
	item_num int(10) NOT NULL,
	order_num int(10) NULL,
	count int(10) NOT NULL,
	price int(11) NOT NULL
);
SELECT * FROM ORDER_DETAIL;

# 8. 주소상세 addr_detail 테이블
CREATE TABLE IF NOT EXISTS addr_detail(
	addr_detail_num int(10)	NULL,
	uid char(20) NOT NULL,
	user_addr1 int(11) NOT NULL,
	user_addr2 varchar(50) NOT NULL,
	user_addr3 varchar(20) NOT NULL
);
SELECT * FROM ADDR_DETAIL;

# 9. 제품리뷰 item_review 테이블
CREATE TABLE IF NOT EXISTS item_review(
	review_num int(10) NULL,
	item_num int(10) NOT NULL,
	contents varchar(255) NULL,
	writer varchar(20) NULL,
	reg_date datetime NOT NULL
);
SELECT * FROM ITEM_REVIEW;

# 참조키 
ALTER TABLE `User` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`uid`
);
ALTER TABLE `Mypage` ADD CONSTRAINT `PK_MYPAGE` PRIMARY KEY (
	`idx`,
	`uid`
);
ALTER TABLE `Menu` ADD CONSTRAINT `PK_MENU` PRIMARY KEY (
	`item_num`
);
ALTER TABLE `Order_ITEM` ADD CONSTRAINT `PK_ORDER` PRIMARY KEY (
	`order_num`
);
ALTER TABLE `Cart` ADD CONSTRAINT `PK_CART` PRIMARY KEY (
	`cart_num`,
	`item_num`
);
ALTER TABLE `menu_detail` ADD CONSTRAINT `PK_MENU_DETAIL` PRIMARY KEY (
	`menu_img_num`
);
ALTER TABLE `Order_detail` ADD CONSTRAINT `PK_ORDER_DETAIL` PRIMARY KEY (
	`order_detail_num`
);
ALTER TABLE `addr_detail` ADD CONSTRAINT `PK_ADDR_DETAIL` PRIMARY KEY (
	`addr_detail_num`
);
ALTER TABLE `item_review` ADD CONSTRAINT `PK_ITEM_REVIEW` PRIMARY KEY (
	`review_num`
);
ALTER TABLE `Mypage` ADD CONSTRAINT `FK_User_TO_Mypage_1` FOREIGN KEY (
	`uid`
) REFERENCES `User` (
	`uid`
);
ALTER TABLE `Cart` ADD CONSTRAINT `FK_Menu_TO_Cart_1` FOREIGN KEY (
	`item_num`
) REFERENCES `Menu` (
	`item_num`
);