let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/main.css") {
        theme.href = "css/secondary.css";
        document.getElementById("switchIcon").textContent = "toggle_on";
    } else {
        theme.href = "css/main.css";
        document.getElementById("switchIcon").textContent = "toggle_off";
    }
}

