//プロミスアクションは非同期
const promiseA = new Promise((resolve,reject) => {
    resolve(777)
});

promiseA.then((val) => console.log("asynchronous loggin has val:", val));
    console.log("immediate logging");


//2秒間待ってメッセージ→1秒間待ってメッセージを表示するPromise

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`waited ${ms}ms`);
        }, ms);
    });
}

wait(2000)
 .then((msg) =>{
    console.log(msg);
    return wait(1000);
})

.then((msg) =>{
    console.log(msg); 
})

.catch((err) =>{
    console.error('エラー', err);
 })

 .finally(() => {
    console.log('完了しました。')
 })