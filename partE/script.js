async function loadStudents() {
    try {
        const response = await fetch("./data/students.json");
        
        // Task E3: ตรวจสอบ response.ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const students = await response.json();
        console.log(students);
    } catch (error) {
        console.error("Failed to load student data:", error);
        // Challenge: แสดง error บนหน้าเว็บ
        document.body.innerHTML += `<p style="color: red;">Error loading data!</p>`;
    }
}

loadStudents();