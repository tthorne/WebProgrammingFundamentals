// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday May 1, 2013
 * Assignment:  Assignment- Functions (Industry)
 */


/* What was the average that people spent on instant scratch off tickets and online tickets in the store today? */
var lotteryTickets = function(twenties, tens, fives, threes, twos, ones, online){
	var totalTickets = (twenties + tens + fives + threes + twos + ones + online) / 7;
	return totalTickets;
}

var totalSales = lotteryTickets (130, 50, 25, 18, 20, 15, 500);
console.log(totalSales);
