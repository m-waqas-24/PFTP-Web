import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`

    .tab-section {
        background: ${colors.bg2};
        padding   : 70px 0 65px;

        .nav {
            background-color: #ffffff;
            border-radius : 5px;
            border  : 1px solid ${colors.border1};
            overflow: hidden;

            .nav-item {
                a.nav-link {
                    font-size    : 17px;
                    color        : ${colors.black1};
                    border-bottom: 1px solid ${colors.border1};
                    padding      : 18px 25px;
                    a{
                        font-size    : 17px;
                        color        : ${colors.black1};
                        border-bottom: 1px solid ${colors.border1};
                        
                    }
                    i {
                        color: ${colors.green};
                    }
                }

                a.nav-link.active {
                    background: ${colors.gr_bg};
                    color     : #ffffff;

                    i {
                        color: #ffffff;
                    }
                }

                &:last-child {
                    a.nav-link {
                        border-bottom: none;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 30px;
            }
        }

        .tab-content {
            .tab-pane {
               
                    .registration-box {
                        max-width : 100%;
                        margin: auto;
                        border: 1px solid ${colors.border1};
                        box-shadow: 0 0px 20px rgba(0,0,0,0.08);
                        padding: 25px 30px;
                        border-radius: 5px;
                        .registration-title {
                            h3 {
                                color : ${colors.black2};
                                text-transform: uppercase;
                                font-weight: 600;
                                padding-bottom: 10px;
                                margin-bottom: 20px;
                                position: relative;
                                &:before {
                                    position: absolute;
                                    content: "";
                                    background: ${colors.green};
                                    width: 50px;
                                    height: 2px;
                                    bottom: 0;
                                    left: 50%;
                                    margin-left: -25px;
                                }
        
                                @media(max-width: 575px) {
                                    font-size : 20px;
                                }
                            }
                        }
        
                        .form {
                            p.form-control {
                                padding      : 0;
                                width        : auto;
                                height       : auto;
                                background   : transparent;
                                border       : none;
                                margin-bottom: 28px;
                                position     : relative;
        
                                label {
                                    font-size : 15px;
                                    color : ${colors.text1};
                                    font-weight : 500;
        
                                    @media(max-width: 575px) {
                                        font-size : 14px;
                                    }
                                }
        
                                input {
                                    width           : 100%;
                                    height          : 48px;
                                    background-color: #ffffff;
                                    font-size       : 14px;
                                    padding         : 15px 20px;
                                    color           : ${colors.black1};
                                    border          : 1px solid ${colors.border3};
                                    border-radius : 5px;
        
                                    &::placeholder {
                                        font-size : 14px;
                                        font-style: italic;
                                        color     : ${colors.text3};
        
                                        @media(max-width: 575px) {
                                            font-size : 13px;
                                        }
                                    }
        
                                    &:focus {
                                        border-color : ${colors.green};
                                    }
        
                                    @media(max-width: 575px) {
                                        height : 40px;
                                    }
                                }
        
                                span {
                                    color      : ${colors.red};
                                    font-weight: 300;
                                    position   : absolute;
                                    bottom     : -20px;
                                    left       : 0;
                                    visibility : hidden;
                                }
                            }
        
                            p.form-control.success {
                                input {
                                    border: 2px solid ${colors.green};
                                }
        
                                &::before {
                                    position   : absolute;
                                    content    : "\f058";
                                    font-family: "Line Awesome Free";
                                    font-size  : 24px;
                                    color      : ${colors.green};
                                    font-weight: 900;
                                    top        : 34px;
                                    right      : 10px;
                                }
                            }
        
                            p.form-control.error {
                                input {
                                    border: 2px solid ${colors.red};
                                }
        
                                &::before {
                                    position   : absolute;
                                    content    : "\f06a";
                                    font-family: "Line Awesome Free";
                                    font-size  : 24px;
                                    color      : ${colors.red};
                                    font-weight: 900;
                                    top        : 34px;
                                    right      : 10px;
                                }
                            }
        
                            p.form-control.error {
                                span {
                                    visibility: visible;
                                }
                            }
        
                            button {
                                font-size  : 16px;
                                color      : #fff;
                                background : ${colors.gr_bg};
                                width      : 100%;
                                height     : 48px;
                                font-weight: 500;
                                border     : none;
                                border-radius : 5px;
                                text-transform: uppercase;
                                margin-bottom : 20px;
        
                                &:hover {
                                    background: ${colors.gr_bg2};
        
                                    i {
                                        color: #ffffff;
                                    }
                                }
        
                                @media(max-width: 575px) {
                                    font-size : 15px;
                                    height     : 40px;
                                }
                            }
                        }
        
                        .have_account-btn {
                            p {
                                font-size : 14px;
                                color     : ${colors.text3};
                                a {
                                    font-size : 14px;
                                    color : ${colors.green};
                                    font-weight : 500;
                                    &:hover {
                                        text-decoration : underline;
                                    }
                                }
                            }
                        }
                    }
        
                    @media(max-width: 767px) {
                        padding: 30px 0;
                    }
                
            
                h4.tab-title {
                    color        : ${colors.black1};
                    font-weight  : 600;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }

                p.tab-desc {
                    font-size    : 15px;
                    color        : ${colors.text2};
                    line-height  : 30px;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        font-size: 14px;
                    }
                }

                ul.check-list {
                    li {
                        font-size    : 15px;
                        color        : ${colors.text3};
                        margin-bottom: 20px;
                        line-height  : 25px;

                        i {
                            float : left;
                            color : ${colors.green};
                            border: 1px solid ${colors.border3};
                            width : 35px;
                            height: 35px;
                            border-radius : 50%;
                            text-align  : center;
                            padding-top : 9px;
                            margin-top  : 7px;
                            margin-right: 15px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        @media(max-width: 575px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 35px 0 30px;
        }
    }

      
`;