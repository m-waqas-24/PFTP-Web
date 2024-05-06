import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .team-member-area {
        background: ${colors.bg2};
        padding   : 63px 0;

        .sec-title {
            h4 {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                max-width    : 550px;
                margin       : auto;
                margin-bottom: 50px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .team-slider {
            position: relative;
            .video-player {
                height:200px;
              
            }
            .team-item {
                position     : relative;
                margin-bottom: 55px;
                
                img {
                    border-radius : 5px;
                
                }
                button.play-button {
                    transform : translateX(0) translateY(-50%);
                    box-sizing: content-box;
                    display   : block;
                    width     : 32px;
                    height    : 44px;
                    margin    : auto;
                    border-radius : 50%;
                    position:absolute;
                    top:60%;
                    right:40%;
                    i {
                        position   : relative;
                        font-size  : 40px;
                        color      : #ffffff;
                        z-index    : 11;
                        padding-top: 2px;
                        margin-left: -2px;
                    }

                    &::before {
                        content   : "";
                        position  : absolute;
                        z-index   : 0;
                        left      : 50%;
                        top       : 50%;
                        transform : translateX(-50%) translateY(-50%);
                        display   : block;
                        width     : 70px;
                        height    : 70px;
                        background: ${colors.green};
                        border-radius : 50%;
                        animation: pulse-border 1500ms ease-out infinite;
                    }

                    &:after {
                        content   : "";
                        position  : absolute;
                        z-index   : 1;
                        left      : 50%;
                        top       : 50%;
                        transform : translateX(-50%) translateY(-50%);
                        display   : block;
                        width     : 70px;
                        height    : 70px;
                        background: ${colors.green};
                        border-radius : 50%;
                        transition : all 200ms;
                    }

                    &:hover {
                        i {
                            color: #ffffff;
                        }
                    }

                    @keyframes pulse-border {
                        0% {
                            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
                            opacity  : 1;
                        }

                        100% {
                            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
                            opacity  : 0;
                        }
                    }
                }
               
                .img-content {
                    background: #ffffff;
                    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.07);
                    position  : absolute;
                    bottom    : -30px;
                    left      : 10%;
                    width     : 80%;
                    z-index   : 1;
                    border-radius : 5px;
                    padding: 15px 0;

                    h5 {
                        color        : ${colors.black1};
                        font-weight  : 600;
                        margin-bottom: 5px;
                    }

                    p {
                        font-size    : 14px;
                        color        : ${colors.text3};
                        font-weight  : 500;
                        margin-bottom: 5px;
                    }

                    ul {
                        li {
                            a {
                                i {
                                    font-size: 14px;
                                    color    : #ffffff;
                                    width    : 33px;
                                    height   : 33px;
                                    border-radius : 50%;
                                    padding-top: 10px;
                                    transition : all 0.2s ease;

                                    &:hover {
                                        background-color: ${colors.green} !important;
                                    }
                                }

                                i.fa-facebook-f {
                                    background-color: #4267B2;
                                }

                                i.fa-twitter {
                                    background-color: #1DA1F2;
                                }

                                i.fa-youtube {
                                    background-color: #DD1343;
                                }
                            }
                        }
                    }
                }
            }

            .slider-dot {
                margin-top: 25px !important;

                .swiper-pagination-bullet {
                    width     : 22px;
                    height    : 9px;
                    background: ${colors.text4};
                    display   : inline-block;
                    margin    : 3px;
                    opacity   : 1 !important;
                    border-radius : 5px;
                }

                .swiper-pagination-bullet.swiper-pagination-bullet-active {
                    background: ${colors.green};
                }
            }

            
        }

        @media(max-width: 767px) {
            padding: 25px 0;
        }
    }
`;