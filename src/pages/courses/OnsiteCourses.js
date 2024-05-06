import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';

import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import OnsiteCourseFilter from "../../components/OnsiteCourseFilter";
import FooterTwo from '../../components/FooterTwo';

export default class OnsiteCourses extends Component {
    render() {
        return (
            <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < HeaderTwo />

            {/* Breadcroumb */}
            < BreadcrumbBox title="Onsite Courses" bg="Breadcrumbs/courses/courses.png" />
               
               <OnsiteCourseFilter/>

                <FooterTwo/>
                </div >
        )
    }
}
