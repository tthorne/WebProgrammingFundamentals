// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Industry)
 */
var item = alert ("How many cigarettes are in stock?"); /* Asks user question */
var previousDay = prompt("How many cigarettes where there yeserday?"); /* Asks how many cigarette were there left from the previous day? */
var unboxed = prompt("How many are out of carton?"); /* Asks how many cigaretttes are out of carton. */
var carton = prompt("How many cartons are there?"); /* Asks for number of cartons */

totalCigsCurrent = (carton * 10)+ + unboxed; /* Taking number to carton x 10 since there are 10 packs in a carton and adding that to number of packs. */
console.log("There are currently " + totalCigsCurrent + "cigarettes in stock.");

sold = previousDay - totalCigsCurrent; /* Takes previous cigarette count and subtract it from current cigarettes in stock. */
console.log("There was a total of " + sold + " cigarettes were sold.")
