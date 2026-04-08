var current = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));


for (var i = 0; i < 3; i++) {
  if (current % 2 === 0) {
    current = current / 2 + seed;
  } else {
    current = current * 3 - seed;
  }
}


if (current >= 100 && current <= 999) {

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
