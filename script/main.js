const startDate = new Date("October 8, 2024 10:30:00").getTime();

    function updateCounter() {
        const now = new Date().getTime();
        const diffSec = Math.floor((now - startDate) / 1000);

        if (diffSec < 0) return;

        const totalSeconds = diffSec;
        const totalMinutes = (diffSec / 60).toFixed(2);
        const totalHours = (diffSec / 3600).toFixed(2);
        const totalDays = (diffSec / 86400).toFixed(2);

        document.getElementById("sec").textContent = totalSeconds.toLocaleString();
        document.getElementById("min").textContent = totalMinutes;
        document.getElementById("hour").textContent = totalHours;
        document.getElementById("day").textContent = totalDays;
    }

    setInterval(updateCounter, 1000);
    updateCounter();