'use strict';

import React from 'react';
import returnBoris from '../data/borisChen.js';
import Papa from 'papaparse';
import $ from 'jquery'

class Component2 extends React.Component {
  constructor(props){
    super(props);
    this.borisChen = returnBoris();
    this.borisJson = Papa.parse(this.borisChen)
    this.playerList = this.borisJson.data
  }
 
render(){
  let rbChart = this.props.onTeam.filter((singlePlayer)=>{
    return singlePlayer[1][0]==="R"
  })
  let showRb = rbChart.map((singlePlayer, index)=>{
    return (
      <div>
        Pick: {index+1} --- <span>{singlePlayer}</span>
        </div>
      )
  })

  let wrChart = this.props.onTeam.filter((singlePlayer)=>{
    return singlePlayer[1][0]==="W"
  })
  let showWr = wrChart.map((singlePlayer, index)=>{
    return (
      <div>
        Pick: {index+1} --- <span>{singlePlayer}</span>
        </div>
      )
  })

   let qbChart = this.props.onTeam.filter((singlePlayer)=>{
    return singlePlayer[1][0]==="Q"
  })
  let showQb = qbChart.map((singlePlayer, index)=>{
    return (
      <div>
        Pick: {index+1} --- <span>{singlePlayer}</span>
        </div>
      )
  })

  let teChart = this.props.onTeam.filter((singlePlayer)=>{
    return singlePlayer[1][0]==="Q"
  })
  let showTe = teChart.map((singlePlayer, index)=>{
    return (
      <div>
        Pick: {index+1} --- <span>{singlePlayer}</span>
        </div>
      )
  })


  
return (
  <div className="draftedPlayers">
    <div className="positionTitle">QB:
  {showQb}
  </div>
    <div className="positionTitle">WR:
  {showWr}
  </div>
  <div className="positionTitle">RB:
  {showRb}
  </div>
   <div className="positionTitle">TE:
  {showTe}
  </div>
  </div>
  )
}
}



export default Component2;
