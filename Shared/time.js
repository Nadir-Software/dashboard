function greeting() {
    if (new Date().getHours() >= 22) {
        document.getElementById("greeting").innerText = "Good night";
    }

    else if (new Date().getHours() >= 18) {
        document.getElementById("greeting").innerText = "Good evening";
    }

    else if (new Date().getHours() >= 12) {
        document.getElementById("greeting").innerText = "Good afternoon";
    }

    else {
        document.getElementById("greeting").innerText = "Good morning";
    }
}

function time() {
    document.getElementById("time").innerText = new Date().toLocaleTimeString();
}

function date(){
    document.getElementById("date").innerText = new Date().toLocaleDateString();
}

time();
setInterval(time, 250); // 250ms

greeting();
setInterval(greeting, 3600000); // 1 hour

date();
setInterval(date, 21600000); // 6 hours