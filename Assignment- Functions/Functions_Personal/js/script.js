// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday May 1, 2013
 * Assignment:  Assignment- Functions (Personal)
 */

function pennsicFees(fee, deposit, preRegDiscount, memberFee, weeks){
var totalWeeks = weeks;
var week1 = fee - deposit - preRegDiscount - memberFee + 40;
var week2 = fee - deposit - preRegDiscount - memberFee;
if (week2 == 0){
  console.log("You don't need to pay anything");
}else if (weeks == 1){
	console.log("You need $" + week1 + " when you get to Pennsic War");

}else{
	console.log("You need $" + week2 + " when you get to Pennsic War");
};
}

pennsicFees(190, 155, 10, 25, 2);
