const birthDate = new Date("2004-07-28");

  function updateLifeTime() {
    const now = new Date();
    const diffMs = now - birthDate;

    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    // Update masing-masing elemen
    document.getElementById('days').textContent = days + ' D';
    document.getElementById('hours').textContent = hours + ' H'
    document.getElementById('minutes').textContent = minutes + ' M'
    document.getElementById('seconds').textContent = seconds + ' S'
  }

  updateLifeTime();
  setInterval(updateLifeTime, 1000);
