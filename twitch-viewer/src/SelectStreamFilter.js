import React, { Component } from 'react';

class SelectStreamFilter extends Component {
  constructor(props) {
    super(props);
    this.selectorRefs = []
  }
  
  selectorUpdated(e){
    const selector = e.target.innerText.toLowerCase();
    this.selectorRefs.map(elem => {
      elem.classList.remove("filterSelected")
    })
    e.target.classList.add("filterSelected")
    this.props.updateSelector(selector);
  }

  render() {
    return (
      <div className="streamSelectContainer">
        <div className="selector filterSelected" ref={(input) => {this.selectorRefs[0] = input}} onClick={this.selectorUpdated.bind(this)}>
          All
        </div>
        <div className="selector" ref={(input) => {this.selectorRefs[1] = input}} onClick={this.selectorUpdated.bind(this)}>
          Online
        </div>
        <div className="selector" ref={(input) => {this.selectorRefs[2] = input}} onClick={this.selectorUpdated.bind(this)}>
          Offline
        </div>
      </div>
    );
  }
}

export default SelectStreamFilter;
