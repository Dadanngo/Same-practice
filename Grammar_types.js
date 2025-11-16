//javaScript写経
/* This is a simple JavaScript file that defines a constant variable
    and assigns it a string value. It then references the variable. */

//基本はconst使う。値が意図せず書き換えるのを防ぐため
const test = "footbar";
console.log(test);

if (Math.random() > 0.5) {
   const y = 5;
   console.log(y);
}

function example() {}
  const f = 5;
function example2() {
  const g = 5;
  var e //gをここでは再定義できない。
}
const MY_OBJECT = {key: "value"};
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JavaScript");
console.log(MY_ARRAY);

z =37+7;
console.log(z);

Z =37 + "7";
console.log(Z); //文字列連結になる

parseInt("101",2); //2進数の101を10進数に変換

const coffes = ["Americano", "Espresso", "Cappuccino"];
console.log(coffes);
console.log(coffes[0]);

const myList = ["home",, "work",/*空*/,]; //配列の途中に空要素を入れられる最後のカンマ2つはgit diffをきれいにするため
console.log(myList);
