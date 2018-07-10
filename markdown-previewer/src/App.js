import React, { Component } from 'react';
import './App.css';

const marked = require('marked');
marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor(){
    super();
    let dummyInp = placeholderInp
    // "# Marked in browser\n\nRendered by **marked**."
    let dummyOut = marked(dummyInp)
    this.state = {
      input: dummyInp,
      output: dummyOut,
      err:""
    }
    this.update = this.update.bind(this);
  }

  update(e){
    let code = e ? e.target.value : this.state.input;
    try{
      this.setState({
        input: code,
        output: marked(code),
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }

  render() {
    let inpStyle = {height: '100%'}
    return (
      <div className="container-fluid">
        <div className="container-fluid header">
          <div className="row">
            <div className="col-lg-6 text-center">Editor</div>
            <div className="col-lg-6 text-center">Previewer</div>
          </div>
        </div>
        <div className="container-fluid inputArea">
          <div className="row" style={inpStyle}>
            <textarea
              id="editor"
              className="col-lg-6"
              onChange={this.update}
              defaultValue={this.state.input}
              />
            <div className="col-lg-6" id="preview" dangerouslySetInnerHTML={{__html: this.state.output}}></div>
          </div>
        </div>
      </div>
    );
  }
}

const placeholderInp =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default App;
