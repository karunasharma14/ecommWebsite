function handleContact() {
    alert("Contact button clicked!");
}

function handlePayment() {
    alert("Payment button clicked!");
}

function handleBook() {
    alert("Book button clicked!");
}

function handleMessage() {
    alert("Message button clicked!");
}
$(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });