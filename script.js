// Smooth scroll for footer links (optional UX improvement)

/* ============================================= */
/* SECTION 1 : HEADER + NAVIGATION JS START */
/* ============================================= */

// MOBILE MENU TOGGLE
document.querySelector(".aw-mobile-toggle").addEventListener("click", function() {
  document.querySelector(".aw-nav").classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll('.aw-nav a, .aw-apply-btn').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = this.getAttribute('href');
    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* ============================================= */
/* SECTION 1 : HEADER + NAVIGATION JS END */
/* ============================================= */

/* ============================================= */
/* FAQ ACCORDION WORKING SCRIPT */
/* ============================================= */

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".aw-faq-item");

  faqItems.forEach(item => {

    const question = item.querySelector(".aw-faq-question");
    const answer = item.querySelector(".aw-faq-answer");

    question.addEventListener("click", function () {

      const isOpen = item.classList.contains("active");

      // close all
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".aw-faq-answer").style.maxHeight = null;
      });

      // open selected
      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

    });

  });

});
// ================================


document.querySelectorAll('.aw-footer-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = this.getAttribute('href');
    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* ============================================= */
/* SECTION 12 : CONVERSION FORMS JS START */
/* ============================================= */

document.querySelectorAll(".aw-form-card form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks — your details have been received.");
    form.reset();
  });
});

/* ============================================= */
/* SECTION 12 : CONVERSION FORMS JS END */
/* ============================================= */


/* ============================================= */
/* DARK/LIGHT THEME TOGGLE SCRIPT */
/* ============================================= */
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // ব্রাউজারের স্টোরেজে আগে থেকে ডার্ক মোড সেভ করা আছে কিনা চেক করা
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    themeToggleBtn.innerText = "☀️ ";
  }

  // বাটনে ক্লিক করলে থিম পরিবর্তন হবে
  themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    
    // থিম অনুযায়ী বাটন টেক্সট ও লোকাল স্টোরেজ আপডেট করা
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeToggleBtn.innerText = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggleBtn.innerText = "🌙";
    }
  });
});