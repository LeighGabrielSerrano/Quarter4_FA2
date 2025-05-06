function makeTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const col = parseInt(document.getElementById('col').value);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "";
	
    if (rows < 2 || rows > 10 || col < 2 || col > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (let g = 1; g <= rows; g++) {
        const row = document.createElement('tr');
        for (let b = 1; b <= col; b++) {
            const cell = document.createElement('td');
            cell.textContent = g*b;
            cell.style.border = '1px solid black';
            cell.style.padding = '5px';
            cell.style.textAlign = 'center';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    outputDiv.appendChild(table);
}
