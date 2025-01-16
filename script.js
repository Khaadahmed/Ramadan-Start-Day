// Set the date we're counting down to (Ramadan 2025)
const ramadanDate = new Date("March 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = ramadanDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h2>Ramadan Mubarak!</h2>";
    }
}, 1000);