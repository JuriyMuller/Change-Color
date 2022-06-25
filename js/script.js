const body=document.body;
const btn = document.querySelector(".change-color");
const outputColor = document.querySelector(".color") 
btn.addEventListener("click",()=>{
    let r =Math.ceil(Math.random()*(255-0)+0); 
    let g =Math.ceil(Math.random()*(255-0)+0); 
    let b =Math.ceil(Math.random()*(255-0)+0); 

    outputColor.innerHTML=`rgb(${r},${g},${b})`
    body.style.backgroundColor=`rgb(${r},${g},${b})`
})