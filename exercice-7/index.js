'use strict';

/**
 * Represents a function that compute notes.
 * @constructor
 * @param {array} array - Multiples values in an array representing grades.
 */

var computeNotes = function computeNotes(array){
    this.array = array;
}

/**
 * Calculate the average of multiple values.
 */

computeNotes.prototype.calculate = function(){
    var array = this.array;
    var moyArray = 0;
    for (var i of array){
    moyArray += i;
    }
    console.log(moyArray);
}

/**
 * Run
 */

checkPhoneNumber.prototype.run = function(){
    this.check();
}

var moy1 = new computeNotes([10, 13, 13, 12, 15, 12, 11, 16, 14]);
moy1.run();

