const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const audio = document.getElementById("bgMusic");
let currentSlide = 0;

// Khi click "Bắt đầu"
function startStory() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  audio.play().catch(e => {
    console.warn("Không phát được nhạc:", e);
  });

  updateNextButton(); // Kiểm tra hiển thị nút "Next"
}

// Chuyển slide
nextBtn.addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide++;

  if (currentSlide < slides.length) {
    slides[currentSlide].classList.add("active");
    updateNextButton();
  }
});

// Cập nhật trạng thái nút "Next"
function updateNextButton() {
  if (currentSlide >= slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
  }
}
