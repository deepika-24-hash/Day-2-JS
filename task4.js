let choice;
let num1, num2;

while (true) {

  console.log("Menu:");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Exit");

  
  choice = parseInt(console.log("Enter your choice:"));

  if (choice == 5) {
    console.log("Exit calculator");
    break; 
  }

  
  num1 = parseFloat(console.log("Enter first number:"));
  num2 = parseFloat(console.log("Enter second number:"));


  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid number Try again.");
    continue;
  }

  switch (choice) {
    case 1:
      console.log("Result:", num1 + num2);
      break;
    case 2:
      console.log("Result:", num1 - num2);
      break;
    case 3:
      console.log("Result:", num1 * num2);
      break;
    case 4:
      if (num2 === 0) {
        console.log("Cannot divide by zero.");
      } else {
        console.log("Result:", num1 / num2);
      }
      break;
    default:
      console.log("Invalid choice");
      continue;
  }

  console.log(""); 
}