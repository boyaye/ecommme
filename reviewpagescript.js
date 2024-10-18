
var slideindex = 0

function adslideshow(){
    var adslide = document.querySelectorAll(".advertitems")
    var i;
    slideindex++;
    if(slideindex > adslide.length){
        slideindex = 1
    }
    for(i = 0; i < adslide.length;i++){
        adslide[i].style.display = " none"
    }
    adslide[slideindex-1].style.display = " block"
    setTimeout(adslideshow,3000)
}
adslideshow()

