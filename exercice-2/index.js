'use strict';

/**
 * Represents a drawbar.
 * @constructor
 * @param {number} sum - full-length bar.
 * @param {number} nbr - loaded part bar.
 */

var drawBar = function drawBar(sum, nbr){
    this.sum = sum;
    this.nbr = nbr;
}

/**
 * Creates and displays the drawbar.
 */

drawBar.prototype.display = function(){
    var progress = document.createElement('div');
    var bar = document.createElement('div');
    progress.style.width = this.sum + '%';
    progress.style.backgroundColor = 'lightgrey';
    progress.style.height = '50px';
    bar.style.width  = this.nbr + '%';
    bar.style.backgroundColor = 'green';
    bar.style.height = '50px';
    progress.appendChild(bar);
    document.body.appendChild(progress);
}

/**
 * Run
 */

drawBar.prototype.run = function(){
    this.display();
}


var loadingBar = new drawBar(100, 10);
loadingBar.run();