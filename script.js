document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date("2020-08-01T19:30:00"); // Replace with the specific date and time
    const timer = document.getElementById('timer');

    function updateTimer() {
        const now = new Date();
        const diff = now - targetDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // timer.innerHTML = `${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
        document.getElementById('years').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateTimer, 1000);
});
