'use strict'
// let userInfo = {
    // свойство об'єкта ключ: значення
//     name: 'Ivanna', 
//     age:31,
//     'likes javascript':true,
// };
// console.log (userInfo);
// console.log (userInfo.name);
// console.log (userInfo['likes javascript']);

// Синтаксис
// Імена свойств

// Вичесляємо ім'я

// let firstPart = 'likes';
// let userInfo = { 
//     name:'Mykola',
//     age:41,
//     [firstPart + 'javascript']: true,
// };
// console.log (userInfo['likes javascript']);


// let firstPart = "likes";
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	[firstPart + " javascript"]: true,
// };
// console.log(userInfo["likes javascript"]);

// let firstPart = 'likes';
// let userInfo = { 
//     name:'Mykola',
//     age:41,
//     [firstPart ]: true,
// };
// console.log (userInfo[firstPart]);

// Перевага квадратних дужок
// let key = 'name';
// console.log (userInfo[key]);

// Імена свойств
// Імена = строки або символи

// let userInfo = {
//     0: 'Anna', 
// };
// console.log (userInfo[0]);
// console.log (userInfo['0']);

// Тип даних Symbol
// Створюємо символ id з описом 'id'
// let id = Symbol ('id');
// let userInfo = {
//     name: 'Anna',
//     age:21,
//     [id]:'Hello',
// };
// console.log (userInfo);

// Вставка

// let userInfo = {
//     name: 'Anna',
//     age: 21,
//     adress: {
//         city: 'Ivano-Frankivsk',
//         street: 'Freedom',
//     }
// }
// // console.log (userInfo);
// // console.log (userInfo.adress);
// console.log (userInfo.adress.city);

// Свойство з змінною

// function makeUserInfo (name,age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = makeUserInfo ('Anna',21);
// console.log (user);

// function makeUserInfo (name,age) {
//     return {
//          name,
//          age,
//     };
// }
// let user = makeUserInfo ('Anna',21);
// console.log (user);

// Зміна обєкту
// Додавання ключів і внутрішніх обєктів

let userInfo = {
    name: 'Anna',
}
console.log (userInfo);

userInfo.age = 21;
console.log (userInfo);

userInfo ['likes javascript'] = true;

console.log (userInfo);