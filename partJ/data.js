export async function fetchCourses() {
    try {
        const response = await fetch("./data/sample.json");
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
}