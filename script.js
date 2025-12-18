// select all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach(price => {
  total += Number(price.innerText);
});

const tr = document.createElement("tr");

const td = document.createElement("td");
td.colSpan = 2; // assuming table has 2 columns (item + price)
td.innerText = "Total Price: " + total;

tr.appendChild(td);

const table = document.querySelector("table");
table.appendChild(tr);
