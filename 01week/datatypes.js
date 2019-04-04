"use strict";

// Getting the day and time
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
console.log(hour, minute, second);
// Convert a number to a string
var num = 15;
var n = num.toString(); 
console.log(typeof n);

//Convert a string to the number
var text = '42px';
var integer = parseInt(text, 10);
console.log(integer);

// takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String
function isBoolean () {
    return typeof value === 'boolean';
    }
    console.log(iaBoolean);