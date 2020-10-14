'use strict';

/**
 * Represents a gridGenerator.
 * @constructor
 * @param {number} xAxis - Horizontal axis.
 * @param {number} yAxis - Vertical axis.
 */

var gridGenerator = function gridGenerator(xAxis, yAxis){
    this.xAxis = xAxis;
    this.yAxis = yAxis;
}

/**
 * Displays the gridGenerator.
 */

gridGenerator.prototype.renderTable = function(){
    var body = document.querySelector('body');
    var table = document.createElement('table');
    for(var i = 1; i <= this.yAxis; i++){
        var tr = document.createElement('tr');
        for(var j = 1; j <= this.xAxis; j++){
            var td = document.createElement('td');
            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            td.style.backgroundColor = randomColor;
            td.style.border = '2px solid black';
            td.style.width = '5px';
            td.style.height = '5px';
            tr.appendChild(td);
        }table.appendChild(tr);
    }body.appendChild(table);
}

/**
 * Set random colors
 */

gridGenerator.prototype.randomColor = function(){
    var td_list = document.querySelectorAll('td');
    td_list.forEach(function(td_list){
      var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      td_list.style.backgroundColor = randomColor;
    });
}

/**
 * Run
 */

gridGenerator.prototype.run = function(){
    this.renderTable();
    setInterval(function(){
      this.randomColor()
      }.bind(this), 1000);
}

var tab = new gridGenerator(8, 10);
tab.run();