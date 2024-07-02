/*
Summary
3 types of loops:

while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.
break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
*/

// Tasks
// EXERCISE 1 - Last loop value
// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

// last value - 1. The condition stops when i = 0





// EXERCISE 2 - Which values does the while loop show?
// For every loop iteration, write down which value it outputs.
// Both loops alert the same values, or not?

// The prefix form ++i:
let i = 0;
while (++i < 5) alert( i ); // OUTPUTS - 1, 2, 3, 4

// The postfix form i++
let i = 0;
while (i++ < 5) alert( i ); // OUTPUTS - 1, 2, 3, 4, 5

/*
i++ -> i = 0 -> i++ = 1 -> 0 < 5 IT ALERTS alert(1)
i++ -> i = 1 -> i++ = 2 -> 1 < 5 IT ALERTS alert(2)
i++ -> i = 2 -> i++ = 3 -> 2 < 5 IT ALERTS alert(3)
i++ -> i = 3 -> i++ = 4 -> 3 < 5 IT ALERTS alert(4)
i++ -> i = 4 -> i++ = 5 -> 4 < 5 IT ALERTS alert(5)
*/





// EXERCISE 3 - Which values get shown by the "for" loop?
// For each loop write down which values it is going to show.
// Both loops alert same values or not?

//The postfix form:
for (let i = 0; i < 5; i++) alert( i ); // OUTPUTS - 0, 1, 2, 3, 4

/* I++
i = 0 -> 0 < 5 -> alert(0) -> i++ = 1
i = 1 -> 1 < 5 -> alert(1) -> 2
i = 2 -> 2 < 5 -> alert(2) -> 3
i = 3 -> 3 < 5 -> alert(3) -> 4
i = 4 -> 4 < 5 -> alert(4) -> 5
*/

//The prefix form:
for (let i = 0; i < 5; ++i) alert( i ); // OUTPUTS - 0, 1, 2, 3, 4

/*
i = 0 -> 0 < 5 -> alert(0) -> ++i = 1
i = 1 -> 1 < 5 -> alert(1) -> 2
i = 2 -> 2 < 5 -> alert(2) -> 3
i = 3 -> 3 < 5 -> alert(3) -> 4
i = 4 -> 4 < 5 -> alert(4) -> 5
*/





// EXERCISE 4 - Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10.

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        alert(i)
    }
}





// EXERCISE 5 - Replace "for" with "while"
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

// ANSWER
let i = 0
while (i < 3) {
    alert( `number ${i}!` );
    i++
}





// EXERCISE 6 - Repeat until the input is correct
/* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

// ANSWER - do.. while LOOP
do {
    user_number = prompt("Enter a number greater than 100");
} while (user_number <= 100)

// ANSWER - while LOOP
user_number = 0;
while (user_number <= 100) {
    user_number = prompt("Enter a number greater than 100");
}





// Output prime numbers
/*
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.

<<<<<<< HEAD
P.S. The code should work for any n, not be hard-tuned for any fixed value.
let n = prompt("Enter a number")
*/

let n = prompt("Enter a number");

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) { // Math.sqrt -> The loop will continue to iterate as long as the current value of j is less than or equal to the square root of i. 
    //A number can only have divisors up to its square root.
    if (i % j === 0) { // Ex - Number 4 -> Inner loop:j iterates from 2 to 2 (square root of 4). i is divisible by 2. Set isPrime to false. i is not prime. alert(4) is ignored
      isPrime = false;

      // Ex - Number 2 -> Inner loop: j iterates from 2 to 1.41 (square root of 2). No dividers found. i, is prime. show alert(2).
      break;
    }
  }
  if (isPrime) {
    alert(i);
  }
}
