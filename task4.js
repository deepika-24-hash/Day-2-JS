let choice;
let num, num1;

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

  
  num = parseFloat(console.log("Enter first number:"));
  num1 = parseFloat(console.log("Enter second number:"));


  if (isNaN(num) || isNaN(num1)) {
    console.log("Invalid number Try again.");
    continue;
  }

  switch (choice) {
    case 1:
      console.log("Result:", num + num1);
      break;
    case 2:
      console.log("Result:", num - num1);
      break;
    case 3:
      console.log("Result:", num * num1);
      break;
    case 4:
      if (num1 === 0) {
        console.log("Cannot divide by zero.");
      } else {
        console.log("Result:", num / num1);
      }
      break;
    default:
      console.log("Invalid choice");
      continue;
  }

  console.log(""); 

}
