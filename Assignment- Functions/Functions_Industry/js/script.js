// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday May 1, 2013
 * Assignment:  Assignment- Functions (Industry)
 */


/* What was the average that people spent on instant scratch off tickets and online tickets in the store today? */
var lotteryTickets = function(twenties, tens, fives, threes, twos, ones, online){ // The paramaters
	var totalTickets = (twenties + tens + fives + threes + twos + ones + online) / 7; 
	// Tkes the paramaters and totals up the arugments and then divides it by 7
	return totalTickets;
}

var totalSales = lotteryTickets (130, 50, 25, 18, 20, 15, 500); // The arguments for the parameters
sales = parseInt(totalSales); // parses the results from totalTickets to give an integar.
console.log(sales);
