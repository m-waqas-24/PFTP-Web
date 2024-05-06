import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
    .message-page {
        .message-area {
           
            .upper{
                img{
                    height:250px;
                }
                h2{
                    font-size: 35px;
                    font-weight: 700;
                    padding-bottom: 20px;
                    color : ${colors.primary};
                }
               
                .hr-theme-slash-2{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                
                .hr-line{
                    width: 10%;
                    position: relative;
                    margin: 15px;
                    text-align: center;
                    border-top: 5px solid #ffb200;
                }

                .hr-icon {
                    position: relative;
                    top: 3px;
                    color: #074710;
                    font-size:17px
                }
            }
                }
            
           
            .message-item {
                position     : relative;
                margin-bottom: 62px;

                a {
                    img {
                        border-radius : 5px;
                    }
                  
                }
            }

            @media(max-width: 767px) {
                padding : 40px 0 30px;
            }
            .message-content {
                .step-avail{ 
                    h1 {
                    margin-bottom:20px;
                    color: #074710;
                    font-family: roboto,Sans-serif;
                    font-size: 34px;
                    font-weight: 600;
                    text-align: center;
                }
            }
                .note-section {
                    border: 1px solid #000;
                    margin: 0;
                    padding: 22px 0;
                    margin-bottom:20px;
                    background-color: #145e15;
                    border-radius: 51px 51px 51px 51px;
                    h3 {
                        color: #fff;
                        font-size: 24px;
                        text-align:center
                    }
                }
                h4 {
                    color : ${colors.black};
                    font-weight: 600;
                    margin-bottom: 10px;
                    
                    @media(max-width: 575px) {
                        font-size : 20px;
                    }
                }
                span {
                    font-size : 16px;
                    color : ${colors.primary};
                    font-weight: 500;
                    display : inline-block;
                    margin-bottom: 15px;

                    @media(max-width: 575px) {
                        font-size : 15px;
                    }
                }
                p {
                    font-size: 15px;
                    color: ${colors.black};
                    line-height: 25px;
                    margin-bottom: 40px;
                    text-align:justify;
                    @media(max-width: 575px) {
                        font-size : 14px;
                    }
                }

                ul {
                    list-style-type: none;
                    margin-top : 00px;
                    li {
                        font-size: 17px;
                        text-align:justify;
                        color: ${colors.black};
                        font-weight:600;
                        line-height: 25px;
                        margin-bottom: 15px;
                        i {
                            float: left;
                            color: ${colors.green};
                            border: 1px solid ${colors.border3};
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            text-align: center;
                            padding-top: 9px;
                            margin-top: 8px;
                            margin-right: 15px;
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }

                .registration-box {
                    max-width : 500px;
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
    
                    form.form {
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
                                bottom     : -38px;
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
            }
      

        }
    }

 
`;