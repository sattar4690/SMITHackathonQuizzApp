document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = document.getElementById('username').value.trim();
    var username = document.getElementById('rollNumber').value.trim();
    var password = document.getElementById('password').value.trim();
  
    if (username === '' || email === '' || password === '') {
      showMessage('All fields are required', 'error');
      return;
    }
  
    // You can add additional validation here
  
    // If all fields are valid, you can proceed with registration
    // For now, let's just display a success message
    showMessage('Registration successful!', 'success');
  });
  
  function showMessage(message, type) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
  }
  