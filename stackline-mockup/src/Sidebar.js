import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.getTags = this.getTags.bind(this);
    this.state = {};
  }

  render() {
    const content = this.props.content;
    return (
      <div className="sidebar">
        <div className="product-overview">
          <img src = {content.image}/>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        <div className="tags">
          {this.getTags(content.tags)}
        </div>
      </div>
    );
  }

  getTags(arr){
    if(arr != undefined){
      const elems = [];
      elems.push(arr.map(elem => <button key={elem} className="tag-elem">{elem}</button>))
      return elems;
    }
  }
}

export default Sidebar;
