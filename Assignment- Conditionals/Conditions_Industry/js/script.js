// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Assignment- Conditions (Industry)
 */
var item = alert ("Did the store make a profit last month compared to the previous month?"); /*  */
var previousMonth = prompt("What was previous month's profit?"); /*  */
var lastMonth = prompt("What was last month's profit?"); /*  */
var thismMonth = prompt("How much has the store brought in so far?"); /*  */

if (previousMonth < lastMonth) /* Checks to make ammonia and nitrites equal 0 and nitrates are less then 50 ppm */
{
	profit = "Store made a profit."; /* Result if ammonia, nitrites are at 0 and nitrates are less then 50 ppm */
}else{
	profit = "Store didn't make a profit"; /* Result if ammonia, nitrites don't equal 0 and nitrates are greater then 50 ppm */
}

console.log(profit);
