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
    this.DE = 0;
  }

 
render(){
  let allDrafted = this.props.onTeam[this.props.onTeam.length-1]
  console.log("this is AD", allDrafted)
  if(allDrafted){
    if(allDrafted[1][0]==="W"){
      this.WRcount++
      var matches = allDrafted[1].match(/\d+$/)
      this.WR += Math.abs(parseInt(matches[0])-100)
      this.WRAvg = this.WR/parseInt(this.WRcount)
    }
      if(allDrafted[1][0]==="R"){
      this.RBcount++
      var matches = allDrafted[1].match(/\d+$/)
      this.RB += Math.abs(parseInt(matches[0])-100)
      this.RBAvg = this.RB/parseInt(this.RBcount)
    }
      if(allDrafted[1][0]==="Q"){
      this.QBcount++
      var matches = allDrafted[1].match(/\d+$/)
      this.QB += Math.abs(parseInt(matches[0])-100)
      this.QBAvg = this.QB/parseInt(this.QBcount)
    }
      if(allDrafted[1][0]==="T"){
      this.TEcount++
      var matches = allDrafted[1].match(/\d+$/)
      this.TE += Math.abs(parseInt(matches[0])-100)
      this.TEAvg = this.TE/parseInt(this.TEcount)
    }
  }

  
return (
  <div className="average">
    <div className="eachAvg" style={{backgroundColor:`rgba(255,0,0,`{this.WRAvg}`)`}}>WR Average:{this.WRAvg}---WR Drafted: {this.WRcount}</div>
    <div className="eachAvg">RB Average:{this.RBAvg}---RB Drafted: {this.RBcount}</div>
    <div className="eachAvg">QB Average:{this.QBAvg}---QB Drafted: {this.QBcount}</div>
    <div className="eachAvg">TE Average:{this.TEAvg}---TE Drafted: {this.TEcount}</div>
  </div>
  )
}
}



export default Component3;
