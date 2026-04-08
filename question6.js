// Question 6: Contest Score Judge

var a = parseInt(prompt("Enter correct answers (a):"));
var b = parseInt(prompt("Enter partial answers (b):"));
var c = parseInt(prompt("Enter wrong answers (c):"));

// Calculate score
var score = 3 * a + b - 2 * c;

// If negative, make it 0
if (score < 0) {
  score = 0;
}

// If total questions > 50, subtract 10
if (a + b + c > 50) {
  score = score - 10;
}

// Determine status
var status = "";
if (score >= 60) {
  status = "PASS";
} else {
  status = "FAIL";
}

alert(score + ", " + status);
