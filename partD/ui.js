export function renderStudents(studentsArray, containerElement) {
    containerElement.innerHTML = studentsArray.map(s => `
        <div class="student-card">
            <h3>${s.name}</h3>
            <p>${s.program}</p>
            <p>Year ${s.year}</p>
        </div>
    `).join("");
}