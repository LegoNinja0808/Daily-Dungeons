function updateTimer() {

    const now = new Date();

    const midnight = new Date(now);
    midnight.setHours(24,0,0,0);

    const difference = midnight - now;

    const hours = Math.floor(difference / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);

    document.getElementById("timer").textContent =
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0");

}

updateTimer();
setInterval(updateTimer,1000);


const settingsButton = document.getElementById("settings");
const settingsPopup = document.getElementById("settingsPopup");
const closeSettings = document.getElementById("closeSettings");


settingsButton.onclick = function() {
    settingsPopup.style.display = "flex";
};


closeSettings.onclick = function() {
    settingsPopup.style.display = "none";
};


settingsPopup.onclick = function(event) {
    if(event.target === settingsPopup) {
        settingsPopup.style.display = "none";
    }
};