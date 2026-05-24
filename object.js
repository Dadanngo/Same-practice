//condがtrueの時、hitherを返す。
const cond = true;
let x;
if (cond){
    x ={greeting:"hi there" };
}
console.log(x);


const mybody = {
    height:173,
    body_weight:70,
    black:{eye:2, hair:1000000 },
};
console.log(mybody.height);
//objectの中のobjectにアクセスする方法
console.log(mybody.black.eye);

//オブジェクトの下地を作るイメージ。
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}
const myCar = new Car("benz","S-class",2024);
const myCar2 =new Car("BMW","X5",2023);
console.log(myCar.make);
console.log(myCar2.year);

const Animal ={
    type:"Invertebrates",
    displayType(){
        console.log(this.type);
    },
};

const animal1 = Object.create(Animal);
animal1.displayType();

const fish = Object.create(Animal);
fish.type ="Fishes";
fish.displayType();

const dog = Object.create(Animal);
dog.type ="Dogs";
dog.displayType();

//ゲッターとセッター
const myObj = {
    a: 7,
    get b(){
      return this.a + 1;
    },
    set c(x){
        this.a = x / 2;
    },
};

console.log(myObj.b);
myObj.c = 40;
console.log(myObj.a);

//オブジェクトの比較
const fruit = {name:"apple"};
const anotherFruit = fruit;
console.log(fruit == anotherFruit);

fruit.name ="orange";
console.log(anotherFruit.name);
