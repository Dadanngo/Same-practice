const number = 5;
//functionはRubyのdefに相当
function square(number) {
    return number * number;
}
console.log(square(number));

//上の書き換え
const square2 = function (number) {
    return number * number;
}
console.log(square2(4));


function addsquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
console.log(addsquares(2, 3));



function map(f, a) {
    const result = new Array(a.lentgh);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
    return x * x * x;
}, numbers);

console.log(cubedNumbers);


const num = 0;
let myfunc;
if (num === 0) {
    myfunc = function (theObject) {
        theObject.make = 'Toyota';
        console.log(theObject);
    };
}

//squareを後から呼び出す。
console.log(square(3));

//再帰関数
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

//ループ
let x = 0;
while(x<10) {
    console.log(x);
    x++;
}
function loop(x){
    if (x >= 10) {
        return;
    }
    loop(x+1);
    console.log(x);
}
loop(0);