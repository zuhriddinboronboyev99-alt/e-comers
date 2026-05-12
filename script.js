// Close topbar
function closeTopbar() {
    document.querySelector('.topbar').style.display = 'none';
}

// Testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        document.querySelectorAll('.dot')[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    document.querySelectorAll('.dot')[index].classList.add('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto slide testimonials
setInterval(nextTestimonial, 5000);

// Select plan
function selectPlan(plan) {
    alert(`${plan} paketini tanladingiz! Tez orada siz bilan bog'lanamiz.`);
}

// Contact function
function contact() {
    const phone = prompt('Telefon raqamingizni kiriting:');
    if (phone) {
        alert('Rahmat! Tez orada siz bilan bog\'lanamiz!');
    }
}

// Buy function
function buy(product) {
    alert(`${product} uchun buyurtma qabul qilindi! Tez orada siz bilan bog'lanamiz.`);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
}

// Scroll functions
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.onscroll = function() {
    const topBtn = document.getElementById('topBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
};

// Initialize when page loads
window.onload = function() {
    // Initialize testimonial slider
    if (document.querySelector('.testimonial-slider')) {
        showTestimonial(0);
    }
};

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.querySelector('.newsletter input').value;
    if (email && email.includes('@')) {
        alert('Muvaffaqiyatli obuna bo\'ldingiz!');
        document.querySelector('.newsletter input').value = '';
    } else {
        alert('Iltimos, to\'g\'ri email kiriting.');
    }
}

// Initialize when page loads
window.onload = function() {
    startCountdown();
    // Initialize testimonial slider
    if (document.querySelector('.testimonial-slider')) {
        showTestimonial(0);
    }
};