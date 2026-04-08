// Question 1: Digit Gatekeeper

var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

var count = 0;

for (var x = L; x <= R; x++) {

  // Check divisible by K
  if (x % K !== 0) {
    continue;
  }

  // Check no digit 0
  var digits = String(x);
  var hasZero = false;
  for (var i = 0; i < digits.length; i++) {
    if (digits[i] === "0") {
      hasZero = true;
      break;
    }
  }
  if (hasZero) {
    continue;
  }

  // Calculate sum of digits
  var digitSum = 0;
  for (var i = 0; i < digits.length; i++) {
    digitSum = digitSum + parseInt(digits[i]);
  }

  // Check if digit sum is prime
  if (digitSum < 2) {
    continue;
  }
  var isPrime = true;
  for (var j = 2; j < digitSum; j++) {
    if (digitSum % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count = count + 1;
  }
}

alert(count);
