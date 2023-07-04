function submitForm() {
    let inputName = document.getElementById('inputName').value;
    let inputEmail = document.getElementById('inputEmail').value;

    

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputName === '') {
      document.querySelector('.fillName').innerHTML = 'Please fill in your name !';
    } else if (inputEmail === '') {
      document.querySelector('.fillEmail').innerHTML = 'Please fill in your email !';
      document.querySelector('.fillName').innerHTML = '';

    } else if (!pattern.test(inputEmail)) {
      document.querySelector('.fillEmail').innerHTML = 'please enter valid email !';    

    } else {

        alert(`Thank you ${inputName}, We will send you an email in the future at ${inputEmail}.
        Question: ${document.getElementById('quest').value} `);

      document.querySelector('.fillName').innerHTML = '';
      document.querySelector('.fillEmail').innerHTML = '';
      document.getElementById('inputName').value = '';
      document.getElementById('inputEmail').value = '';
      document.getElementById('quest').value = '';

      
    }
  }