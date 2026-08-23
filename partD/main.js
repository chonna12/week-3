import { students } from "./data.js";
import { renderStudents } from "./ui.js";

const container = document.querySelector("#studentContainer");
renderStudents(students, container);