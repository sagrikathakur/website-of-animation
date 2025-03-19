document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();
  tl.to(".text", {
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
      delay: 2
  })

  .to("#heading", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
  }, "-=0.5")

  .to(".boundingelem", {
      y: 0,
      ease: "expo.out",
      duration: 1.5,
      stagger: 0.2 
  });
  tl.to(".floating-images", {
      duration: 1.5,
      opacity: 1,
      ease: "power2.inOut"
  }, "-=0.5");
  gsap.to(".floating-image", {
      duration: 1.2,
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
  });
});
