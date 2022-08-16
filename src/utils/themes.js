export function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

export function getTheme() {
    localStorage.getItem("theme") === "theme-dark"
        ? setTheme("theme-dark")
        : setTheme("theme-light");
}
