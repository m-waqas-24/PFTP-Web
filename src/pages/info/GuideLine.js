import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import FooterTwo from '../../components/FooterTwo';
// import { BreadcrumbBox } from '../../components/common/Breadcrumb';

export default class GuideLine extends Component {
    render() {
        return (
            <div className="main-wrapper">
                  {/* Header 2 */}
                  <HeaderTwo />
                   {/* Breadcroumb */}
                   {/* <BreadcrumbBox title="Complete Guidline" bg="Breadcrumbs/extra/Guidelines-Breadcrumbs.png" /> */}

                   <img src={process.env.PUBLIC_URL + "/assets/images/guid-lines.jpg"} className="img-fluid" alt=""/>
                   {/* Footer 2 */}
                   <FooterTwo />
            </div>
        )
        }
    }
