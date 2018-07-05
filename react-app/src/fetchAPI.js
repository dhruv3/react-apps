import React from 'react'

class Fetch extends React.Component{
  constructor(){
    super();
    this.state = {items: []};
  }
  componentWillMount(){
    // TODO: Consult F gawd
    // let tempItems = []
    // fetch('https://api.github.com/users/dhruv3/repos')
    //   .then(response => response.json())
    //    .then(
    //      function(jsonObj){
    //        jsonObj.map((elem) => tempItems.push(elem.name))
    //      }
    //    )
    //
    // this.setState({items: tempItems})
    // console.log(this.state.items)

    fetch('https://swapi.co/api/people/?format=json')
      .then(response => response.json())
        .then(({results: items}) => this.setState({items}))

  }
  render(){
    let items = this.state.items
    return(
      <div>
          {items.map(item => <h4 key={item.name}> {item.name} </h4>)}
      </div>)
  }
}

export {Fetch}
