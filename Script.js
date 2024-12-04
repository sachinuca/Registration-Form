// Initialize seats for each day
const seats = {
  day1: 100,
  day2: 100,
  day3: 100,
};

// Select DOM elements
const day1Seats = document.getElementById('day1Seats');
const day2Seats = document.getElementById('day2Seats');
const day3Seats = document.getElementById('day3Seats');
const registrationForm = document.getElementById('registrationForm');
const message = document.getElementById('message');

// Update seats display
const updateSeatsDisplay = () => {
  day1Seats.textContent = seats.day1;
  day2Seats.textContent = seats.day2;
  day3Seats.textContent = seats.day3;
};

// Handle form submission
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(registrationForm);
  const selectedDay = formData.get('day');

  // Validate seat availability for the selected day
  if (seats[selectedDay] > 0) {
    seats[selectedDay] -= 1; // Decrease seat count

    // Display success message
    message.textContent = `Successfully registered for ${selectedDay.toUpperCase().replace("DAY", "Day ")}!`;
    message.className = 'success';

    // Clear form
    registrationForm.reset();
    updateSeatsDisplay();
  } else {
    // Display error message
    message.textContent = `No seats left for ${selectedDay.toUpperCase().replace("DAY", "Day ")}!`;
    message.className = 'error';
  }
});

// Initialize display
updateSeatsDisplay();
