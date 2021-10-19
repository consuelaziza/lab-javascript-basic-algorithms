// Iteration 1: Names and Input
let hacker1 = 'Consuela';
console.log("The driver's name is" + hacker1);

let hacker2 = 'Mark';
console.log("The navigator's name is" + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else { 
 console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  
}

let upperCaseHacker1 = hacker1.toUpperCase();

let reverseHacker2 = " ";
let space = "";

for(i = 0; i < upperCaseHacker1; i++) {
 upperCaseHacker1 += space; 
}

console.log(upperCaseHacker1);

for(i = reverseHacker2.length - 1; i > 0; i--)
  {
    reverseHacker2[i];
  }
console.log(reverseHacker2)


// Iteration 3: Loops