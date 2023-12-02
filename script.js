document.addEventListener("DOMContentLoaded", function () {
let main = document.getElementById("main");

for(let i=1; i<=20; i++){
    let div = document.createElement("div");
    div.classList.add("colordiv");
    
    if(i%2 == 0){
    div.style.background="red";
}else if(i%2 !=0{
    div.style.background= "yellow";
}
if(i%5 == 0){
    div.style.background= "blue"
}
main.appendChild(div);
}

   
})
