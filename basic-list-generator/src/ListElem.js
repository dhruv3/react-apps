import React from 'react';

class ListElem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>{this.props.data}</div>
                <button onClick={this.props.removeItem}>Remove</button>
            </div>
        )
    }
}

export default ListElem;
