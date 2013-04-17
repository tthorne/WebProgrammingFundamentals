// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Activity: Expression Worksheet
 */

/* Dog Years
Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
     Givens:

    Sparky’s age.

     Result Varable:

    Sparky’s age in dog years.

    Result to Print:

    “Sparky is X human years old which is X in dog years.

*/

var humanAge = 4;
sparkyAge = humanAge * 7;

console.log("Sparky is" + " " + humanAge + " " + "human years old which is" + " " + sparkyAge + " " + "in dog years.");

/* Slice of Pie part 1
A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
     Given:

    Number of slices per pizza
    Number of people at the party
    Number of pizzas ordered.

     Result Variables:

    Number of slices per person. (Can be a decimal or floating point).

    Result to Print:

    “Each person ate X slices of pizza at the party.”
 */

var slicesPizza = 7;
var people = 12;
var pizzas = 6;

slicesPizza = slicesPizza * pizzas / people;

console.log("Each person ate " + slicesPizza + " slices of pizza at the party.");

/*Slice of Pie part II
At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
     Given:

    Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.

     Result Variables:

    Number of slices Sparky gets to eat.

    Result to Print:

    “Sparky got X slices of pizza.”
 */
total = slicesPizza * 10;
var remainder = total % 10;

console.log("Sparky got " + remainder + " slices of pizza.");

/* Average shopping bill
You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.

Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.

     Givens:

    An array with five weekly grocery totals.

     Result Variable:

    Total amount spent on groceries.
    Average weekly grocery spending.

    Result to Print:

    “You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”
    */
   
   var myArray = new Array ();
   myArray[0] = 210;
   myArray[1] = 230;
   myArray[2] = 241;
   myArray[3] = 120;
   myArray[4] = 170;
   
   var groceryTotal = (myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4]);
   var average = (myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4])/5;
   
   console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks.  That is an average of $" + average + " per week.");
   
   /* Discounts
Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)
     Givens:

    Original price
    Discount percentage (20% would be 20, for example)
    Description of item
    Sales tax percentage

     Result Variables:

    Price of the item with tax
    Price of the item without tax

     Result to Print:

    “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”
    */
   
   var itemDescription = "Robe du Soir Gown";
   var originalPrice = 266;
   var discountPercentage = 25;
   var salesTax = .06;
   
   var salesPrice =  originalPrice - (originalPrice * discountPercentage/100);
   var taxSale = salesPrice + (salesPrice * salesTax);
   
   console.log("Your " + itemDescription + " was originally" + " $" + originalPrice + ", but after a " + discountPercentage + "\% discount, it is now $" + salesPrice + " without tax, and $" + taxSale + " with tax.");
