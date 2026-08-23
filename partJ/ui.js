export function renderCourses(courses) {
    const container = document.querySelector("#courseList");
    if (courses.length === 0) {
        container.innerHTML = "<p>No courses found.</p>";
        return;
    }
    container.innerHTML = courses.map(c => `
        <div class="course-card">
            <h3>${c.title}</h3>
            <p>Dept: ${c.department} | Level: ${c.level}</p>
        </div>
    `).join("");
}