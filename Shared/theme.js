const themeChanger = document.getElementById("theme-changer");
const themeIcon =  document.getElementById("theme-icon");
var theme = localStorage.getItem("theme") || "dark";

function setTheme(theme) {
    if (theme == "dark") {
        document.body.className = "body-dark";
        themeChanger.onclick = function() {
            setTheme("light");
        }

        themeIcon.innerText = "light_mode";
        
        theme = "dark";
    }

    else {
        document.body.className = "body-light";
        themeChanger.onclick = function() {
            setTheme("dark");
        }

        themeIcon.innerText = "dark_mode";

        theme = "light";
    }

    localStorage.setItem("theme", theme);
}

if (theme == "dark") {
    setTheme("dark");
}

else {
    setTheme("light");
}