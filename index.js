
    const canvas = document.querySelector("canvas");
 const pencil = document.querySelector(".pencil");
 const eraser = document.querySelector(".eraser") ;
 const shapes= document.querySelector(".shapes");
 const allshapes= document.querySelector(".allshapes");
 
 const clear = document.querySelector(".clear");
ctx= canvas.getContext("2d");

let isDrawing= false;
let erasered= false;
window.addEventListener("load",()=>{
  canvas.width= canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

})

const drawing= (e) =>{
  if(!isDrawing) return;
  {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  if(erasered== true) {
    ctx.strokeStyle= "white";
      }
      else{
        ctx.strokeStyle= "black";
      }
  }


  
}


     pencil.addEventListener("click" ,()=>{
      erasered= false;
      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mousemove",drawing);
      canvas.addEventListener("mouseup", endPosition);    
       
     }
     )

 
 
function startPosition() {
  isDrawing = true;
  
}

function endPosition() {
  isDrawing = false;
  ctx.beginPath(); 
}
let shapesvisible= false;
shapes.addEventListener("click", ()=>{
if(!shapesvisible) {
allshapes.style.opacity = 1;
shapesvisible= true;
} else{
  allshapes.style.opacity = 0;
shapesvisible= false;
}

})

eraser.addEventListener("click",() =>{
erasered = true;
})

clear.addEventListener("click", ()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
})
