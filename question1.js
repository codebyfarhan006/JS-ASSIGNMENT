var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

var count = 0;

for (var x = L; x <= R; x++) {


  if (x % K !== 0) {
    continue;
  }

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


  var digitSum = 0;
  for (var i = 0; i < digits.length; i++) {
    digitSum = digitSum + parseInt(digits[i]);
  }

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
