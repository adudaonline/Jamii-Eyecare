document.getElementById('year').textContent = new Date().getFullYear();
const cart = [];

function scrollToCatalogue() {
  document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
}

function bookEyeTest() {
  const phoneNumber = '254712345678';
  const message = encodeURIComponent("Hello, I'd like to book an eye test.");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalContainer = document.getElementById('cart-total');
  const cartCountContainer = document.getElementById('cart-count');
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - KSh ${item.price}`;
    cartItemsContainer.appendChild(div);
    total += item.price;
  });
  cartTotalContainer.textContent = total;
  cartCountContainer.textContent = cart.length; // Update cart count
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const confirmCheckout = confirm(`Your total is KSh ${total}. Proceed to payment?`);
  if (confirmCheckout) {
    alert('Thank you for your purchase! Your order will be ready for pickup at our Nairobi CBD Moi Avenue office.');
    cart.length = 0;
    updateCart();
  }
}

document.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('click', () => {
    const name = img.dataset.name;
    const price = parseInt(img.dataset.price, 10);
    addToCart(name, price);
  });
});

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form fields
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const whatsappMessage = encodeURIComponent(`Hello, my name is ${name}. My email is ${email}. Message: ${message}`);
  window.open(`https://wa.me/254712345678?text=${whatsappMessage}`, '_blank');
}
