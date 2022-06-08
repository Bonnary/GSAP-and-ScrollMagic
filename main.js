gsap.fromTo(".text1",{y:1000},{y:0,duration:1,ease:"bounce"});
let controller = new ScrollMagic.Controller();
let tween = gsap
  .timeline()
  .fromTo(
    ".img2",
    { xPercent: 100, opacity: 0 },
    { xPercent: 0, opacity: 1, ease: "none" }
  )
  .fromTo(".text2", { x: 1000 }, { x: 0, ease: "none" })
  .fromTo(
    ".img3",
    { xPercent: 100, opacity: 0 },
    { xPercent: 0, opacity: 1, ease: "none" },
    "+=0.5"
  )
  .fromTo(".text3", { y: 1000 }, { y: 0, ease: "none" })
  .fromTo(
    ".img4",
    { xPercent: 100, opacity: 0 },
    { xPercent: 0, opacity: 1, ease: "none" },
    "+=1"
  )
  .fromTo(".text4", { y: -1000 }, { y: 0, ease: "none" });

let scene = new ScrollMagic.Scene({
  triggerElement: ".container",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(tween)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40,
  })
  .setPin(".container")
  .addTo(controller);