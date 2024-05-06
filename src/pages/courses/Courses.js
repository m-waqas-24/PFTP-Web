import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';

import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseFilter from "../../components/CourseFilter";
import FooterTwo from '../../components/FooterTwo';

export default class Courses extends Component {
    render() {
        return (
            <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < HeaderTwo />

            {/* Breadcroumb */}
            < BreadcrumbBox title="Courses" bg="Breadcrumbs/courses/courses.png" />
               
               <CourseFilter/>

                <FooterTwo/>
                </div >
        )
    }
}
