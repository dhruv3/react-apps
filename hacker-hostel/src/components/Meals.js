import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ol id="list">
              {
                this.props.display.map((item, index) => (
                  <div>
                      <li className="morning">Breakfast for {item.name}</li>
                      <li className="afternoon">Lunch for {item.name}</li>
                      <li className="night">Dinner for {item.name}</li>
                  </div>
              ))
            }
          </ol>
        </div>
    )
  }
}
export default Meals;
