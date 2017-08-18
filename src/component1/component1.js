'use strict';

import React from 'react';
import returnBoris from '../data/borisChen.js';
import Papa from 'papaparse';
import $ from 'jquery'

class Component1 extends React.Component {
  constructor(props){
    super(props);
    this.state ={active:"notDrafted"}
    this.borisChen = returnBoris();
    this.borisJson = Papa.parse(this.borisChen)
    this.playerList = this.borisJson.data
    this.init()
  }

  init(){

  }
 
render(){
      let rank = this.playerList.map((stats, index)=>{
      return (
        <tr key={index} id={index} className="aRow">
        <button  onClick={()=>{this.props.handleClick(index, stats[1], stats[3])}}>+</button>
             {
                stats.map((singlePlayer, i) => {
                  return (
                     <td key={i}>{singlePlayer}</td>
                  )
                })
               }
                  <button onClick={()=>{this.props.takeAway(index, stats[1], stats[3])}}>-</button>
                  <button onClick={()=>{this.props.elseDrafted(index, stats[1], stats[3])}}>Tooken</button>
        </tr>
      )
    })
return (
  <div className="database">
  {rank}
  </div>
  )
}
}



export default Component1;
