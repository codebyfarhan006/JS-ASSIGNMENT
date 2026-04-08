// Question 5: Skipping Numbers

var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var divisor = seed + 2;
var sum = 0;
var m = 0;

// Keep going until sum >= N
while (sum < N) {
  m = m + 1;

  // Only add m if it is NOT divisible by divisor
  if (m % divisor !== 0) {
    sum = sum + m;
  }
}

alert(m + " " + sum);
