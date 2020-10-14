'use strict';

/**
 * Represents a function that checks if string in parameter is a palindrome.
 * @constructor
 * @param {string} str - A character string.
 */

var checkPalindrome = function checkPalindrome(str){
    this.str = str;
}

/**
 * Check if palindrome.
 */

checkPalindrome.prototype.isPalindrome = function(){
    var str = this.str;
    var clean =  (str) => str.toLowerCase().replace(/[\W_]/g, '');
    var cleanStr = clean(str);

    for(var i = 0; i < cleanStr.length / 2; i++){
        if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]){
             alert(cleanStr + ' is not a palindrome');
             return false;
        }
    }
    alert(cleanStr + ' is a palindrome');
    return true;
}

/**
 * Run
 */

checkPalindrome.prototype.run = function(){
    this.isPalindrome();
}

var palindrome1 = new checkPalindrome('ressasser');
palindrome1.run();