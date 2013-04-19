// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Industry)
 */
var item = alert ("How many cigarettes are in stock?"); /* Asks user question */
var previousDay = prompt("How many cigarettes where there yeserday?"); /* Asks how many cigarette were there left from the previous day? */
var previousUnboxed = prompt("How many were out of carton yesterday?"); /* Asks for how many packs were there yesterday? */
var previousCarton = prompt("How many cartons were there yesterday?") /* Asks for how many cartons were there yesterday? */
var unboxed = prompt("How many are out of carton?"); /* Asks how many cigaretttes are out of carton. */
var carton = prompt("How many cartons are there?"); /* Asks for number of cartons */

totalCigsCurrent = unboxed + carton; /* Adds up current number of cigarettes. */
console.log("There are currently " + totalCigsCurrent + "cigarettes in stock.");

packs = previousUnboxed - unboxed; /* Takes previous days number of packs and subtracts them from current packs */
console.log("There were " + packs + " sold yesterday.");

cartons = previousCarton - carton;
console.log("There were " + cartons + " sold yesterday")

sold = previousDay - totalCigsCurrent; /* Takes previous cigarette count and subtract it from current cigarettes in stock. */
console.log("There was a total of " + sold + "cigarettes were cold.")
