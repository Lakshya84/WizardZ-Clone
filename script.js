function firstPageAnimation() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,
  });

  tl.from(".center-part-1 h1 , .center-part-1 p", {
    x: -150,
    opacity: 0,
    duration: 0.2,
  });

  tl.from(".center-part-1 button", {
    y: 200,
    opacity: 0,
    duration: 0.1,
  });

  tl.from(
    ".center-part-2 img",
    {
      x: 150,
      opacity: 0,
      duration: 0.2,
    },
    "-=0.5"
  );

  tl.from(".section1bottom img", {
    x: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.4,
  });
}
firstPageAnimation();

gsap.from(".services h1", {
  x: -100,
  opacity: 0,
  duration: 0.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".services h1",
    scroller: "body",
    start: "top 50%",
  },
});

gsap.from(".services p", {
  x: 200,
  opacity: 0,
  duration: 0.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".services p",
    scroller: "body",
    start: "top 80%",
  },
});

gsap.from(".elem-part2", {
  x: -400,
  opacity: 0,
  duration: 0.5,
  stagger: 0.8,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    start: "top 90%",
  },
});

gsap.from(".part1-elem", {
  x: -400,
  opacity: 0,
  duration: 0.5,
  stagger: 0.8,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    start: "top 90%",
  },
});

gsap.from(".elem-img", {
  x: -400,
  opacity: 0,
  duration: 0.2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    start: "top 90%",
  },
});

var navBtn = document.querySelector("nav button");
navBtn.addEventListener("mouseenter", function () {
  navBtn.style.color = "#111";
  navBtn.style.backgroundColor = "#B9FF66";
  navBtn.style.scale = 1.1;
  navBtn.style.border = "none";
});

var navBtn = document.querySelector("nav button");
navBtn.addEventListener("mouseleave", function () {
  navBtn.style.color = "";
  navBtn.style.backgroundColor = "";
  navBtn.style.scale = 1;
  navBtn.style.border = "";
});

var centerBtn = document.querySelector(".center button");
centerBtn.addEventListener("mouseenter", function () {
  centerBtn.style.color = "#111";
  centerBtn.style.backgroundColor = "#B9FF66";
  centerBtn.style.scale = 1.1;
});

var centerBtn = document.querySelector(".center button");
centerBtn.addEventListener("mouseleave", function () {
  centerBtn.style.color = "";
  centerBtn.style.backgroundColor = "";
  centerBtn.style.scale = 1;
});