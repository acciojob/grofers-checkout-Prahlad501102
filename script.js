// Select all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total price
prices.forEach(price => {
  total += Number(price.textContent);
});

// Create new table row
const table = document.querySelector("table");
const row = document.createElement("tr");
const cell = document.createElement("td");

// Set attributes
cell.colSpan = 2;
cell.textContent = `Total Price: ${total}`;

// Append elements
row.appendChild(cell);
table.appendChild(row);
