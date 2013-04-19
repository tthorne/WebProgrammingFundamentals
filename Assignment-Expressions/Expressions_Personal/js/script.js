// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Assignment- Expressions (Personal)
 */

/* How much should I feed my horse? */

var heartGirth = prompt("What is the Heart Girth of your horse?");
var length = prompt("What is the Length of your horse?");
var age = prompt("Is your horse a grown horse, yearling or weanling? Enter 330 for Grown, 301 for Yearling and 280 for Weanling.");

weight = heartGirth * heartGirth * length / age;
console.log("Your horse's weight is " + weight + "lbs.");

feed = weight * 0.02;
console.log("Your horse should receive " + feed + "lbs. a day.");
