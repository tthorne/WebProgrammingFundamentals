// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday May 1, 2013
 * Assignment:  Assignment- Functions (Wacky)
 */
 
/* Should I get a bigger fish tank? */
function tank(g, gFish, stock){  
var gallons = g;
var gallonsPerFish = gFish;
var fish = stock * gallonsPerFish; 

numberFish = (fish <= gallons || gallonsPerFish <= gallons) ? "You have plenty of room" : "You need a bigger tank.";

console.log(numberFish);
}

tank(75, 10, 4); // The arguments for the parameters
