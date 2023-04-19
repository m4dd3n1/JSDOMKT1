const numbers = [];
for (let i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let tableHTML = "<tbody>";
for (let i = 0; i < 5; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < 6; j++) {
        const index = i * 6 + j;
        const number = numbers[index];
        const className = number >= 50 ? "orange" : "";
        tableHTML += `<td class="${className}">${number}</td>`;
    }
    tableHTML += "</tr>";
}

tableHTML += "</tbody>";
const table = document.getElementById("numbersTable");
table.innerHTML = tableHTML;
function addRandomNumber() {
    const newNumber = Math.floor(Math.random() * 100);
    numbers.unshift(newNumber);

    let tableHTML = "<tbody>";
    for (let i = 0; i < 5; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < 6; j++) {
            const index = i * 6 + j;
            const number = numbers[index];
            const className = number >= 50 ? "orange" : "";
            tableHTML += `<td class="${className}">${number}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</tbody>";

    table.innerHTML = tableHTML;
}