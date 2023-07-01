
  
  function selectTimeSlot(timeSlot) {
    const selectedTime = timeSlot;
    selectedTimeDisplay.textContent = selectedTime;
  
    // Remove previously selected time slot class
    const prevSelectedSlot = document.querySelector('.time-slot.selected');
    if (prevSelectedSlot) {
      prevSelectedSlot.classList.remove('selected');
    }
  
    // Add selected class to the current time slot
    const currentSlot = document.querySelector(`.time-slot[data-time="${selectedTime}"]`);
    if (currentSlot) {
      currentSlot.classList.add('selected');
    }
  
    // Enable reserve button
    reserveButton.disabled = false;
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const tables = document.querySelectorAll('.table');
  
    // Simulated reserved tables (Change this as per your logic)
    const reservedTables = [1, 3, 6];
  
    tables.forEach(table => {
      const tableNumber = table.getAttribute('data-table');
      if (reservedTables.includes(parseInt(tableNumber))) {
        table.classList.add('reserved');
      }
    });
  });
  