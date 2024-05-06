import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import ApplyVideo from '../../components/ApplyVideo';
import FooterTwo from '../../components/FooterTwo';
export default class HowToApply extends Component {
    render() {
        return (
            <div className="main-wrapper">
                  {/* Header 2 */}
                  <HeaderTwo />

                  {/* Hero Image */}
                  <ApplyVideo />
                   {/* Footer 2 */}
                   <FooterTwo />
            </div>
        )
        }
    }
