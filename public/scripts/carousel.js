function waitForSlides(trackId, maxAttempts = 30, interval = 100) {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const check = () => {
        const track = document.getElementById(trackId);
        const slides = track?.querySelectorAll(".carousel-slide") || [];
        if (slides.length > 0) return resolve(slides);
        if (++attempts >= maxAttempts) return reject("Slides not found in time");
        setTimeout(check, interval);
      };
      check();
    });
  }
  
  async function initCarousel() {
    try {
      const track = document.getElementById("carousel-track");
      const container = document.getElementById("carousel-container");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const indicatorsContainer = document.getElementById("carousel-indicators");
  
      const slides = await waitForSlides("carousel-track");
  
      if (slides.length < 1) return;
  
      let index = 0;
      let paused = false;
      let dots = [];
  
      function showSlide(i) {
        track.style.transform = `translateX(-${i * 100}%)`;
  
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === i);
        });
      }
  
      function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
      }
  
      function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      }
  
      container.addEventListener("mouseenter", () => (paused = true));
      container.addEventListener("mouseleave", () => (paused = false));
  
      prevBtn.addEventListener("click", prevSlide);
      nextBtn.addEventListener("click", nextSlide);
  
      if (indicatorsContainer.children.length === 0) {
        dots = Array.from({ length: slides.length }).map((_, i) => {
          const dot = document.createElement("div");
          dot.className = "carousel-dot";
          dot.addEventListener("click", () => {
            index = i;
            showSlide(index);
          });
          indicatorsContainer.appendChild(dot);
          return dot;
        });
      }
  
      showSlide(index);
  
      setInterval(() => {
        if (!paused) nextSlide();
      }, 5000);
    } catch (error) {
      console.error("Error al iniciar el carrusel:", error);
    }
  }
  
  document.addEventListener("astro:page-load", initCarousel);
  