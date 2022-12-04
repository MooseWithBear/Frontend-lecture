// console.log(0.1+0.2); // 0.30000000000000004
// console.log((0.1+0.2).toFixed(2)); // 0.30
// console.log(typeof((0.1+0.2).toFixed(2))); // string
// console.log(typeof(Number((0.1+0.2).toFixed(2)))); // number

// let age //undefined
// setTimeout(() => {
//     age = 85
//     console.log(age);
// }, 1000);

// const user = {
//     name: "bora",
//     agee: 22
// }

// console.log(user.name);
// console.log(user.agee);
// console.log(user.email);

// alphabet = ["a","b","c"]; 
// console.log('alphabet[1]: ', alphabet[1]);


// const user2 = new Object(); 
// user2.name = "bora"; 
// user2.age=22 
// console.log(user2)

// function User() {
//     this.name = "bora"
//     this.age = 22
// }
// const user = new User();
// console.log(user);

// const user = {
//     name:"bora",
//     age:22
// }
// console.log('user: ', user);

// const userA = {
//     name:"bora",
//     age:22,
// }

// const userB = {
//     name:"sean",
//     age:24,
//     parent:userA,
// }

// console.log(userB.parent.name); //bora
// console.log(userB['parent']['name']) //bora
// const users = [userA, userB];
// console.log(users[1].parent.name) //bora
// console.log(users[1]['parent']['name']) //bora


console.log(typeof 'Hello' === 'string'); //true
console.log(typeof 123 === 'number'); //true
console.log(typeof false === 'boolean'); //true
console.log(typeof undefined === 'undefined'); //true
console.log(typeof null === 'null'); //false
console.log(typeof '' === 'null'); //false
console.log(typeof null); //Object
//conclusion//
console.log(typeof null==='object') //true


console.log(typeof [] === 'object') //true
console.log(typeof {} === 'object') //true 
console.log(typeof function() {} === 'function') //true

console.log([].constructor === Array) // true
console.log({}.constructor === Object) // true


//!
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType(112))
console.log(checkType("112"))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(function(){}))

