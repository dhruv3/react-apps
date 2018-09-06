import React, { Component } from 'react';

class SelectStreamFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="streamSelectContainer">
        <div className="selector" onClick={this.props.updateSelector}>
          All
        </div>
        <div className="selector" onClick={this.props.updateSelector}>
          Online
        </div>
        <div className="selector" onClick={this.props.updateSelector}>
          Offline
        </div>
      </div>
    );
  }
}

export default SelectStreamFilter;
