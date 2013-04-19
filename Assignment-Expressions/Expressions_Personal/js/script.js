// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Personal)
 */

/* How much should I feed my horse? */

var heartGirth = prompt("What is the Heart Girth of your horse?"); /* Asking the user for the mmeasurement of the horse's Heart Girth */
var length = prompt("What is the Length of your horse?"); /*Asks the user for the length of the horse. */
var age = prompt("Is your horse a grown horse, yearling or weanling? Enter 330 for Grown, 301 for Yearling and 280 for Weanling."); /* Asks the user if the horse is fully grown, yearling or weanling and then enter the correct number */
var horseWeight
var totalFeed


weight = heartGirth * heartGirth * length / age; /* Figures out the weight by multplying the Heart Girth by the Heart Girth by length and dividing it by that age. */

horseWeight = parseInt(weight); /* Tells the script to convert the horse's weight to an integer. */
console.log("Your horse's weight is " + horseWeight + "lbs."); /* Give the horse's weight */

feed = weight * 0.02; /* To determine the feed it takes the weight and multiplies it by 2% */

totalFeed = parseFloat(feed);
console.log("Your horse should receive " + totalFeed + "lbs. a day."); /* Gives the amount of food needed per day. */
