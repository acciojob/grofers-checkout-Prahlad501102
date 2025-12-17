function calculateTotalPrice() {
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    priceElements.forEach(element => {
        const price = parseFloat(element.textContent);
        if (!isNaN(price)) {
            total += price;
        }
    });

    const table = document.querySelector('table');
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    
    totalCell.setAttribute('data-ns-test', 'grandTotal');
    totalCell.textContent = total;
    
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}

calculateTotalPrice();