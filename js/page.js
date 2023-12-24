let menProd = document.querySelectorAll(".menPro");
let womenProd = document.querySelectorAll(".womenPro");
let childProd = document.querySelectorAll(".childPro");

let ProdMen = document.querySelectorAll(".ProdMen");


console.log(ProdMen);
// add  to cart for men

for(let i=0; i<childProd.length;i++){
    childProd[i].addEventListener("click",function()
    {
        childProd[i].innerHTML='it is Add to Cart';
        childProd[i].parentElement.style.border='red solid 2px';
        childProd[i].style="color:red; background:orange"   ;
    });
}

// add  to cart for women
for(let j=0; j<menProd.length;j++){
    menProd[j].onclick=function()
    {
         menProd[j].innerHTML='it is Add to Cart';
         menProd[j].parentElement.style.border='red solid 2px';
         menProd[j].style="color:red; background:aqua";
           }
}

// add  to cart for child 

for(let k=0; k<womenProd.length;k++){
    womenProd[k].onclick=function()
    {
         womenProd[k].innerHTML='it is Add to Cart';
         womenProd[k].parentElement.style.border='red solid 2px';
         womenProd[k].style="color:red; background:chartreuse";
    }
}


for(let a=0; a<ProdMen.length;a++){
    ProdMen[a].onclick=function()
    {
        ProdMen[a].innerHTML='it is Add to Cart';
         ProdMen[a].parentElement.style.border='red solid 2px';
         ProdMen[a].style="color:red; background:aqua" ;
          }
}


