// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Industry)
 */
var item = alert ("How many cigarettes are in stock?");
var previousDay = prompt("How many cigarettes where there yeserday?");
var unboxed = prompt("How many are out of carton?");
var carton = prompt("How many cartons are there?");

totalCigsCurrent = unboxed + carton;
console.log("There are currently " + totalCigsCurrent + "cigarettes in stock.");

sold = totalCigsCurrent - previousDay;
console.log(sold + "cigarettes were cold.")
