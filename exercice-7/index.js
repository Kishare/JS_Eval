'use strict';

var computeNotes = function computeNotes(array){
    this.array = array;
}

computeNotes.prototype.run = function(){
    this.calculate();
}

computeNotes.prototype.calculate = function(){
    var array = this.array;
    var moyArray = 0;
    for (var i of array){
    moyArray += i;
    }
    console.log(moyArray);
}

var moy1 = new computeNotes([10, 13, 13, 12, 15, 12, 11, 16, 14]);
moy1.run();

