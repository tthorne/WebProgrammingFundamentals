// JavaScript Document
/* Student Name:  Tara Thorne
 * Date: Wednesday May 1, 2013
 * Assignment:  Assignment- Functions (Wacky)
 */
 
/* Should I get a bigger fish tank? */
function tank(g, gFish, stock){  // Parameters
var gallons = g; // Defining g as gallons of the tank
var gallonsPerFish = gFish; // Defining gFish as gallonsPerFish
var fish = stock * gallonsPerFish; // Taking stock and multiplying it by the gallons per fish

numberFish = (fish < gallons && gallonsPerFish < gallons) ? "You have plenty of room" : "You need a bigger tank.";
// The result if the total of fish is less then gallons of the tank or if gallonsPerFish is less than the gallons of the tank will be "You have plenty of room", if either are greater then the results will be. "You need a bigger tank."

console.log(numberFish);
}

tank(75, 10, 2); // The arguments for the parameters
