// add class actuve to header on scroll //

let header = document.querySelector("header")

window.onscroll = function(){
    if(this.scrollv >= 50){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}