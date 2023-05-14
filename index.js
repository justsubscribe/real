let slide = document.querySelectorAll('.slide');
var current = 0;





window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.09)";
        document.getElementById("navbar").style.backdropFilter = "blur(6px)";
        document.getElementById("navbar").style.borderBottom= "1px solid rgba(255, 255, 255, 0.16)";
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.backdropFilter = "none";
        document.getElementById("navbar").style.borderBottom = "none";
    }
}        
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

let timer;
    const slides = document.querySelectorAll(".sliderClass");
    console.log(slides);
    for (let i = 0; i < slides.length; i++) {
      console.log(slides[i]);
      slides[i].style.left = `${i * 100}%`;
    }
    const firstBtn = () => {
      clearInterval(timer);
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(0%)`;
      });
      counter = 1;
      timer = setInterval(sliding, 5000);
    };
    
    const secondBtn = () => {
      clearInterval(timer);
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-100%)`;
      });
      counter = 2;
      timer = setInterval(sliding, 5000);
    };
    const thiredBtn = () => {
      clearInterval(timer);
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-200%)`;
      });
      counter = 3;
      timer = setInterval(sliding, 5000);
    };
    const fourthBtn = () => {
      clearInterval(timer);
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-300%)`;
      });
      counter = 4;
      timer = setInterval(sliding, 5000);
    };
    const fifthBtn = () => {
      clearInterval(timer);
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-400%)`;
      });
      counter = 0;
      timer = setInterval(sliding, 5000);
    };

    let counter = 1;
    const slideImage = () => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
    };
    let ans = true;
    let sliding = () => {
      slideImage();
      document.getElementById(`radiobtn${counter + 1}`).checked = true;
      if (counter == 4) {
        ans = false;
      } else if (counter == 0) {
        ans = true;
      }
      if (ans == true) {
        counter++;
      } else {
        counter--;
      }
      
    };
firstBtn()

