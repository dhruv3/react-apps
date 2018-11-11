import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
            <div id="list">
              {
                this.props.display.map((item, index) => (
                <div className="error-msg">
                    <i className="fa fa-times-circle"></i>
                    <p>Error! No menu generated for {item}</p>
                </div>
              ))
            }
            </div>
        </div>
    )
  }
}

export default Error;
