

var base = parseInt(prompt("Enter base:"));
var distance = parseInt(prompt("Enter distance:"));
var minutesLate = parseInt(prompt("Enter minutesLate:"));
var seed = parseInt(prompt("Enter seed:"));


var fare = base + 7 * distance;
if (minutesLate > 15) {
  fare = fare + 20;
}

if (distance > 10) {
  fare = fare + Math.floor(fare * 0.10);
}

if (seed % 2 !== 0) {
  fare = fare - seed;
} else {
  fare = fare + seed;
}

if (fare % 5 !== 0) {
  fare = fare + (5 - (fare % 5));
}

alert(fare);
