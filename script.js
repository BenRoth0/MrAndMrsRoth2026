// ========== COUNTDOWN TIMER ========== 

// Format: new Date('YYYY-MM-DDTHH:mm:ss')
const weddingDate = new Date('2026-05-16T16:00:00').getTime();

/**
 * Updates the countdown timer display
 * Called once on page load and then every second
 */
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;
    // Get countdown elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    // If the date has passed, show a message
    if (timeRemaining <= 0) {
        const countdownSection = document.querySelector('.countdown');
        countdownSection.innerHTML = '<div class="countdown-expired">We got married! Thank you for celebrating with us!</div>';
        clearInterval(countdownInterval);
        return;
    }
    // Calculate time units
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    // Update the display with padding zeros
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately on page load
updateCountdown();

// Update countdown every second (1000 milliseconds)
const countdownInterval = setInterval(updateCountdown, 1000);
