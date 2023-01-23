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
                    <h2>MENU</h2>
                    <p>pudding</p>
                    <div className="mask">
                        <div className="slide-wrapper slide1">
                            <div className="slide">
                                <p className="tag">SIGNATURE</p>
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>조선향미 푸딩</p>
                                    <span>4.3</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>바나나 푸딩</p>
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>바나나카라멜 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>베리치즈 푸딩</p>
                                    <span>5.3</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>다크초코 푸딩</p>
                                    <span>5.0</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>민트초코 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>제주말차 푸딩</p>
                                    <span>5.0</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>티라미수 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>인절미 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>흑임자 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>쑥 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>밀크티 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="slide-wrapper slide1">
                            <div className="slide">
                                <p className="tag">SIGNATURE</p>
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>조선향미 푸딩</p>
                                    <span>4.3</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>바나나 푸딩</p>
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>바나나카라멜 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>베리치즈 푸딩</p>
                                    <span>5.3</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>다크초코 푸딩</p>
                                    <span>5.0</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>민트초코 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>제주말차 푸딩</p>
                                    <span>5.0</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>티라미수 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>인절미 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>흑임자 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>쑥 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="img-box"></div>
                                <div className="txt-box">
                                    <p>밀크티 푸딩</p>
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>financier</p>
                    <div className="slide-wrapper slide2"></div>
                </section>
            </Slide>
        </FullPage>
    );
}

export default Main;
