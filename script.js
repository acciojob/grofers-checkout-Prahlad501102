function calculateTotalPrice() {
    const priceElements = document.querySelectorAll('.prices');
    let totalPrice = 0;

    priceElements.forEach(priceElement => {
        const priceText = priceElement.textContent;
        const price = parseFloat(priceText); 

        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    const table = document.querySelector('table');
    
    if (!table) {
        console.error("Table element not found.");
        return;
    }
    
    let tableBody = table.querySelector('tbody');
    if (!tableBody) {
        tableBody = table;
    }

    const newRow = document.createElement('tr');
    newRow.classList.add('total-row'); 

    let numCols = 1;
    const headerRow = table.querySelector('tr');
    if (headerRow) {
        numCols = headerRow.querySelectorAll('th, td').length;
    }
    
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', numCols); 
    totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'right';

    newRow.appendChild(totalCell);
    tableBody.appendChild(newRow);
}

calculateTotalPrice();