import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
          validHackers: [],
          invalidHackers: []
        };
        this.updateHacker = this.updateHacker.bind(this);
    }

    updateHacker(names, dates){
      const mainArr = []
      const namesArr = names.split("\n");
      const datesArr = dates.split("\n");
      for(let i = 0; i < namesArr.length; i++){
        const tmpObj = {};
        tmpObj.name = namesArr[i];
        tmpObj.dates = datesArr[i];
        tmpObj.valid = true;
        mainArr.push(tmpObj);
      }
      this.validateData(mainArr);
      const invalidHackers = []
      const validHackers = []
      for(let i = 0; i < mainArr.length; i++){
        if(mainArr[i].valid == false){
          invalidHackers.push(mainArr[i].name)
        }
        else{
          const tmpObj = {};
          tmpObj.name = mainArr[i].name;
          tmpObj.diff = mainArr[i].diff;
          validHackers.push(tmpObj);
        }
      }
      this.setState({
        validHackers: validHackers,
        invalidHackers: invalidHackers
      })
    }

    validateData(mainArr){
      for(let i = 0; i < mainArr.length; i++){
        const tmpObj = mainArr[i];
        if(tmpObj.dates == undefined){
          tmpObj.valid = false;
        }
        else{
          const date = tmpObj.dates.split(" to ");
          if(date.length == 1){
            tmpObj.valid = false;
            continue;
          }
          const startDate  = new Date(date[0]);
          const endDate  = new Date(date[1]);
          if(startDate == "Invalid Date" || endDate == "Invalid Date" || (typeof(endDate - startDate) == "string")){
            tmpObj.valid = false;
            continue;
          }
          tmpObj.diff = Math.floor((endDate - startDate) / (1000*60*60*24))
        }
      }
    }

    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings onClickCallBack={this.updateHacker}></Bookings>
                <Error display={this.state.invalidHackers}></Error>
                <Meals display={this.state.validHackers}></Meals>
            </div>
        </div>);
    }
}

export default App;
