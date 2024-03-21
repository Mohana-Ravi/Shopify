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