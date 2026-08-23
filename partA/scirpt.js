// ฟังก์ชันแบบดั้งเดิม
function greet(name) {
    return `Hello ${name}`;
}

// แปลงเป็น Arrow Function
const greetArrow = (name) => `Hello ${name}`;

// Challenge: Square function
const square = (num) => num * num;

console.log(greet("Alice"));       // Hello Alice
console.log(greetArrow("Bob"));    // Hello Bob
console.log(square(5));            // 25