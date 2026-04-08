
var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

var answer = -1;

for (var X = 0; X <= 100000; X++) {
  var num = N + X;


  if (num % K !== 0) {
    continue;
  }


  var str = String(num);
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (str === reversed) {
    answer = X;
    break;
  }
}

alert(answer);
