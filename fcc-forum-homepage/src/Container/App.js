import React from 'react';
import './App.css';
import '../Component/TableRow';
import TableRow from '../Component/TableRow';

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
      this.setState({data: data});
    }).catch((err) => console.log);
  }

  preprocess(data){
    const res = [];
    const {users, topic_list} = data;
    const userMap = {};
    //https://codeburst.io/using-javascript-variables-as-object-keys-c191e2458fa3
    users.forEach(elem => {userMap[elem.id] = elem});                     
    topic_list.topics.map((elem, idx, data) => {
      const obj = {};
      obj.sno = idx;
      obj.title = elem.title;
      obj.views = elem.views;
      const postersID = elem.posters.map(data =>{ const id = data.user_id; return userMap[id]});
      obj.usersID = postersID
      res.push(obj);
    });
    return res;
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
          {
            this.state.data.map((elem, idx) =>  <TableRow index={idx} data={elem}/>)
          }
        </div>
      </div>
    )
  }
}

export default App;
