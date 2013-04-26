// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Assignment- Conditions (Wacky)
 */

var wacky = alert("Do I want hot chocolate, Mountain Dew or ice cream?  If it is below 40 \xB0 F I'll drink Hot Chocolate");
var temp = prompt("What is the current temperature?");

if (temp <= 40) /* Checks to make ammonia and nitrites equal 0 and nitrates are less then 50 ppm */
{
	change = "I'm drinking hot chocolate."; /* Result if ammonia, nitrites are at 0 and nitrates are less then 50 ppm */
}else{
	change = ("I'm eating ice cream."); /* Result if ammonia, nitrites don't equal 0 and nitrates are greater then 50 ppm */
}

console.log(change);
