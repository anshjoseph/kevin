let dog = document.getElementById("dog")

function Animation(){
    dog.setAttribute("src","./assert/2.png")
    dog.setAttribute("src","./assert/3.png")
    dog.setAttribute("src","./assert/4.png")
    dog.setAttribute("src","./assert/1.png")
}

dog.addEventListener('click',()=>{
    console.log("click")
})