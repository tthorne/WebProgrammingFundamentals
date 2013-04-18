// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday April 17, 2013
 * Assignment:  Activity: Expression Worksheet
 */

/* Dog Years
  
 Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
  
 Givens: Sparky’s age.

 Result Varable: Sparky’s age in dog years.

 Result to Print: “Sparky is X human years old which is X in dog years.

 */

var humanAge = 4; /* Determining Sparky's age in human years */
sparkyAge = humanAge * 7; /* Taking Sparky's human age and multiplying it by how many years a dog ages 7 */

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

var slicesPizza = 7; /* How many slices per pizza */
var people = 12; /* Number of people attending the party */
var pizzas = 6; /* Number of pizzas */

slicesPizza = slicesPizza * pizzas / people; /* Multiplying the number of slices per pizza by the number of pizzas and dividing it by the number of people at the party */

console.log("Each person ate " + slicesPizza + " slices of pizza at the party.");

/* Slice of Pie part II
  
 At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
 
 Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
 
 Given:
 Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.
 
 Result Variables:
 Number of slices Sparky gets to eat.
 
 Result to Print:
 “Sparky got X slices of pizza.”
 */

total = slicesPizza * 10; /* taking the number of slices everyone received and multiplying it by 10 */
var remainder = total % 10; /* Using the Modulo to take the total and divid it by 10 to get the remainder*/

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

var myArray = new Array();
myArray[0] = 210; /* Shopping Day 1 */
myArray[1] = 230; /* Shopping Day 2 */
myArray[2] = 241; /* Shopping Day 3 */
myArray[3] = 120; /* Shopping Day 4 */
myArray[4] = 170; /* Shopping Day 5 */

var groceryTotal = (myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4]); /* Getting the total of all shopping days*/
var average = (groceryTotal) / 5; /* Taking the total of grocery bills and dividing it by 5 since there are 5 shopping days.*/

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

var itemDescription = "Robe du Soir Gown"; /* Item description */
var originalPrice = 266; /* Original price of item */
var discountPercentage = 25; /* Discount Percentage */
var salesTax = .06; /* Sales tax*/

var salesPrice = originalPrice - (originalPrice * discountPercentage / 100); /* Taking the Original Pirce and multiplying by the discount percentage and diviing by 100 to get the discount amount.  Then take the original price and subtract it by the discount amount to get the sale price */
var taxSale = salesPrice + (salesPrice * salesTax); /* Take the sales price and multiply it by the sales tax then added the total to the sales price. */

console.log("Your " + itemDescription + " was originally" + " $" + originalPrice + ", but after a " + discountPercentage + "\% discount, it is now $" + salesPrice + " without tax, and $" + taxSale + " with tax.");
