import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackerNames: "",
      hackerDates: ""
    };
    this.btnClicked = this.btnClicked.bind(this);
  }
  btnClicked(){
    this.props.onClickCallBack(this.state.hackerNames, this.state.hackerDates);
  }
  onHackerNameChange(e){
    this.setState({
      hackerNames: e.target.value
    })
  }
  onHackerDateChange(e){
    this.setState({
      hackerDates: e.target.value
    })
  }
    render() {
        return (
          <div className="row">
            <TextField
              className="col-md-6"
              multiline
              rows="4"
              placeholder="Enter the hacker list (one hacker per line)"
              onChange = {this.onHackerNameChange.bind(this)}
            />
            <TextField
              className="col-md-6"
              multiline
              rows="4"
              placeholder="Enter the date range for each hacker's stay (one range per line)"
              onChange = {this.onHackerDateChange.bind(this)}
            />
          <Button variant="outlined" color="primary" className="block-center" onClick={this.btnClicked}>Get Meals Schedule</Button>
        </div>
    );
    }
}

export default Bookings;
