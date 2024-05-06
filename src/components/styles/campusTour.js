import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .campus-tour {
        
        background: ${colors.bg2};
        padding   : 63px 0 60px;

        .nyf-tab-list {
            .card{
                margin-bottom:10px;
            .card-body {
                h5{
                    font-size:18px;
                    color: ${colors.primary};
                }
                p{
                    font-size:12px;
                }
                height: 10px;
                margin-bottom: 70px;
            }
        }
            .nav {
                display: inline-block;
                border-radius: 5px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                margin-bottom: 35px;
                .nav-item {
                    display: inline-block;
                    a.nav-link {
                        font-size: 14px;
                        color: ${colors.black2};
                        font-weight: 500;
                        text-transform : uppercase;
                        padding: 12px 30px 10px;
                        border-radius: 5px;

                        @media(max-width: 991px) {
                            padding: 12px 16px 9px;
                        }
                    }
                    a.nav-link.active {
                        background : ${colors.gr_bg};
                        color : #ffffff;
                    }
                }
            }
        }

        .sec-title {
            h4 {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                max-width    : 550px;
                margin       : auto;
                margin-bottom: 48px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        a.readmore-btn {
            font-size : 14px;
            color     : #fff;
            background: ${colors.gr_bg};
            display   : inline-block;
            width: 100%;
            height: 35px;
            text-align: center;
            padding   : 7px;
            border-radius : 5px;
            &:hover {
                background: ${colors.gr_bg2};
            }

            @media(max-width: 575px) {
                margin-top : 0;
            }
        }
    }

        .tour-box {
            border-radius : 5px;
            overflow     : hidden;
            position     : relative;
            margin-bottom: 30px;
            height:175px;
            img {
                border-radius : 5px;
                transition : all 0.3s ease;
                object-fit:cover;
                &:hover {
                    transform: scale(1.1);
                }

                @media(max-width: 767px) {
                    width : 100%;
                }
            }

            img.__react_modal_image__medium_img {
                border-radius : 0;
            }
            @media(max-width: 767px) {
                height:100%;
            }
        }
        @media(max-width: 767px) {
            padding: 30px 0 25px;
        }
    }
`;