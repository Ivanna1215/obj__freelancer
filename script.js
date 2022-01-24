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

// let userInfo = {
//     name: 'Anna',
// }
// console.log (userInfo);

// userInfo.age = 21;
// console.log (userInfo);

// userInfo ['likes javascript'] = true;

// console.log (userInfo);

// userInfo.address = {
//     city: 'Lviv',
//     street: 'Freedom',
// }
// console.log (userInfo);

// Видалення
// let userInfo = {
//     name: 'Ivanna', 
//     age:31,
//     'likes javascript':true,
// };
// console.log (userInfo);

// delete userInfo.age;
// console.log (userInfo);
// delete userInfo["likes javascript"];
// console.log (userInfo);

// let userInfo = {
//     name: 'Anna',
//     age: 21,
//     adress: {
//         city: 'Ivano-Frankivsk',
//         street: 'Freedom',
//     }
// }

// console.log (userInfo);
// delete userInfo.age;
// console.log (userInfo);
// delete userInfo.adress.city;
// console.log (userInfo);
// delete userInfo.adress.street;
// console.log (userInfo);
// userInfo.age = 9;
// console.log (userInfo);
// userInfo.adress.city = 'Lviv';
// console.log (userInfo);
// userInfo.friends = 'Vova';
// console.log (userInfo);


// Зміна свойств

// let userInfo = {
//     name: 'Anna',
//     age: 21,
//     adress: {
//         city: 'Ivano-Frankivsk',
//         street: 'Freedom',
//     }
// }
// console.log (userInfo);
// userInfo.name = 'Ivanna';
// console.log (userInfo);
// userInfo.age = 31;
// console.log (userInfo);

// Зміна свойств навіть у константі

// const userInfo = {
//     name:'Petro',
//     age:29,
// }
// console.log (userInfo);
// userInfo.age = 18;
// console.log (userInfo);

// Копіювання об'єкта При копіюванні об'єкта в другу змінну сам об'єкт  не копіюєтся а копіюється тількиссилка на нього;

// let userInfo = {
//     name: 'Mykola',
//     age: 41,
// }
// console.log (userInfo);

// let user = userInfo;
// console.log (user);

// user.age = 29;
// console.log (user);
// console.log (userInfo);

// Зміна об'єкту
// Дублювання об'єктів (object.assign)
// Ситаксис 
// Object.assign (куди (об'єкт),що (свойство №1),.....)

// let userInfo = {
//     name : 'Dima',
//     age: 32,
// }

// let user = Object.assign ({},userInfo);

// user.age = 28;

// console.log (userInfo);
// console.log (user);

//  let obj = Object.assign({},user);

//  obj.name = 'Vova';
//  console.log (userInfo);
//  console.log (user);
//  console.log (obj);

//  let newObj = Object.assign ({},obj);
//  newObj.name = 'freser';
//  console.log (newObj);
//   delete newObj.age;
//   console.log (newObj);
//   newObj  ['graduation year'] = 2021;
//   console.log (newObj);
//   newObj.guarantee = '2 year';
//   console.log (newObj);

//   let userObj = Object.assign ({},newObj);
//   userObj.name = 'kettle';
//   console.log (userObj);

// Зміна об'єкту
// Object.assign

// let userInfo = {
//     name : 'Anna',
//     age : 9,
// }
// Object.assign (userInfo, {['likes javascript']:true,sity:'Uzhorod'});
// console.log (userInfo);
// Object.assign (userInfo, {hobby:'run',friends:'Marta',['favourite lesson']:'music'});
// console.log (userInfo);

// Перевірка існуючого свойства

// let userInfo = {
//     name: 'spoon',
//     guarantee : '14 day',
// }
// console.log (userInfo.guarantee);

// if (userInfo.guarantee) {
//     console.log (userInfo.guarantee);
// }

// Операційний ланцюжок

// let userInfo = {
//     name : 'Fork',
//     guarantee : '14 day',
// adress: {
//     city: 'Lviv',
//     street: 'Freedom',
// }
// }
// Так видасть нам помилку якщо такого обєкту немає
// console.log (userInfo.adress.street);
// console.log (userInfo?.adress?.street);


// let userInfo = {
//     name: 'spoon',
//     guarantee : '14 day',
// }
// console.log (userInfo.guarantee);

// if (userInfo.guarantee) {
//     console.log (userInfo.guarantee);
// }

// Оператор 'in'

// let userInfo = {
//     name: 'spoon',
//     guarantee : '14 day',
// }

// if ('name'in userInfo) {
//     console.log (userInfo.name);
// }


// Цикл 'for...in'
// let userInfo = {
//     name : 'Fork',
//     guarantee : '14 day',
//     adress: {
//         city: 'Lviv',
//         street: 'Freedom',
//     }
// }

// for (let key in userInfo) {
// видасть тільки назву ключів
// console.log (key);
// виздасть назву ключів із значеннями
//     console.log (userInfo[key]);
// }

// for (let key in userInfo.adress) {
//     console.log (key);
//     console.log(userInfo.adress[key]);

// }

// Методи об'єкта
// let userInfo = {
//     name : 'Fork',
//     guarantee : '14 day',
//     adress: {
//         city: 'Lviv',
//         street: 'Freedom',
//     },
/*
// showInfo: function () {
//     console.log(`${userInfo.name},${userInfo.guarantee}. Adress c.${city}, s.${street}`);
// }
*/
/*
    showInfo() {
        console.log (`${userInfo.name},${userInfo.guarantee}. Adress c.${userInfo.adress.city}, s.${userInfo.adress.street}`);
    }

userInfo.showInfo ();
*/
// }
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	address: {
// 		city: "Uzhhorod",
// 		street: "Freedom",
// 	},
//showInfo: function () {
//	console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
//}
// 	showInfo() {
// 		console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
// 	},
// }
// userInfo.showInfo();

// this

// let userInfo = {
//     name: 'Pot',
//     guarantee: '14 day',
//     adress: {
//         city: 'Lviv',
//         street: 'Freedom',
//     },
//     showInfo() {
//         console.log(`${this.name},${this.guarantee}.Adress: c.${this.adress.city},st.${this.adress.street}`)
//     }
// }
// userInfo.showInfo ();

// let user = userInfo;
// userInfo = null;
// user.showInfo ();

// Конструктор
// Ім'я функції повинно починатись з великої букви.
// Функція-конструктор повинна викликатись за допомогою оператора 'new'.

// function UserInfo(name,guarantee) {
//     this.name = name;
//     this.guarantee = guarantee;
// }

// console.log (new UserInfo('spoon','14'));
// console.log (new UserInfo('fork','14'));

// function ObjInfo (name) {
//     this.name = name;
//     this.guarantee = '14 day';
// }
// console.log (new ObjInfo ('knife'));
// console.log (new ObjInfo ('spatula'));
// console.log (new ObjInfo ('ladle'));
// console.log (new ObjInfo ('grater'));
// console.log (new ObjInfo ('bowl'));
// console.log (new ObjInfo ('pot'));
// console.log (new ObjInfo ('coocer'));
// console.log (new ObjInfo ('freeser'));
// console.log (new ObjInfo ('microwave'));

// Задача №3 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// let user = userInfo;
// user.age = 45;

// console.log(userInfo.age);


// Задача №2 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	"58": 'Значение свойства'
// }
// console.log(userInfo[58]);

// Задача №4 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	showInfo() {
// 		console.log(`${this.name}`);
// 	}
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo();

// Задача №5 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// for (const key in userInfo) {
// 	const value = userInfo[key];
// 	console.log(value);
// }


// Задача №6 (что будет в консоли?)
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	address: {
// 		city: "Uzhhorod"
// 	}
// }
// for (const key in userInfo.address) {
// 	console.log(userInfo.address[key]);
// }


// Задача №7 (верна ли запись)
// const userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	"likes js": true,
// }
// console.log(userInfo ["likes js"]);
// console.log (userInfo['likes javascript']);

// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

// const ivanna = {};
// ivanna.name = 'Anna';
// ivanna.age = '21';
// ivanna.name = 'Ivanna';
// console.log (ivanna);
// delete ivanna.name;
// console.log (ivanna);

// Задача №1 (верна ли запись)
// const userInfo = {
// 	name: "coffe maker",
// 	age: 30,
// }

// console.log (userInfo);


