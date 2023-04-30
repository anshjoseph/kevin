let dog = document.getElementById("dog")
let imags = [document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4")]
let count = 0
let prev = 0

imags[1].style.display = "none"
imags[2].style.display = "none"
imags[3].style.display = "none"
function Animation() {
    dog.setAttribute("src", "./assert/2.png")
    dog.setAttribute("src", "./assert/3.png")
    dog.setAttribute("src", "./assert/4.png")
    dog.setAttribute("src", "./assert/1.png")
}

imags[0].addEventListener('click', () => {
    prev = count
    count++;
    // prev
    imags[prev%4].style.display= "none"
    imags[count%4].style.display = "block"

})
imags[1].addEventListener('click', () => {
    prev = count
    count++;
    // prev
    imags[prev%4].style.display= "none"
    imags[count%4].style.display = "block"

})
imags[2].addEventListener('click', () => {
    prev = count
    count++;
    // prev
    imags[prev%4].style.display= "none"
    imags[count%4].style.display = "block"

})
imags[3].addEventListener('click', () => {
    prev = count
    count++;
    // prev
    imags[prev%4].style.display= "none"
    imags[count%4].style.display = "block"

})