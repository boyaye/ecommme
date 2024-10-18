
var myfirstimageslide = document.querySelectorAll(".slideshow")



var firstslideindex = 0;

function firstslidefunction(){
    var i;
    var myfirstimageslide = document.querySelectorAll(".slideshow")
    firstslideindex ++;
    if(firstslideindex > myfirstimageslide.length){
        firstslideindex = 1;
    }
  
    for(i = 0;i < myfirstimageslide.length;i++){
        myfirstimageslide[i].style.display = "none"
    }
    myfirstimageslide[firstslideindex-1].style.display = "block";

    setTimeout(firstslidefunction,2000) 
}
firstslidefunction()


var secondslideindex = 0

function secondslidefunction(){
    var i
    var secondslide = document.querySelectorAll(".secondslide")
    secondslideindex++
    for(i = 0 ;i < secondslide.length;i++){
        secondslide[i].style.display = "none"
    }
    
    if(secondslideindex > secondslide.length){
        secondslideindex = 1
    }
    secondslide[secondslideindex-1].style.display = " block"
    setTimeout(secondslidefunction,2000)
}
secondslidefunction()