// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Wacky)
 */

var wacky = alert("How addicted to Mountain Dew are you?"); /* Asks a questions */
var drinkADay = prompt("How many ounces of Dew do you drink a day?"); /* Asks the user how many onces of Dew someone drinks in a day */
var drink = prompt("Do you drink 12 oz, or 20 oz bottle?"); /* Asks the user what size bottle they drink */
var age = prompt("How old are you?"); /* Asks the user for their name */

totalDrink = (drinkADay * drink * 30) / age; /* Multiply the amount of onces they drink in a day by the size of bottle  by 30 for number of days in a month and divid it by the user's age. */

console.log("You are " + totalDrink + " addicted to Mountain Dew.")
