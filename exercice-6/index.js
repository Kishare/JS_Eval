'use strict';

var checkPhoneNumber = function(phoneNumber){
    this.phoneNumber = phoneNumber;
}

checkPhoneNumber.prototype.run = function(){
    this.check();
}

checkPhoneNumber.prototype.check = function(){
    var numberCheck = RegExp(/^(0)[6|7|1]([ .-]?\d{2}){4}$/gm);
    var number = this.phoneNumber;
    if(numberCheck.test(number)){
        console.log(true);
    }else{
        console.log(false);
    }
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