let theme = localStorage.getItem('theme');
const setTheme = (mode) => {
    let themeStyle = document.getElementById('theme-style');
    localStorage.setItem('theme', mode);
    if (mode === "light") {
        themeStyle.href = "styles/default.css"
    }
    if (mode === "blue") {
        themeStyle.href = "styles/blue.css"
    }
    if (mode === "green") { themeStyle.href = "styles/green.css" }
    if (mode === "purple") { themeStyle.href = "styles/purple.css" }
}
if (theme === null) {
    setTheme('light')
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dots');

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = themeDots[i].getAttribute(['data-mode']);
        setTheme(mode);
    })
}