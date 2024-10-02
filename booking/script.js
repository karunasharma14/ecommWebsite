let currentSection = 0;

function nextSection(sectionIndex) {
    document.querySelectorAll('.section')[currentSection].classList.remove('active');
    document.querySelectorAll('.step')[currentSection].classList.remove('active');
    
    currentSection = sectionIndex;
    
    document.querySelectorAll('.section')[currentSection].classList.add('active');
    document.querySelectorAll('.step')[currentSection].classList.add('active');

    if (currentSection === 2) {
        document.getElementById('confirmDate').textContent = document.getElementById('bookingDate').value;
        document.getElementById('confirmTime').textContent = document.getElementById('bookingTime').value;
    }
}

function previousSection(sectionIndex) {
    nextSection(sectionIndex);
}

function confirmBooking() {
    alert('Booking confirmed!');
}

function goBack() {
    window.history.back();
}
