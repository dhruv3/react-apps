import React from 'react';

function ListElem(props){
    return (
        <div className="listItem">
            <div className="listText">{props.data}</div>
            <button onClick={props.removeItem}>Remove</button>
        </div>
    )
}

export default ListElem;
