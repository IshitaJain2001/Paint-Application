

const eraser = document.querySelector(".eraser");
const pencil = document.querySelector(".pencil"); 
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
  
let isDrawing = false;
// let lastX, lastY;
let color = "black";
let brushSize = 2;

pencil.addEventListener("click", function () {
  isDrawing = !isDrawing;
});


canvas.addEventListener("mousemove", drawLine);
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mouseout", endPosition);

function startPosition(e) {
  isDrawing = true;
  draw(e);
}
function endPosition() {
  isDrawing = false;
  ctx.beginPath(); // Reset the path
}
function drawLine(e) {
  if (!isDrawing) return;

  draw(e);
}
function draw(e) {
  let x = e.clientX - canvas.offsetLeft;
  let y = e.clientY - canvas.offsetTop;

  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}




// function drawLine(e) {
//     if (!isDrawing) return;

   
//     let x = e.pageX - canvas.offsetLeft;
//     let y = e.pageY - canvas.offsetTop;

//     ctx.lineWidth = brushSize;
//     ctx.lineCap = "round";
//     ctx.strokeStyle = "black";

    
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(lastX, lastY);
//     ctx.stroke();

//     lastX = x;
//     lastY = y;
//   }


//     pencil.addEventListener("click", function () {
//     isDrawing = !isDrawing; ;

//     if(isDrawing) {
//       lastX=null;
//       lastY= null;
//     }
//     });

//     canvas.addEventListener("mousemove", drawLine);
//     canvas.addEventListener("mouseup", function () {
//       isDrawing = false;
//     });
    
//     pencil.addEventListener("mousemove", function (e) {
//       // Set the starting position when moving over the pencil icon
//       if (isDrawing) {
//         lastX = e.pageX - canvas.offsetLeft;
//         lastY = e.pageY - canvas.offsetTop;
//       }
//     });
    


     
 
 
