//while loop
let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}

//do...while loop
let num;
do {
  num = 101; 
} while (num <= 100);
console.log("You entered:", num);

//for loop
let n = 5;
let p = 1;

for (let i = 1; i <= n; i++) {
  p *= i;
}

console.log("Factorial:", p);

//nested for loop
for (let i = 5; i <= 5; i++) {     
  for (let j = 1; j <= 10; j++) {      
    console.log(i + " * " + j + " = " + (i * j));
  }
}