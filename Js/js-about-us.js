function follow () {

    let following = document.querySelector('.follow').innerHTML;

    if (following === 'Follow us') {
        document.querySelector('.follow').innerHTML = 'Followed';

    } else {
        document.querySelector('.follow').innerHTML = 'Follow us';
    }

}