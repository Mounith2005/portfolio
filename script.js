const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀" : "☾";
    toggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("portfolio-theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀";
}
