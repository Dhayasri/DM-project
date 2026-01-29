function contact() {
    alert("Thanks for your interest in DM Scales! We will contact you soon.");
  }
  
  // Countdown Timer
  function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30); // 30 days from now
    
    const now = new Date().getTime();
    const distance = endDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const timerElement = document.getElementById('countdown-timer');
    if (timerElement) {
      timerElement.textContent = `${days} days, ${hours}h ${minutes}m ${seconds}s`;
    }
  }
  
  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
  
