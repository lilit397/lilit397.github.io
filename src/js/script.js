var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerView: "3.5",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   scroll reveal effect
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.header-logo', {delay:200,origin:'top'})
sr.reveal('.header-nav-link', {delay:300,origin:'top'})
sr.reveal('.link1', {delay:400,origin:'top'})
sr.reveal('.link2', {delay:700,origin:'top'})
sr.reveal('.link3', {delay:900,origin:'top'})
sr.reveal('.link4', {delay:1100,origin:'top'})
sr.reveal('.header-content', {delay:500,origin:'bottom'})
