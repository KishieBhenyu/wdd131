document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Handle newsletter subscription
const form = document.getElementById('newsletter-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.email.value.trim();
    const msg = document.getElementById('newsletter-msg');

    if (!email) {
      msg.textContent = 'Please enter an email.';
      return;
    }
    msg.textContent = 'Thank you for subscribing!';
    form.reset();
  });
}