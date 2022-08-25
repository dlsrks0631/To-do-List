const age = parseInt(prompt("How old are you ? "));

if (isNaN(age)) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("Thank you for writing your age.");
} else {
  console.log("You can ");
}
