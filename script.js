// alert("hello")
function keyskill(){
    alert(" \nMy key skills\n \n 1) Zeal to learn new thing \n 2) Good listner \n 3) Self-motivating power")
}

language=() => {
         alert("\n My Langauges \n\n Hindi \n English")
}

proglanguage=()=>{
    alert("\nMy programming languages are\n\n 1) HTML \n 2) CSS \n 3) JAVASCRIPT \n 4) JQUERY \n 5) REACTJS \n 6) JAVA(intermediate)")
}

os=()=>{
    alert(" Window 9,10,11")
}



// window.onload = function () {


//     var canvas = document.getElementById("sky");
//     var ctx = canvas.getContext("2d")


//     var W = window.innerWidth;
//     var H = window.innerHeight;
//     canvas.width = W;
//     canvas.height = H;
    
//     // var W = canvas.style.width = "300px";
//     // canvas.width = W;

   
//     var mf = 100;
//     var flakes = [];

//     for (var i = 0; i < mf; i++) {
//         flakes.push({
//             x: Math.random() * W,
//             y: Math.random() * H,
//             r: Math.random() * 8 + 2,
//             d: Math.random() + 2,

//         })
//     }


//     function drawFlakes() {

//         ctx.clearRect(0, 0, W, H);
//         ctx.fillStyle = "white";
//         ctx.beginPath();
//         for (var i = 0; i < mf; i++) {

//             var f = flakes[i];
//             ctx.moveTo(f.x, f.y);
//             ctx.arc(f.x, f.y, f.r, 0, Math.PI + 2, true);
//         }
//         ctx.fill();
//         moveFlakes();

//     }

//     var angle = 0;
//     function moveFlakes() {
//         angle += 0.01;

//         for (var i = 0; i < mf; i++) {
//             var f = flakes[i];

//             f.y += Math.pow(f.d, 2) + 1;
//             f.x += Math.sin(angle) * 2;

//             if (f.y > H) {
//                 flakes[i] = {x: Math.random() * W, y: 0, r: f.r, d: f.d};
//             }

//         }



//     }

//     setInterval(drawFlakes, 25);


// }