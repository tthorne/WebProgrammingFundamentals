// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Activity: Conditions Worksheet
 */

/* Stuff your face I

To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.

    Given: Competitor’s weight.
    Result: “The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!”
*/

var currentWeight = prompt("How much do you weight?"); /* Asks competitor for their weight. */
if (currentWeight > 250) 
{
	console.log("The competitor qualifies for the heavyweight division."); /* If the competitor weighs over 250 print this */ 
}else{
	console.log("The competitor needs to gain some weight!"); /* If the competitor weighs less then 250 print this */
};

/* Last Chance for Gas!

A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.
    

    Given:
        Gas efficiency of the car (in mpg)
        Gauge reading of the gas tank (in %)
        Car’s gas tank capacity (in gallons)
    Result To Print Out:
        “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
*/
var mpg = prompt("What is your vehicle's MPG?");
var gauge = prompt("What is the reading on the gauge?");
var tank = prompt("How many gallons of fuel can your gas tank hold?");

gas = (mpg * tank) * gauge;
stop = (gas >= 200 ) ? "Yes, you can make it without stopping for gas!" : "You only have " + gas + " gallons of gas in your tank, better get gas now while you can!";
console.log(gas)
console.log(stop)



/* Check the Login

Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

    Given:
        Username entered by user
        Password entered by user
        Correct username
        Correct password
    Result To Print Out:
        “Welcome, (place their username here)!”  - if the username and password is correct
        “User not found. Try again.” -if the username does not match
        “Password does not match our records.”  -if the username matches but the password does not

 */
 var userName = prompt("Enter your username:"); /* Asks for username */
 var password = prompt("Enter your password:"); /* Asks for password */
 var correctUsername = "Aquafina"; /* Stored username */
 var correctPassword = "Beginning"; /* Stored password */
 
 if (userName == correctUsername && password == correctPassword ){ /* Checks to see if username and password entered match stored password. */
	 enter = "Welcome, " + userName + "!"; /* Print this if they match. */

 }else if (userName == correctUsername || password == correctPassword) /* Checks to see if either username or password are correct. */
 {
	 enter = "User not found. Try again."; /* Print this if username matched, but password doesn't. */
 }else{
	 enter = "Password does not match our records."; /* Print this if only usernames matches. */
 };

console.log(enter);

/* Movie Ticket Price

The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
Determine which of the two prices the customer is eligible for.

    Given:
        Time of Movie (Assume whole numbers here)
        Age of the customer
     Result To Print Out:
        “The ticket price is X”
 */
 var age = prompt("How old are you?");
 var movieTime = prompt("What time is the movie?");
 if (movieTime >= 3 && movieTime <= 5){
	 price = 12 - 7;
	 
 }else if (age <= 10 || age >=55){
 	 price = 12 - 7;
 }else{
	 price = "12.00";
 };
 
 console.log("The ticket price is $" + price);
