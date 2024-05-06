import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
.breadcrumb {
    display: inline-block;
    overflow: hidden;
    border-radius: 0px;
    width: 100%;
    background:none !important;
    padding: 0.75rem 0rem;
}
.breadcrumb a {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    outline: none;
    display: block;
    float: left;
    color: white;
    font-size: 14px;
    line-height: 60px;
    width: 33%;
    text-align: center;
    position: relative;
    background:  ${colors.secondary};;
}
 
.breadcrumb a.active {
    background: #222753;
    background: ${colors.gr_bg};
    transition: all 1s;
}
.breadcrumb a.active:after {
    background: ${colors.secondary};
    background: linear-gradient(#13162e, #0d0f20);
    transition: all 1s;
}
.breadcrumb a:after {
    content: "";
    position: absolute;
    top: 0;
    right: -30px;
    width: 60px;
    height: 60px;
    transform: scale(0.707) rotate(45deg);
    z-index: 1;
    background: ${colors.secondary};
    box-shadow: 3px -3px 0 2px rgba(255, 255, 255, 0.8);
    border-radius: 0 5px 0 50px;
}
.breadcrumb a:last-child {
    width:34%;
}
.breadcrumb a:last-child:after {
    content: none;
    
}

`;