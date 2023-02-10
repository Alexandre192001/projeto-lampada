const btnLigar = document.querySelector(".btn_ligar")
btnLigar.addEventListener("click",()=>{
    document.querySelector(".img-apagada").style.display="none"
    document.querySelector(".img-acesa").style.display="block"
})
//comentario
const btnDesligar = document.querySelector(".btn_desligar")
btnDesligar.addEventListener("click", ()=>{
    document.querySelector(".img-apagada").style.display="block"
    document.querySelector(".img-acesa").style.display="none"
})