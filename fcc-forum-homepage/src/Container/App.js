import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  componentDidMount(){
    const recentPostsURL = "https://buttercup-island.glitch.me/latest"; 
    fetch(recentPostsURL).then((response) => {
      return response.json()
    }).then((data) => {
      data = this.preprocess(data);
      this.setState(data);
    }).catch((err) => console.log);
  }

  preprocess(data){
    const res = [];
    const {users, topic_list} = data;
    const userMap = {}
    debugger
    users.map(user => {
      const id = user.id
      return new Object({id: user})
    })
    userMap.push(
      
    );
    debugger;
    topic_list.topics.map((elem, idx, data) => {
      const obj = {};
      obj.sno = idx;
      obj.title = elem.title;
      obj.views = elem.views;
      const postersID = [];
      postersID.push(elem.posters.map(data => data.user_id));
      obj.usersID = postersID
      res.push(obj);
    });
    debugger;
  }

  render() {
    return (
      <div className="container">
        <div className="columnNames">
          <div>#</div>
          <div>Topic</div>
          <div>Replies</div>
          <div>Views</div>
          <div>Activity</div>
        </div>
        <div className="listContainer">
  
        </div>
      </div>
    )
  }
}

export default App;
