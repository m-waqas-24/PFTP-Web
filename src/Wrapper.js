import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { ProgressBar } from 'react-loader-spinner'

export default WrappedComponent => {
  class Wrapper extends Component {
    state = { isLoading: true };

    componentDidMount = () => this.setTimer();

    componentDidUpdate = prevProps => {
      if (this.props.location !== prevProps.location) {
        this.clearTimer();
        this.setState({ isLoading: true }, () => this.setTimer());
      }
    };

    clearTimer = () => clearTimeout(this.timeout);

    timer = () => this.setState({ isLoading: false }, () => this.clearTimer());

    setTimer = () => (this.timeout = setTimeout(this.timer, 1000));

    render = () => (
        <Fragment>
            
        {this.state.isLoading? 
   <div style={{ position: 'absolute',top: '50%',left:'50%', width: '50px'}}>  
   <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperclassName="progress-bar-wrapper"
  borderColor = '#1A5b25'
  barColor = '#FFB200'
/>
   </div>
 :
 
 <WrappedComponent {...this.props} />
 } </Fragment>
    );
  }
  return withRouter(Wrapper);
};