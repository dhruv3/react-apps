import React from 'react';
import './TableRow.css'

class TableRow extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tableRow">
        <div>{this.props.index}</div>
        <div>{this.props.data.title}</div>
        <div>{this.props.data.usersID.map(elem =>
                <img src = {`https://freecodecamp.org/forum${elem.avatar_template.replace('{size}', 135)}`}/>
            )}</div>
      </div>
    )
  }
}

export default TableRow;
