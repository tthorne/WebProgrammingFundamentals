// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Assignment- Conditions (Wacky)
 */

var wacky = alert("Do I want hot chocolate, Mountain Dew or ice cream?  If it is below 40 \xB0 F I'll drink Hot Chocolate.  If it's above 70 \xB0 I'll eat ice cream.");
var temp = prompt("What is the current temperature?");

if (temp <= 40) /* If temperature is less then 40 */
{
	drink = "I'm drinking hot chocolate."; /* This is the result. */
}else if (temp >= 41 && temp <= 70) { /* If temperature is greater than 41 and less than 70 I'll drink Mountain Dew. */
	drink = "I'm drinking Mountain Dew";
}else{
	change = ("I'm eating ice cream."); /* Result if ammonia, nitrites don't equal 0 and nitrates are greater then 50 ppm */
}

console.log(drink);
