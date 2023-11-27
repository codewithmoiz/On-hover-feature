var btn = document.querySelector(".cont button");
var video = document.querySelector(".cont video");

btn.addEventListener("mouseover",function(){
    gsap.to(video,{
        opacity: .8,
        duration: 1
    })

    gsap.to(btn,{
        backgroundColor: "transparent",
        color: "#fff",
        border: "2px solid #000"
    })
})
btn.addEventListener("mouseleave",function(){
    gsap.to(video,{
        opacity: 0,
        duration: 0.4
    })
    gsap.to(btn,{
        backgroundColor: "#fff",
        color: "#000",
        border: "none"
    })
})