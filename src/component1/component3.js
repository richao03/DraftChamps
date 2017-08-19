'use strict';

import React from 'react';
import returnBoris from '../data/borisChen.js';
import Papa from 'papaparse';
import $ from 'jquery'

class Component3 extends React.Component {
  constructor(props){
    super(props);
    this.borisChen = returnBoris();
    this.borisJson = Papa.parse(this.borisChen)
    this.playerList = this.borisJson.data

    this.allDrafted
  }

roundNum(num){
    return Math.round(num*10)/10;
  };
 
// getAllDrafted(arr){
//   return arr.
// }


render(){
    this.WR = 0;
    this.WRcount = 0;
    this.WRAvg = 0;
    this.RB = 0;
    this.RBcount = 0;
    this.RBAvg = 0;
    this.QB = 0;
    this.QBcount = 0;
    this.QBAvg =0;
    this.TE = 0;
    this.TEcount = 0;
    this.TEAvg = 0;

  this.props.onTeam.map((single,index)=>{
    if(single[1][0]==="W"){
      this.WRcount++
      var matches = single[1].match(/\d+$/)
      this.WR += Math.abs(parseInt(matches[0])-100)
      this.WRAvg = this.roundNum(this.WR/parseInt(this.WRcount))
    }
      if(single[1][0]==="R"){
      this.RBcount++
      var matches = single[1].match(/\d+$/)
      this.RB += Math.abs(parseInt(matches[0])-100)
      this.RBAvg = this.roundNum(this.RB/parseInt(this.RBcount))
    }
      if(single[1][0]==="Q"){
      this.QBcount++
      var matches = single[1].match(/\d+$/)
      this.QB += Math.abs(parseInt(matches[0])-100)
      this.QBAvg = this.roundNum(this.QB/parseInt(this.QBcount))
    }
      if(single[1][0]==="T"){
      this.TEcount++
      var matches = single[1].match(/\d+$/)
      this.TE += Math.abs(parseInt(matches[0])-100)
      this.TEAvg = this.roundNum(this.TE/parseInt(this.TEcount))
    }
  })


  
return (
  <div className="average">
    <div className="eachAvg">WR Average:{this.WRAvg}---WR Drafted: {this.WRcount}</div>
    <div className="eachAvg">RB Average:{this.RBAvg}---RB Drafted: {this.RBcount}</div>
    <div className="eachAvg">QB Average:{this.QBAvg}---QB Drafted: {this.QBcount}</div>
    <div className="eachAvg">TE Average:{this.TEAvg}---TE Drafted: {this.TEcount}</div>
  </div>
  )
}
}



export default Component3;
