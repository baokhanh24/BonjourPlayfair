let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("content__poster-items");
  let dots = document.getElementsByClassName("content_dots-items");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // slides[i].style.animation = ""; // Xóa hiệu ứng trượt ảnh trước khi áp dụng lại
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";

  // Thêm hiệu ứng trượt ảnh
  slides[slideIndex - 1].style.animation = "slide 0.5s ease-in-out forwards";
}

// Function to automatically advance the slideshow every 3.5 seconds
function autoAdvanceSlides() {
  plusSlides(1);
}

// Set the interval for automatic slideshow progression
setInterval(autoAdvanceSlides, 3500);