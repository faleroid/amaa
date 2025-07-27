 function checkLogin() {
      const username = document.getElementById("username").value.trim().toLowerCase();
      const jadianDate = document.getElementById("jadianDate").value;
      const messageBox = document.getElementById("messageBox");

      const correctDate = "2025-02-23";
      const correctName = "siti rahmawati"

      if (jadianDate === correctDate && username == correctName) {
        window.location.href = "index.html"; 
      } else {
        messageBox.style.color = "#b00020";
        messageBox.textContent = "SAPAAAA LU WOIII";
      }
    }