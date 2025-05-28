

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




gsap.to('.marquee span ',{
  scrollTrigger: {
    trigger: '.marquee',
    start: 'top 90%',
    end: 'top 20%',
    scrub:3
  },
  yoyo: true,
  x : -1300,
  duration: 2
})

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
let splith4 = SplitText.create(".section-one h4", { type: "words, chars" });
let splith2 = SplitText.create(".section-one h2", { type: "words, chars" });

tl.from(splitHeading.chars, {
  scrollTrigger: {
    trigger: ".section-one",
    start: "top bottom",
    scrub: 2,
    triggerEnd: ".section-one",
    end: "top 25%",
  },
  yPercent: -100,
  stagger: 0.5,
})
  .from(splitSub.chars, {
    scrollTrigger: {
      trigger: ".section-one",
      start: "top 70%",
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
    trigger: splith4.chars,
    scrub: 2,
    end: "top center"
  },
  transformOrigin: "bottom",
  duration: 2,
  scale: 0,
  stagger: 0.8,
  ease: "back",
});

gsap.from(splith2.words , {
  scrollTrigger:{
    trigger: '.section-one',
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
gsap.from(".progress span",{
  scrollTrigger: {
    trigger: '.section-one',
    start: "bottom 80%",
    end: 'bottom 2%',
    scrub: true
  },
  right: -200,
  stagger: 0.5,
  duration: 4,
  ease: 'back',
  yoyo: true
})




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


gsap.from('.image-right img',{
  scrollTrigger:{
    trigger: '.image-right',
    start: 'top bottom',
    end: 'top 60%',
    scrub:1
  },
  duration: 3,
  ease: 'linear',
  yPercent: -100
})
gsap.from('.image-left img',{
  scrollTrigger:{
    trigger: '.image-left',
    start: 'bottom bottom',
    endTrigger: '.section-one',

    end: 'bottom bottom',
    scrub:1
  },
  duration: 3,
  ease: 'linear',
  yPercent: 100
})

const form = document.querySelector('.form form')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  e.target.reset()
  const button = e.target.querySelector('button')
  console.log(button)
  button.style.backgroundColor = 'orangered'
  button.style.color = 'white'
  button.textContent= 'Sent Successfully..'
  setTimeout(() => {
    
    button.style.color = 'black'
    button.style.backgroundColor = 'orange'
    button.textContent= 'Send Message'
    
  }, 2000);
})