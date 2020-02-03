console.log("it works");

// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // This is the function body
  console.log("Running calculate Bill");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function call

const myTotalBill3 = calculateBill(20 + 20 + 30, 0.25);

function doctorize(name) {
  return `dr. ${name}`;
}
function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
}
