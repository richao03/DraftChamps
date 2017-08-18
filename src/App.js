import React, { Component } from 'react';
import logo from './Football_icon.png';
import './App.css';
import $ from 'jquery'
import returnBoris from './data/borisChen.js';
import Papa from 'papaparse';
import Component1 from './component1/component1.js'
import Component2 from './component1/component2.js'
import Component3 from './component1/component3.js'

class App extends Component {
  constructor(props){
    super(props);
    this.borisChen = returnBoris();
    this.borisJson = Papa.parse(this.borisChen)
    this.playerList = this.borisJson.data
    this.state = {onTeam:[]}
    this.handleClick = this.handleClick.bind(this)
    this.takeAway = this.takeAway.bind(this)
  }
  
  handleClick(first, second, third){
     let target = document.getElementById(first)
    for(let i = 0 ; i < this.state.onTeam.length; i++){
      if(this.state.onTeam[i][0]==second){
        $(target).toggleClass("active")
        let array = this.state.onTeam;
        array.splice(i,1)
        this.setState({onTeam:array})
        return
      } 
    }
    this.setState({onTeam: [...this.state.onTeam, [second, third]]})
    
    $(target).toggleClass("active")
    console.log("clicked", first)
    console.log("second", second)
    console.log("third", third)
  }

  takeAway(first, second, third){
     let target = document.getElementById(first)
     for(let i = 0 ; i < this.state.onTeam.length; i++){
      if(this.state.onTeam[i][0]==second){
        $(target).toggleClass("active")
        let array = this.state.onTeam;
        array.splice(i,1)
        this.setState({onTeam:array})
        return
      } 
    }
  }

  elseDrafted(first, second, third){
       let target = document.getElementById(first)
      $(target).toggleClass("elseDrafted")


  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Champions Draft Here</h2>
        </div>
        <div className="App-intro">
        <Component3 onTeam={this.state.onTeam} />
        <Component2  onTeam={this.state.onTeam}/>
      <Component1  handleClick={this.handleClick} takeAway={this.takeAway} elseDrafted={this.elseDrafted}/>
      
         </div>
      </div>
    );
  }
}

export default App;
