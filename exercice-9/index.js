'use strict';

var checkPalindrome = function checkPalindrome(str){
    this.str = str;
}

checkPalindrome.prototype.isPalindrome = function(){
    var str = this.str;
    var clean =  (str) => str.toLowerCase().replace(/[\W_]/g, '');
    var cleanStr = clean(str);

    for(var i = 0; i < cleanStr.length / 2; i++){
        if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]){
            alert('no');
             alert(false);
        }
    }
    alert(true)
}

checkPalindrome.prototype.run = function(){
    this.isPalindrome();
}

var palindromek1 = new checkPalindrome('ALILA');
palindrome1.run();