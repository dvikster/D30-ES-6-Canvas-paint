// document.getElementById('rezult').onclick = function rezultF() {
//     var a = document.getElementById('a').value;
//     var b = document.getElementById('b').value;
//     var c = document.getElementById('c').value;
//     var d = Math.max(a, b, c);
//     document.getElementById('out').innerHTML = 'максимальное число: ' + d;
// }


// on ES6
document.getElementById('rezult').onclick = function rezultF() {
    let n1 = document.getElementById('a').value;
    let n2 = document.getElementById('b').value;
    let n3 = document.getElementById('c').value;

    let rezult = (a=+n1, b=+n2, c=+n3) => {
        if((a<b)&&(b>c)){document.getElementById('out').innerHTML = `максимальное число: ${b}`;}
        if((b<c)&&(c>a)){document.getElementById('out').innerHTML = `максимальное число: ${c}`;}
        if((c<a)&&(a>b)){document.getElementById('out').innerHTML = `максимальное число: ${a}`;}
    }
    rezult();
};

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let color = document.getElementById('color');
canvas.onmousedown = function(event) {
    canvas.onmousemove = function (event) {
        ctx.fillStyle = color.value;
        ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
    };
    canvas.onmouseup = function(event) {
        canvas.onmousemove = function (event) {return false};
        ctx.fillStyle = color.value;
        ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
    };
};


document.getElementById('clear').onclick = function () {
    ctx.clearRect(0,0,600,600);
};



// ctx.fillStyle='#2bbbad';
// ctx.beginPath();
// ctx.beginPath();
// ctx.strokeStyle='#ee6e73';
// ctx.lineWidth = '2';
// ctx.moveTo(0,300);//начало
// ctx.lineTo(600,300);
// ctx.stroke();
// ctx.fillRect(2*x+300,2*y+300, 2,2);

