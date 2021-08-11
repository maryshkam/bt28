// const array = ["string", 4, true, [], {}, null, undefined];

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients[0]);
// console.log(clients);
// clients[1] = "Bob";
// console.log(clients);
// // Значение элемента можно заменить
// // clients[0] = "Kiwi";
// // console.log(clients[0]); // Kiwi
// clients[3] = "Sake";
// console.log(clients[5]);
// // Или добавить
// clients[5] = "Alex";
// console.log(clients);
// // console.log(clients[3]);
// // console.log(clients[4]);
// // console.log(clients[5]);
// // clients[100] = "Bob";
// console.log(clients[clients.length - 1]);
// // console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

// // 2) Почему не работает консоль лог(words)  внутри функции ?
// let title = "Arrays for begginers";
// console.log(title);

// const str = title.split(" ");
// console.log(str);
// console.log(str.join(' '));

// function slugify(title) {
//   // Change code below this line
//   let normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(" ");
//   console.log(words);
// }

// slugify(title);
// slugify("Hello bootc");

// // 3) Можно ли в значения массива вставлять переменные ?
// const newClients = ["Monkong", "aaaaa", "Misha", "Singu"];
// const userName = "Bob";
// // const oldClients = ["Mango", "Ajax", "Poly", "Kiwi", newClients];
// // console.log(oldClients);
// // console.log(oldClients[4][0][2]);
// // const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"].concat(newClients);
// const oldClients = [newClients[2], "Mango", "Ajax", "Poly", "Kiwi"];
// console.log(oldClients);
// // const number = ["Bob"];
// // const number2 = [2];
// // console.log(number + number2);

// // 4) const для масивов
// // const clients = ["Mango", "Poly", "Ajax"];
// // clients = 5;
// // console.log(clients);

// // const arr = [2, 'a', true, null];

// // const aar = [3, 'w']
// // const a = [true, null]

// // console.log([1, 3, 5] === [1, 3, 5]);

// let a = 5;
// // a = 9;
// let b = 5;
// let c = a;//5
// console.log(a);
// console.log(c);
// // a = 7;
// console.log(a);
// console.log(c);
// console.log(a === c);

// const a1 = [1,2,3];
// console.log(a1);
// const a2 = [2,3,4];
// const b1 = a1// a1
// console.log(b1);
// a1[3]= 4;
// console.log(a1);
// console.log(b1);
// // console.log(a1 === a1);
// const newArr = [];
// newArr[0] = "string"
// console.log(newArr);
// const arr1 = [1, 2, 3, 77, -1]; // link1
// console.log(arr1.indexOf(-1));
// arr1[3]=88;
// console.log(arr1);
// // const arr2 = [1, 2, 3]; // link2

// const clientsB = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clientsB.indexOf("Poly")); // 2
// console.log(clientsB.indexOf("Monkong")); // -1

// const arrResult = [];
// const secondArr = [1.2,"st"];
// secondArr[0] = "valid string";
// console.log(secondArr);
// showArray(arrResult);
// console.log(arrResult);
// arrResult.push("djksfj");
// const thirdArr = [...secondArr, ...arrResult];
// console.log(secondArr);
// console.log(arrResult);
// arrResult.push("111");
// arrResult.push("2222");
// arrResult.push("3");
// console.log(arrResult);

// function showArray(arr){
//   console.log(arr);
// }
// showArray(arrResult);

// arrResult.push([2,4]);
// arrResult.push({"2222":"test"});
// arrResult.push("3");
// showArray(arrResult);
// // console.log(arr1 === arr2);
// console.log(secondArr);
// const numbers = [7, 3, 8, 9, 2]; // link1
// // const newNumbers = numbers.slice(3);
// const newNumbers = numbers.slice(); // link2
// console.log("numbers", numbers);
// console.log(`newNumbers`, newNumbers);
// numbers.push(4, 5, 6);
// console.log(numbers);

// 1) базовые операции с массивом
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[1]= "Классика";
// styles.splice(1, 1, "Классика");
console.log(styles);
const deleteStyle = styles.splice(0,1);
console.log(deleteStyle);
console.log(styles);
// styles.unshift("Регги");
// styles.unshift("Рэп");

styles.splice(0,0,"Рэп", "Регги",)
console.log(styles);
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика");
// const deletedStyle = styles.shift();
// styles.unshift("Рэп", "Регги");
// console.log(deletedStyle);
// console.log(styles);

const roles = ["user", "tester", "admin"];
console.log(roles[1]);
console.log(roles[0]);
console.log(roles[5]);
console.log(roles.length);
console.log(roles[-1]);
const lastIndex = roles.length - 1;
console.log(roles[lastIndex]);
roles.pop();
console.log(roles);
const result = roles.push("support");
console.log(roles);
roles.shift();
console.log(roles);
roles.unshift("manager");
console.log(roles);
roles.splice(2, 3);
console.log(roles);
roles.splice(2, 1, "user2");
console.log(roles);
const value = "Tester";
// roles.splice(2, 0, "user2");
// console.log(roles);
const newArr = roles.slice();
console.log("newArr", newArr);
console.log(typeof roles);
console.log(roles.includes(value.toLowerCase()));

// 2) Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива
//будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента >.
//Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// 1 - Mango, а для индекса 2 выведет 3 - Ajax.

const users = ["Mango", "Poly", "Ajax"]; // 3

for (let i = 0; i < users.length; i++) {
  console.log("index", i); // 0 // 1 // 2
  console.log("value", users[i]); // users[0] // users[1] // users[2]
}

for (const user of users) {
  console.log("index", users.indexOf(user));
  console.log(user); // Mango //Poly  // Ajax
}

// 3) Напиши код который ищет самое маленькое число в массиве.

// const numbers = [2, 17, 94, 1, 23, 37];

// 1) Определить стартовое минимальное число
// 2) Сравнить это число со всеми последующими елементами масива
// 3) Если стартовое число меньше числа с которым сравниваем - оставляем как есть
// 4) Если стартовое число больше числа с которым срасниваем - пререзаписываем минимальное число

// let smallestNumber = numbers[0]; // 2

// for (let number of numbers) {
//   // 2 // 17 // 94 // 1 // 23 // 37
//   if (smallestNumber > number) {
//     smallestNumber = number; // 1
//   }
// }

// console.log(smallestNumber); // 1

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (smallestNumber > number) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 1
// console.log(findSmallestNumber([49, 4, 83, 7, 12])); // 4

// 4) Проверить является ли строка палиндромом

// const str = "довод";
// const newString = "Hello";

// 1) Сделать со строки масив
// 2) Перевевнуть масив наоборот
// 3) С масива сделать строку
// 4) Сравнить 2 строки

// const array = str.split("");
// array.reverse();
// const reverseString = array.join("");
// console.log(reverseString);

// const reverseStringWithChaining = newString.split("").reverse().join("");

// console.log(newString === reverseStringWithChaining);

// const strSplit = str.split("").reverse().join("");
// console.log(strSplit);
// console.log(str === strSplit);

// 5) Проверить если корзину пуста - показать фразу "Пустая корзина" иначе показать фразу "В корзине {х} товаров"
// где х - это количество товаров в корзине

// const basket = [];
// const basket = ["Хлеб", "Молоко", "Конфеты"];

// 6) Написать програму которая спрашивает у пользователя цены, он вписывает их через prompt
// пока не нажмет отмену. После этого посчитать суму чисел и используя alert вывести результат на экран
