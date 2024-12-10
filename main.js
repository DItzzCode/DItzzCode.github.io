const home = document.getElementById("first-page");
home.addEventListener("click" , (e) => {
  e.preventDefault();

window.scrollTo({
  top : 0,
  behavior : 'smooth'
})
})

const about = document.getElementById("second-page");
about.addEventListener("click" ,(e) => {
  e.preventDefault();

  window.scrollTo({
  top : 850 ,
  behavior : "smooth"
})
})

const pages = document.getElementById("third-page");
pages.addEventListener("click" , (e) => {
  e.preventDefault();
  window.scrollTo({
    top : 1750 ,
    behavior : 'smooth'
  })
})

const skill = document.getElementById("skill-page");
skill.addEventListener("click" , (e) => {
  e.preventDefault();
  window.scrollTo({
    top : 2750 ,
    behavior : "smooth"
  })
})
const contact = document.getElementById("contact-page");
contact.addEventListener("click" , (e) => {
  e.preventDefault();
  window.scrollTo({
    top : 3710 ,
    behavior : 'smooth'
  });
})

const typingElement = document.getElementById("typing");

const texts = ["Student", "Programmer", "Learner" , "FullStack"];
let textIndex = 0; // Indeks teks saat ini
let charIndex = 0; // Indeks karakter saat ini
let isDeleting = false; // Apakah teks sedang dihapus

function typeEffect() {
  const currentText = texts[textIndex];

  typingElement.textContent = currentText.substring(0 , charIndex);

 let typingSpeed = isDeleting ? 100 : 100;

 if(!isDeleting && charIndex === currentText.length) {
  isDeleting = true;
  typingSpeed = 1500;
 }

 if(isDeleting && charIndex === 0) {
  isDeleting = false;
  textIndex = (textIndex + 1) % texts.length;
 }

 if(isDeleting) {
  charIndex--;
} else {
  charIndex++;
}

 setTimeout(typeEffect , typingSpeed);
}

typeEffect();

document.addEventListener("DOMContentLoaded" ,() => {
  const animatedText = document.getElementById("about-me");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animatedText.classList.add("visible");
      };
    });

  });
  observer.observe(animatedText)
})







