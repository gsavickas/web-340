/*
============================================
; Title:  Exercise 7.2 - TDD
; Author: Grayton Savickas
; Date:   21 Feb 2021
; Modified By:
; Description: TDD
;===========================================
*/
const header = require('../../../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 7.2 - TDD")
console.log(headerValue);

function getFruit(str){
  return str.split(",");
}

module.exports = getFruit;
