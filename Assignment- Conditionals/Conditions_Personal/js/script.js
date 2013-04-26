// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Assignment- Conditions (Personal)
 */

/* Should I change my fish tank water? */

var ammonia = prompt("What is the ammonia level?"); /* Asks what the ammonia level of the tank is. */
var nitrite = prompt("What is the nitrite level?"); /* Asks what the ammonia level of the tank is. */
var nitrate = prompt("What is the nitrate level?"); /* Asks what the ammonia level of the tank is. */

if (ammonia == 0 && nitrite == 0 && nitrate <= 50)
{
	console.log("You don't need to change the tank water.");
}else{
	console.log("You need to change the tank water")
};
