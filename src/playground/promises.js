const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'Koby', age: 23});   
        //  reject('Something wrong');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise');   
            //  reject('Something wrong');
        }, 5000);
    });
}).then((str)=>{
console.log(str)
}).catch((error) => {
    console.log('error: ', error);
});




console.log('after');
