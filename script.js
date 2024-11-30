gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 3,
  // repeat:-1,
  rotate: 360,
});
gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 3,
  // repeat:-1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    scrub: 1,
    // markers: true,
    start: "top 60%",
  },
});
gsap.from("#page3 #box", {
  scale: 0,
  delay: 1,
  duration: 3,
  // repeat:-1,
  rotate: 360,
});

gsap.from("#page3 h1", {
  opacity: 0,
  // y:500,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    // markers:true,
    scrub: 1,
    start: "top 50%",
  },
});
gsap.from("#page3 h2", {
  opacity: 0,
  // y:500,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    // markers:true,
    scrub: 1,
    start: "top 50%",
  },
});
gsap.from("#page4 #box", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 1,
  // y:500,
  // duration:1,
  // x:-500,
  scrollTrigger: {
    trigger: "#page4 #box",
    scroller: "body",
    // markers: true,
    scrub: 1,
    start: "top 60%",
    end: "top 10%",
  },
});

gsap.to('#pin2page h1',{
    transform:'translateX(-150%)',
    // repeat:-1,
    duration:1.5,
    delay:1,
    scrollTrigger:{
        trigger:'#pin2page',
        scroller:'body',
        markers:true,
        start:'top 0%',
        end:'top -150%',
        scrub:2,
        pin:true
    }
    
})
