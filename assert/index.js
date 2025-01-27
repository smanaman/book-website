let leftbutton=document.getElementById('left-btn')
let rightbutton=document.getElementById('right-btn')
let allslide=document.querySelectorAll('.slider-img')
let count=0;

let updatevalue=()=>{
  allslide.forEach((val)=>{
  val.style.transform = `translateX(${count}%)`

  })
}
rightbutton.addEventListener('click',()=>{
 count-=100
console.log(count);

 if(count <=-300){
  count=0
  updatevalue()
 }
else{
  updatevalue()
}
 
})

leftbutton.addEventListener('click',()=>{

  count +=100
  console.log(count);

  if(count>=0){
count=0
updatevalue()
  }
  else{
    updatevalue()
  }
  
})




let tl = gsap.timeline()


tl.from("h1", {
  y: -50,
  duration: 2.3,
  dealy: 1,
  stagger: 0.3,
  opacity: 0
})

tl.from("#navtext", {
  y: -50,
  duration: 1,
  dealy: 1,
  stagger: 0.3,
  opacity: 0
})

gsap.from("#StudentBasic", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#StudentBasic",
    scroller: "body",


  }
})
gsap.from("#rightslide", {
  x: -300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#rightslide",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#leftslide", {
  x: 300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#leftslide",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#rightslide2", {
  x: -300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#rightslide2",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#leftslide2", {
  x: 300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#leftslide2",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})

gsap.from("#rightslide3", {
  x: -300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#rightslide3",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})
gsap.from("#leftslide3", {
  x: 300,
  opacity: 0,
  // duration: 5,
  scrollTrigger: {
    trigger: "#leftslide3",
    // markers: true,
    start: "top 70%",
    end:"top 40%",
    scrub:3
  }
})