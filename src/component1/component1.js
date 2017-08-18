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
    this.sortTable = this.sortTable.bind(this);
  }


  removeThis(arr){
    this.topLine = arr.splice(0,1)
  }

  sortTable(n) {
    console.log("THIS IS N", n)
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("database");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x> y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      console.log(rows[i])
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

render(){

      let rank = this.playerList.map((stats, index)=>{

      return (
<tbody>
        <tr key={index} id={'a'+index} className="aRow tablesorter" onClick={()=>{this.sortTable({index})}}>
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
        </tbody>
      )
    })
return (
  <table id="database" className="database">
  {rank}
  </table>

  )
}

}



export default Component1;
