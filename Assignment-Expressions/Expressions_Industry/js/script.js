// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Industry)
 */
var item = alert ("How many cigarettes are in stock?"); /* Asks user question */
var previousDay = prompt("How many cigarettes where there yeserday?"); /* Asks how many cigarette were there left from the previous day? */
var previousPacks = prompt("How many unboxed cigarettes were there yesterday?"); /* Asks how many packs were the yesterday. */
var previousCartons = prompt("How many cartons of cigarettes were there yesterday?"); /* Asks how many cartons were there yesterday? */
var unboxed = prompt("How many unboxed cigarettes are there?"); /* Asks how many cigaretttes are out of carton. */
var carton = prompt("How many cartons are there?"); /* Asks for number of cartons */

totalCigsCurrent = (carton * 10)+ + unboxed; /* Taking number to carton x 10 since there are 10 packs in a carton and adding that to number of packs. */
console.log("There are currently " + totalCigsCurrent + " cigarettes in stock.");

packs = previousPacks - unboxed; /* Subtracts the current amount of packs from previosu day's packs. */
cartons = previousCartons - carton; /* Cartons the current amount of packs from previosu day's cartons. */

sold = previousDay - totalCigsCurrent; /* Takes previous cigarette count and subtract it from current cigarettes in stock. */
console.log("There was a total of " + sold + " cigarettes were sold. With a total of " + packs + " packs and " + cartons + " sold.");
