document.getElementById('tombol').addEventListener('click',start)
function start() {
    var difficulty = document.getElementById("form").difficulty.value
    if (difficulty=="easy") {
        localStorage.setItem("diff","easy")
        localStorage.setItem("i",10)
        localStorage.setItem("bil",100)
    }
    else if (difficulty=="normal") {
        localStorage.setItem("diff","normal")
        localStorage.setItem("i",8)
        localStorage.setItem("bil",100)
    }
    else if (difficulty=="hard") {
        localStorage.setItem("diff","hard")
        localStorage.setItem("i",5)
        localStorage.setItem("bil",100)
    }
    else if (difficulty=="dewa"){
        localStorage.setItem("diff","dewa")
        localStorage.setItem("i",5)
        localStorage.setItem("bil",200)
    }
}