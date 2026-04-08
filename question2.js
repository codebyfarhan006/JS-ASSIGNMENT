// Question 2: Roll-Seed Lock

var current = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

// Repeat exactly 3 times
for (var i = 0; i < 3; i++) {
  if (current % 2 === 0) {
    current = current / 2 + seed;
  } else {
    current = current * 3 - seed;
  }
}

// Check if final number is between 100 and 999
if (current >= 100 && current <= 999) {
  // Get the middle digit
  var numStr = String(current);
  var middleDigit = parseInt(numStr[1]);

  if (middleDigit === seed) {
    alert("YES, " + current);
  } else {
    alert("NO, " + current);
  }
} else {
  alert("NO, " + current);
}
