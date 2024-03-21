//selecting side navbar, menu icon


var sidenavbar=document.getElementById("sidenavbar")
var menuicon=document.getElementById("menuicon")
var close=document.getElementById("close-nav")



menuicon.addEventListener("click",function(){
    sidenavbar.style.right=0
})

close.addEventListener("click",function(){
    sidenavbar.style.right="-50%"

})
//search the product

var search=document.getElementById("search")
var container=document.querySelector(".container")
var h1list=productcontainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
 
    var enteredvalue = event.target.value.toUpperCase()
    
    for(i=0 ; i<h1list.length ; i=i+1)
    if(h1list[i].textContent.toUpperCase().indexOf(enteredvalue)<0){
        h1list[i].style.display="none"
    }
    else{
        h1list[i].style.display="block"
    }
})