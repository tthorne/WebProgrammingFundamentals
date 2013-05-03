// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday May 1, 2013
 * Assignment:  Assignment- Functions (Personal)
 */

function pennsicFees(fee, deposit, preRegDiscount, memberFee, weeks){  
// Function with parameters (Fee = Gate Fee, Deposit = Amount paid during pre-registration, preRegDiscount = Discount amount for pre-registering, memberFee = Discount for being a SCA member, weeks = How many weeks are you attending? )
var totalWeeks = weeks; // Number of weeks attending Pennsic War
var week2 = fee - deposit - preRegDiscount - memberFee;
var week1 = week2 + 40; // If attending 1 week add $40 to the total since that's the difference between having a SCA membership and not having membership
if (totalWeeks == 2){
	console.log("You don't need to pay anything."); // Result if the total of week2 = 0
}else if (totalWeeks == 1){
	console.log("You need $" + week1 + " when you get to Pennsic War."); // Result of attending 1 week.

}else{
	console.log("You need $" + week2 + " when you get to Pennsic War."); // Result if the total of week2 is NOT 0
};
}

pennsicFees(190, 155, 10, 0, 1);
