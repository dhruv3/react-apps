import React, { Component } from 'react';

class ButtonPad extends Component{
  render(){
    return(
      <div className="col-lg-12">
        {bank.map(elem =>
            <div key={elem.keyTrigger} className="drum-pad col-lg-3 offset-lg-1">
              <audio className="clip" id={elem.keyTrigger} desc={elem.desc} src={elem.url}></audio>
              {elem.keyTrigger}
            </div>)
        }
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    this.timeout = []
    this.playAudioOnClick = this.playAudioOnClick.bind(this)
    this.keyPressAudio = this.keyPressAudio.bind(this)
    this.state ={
      displayText: ""
    }
  }

  //https://stackoverflow.com/a/46123962
  //document level key binding
  keyPressAudio(e){
    let key = e.key.toUpperCase();
    if(document.getElementById(key)){
      //clear all the previous timeouts
      this.timeout.map(elem => clearTimeout(elem))
      this.timeout = []
      this.setState({
        displayText: document.getElementById(key).getAttribute('desc')
      })
      document.getElementById(key).volume = 0.03;
      document.getElementById(key).play();
      this.timeout.push(setTimeout(() => this.setState({
        displayText: ""
      }), 3000))
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.keyPressAudio, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressAudio, false);
  }

  playAudioOnClick(e){
    //check if clicked element has a single child with class 'clip'
    if(e.target.children.length == 1 && e.target.children[0].classList.contains('clip')){
      //clear all the previous timeouts
      this.timeout.map(elem => clearTimeout(elem))
      this.timeout = []
      e.target.children[0].volume = 0.03
      e.target.children[0].play();
      this.setState({
        displayText: e.target.children[0].getAttribute('desc')
      })
      this.timeout.push(setTimeout(() => this.setState({
        displayText: ""
      }), 3000))
    }
  }

  render() {
    return (
      <div className="container" id="drum-machine" onClick={this.playAudioOnClick}>
        <div className="row displayChar" id="display" dangerouslySetInnerHTML={{__html: this.state.displayText}}>
        </div>
        <div className="row" id="drumButtons">
          <ButtonPad/>
        </div>
      </div>
    );
  }
}

const bank = [{
    keyTrigger: 'Q',
    desc: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyTrigger: 'W',
    desc: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyTrigger: 'E',
    desc: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyTrigger: 'A',
    desc: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyTrigger: 'S',
    desc: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyTrigger: 'D',
    desc: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyTrigger: 'Z',
    desc: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyTrigger: 'X',
    desc: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyTrigger: 'C',
    desc: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

export default App;
