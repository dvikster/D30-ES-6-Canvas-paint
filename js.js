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
}
