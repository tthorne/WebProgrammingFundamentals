// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Assignment- Conditions (Industry)
 */
var item = alert ("Did the store make a profit last month compared to the previous month?"); /* States what the code is for */
var previousMonth = prompt("What was previous month's profit?"); /* Asks for the previous month profit amount. */
var lastMonth = prompt("What was last month's profit?"); /*  */

profit = (previousMonth < lastMonth) ? "The store made a profit compared to last month." : "The store didn't make a profit compared to last month.";

console.log(profit);
