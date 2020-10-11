'use strict';

var computeNotes = function computeNotes(){
}

computeNotes.prototype.run = function(){
    this.calculate();
}

computeNotes.prototype.calculate = function(){
    var array = [10, 13, 13, 12, 15, 12, 11, 16, 14];
    var moyArray = 0;
    for (var i of array){
    moyArray += i;
    }
    console.log(moyArray);
}

var launch = new computeNotes();
launch.run();
