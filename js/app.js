

const themeToggle = document.querySelector('.theme-toggle')
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark')
  document.body.style.transition = '0.3s linear'
   const theme = document.body.className
   console.log(theme)
   localStorage.setItem('theme',theme)
  })
  
  document.addEventListener("DOMContentLoaded",()=>{ 
     const theme = localStorage.getItem('theme')
     document.body.style.display = 'block'
     if(!theme) return
     document.body.className = theme 
  
  })
  
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
const tl = gsap.timeline({ default: { opacity: 0 } });

gsap.from(".marquee p", {
  scrollTrigger: {
    trigger: ".marquee",
    start: "top 60%",
    scrub: 3,
  }, // start the animation when ".box" enters the viewport (once)
  xPercent: -100,
  duration: 3,
  yoyo: true,
});
gsap.from("nav", {
  scrollTrigger: {
    trigger: ".marquee",
    start: "top 10px",
    scrub: 3,
  }, // start the animation when ".box" enters the viewport (once)

  duration: 3,
  yoyo: true,
});


gsap.from(".paint-art", {
  scale: 0.9,
  opacity: 0.7,
  ease: "back",
  duration: 3,
});
gsap.from(".not-robot img", {
  opacity: 0,
  ease: "back",
  duration: 3,
});


let splitHeading = SplitText.create(".section-one h1", {
  type: "words, chars",
});
let splitSub = SplitText.create(".section-one h3", { type: "words, chars" });
let splith4 = SplitText.create("#skills h4", { type: "words, chars" });
let splith2 = SplitText.create("#skills h2", { type: "words, chars" });

tl.from(splitHeading.chars, {
  scrollTrigger: {
    trigger: ".marquee",
    start: "bottom 70%",
    scrub: 2,
    triggerEnd: ".section-one",
    end: "top 25%",
  },
  yPercent: -100,
  stagger: 0.5,
})
  .from(splitSub.chars, {
    scrollTrigger: {
      trigger: ".marquee",
      start: "bottom 70%",
      scrub: 2,
      triggerEnd: ".section-one",
      end: "top 25%",
    },
    yPercent: 100,
    stagger: 0.5,
    ease: "back",
  })
  .to("nav", {
    scrollTrigger: {
      trigger: ".project-section",
      start: "top top",
      end: "top 0",
      scrub: 3,
    },
    borderTop: '1px solid #ddd',
    top: "90%",
    yoyo: true,
  });

gsap.from(splith4.chars, {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
    end: "top top",
    scrub: 2,
    end: "top 60%",
  },
  transformOrigin: "bottom",
  scale: 0,
  stagger: 0.8,
  ease: "back",
});

gsap.from(splith2.words , {
  scrollTrigger:{
    trigger: '#skills',
    start: 'top center',
    end: 'top top',
    scrub: 2,
  },
  opacity: 0,
  duration: 0.5,
  left: '-1000px'

})

document.querySelector(".container").addEventListener("mousemove", (e) => {
  if (e.clientX > 705) {
    gsap.to(".absolute img", {
      x: -10,
      duration: 2,
      ease: "linear",
      delay: 0.5,
      yoyo:true
    });
  }
  if (e.clientX < 705) {
    gsap.to(".absolute img", {
      x: 10,
      ease: "linear",
      duration: 3,
      delay: 0.3,
      yoyo: true,
    });
  }
});



gsap.from('.fill',{
scrollTrigger: {
trigger: '.section-two',
start: '20% 90%',
end: "bottom bottom",
scrub: 1
},
stagger: 1,
duration: 1.4,
ease: 'back',
width: '0%'
}
)


gsap.from(".proj-container img", {
  scrollTrigger: {
    trigger: ".proj-container",
    start: "top 80%",
    end: "top bottom",
    scrub: 2,
  },
  stagger: 1.5,
  opacity: 0,
  yPercent: -100,
  duration: 3,
  yoyo: true,
  ease: 'back'
});

