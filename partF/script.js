const students = [
    { name: "Alice Tan", program: "Cybersecurity Engineering", year: 2 },
    { name: "Bob Chen", program: "Computer Engineering", year: 1 }
];

function renderStudents(data) {
    const container = document.querySelector("#studentList");
    container.innerHTML = data.map(student => `
        <div class="card">
            <h3>${student.name}</h3>
            <p>${student.program}</p>
            <p>Year ${student.year}</p>
        </div>
    `).join("");
}

renderStudents(students);