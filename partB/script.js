// Task B1: Student Object
const student = {
    id: 101,
    name: "Alice",
    program: "Cybersecurity Engineering",
    year: 2,
    interests: ["Web Security", "AI", "Cloud"]
};

console.log(student.name);
console.log(student.program);
console.log(student.year);
console.log(student.interests[0]);

// Task B2: Function
function describeStudent(stu) {
    return `${stu.name} is a Year ${stu.year} ${stu.program} student.`;
}
console.log(describeStudent(student));

// Task B3: Array of Objects
const students = [
    { id: 1, name: "Alice", program: "Cybersecurity Engineering", year: 2 },
    { id: 2, name: "Bob", program: "Computer Engineering", year: 1 },
    { id: 3, name: "Charlie", program: "Cybersecurity Engineering", year: 2 },
    { id: 4, name: "David", program: "Software Engineering", year: 3 },
    { id: 5, name: "Eve", program: "Computer Engineering", year: 4 }
];

// forEach()
students.forEach(s => console.log(s.name));

// filter() - Year 2 students
const year2Students = students.filter(s => s.year === 2);
console.log("Year 2 Students:", year2Students);

// Challenge: map() - ดึงเฉพาะชื่อ
const studentNames = students.map(s => s.name);
console.log("Student Names:", studentNames);