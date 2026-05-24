//配列の要素を追加する。
const coffee = [];
coffee.push("Latte", "Americann", "Espresso");
console.log(coffee.length);
coffee[3] = "cappucino";
console.log(coffee)

//配列を逆順
const colors = ["red", "blue", "green"];
colors[3] = "purple";
colors.forEach((item, index) => {
  console.log('${index}: ${item}');
});
colors.reverse();
console.log(colors);

function method(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
    }
  }
}

const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
}
console.log(Array.prototype.join.call(arrayLike, "+"));

//length プロパティが整数でない場合0に変換される。
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a);

//map 呼び出しもとのすべての要素を2倍にする
const array = [1, 4, 9, 16];
const mapped = array.map((x) => x * 2);
console.log(mapped);

//配列から文字を作成する。
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(",");
console.log(fruitsString);

//filter 特定の条件を満たす要素のみ抽出する。
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

