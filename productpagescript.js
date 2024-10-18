
let slideindex = 1;



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