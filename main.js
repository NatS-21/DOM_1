let array = [];
for (let i = 0; i < 30; i++) {
    let a = Math.floor(Math.random() * 100);
    array.push(a);
}

let tableBody = document.getElementById("table-body");
drawTable();

function drawTable() {
    tableBody.innerHTML = '';
    for (let i = 0; i < array.length / 6; i++) {
        const row = document.createElement("tr");
        
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            if (i*6 + j >= array.length) break;
            cell.textContent = array[i*6 + j];
            if (array[i*6 + j] >= 50) {
                cell.style.backgroundColor = "orange";
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}

function addNumber() {
    let a = Math.floor(Math.random() * 100);
    array.push(a);
    drawTable();
}