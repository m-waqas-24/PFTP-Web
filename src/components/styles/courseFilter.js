import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .course-filter {
        background: ${colors.bg2};
        padding   : 62px 0 70px;

        .sec-title {
            h4 {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                max-width    : 550px;
                margin       : auto;
                margin-bottom: 42px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .filter-btns {
            ul.filter-btn-list {
                background-color: #F6F9FF;
                display         : inline-block;
                border-radius : 5px;
                box-shadow   : 0 12px 25px rgba(0, 0, 0, 0.07);
                margin-bottom: 52px;

                li {
                    font-size    : 12px;
                    color        : ${colors.black2};
                    background-color : ${colors.white};
                    font-weight  : 500;
                    padding      : 15px 5px;
                    cursor       : pointer;
                    border-radius: 5px;
                    border: 1px solid ${colors.primary};

                    @media(max-width: 767px) {
                        font-size: 13px;
                        padding: 8px 12px;
                    }
                }

                li.active {
                    background: ${colors.gr_bg};
                    color     : #ffffff;
                }

                @media(max-width: 575px) {
                    margin-bottom: 35px;
                }
            }
        }

        .filter-items {
            .course-item {
                transition : all 0.2s ease;
                margin-bottom: 30px;
                .course-image {
                    width              : 100%;
                    height             : 220px;
                    background-size    : cover;
                    background-position: center;
                    background-repeat  : no-repeat;
                    border-radius : 5px 5px 0 0;
                    position: relative;

                    .author-img {
                        position: absolute;
                        left    : 20px;
                        bottom  : 20px;

                        img {
                            max-width: 40px;
                            border-radius : 50%;
                            margin-right: 5px;
                        }

                        .title {
                            background: #ffffff;
                            padding   : 3px 8px;
                            border-radius : 5px;

                            p {
                                font-size    : 12px;
                                color        : ${colors.black1};
                                font-weight  : 500;
                                margin-bottom: -4px;
                              
                            }

                            span {
                                font-size  : 11px;
                                color      : ${colors.text3};
                                font-weight: 500;
                            }
                        }

                    }

                    .course-price {
                        p {
                            font-size  : 16px;
                            color      : #ffffff;
                            background : ${colors.bg1};
                            position   : absolute;
                            left      : 10px;
                            bottom     : 10px;
                            padding    : 8px 10px;
                            font-weight: 500;
                            border-radius : 5px;
                        }
                    }
                }

                .course-content {
                    transition: transform 1s; /* Animation */
                    background: ${colors.gr_bg};
                    padding   : 20px 25px;
                    border-radius :25px;
                    img {
                        height: 70px;
                        margin-left: auto;
                        margin-right: auto;
                        display: block;
                        margin-bottom: 10px;
                    }
                    h6.heading {
                       
                            color        : ${colors.white};
                            font-weight  : 700;
                            margin-bottom: 12px;
                            text-align:center;
                            font-size: 20px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 1; 
                                    line-clamp:1; 
                            -webkit-box-orient: vertical;
                            &:hover {
                                color: ${colors.secondary};
                            }
                        
                    }

                    p.desc {
                        font-size     : 14px;
                        color         : ${colors.white};
                        line-height   : 25px;
                        border-bottom : 1px solid ${colors.border1};
                        padding-bottom: 10px;
                        margin-bottom : 12px;
                        text-align: justify;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 5; 
                                line-clamp:5; 
                        -webkit-box-orient: vertical;
                    }

                    .course-face {

                        .duration,
                        .student {
                            p {
                                font-size: 13px;
                                color    : ${colors.text3};

                                i {
                                    font-size     : 16px;
                                    color         : ${colors.green};
                                    vertical-align: text-bottom;
                                    margin-right  : 3px;
                                }
                            }
                        }

                        .rating {
                            ul {
                                li {
                                    margin-right: 0;

                                    i {
                                        font-size: 14px;
                                        color    : ${colors.yellow};
                                    }

                                    &:last-child {
                                        font-size: 13px;
                                        color    : ${colors.text3};
                                    }
                                }
                            }
                        }
                    }
                    &:hover {
                        transform: scale(1.1); 
                    }
                }

               
            }

          .load-more {
                margin-right: auto;
                margin-left: auto;
                display: block;
                width: 300px;
                height: 35px;
                font-size: 17px;
                background-color: ${colors.primary};
                border: 1px solid ${colors.secondary};
                border-radius: 10px;
            }
        }

        .viewall-btn {
            a {
                font-size     : 15px;
                color         : #fff;
                background    : ${colors.gr_bg};
                display       : inline-block;
                width         : 200px;
                height        : 48px;
                text-transform: uppercase;
                font-weight   : 500;
                text-align    : center;
                padding       : 14px;
                border-radius : 5px;
                margin-top: 20px;

                &:hover {
                    background: ${colors.gr_bg2};
                }

                @media(max-width: 575px) {
                    font-size: 13px;
                    width: 170px;
                    height: 42px;
                    padding: 12px;
                    margin-top: 10px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 25px 0 40px;
        }
    }
`;