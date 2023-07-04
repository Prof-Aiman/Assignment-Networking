function buy (product) {
    let email = document.querySelector('.inputEmail').value

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        document.querySelector('.fillEmail').innerHTML = 'please share us your email !';

    }else if (!pattern.test(email)) {
        document.querySelector('.fillEmail').innerHTML = 'please enter valid email !';    

    }else if (pattern.test(email)) {
        document.querySelector('.fillEmail').innerHTML = '';
        alert(`Your order ${product} has been placed. We will send the requirement through ${email}`);

    }
    
    document.querySelector('.inputEmail').value = '';
}