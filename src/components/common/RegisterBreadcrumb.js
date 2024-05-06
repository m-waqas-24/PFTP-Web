import React, { Component } from 'react';
import { Styles } from "./styles/breadcrumbtwo.js";
import { Link  } from "react-router-dom";
export class RegisterBreadcrumb extends Component {
    state = {
        active: this.props.active,
    }

    render() {
        return (
            <Styles>
            
        <div className="breadcrumb">
            <Link to={'#!'} className="active" >ACCOUNT</Link>
            <Link to={'#!'} className={this.state.active > 1 ? 'active' : ''}>PROFILE</Link>
            <Link to={'#!'} className={this.state.active > 2 ? 'active' : ''}>COURSES</Link>
           
        </div>
            </Styles>
        )
    }
}