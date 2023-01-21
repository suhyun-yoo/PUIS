import React from 'react';
// 풀페이지 연결
import {FullPage, Slide} from 'react-full-page';
// css 연결
import '../css/reset.css';
import '../css/style.css';
// jquey 연결
import $ from 'jquery';


function Main() {
    // alert($(window).width()); // 1707
    // alert($(window).height()); // 781
    return (
        <FullPage controls>
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
            <Slide>2</Slide>
        </FullPage>
    );
}

export default Main;
