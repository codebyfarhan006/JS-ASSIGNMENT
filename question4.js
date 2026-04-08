// Question 4: Fare Calculator

var base = parseInt(prompt("Enter base:"));
var distance = parseInt(prompt("Enter distance:"));
var minutesLate = parseInt(prompt("Enter minutesLate:"));
var seed = parseInt(prompt("Enter seed:"));

// Step 1: start with base fare
var fare = base + 7 * distance;

// Step 2: if late more than 15 min, add 20
if (minutesLate > 15) {
  fare = fare + 20;
}

// Step 3: if distance > 10, add 10% of current fare (floor)
if (distance > 10) {
  fare = fare + Math.floor(fare * 0.10);
}

// Step 4: seed adjustment
if (seed % 2 !== 0) {
  fare = fare - seed;
} else {
  fare = fare + seed;
}

// Step 5: round UP to nearest multiple of 5
if (fare % 5 !== 0) {
  fare = fare + (5 - (fare % 5));
}

alert(fare);
