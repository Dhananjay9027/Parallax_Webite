const parr=document.querySelectorAll(".par");
let xvalue=0,
yvalue=0;
function update(cursorposition)
{
    parr.forEach((el)=>{
        let speedx=el.dataset.speedx;
        let speedy=el.dataset.speedy;
        let speedz=el.dataset.speedz;
        let isInleft= 
          parseFloat(getComputedStyle(el).left)<window.innerWidth / 2 ? 1 : -1;
        let zvalue=(cursorposition-parseFloat(getComputedStyle(el).left))*
        isInleft*0.1;
        el.style.transform=`translateX(calc(-50% + ${-xvalue*speedx}px)) translateY(calc(-50% + ${yvalue*speedy}px)) perspective(2300px) translateZ(${zvalue*speedz}px)`;
    });
}

update(0);

window.addEventListener("mousemove",(e)=>
{
    xvalue=(e.clientX-window.innerWidth/2)   //e.clientx give x cordinates  and we minus this thing from it because we want coordinate refernece to centre
    yvalue=e.clientY-window.outerHeight/2  //give y coordinates
    update(e.clientX);
})

//Greensock animation 
let timeline=gsap.timeline();
timeline.from(".bg",{
    top:"1000px",
    duration:3.5,

});













// parr.forEach((el)=>{
//     timeline.from(
//         el,
//         {
//         top:`${el.offsetHeight / 2 + +el.dataset.distance}px`,
//         duration: 3.5,
//         ease: "power3.out"
//         },
//         "1"

//     );
// });

//${el.offsetHeight/2+el.dataset.distance}px
