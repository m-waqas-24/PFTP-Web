import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .event-faq-area {
        padding: 65px 0;

        .event-area {
            .height{
                height: 400px;
                overflow: auto;
            }
            
            .sec-title {
                h4 {
                    color         : ${colors.black1};
                    font-weight   : 600;
                    text-transform: uppercase;
                    margin-bottom : 37px;

                    span {
                        color: ${colors.green};
                    }

                    @media(max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }
            }

            .event-box {
                margin-bottom : 30px;
                .event-img {
                    a {
                        img {
                            border-radius : 5px;
                            border-radius: 5px;
                            width: 158px;
                            height: 158px;
                            object-fit: cover;
                            margin-top: 16px;
                        }
                    }

                    @media(max-width: 991px) {
                        display : none;
                    }
                }
                .event-content {
                    position: relative;
                    .content-box {
                        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
                        padding   : 20px;
                        background: #ffffff;
                        border-radius : 5px;
                        position: absolute;
                        top     : 22px;
                        left    : -9%;
                        z-index : 1;
                        .event-title{
                            h6 {
                                margin-bottom: 10px;
                                a {
                                    color      : ${colors.black1};
                                    font-weight: 600;

                                    &:hover {
                                        color: ${colors.green};
                                    }
                                }
                            }
                        }

                        .event-time-location {
                            margin-bottom : 10px;
                            ul {
                                li {
                                    font-size : 13px;
                                    color: ${colors.text3};
                                    i {
                                        font-size : 18px;
                                        color: ${colors.green};
                                        vertical-align: top;
                                    }
                                    &:first-child {
                                        margin-right : 20px;
                                    }
                                }
                            }
                        }

                        .event-desc {
                            p {
                                font-size : 13px;
                                color: ${colors.text2};
                                line-height : 20px;
                            }

                            @media(max-width: 767px) {
                                margin-bottom: 10px;
                            }
                        }

                        .event-date {
                            position: relative;
                            margin-bottom : 20px;
                            padding-top: 6px;
                            &:before {
                                position : absolute;
                                content : '';
                                background : ${colors.border1};
                                width : 1px;
                                height : 100px;
                                top : 0;
                                left : -30px;

                                @media(max-width: 767px) {
                                    content : none;
                                }
                            }
                            p {
                                font-size : 20px;
                                color: ${colors.green};
                                font-weight: 500;
                                text-transform : uppercase;

                                @media(max-width: 767px) {
                                    float: left;
                                    font-size: 18px;
                                    margin-right: 20px;
                                }
                            }

                            @media(max-width: 767px) {
                                margin-bottom: 0;
                                padding-top: 0;
                            }
                        }

                        .join-btn {
                            a {
                                font-size : 12px;
                                color: ${colors.black2};
                                border: 1px solid ${colors.border3};
                                font-weight : 500;
                                text-transform : uppercase;
                                padding: 9px 12px 7px;
                                border-radius: 5px;
                                &:hover {
                                    color: #ffffff;
                                    background: ${colors.gr_bg};
                                    border-color : ${colors.green};
                                }

                                @media(max-width: 767px) {
                                    float: left;
                                    padding: 5px 10px 3px;
                                }
                            }
                        }

                        @media(max-width: 991px) {
                            position: unset;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 30px;
            }

            @media(max-width: 575px) {
                margin-bottom: 10px;
            }
        }

        .faq-area {
            .sec-title {
                h4 {
                    color         : ${colors.black1};
                    font-weight   : 600;
                    text-transform: uppercase;
                    margin-bottom : 45px;

                    span {
                        color: ${colors.green};
                    }

                    @media(max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }
            }

            .faq-box {
                .faq-item {
                    margin-bottom: 22px;

                    button.accordion-button {
                        border       : none;
                        background   : transparent;
                        margin-bottom: 15px;
                        display      : block;
                        width        : 100%;
                        padding      : 0;
                        text-align   : left;
                        position     : relative;

                        div.accordion-icon {
                            background  : ${colors.green};
                            height      : 18px;
                            text-align  : center;
                            float       : left;
                            margin-right: 12px;
                            position    : relative;

                            i {
                                font-size   : 20px;
                                color       : #ffffff;
                                width       : 32px;
                                line-height : 18px;
                                padding-left: 2px
                            }

                            &::before {
                                content            : "";
                                position           : absolute;
                                border-width       : 8px 16px;
                                border-style       : solid;
                                border-top-color   : transparent;
                                border-right-color : transparent;
                                border-bottom-color: ${colors.green};
                                border-left-color  : transparent;
                                top                : -16px;
                                left               : 0;
                                z-index            : 1;
                            }

                            &::after {
                                content            : "";
                                position           : absolute;
                                border-width       : 8px 16px;
                                border-style       : solid;
                                border-top-color   : ${colors.green};
                                border-right-color : transparent;
                                border-bottom-color: transparent;
                                border-left-color  : transparent;
                                bottom             : -16px;
                                left               : 0;
                                z-index            : 1;
                            }
                        }

                        p {
                            font-size  : 16px;
                            color      : ${colors.black1};
                            font-weight: 500;
                            line-height: 18px;
                        }
                    }

                    .accordion-content {
                        max-height: 0;
                        overflow  : hidden;
                        transition: max-height 0.2s ease-in-out;

                        p {
                            font-size   : 14px;
                            color       : ${colors.text3};
                            line-height : 28px;
                            padding-left: 45px;
                        }
                    }

                    .accordion-content.show {
                        max-height: 100%;
                    }

                    &:last-child {
                        margin-bottom : 0;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 30px 0;
        }
    }
`;