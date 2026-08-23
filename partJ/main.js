import { fetchCourses } from "./data.js";
import { renderCourses } from "./ui.js";

let allCourses = [];

async function init() {
    allCourses = await fetchCourses();
    renderCourses(allCourses);

    document.querySelector("#searchInput").addEventListener("input", (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = allCourses.filter(c => c.title.toLowerCase().includes(keyword));
        renderCourses(filtered);
    });
}

init();