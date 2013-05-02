// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 29, 2013
 * Assignment:  Activity: Functions Worksheet
 */

/* 
Circumference

Calculate the circumference of a circle.

    Parameter(s) for function:  Radius of the circle
    Return: Circumference of the circle
    Result to print to the console:  “The circumference of the circle is X”;
*/

function calCircumference(r){
	var r = prompt("What is the radius of the circle?");
	var circumference = 2 * 3.14 * r;
	console.log("The circumference of the circle is " + circumference);
	}
calCircumference();

/* 
Stung!

It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

    Given: Victim’s weight (in pounds)     
    Parameter(s) for function: Victim’s weight (in pounds)
    Return: Number of Bee stings
    Result to print to the console: “It takes X bee stings to kill a X “
*/
