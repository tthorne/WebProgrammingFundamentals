// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 25, 2013
 * Assignment:  Activity: Conditions Worksheet
 */

/* Stuff your face I

To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.

    Given:
        Competitor’s weight.
    Result:
        “The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!”
*/

/*var currentWeight = prompt("How much do you weight?"); /* Asks competitor for their weight. 
if (currentWeight > 250)
{
	console.log("The competitor qualifies for the heavyweight division.");
}else{
	console.log("The competitor needs to gain some weight!")
}; */

/* Celsius to Fahrenheit converter

Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.
    

    Given:
        Degrees (in F or C)
        Unit (a string holding an “F” or a “C”)
    Result:
        “The temperature is X degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”
    Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)
        32F is 0C
        100C is 212F
        90F is 32.22C
 */



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
 /*var userName = prompt("Enter your username:");
 var password = prompt("Enter your password:");
 var correctUsername = "Aquafina";
 var correctPassword = "Beginning";
 
 if (userName == correctUsername && password == correctPassword ){
	 enter = "Welcome, " + userName + "!";

 }else if (userName == correctUsername || password == correctPassword)
 {
	 enter = "User not found. Try again.";
 }else{
	 enter = "Password does not match our records.";
 };

console.log(enter); */

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
 if (age >= 55 && age <= 10){
	 price = 12 - 7;
	 
 }else if (movieTime >=5 && movieTime <=3){
	 price = 12 - 7;
	 
 }else{
	 price = "$12.00";
 };
 
 console.log(price);
