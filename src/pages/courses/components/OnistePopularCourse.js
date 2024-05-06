import React, { Component } from 'react';
import { Styles } from '../styles/popularCourse.js';

class OnistePopularCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: this.props.courses
        }
    }

    render() {
        const {courses} = this.state;
        return (
            <Styles>
                {/* Popular Course */}
                <div className="popular-course">
                    <h5>Related Course</h5>
                    <div className="popular-items">
                        {
                            courses.map((course, i) => (
                                <div className="item-box d-flex" key={i}>
                                    <div className="item-img">
                                        <a onClick={() => {window.location.href=`${process.env.PUBLIC_URL + course.slug}`}} href="#!" ><img src={course.detail ? global.config.URL.onsite_img.public + course.detail.img : ''}  alt="" /></a>
                                    </div>
                                    <div className="item-content">
                                        <p className="title"><a onClick={() => {window.location.href=`${process.env.PUBLIC_URL + course.slug}`}}  href="#!">{course.name}</a></p>
                                        <ul className="list-unstyled list-inline rating">
                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                        </ul>
                                        <p className="price">{course.fee}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </Styles>
        )
    }
}

export default OnistePopularCourse
