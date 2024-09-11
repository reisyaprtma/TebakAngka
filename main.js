document.getElementById("tebak").addEventListener("click",tebak)
let n=Math.floor(Math.random() * localStorage.getItem("bil"))
console.log(n)
var i=localStorage.getItem("i")
var i2=i
var bol=true
var z1=0
var z2=localStorage.getItem("bil")
document.getElementById("rentang").innerHTML=`Angka berada diantara 1-${z2}`
document.getElementById("nyawa").innerHTML=`Nyawa anda tersisa ${i}`
document.getElementById("ulang").style.display="none"
function tebak() {
    let x=document.getElementById("input").value
    if (x=="") {
        x=0
    }
    if (x>n) {
        document.getElementById("rentang").innerHTML=`Angka berada diantara ${z1}-${x}`
        z2=x
        i-=1
        document.getElementById("nyawa").innerHTML=`Nyawa anda tersisa ${i}`
    }
    else if (x<n) {
        document.getElementById("rentang").innerHTML=`Angka berada diantara ${x}-${z2}`
        z1=x
        i-=1
        document.getElementById("nyawa").innerHTML=`Nyawa anda tersisa ${i}`
    }
    else{
        document.getElementById("headform").innerHTML=`Selamat tebakan anda benar, puh sepuh ajarin dong puh`
        document.getElementById("rentang").innerHTML=`Anda berhasil di percobaan ke ${i2-i+1}`
        document.getElementById("nyawa").style.display="none"
        document.getElementById("input").style.display="none"
        document.getElementById("tebak").style.display="none"
        document.getElementById("ulang").style.display="block"
    }
    if (i==0) {
        document.getElementById("headform").innerHTML=`Nyawa anda habis dek`
        document.getElementById("angkaasli").innerHTML=`Angka yang benar : ${n}`
        document.getElementById("nyawa").style.display="none"
        document.getElementById("input").style.display="none"
        document.getElementById("tebak").style.display="none"
        document.getElementById("rentang").style.display="none"
        document.getElementById("ulang").style.display="block"
    }
}