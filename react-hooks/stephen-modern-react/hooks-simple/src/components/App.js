import React from 'react';

class App extends React.Component{
    state = {resource: 'posts'};

    render(){
        return(
            <div>
                <div>
                    <button onClick={() => this.setState({resource: 'posts'})}>
                        Posts
                    </button>
                    <button onClick={() => this.setState({resource: 'todos'})}>
                        Todos
                    </button>
                </div>
                {this.state.resource}
            </div>
        )
    }
}

export default App