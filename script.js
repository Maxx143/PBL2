let slideIndex = 0;

// Function to change slides
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to display slides
function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active');
}

// Function to switch to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Initial slide display
showSlides(slideIndex);
let costEl = document.getElementById("cost");
let timerEl = document.getElementById("timer");
console.log(timerEl.value);


timerEl.addEventListener("blur", function(event) {
    let value = parseInt(timerEl.value);
    costEl.textContent = value *900+" "+"INR";
});
function bookVenue() {
    
    var sportsName = document.getElementById('name').value;
    var date = document.getElementById('email').value;
    var time = document.getElementById('status').value;
    var hours = document.getElementById('timer').value;
    
    var bookingLink = `booking.html?sportsName=${sportsName}&date=${date}&time=${time}&hours=${hours}`;
   
    window.location.href = bookingLink;
}
