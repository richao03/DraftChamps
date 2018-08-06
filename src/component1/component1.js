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
    this.topLine;
    this.removeThis = this.removeThis.bind(this);
  }


  removeThis(arr){
    this.topLine = arr.splice(0,1)
this.topLine[0].unshift("")
this.topLine[0].push("")
  }

render(){
      this.removeThis(this.playerList)

      let categories = this.topLine.map((info, index)=>{
       return(
          info.map((category, index)=>{
            return (<th>{category}</th>)
          })
        )
      })

      let rank = this.playerList.map((stats, index)=>{
      return (

        <tr key={index} id={'a'+index} className="aRow tablesorter">
        <button className="draft-Button button" onClick={()=>{this.props.draft(index, stats[1], stats[3])}}>+</button>
             {
                stats.map((singlePlayer, i) => {
                  return (
                     <td key={i}>{singlePlayer}</td>
                  )
                })
               }
                  <button className="takeAway-Button button" onClick={()=>{this.props.takeAway(index, stats[1], stats[3])}}>-</button>
                  <button className="elseDrafted-Button button" onClick={()=>{this.props.elseDrafted(index, stats[1], stats[3])}}>Stolen</button>
        </tr>
      )
    })
return (
  <table id="database" className="database tablesorter">
    <thead>
      <tr className="aRow tablesorter">{categories}</tr>
    </thead>
    <tbody>
      {rank}
    </tbody>
  </table>
  )
}
}



export default Component1;
