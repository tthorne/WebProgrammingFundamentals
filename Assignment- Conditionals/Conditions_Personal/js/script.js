// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Assignment- Conditions (Personal)
 */

/* Should I change my fish tank water? */

var ammonia = prompt("What is the ammonia level?"); /* Asks what the ammonia level of the tank is. */
var nitrite = prompt("What is the nitrite level?"); /* Asks what the nitrite level of the tank is. */
var nitrate = prompt("What is the nitrate level?"); /* Asks what the nitrate level of the tank is. */

if (ammonia == 0 && nitrite == 0 && nitrate <= 50) /* */
{
	change = "You don't need to change the tank water."; /* Result if ammonia, nitrites are at 0 and nitrates are less then 50 ppm */
}else{
	change = ("You need to change the tank water");
}

console.log(change);
