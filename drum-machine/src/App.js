import React, { Component } from 'react';

class ButtonPad extends Component{
  render(){
    return(
      <div className="col-lg-12">
        {bank.map(elem =>
            <div key={elem.keyTrigger} className="drum-pad col-lg-3 offset-lg-1">
              <audio className="clip" id={elem.keyTrigger} src={elem.url}></audio>
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
    this.playAudioOnClick = this.playAudioOnClick.bind(this)
    this.keyPressAudio = this.keyPressAudio.bind(this)
  }

  //https://stackoverflow.com/a/46123962
  //document level key binding
  keyPressAudio(e){
    let key = e.key.toUpperCase();
    if(document.getElementById(key)){
      document.getElementById(key).volume = 0.03;
      document.getElementById(key).play();
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.keyPressAudio, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressAudio, false);
  }

  playAudioOnClick(e){
    if(e.target.children.length == 1){
      e.target.children[0].volume = 0.03
      e.target.children[0].play();
    }
  }

  render() {
    return (
      <div className="container" id="drum-machine" onClick={this.playAudioOnClick}>
        <div className="row displayChar" id="display">
        </div>
        <div className="row" id="drumButtons">
          <ButtonPad/>
        </div>
      </div>
    );
  }
}

const bank = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

export default App;
