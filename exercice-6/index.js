'use strict';

/**
 * Represents a function that checks french phone numbers.
 * @constructor
 * @param {number} phoneNumber - (french) phone number.
 */

var checkPhoneNumber = function(phoneNumber){
    this.phoneNumber = phoneNumber;
}

/**
 * Checks if phone numbers are valid.
 */

checkPhoneNumber.prototype.check = function(){
    var numberCheck = RegExp(/^(0)[6|7|1]([ .-]?\d{2}){4}$/gm);
    var number = this.phoneNumber;
    if(numberCheck.test(number)){
        alert(number + ' returns ' + true);
    }else{
        alert(number + ' returns ' + false);
    }
}

/**
 * Run
 */

checkPhoneNumber.prototype.run = function(){
    this.check();
}

var check01 = new checkPhoneNumber('0102030405');
check01.run();

var check02 = new checkPhoneNumber('0203040506');
check02.run();

var check06 = new checkPhoneNumber('0605040302');
check06.run();

var check07 = new checkPhoneNumber('0706050403');
check07.run();

var check09 = new checkPhoneNumber('0908070605');
check09.run();