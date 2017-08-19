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
    this.draft = this.draft.bind(this)
    this.takeAway = this.takeAway.bind(this)
  }
  
  draft(first, second, third){
     let target = document.getElementById("a"+first)
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
  }

  takeAway(first, second, third){
     let target = document.getElementById("a"+first)
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

  componentWillReceiveProps(nextState) {
    if(JSON.stringify(this.state.onTeam) !== JSON.stringify(nextState.onTeam)) // Check if it's a new user, you can also use some unique, like the ID
    {
        this.setState({renew:true})
} 
}
  


  elseDrafted(first, second, third){
       let target = document.getElementById("a"+first)
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
      <Component1  draft={this.draft} takeAway={this.takeAway} elseDrafted={this.elseDrafted}/>
      
         </div>
      </div>
    );
  }
}

export default App;
