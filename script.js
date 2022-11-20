let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boot6 = document.getElementById("boot6")
let moons = document.querySelector(".moon")


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px"
    moon.style.top = value * 3 + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river.style.top = value  + "px"
    boot6.style.top = value  + "px"
    boot6.style.left = value * 3 + "px"
    moons.style.fontSize = value  + "px"
    if(scrollY >=80){
        moons.style.fontSize = 80 + "px"
        moons.style.position = "fixed"
        if(scrollY >= 530.816650390625){
            moons.style.display = "none"
        }else{
            moons.style.display = "block"
        }
        if(scrollY >= 204 ){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
    
}