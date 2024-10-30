
let slideindex = 1;
let slideimage = document.querySelectorAll(".displayimageslide")
console.log(slideimage)


function slideproductimage(n){
    var i
    let slideimage = document.querySelectorAll(".displayimageslide")
    if(slideimage.length < n){
        slideindex = 1
    }
    if( n < 1){
slideindex = slideimage.length
    }

    for( i = 0; i < slideimage.length;i++){
        slideimage[i].style.display = "none";
    }
  slideimage[slideindex-1].style.display = " block";
}
slideproductimage()

function forwardslide(n){
    slideproductimage(slideindex += n )
}
console.log(slideproductimage)

var advertindex = 0;

function adslide(){

    var slideshowad = document.querySelectorAll(".slideshowad");
    advertindex++;
    if(advertindex > slideshowad.length){
        advertindex = 1
    }
    var i
    for(i = 0;i < slideshowad.length;i++){
        slideshowad[i].style.display = "none "
    }
slideshowad[advertindex-1].style.display = " block"
   setTimeout(adslide,2000) 
 
}
adslide()
console.log(adslide)

// collapse function

var colls = document.getElementsByClassName("collapse")
var i;

for(i = 0 ; i < colls.length;i++){
    colls[i].addEventListener("click", function(){
        this.classList.toggle("active");
      
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none"
        }else{
            content.style.display = "block";
        }
    })
}