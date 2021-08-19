// function foo(callback) {
//   console.log(callback);
//   callback(20, 5);
// }

// function result(a, b) {
//   console.log(a + b);
// }

// const result = (a,b)=> a+b;
// const b = result(2,5);
// console.log(b);
// foo(result(4, 8));
// foo(result);

// const value = (a, b) => a + b;

const planets = ["Земля", "Марс", "Венера", "Юпитер"];
const newPlanets = [];

// for (let i = 0; i < planets.length; i += 1) {
//   // const result = planets[i].toUpperCase();
//   planets[i] = planets[i].toUpperCase();
//   console.log(planets);
// }
console.log("---------");

// function planetToUpperCase (){
//   const resultPlanets = [];
//   for(){

//   }
// }
// for (const planet of planets) {
//   console.log(planet);
//   // const result = planet.toUpperCase();
//   // const index = planets.indexOf(planet);
//   // planets[index] = result;
//   console.log(planets);
//   const newName = planet.toUpperCase();
//   newPlanets.push(newName);

//   // console.log(newPlanets);
// }
// const arr2 = []
// planets.forEach((el)=>{
// arr2.push( el.toUpperCase());
//   })
//   console.log(arr2);

// console.log("---------");
// const planetsInUpperCase = planets.map(el => el.toUpperCase());
// console.log(planets);
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const res = students.map(student => student.courses);
// console.log(res);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// // const resss = students.flatMap(student => student.courses);
// // console.log(resss);
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
//   { label: "blue", color: "#2196F3" },
// ];
// const total = [{a:[2,4]}, {a:[4,8]},{a:[2,6]}, {a:[4,9]}].reduce((acc, number,ind, arr) => {
//  const res = [];

//   acc.push({...number,a:'fjksf'});
//   console.log(res);
//   return acc;
// },[]);

// console.log(total); // 32

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined
// console.log(colorPickerOptions.filter(option => option.label === "blue" || option.label === "red"));

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((number) => number * 2);

// const total = numbers.reduce((acc, number) => acc + number);
// console.log(total);

// function operation(arr) {
//   let result = [...arr];

//   for (let el of result) {
//     result.push(el * 2);
//   }
//   return result;
// }

// console.log(result);
// console.log("numbers", numbers);

// console.log(numbers.find(num => num > 5)); // 6
// console.log(numbers.find(num => num < 5)); // 0
// console.log(numbers.find(num => num === 5)); // 5
// пример из конспекта. почему меньше 5 возвращает 0? а не скажем 4

// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);
// const anyElementInFirstIsOdd = firstArray.some(value=>!(value%2)===0);
// const anyElementInFirstIsOdd = firstArray.some((value) => !(value % 2));

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },

  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

// const result = scientist
//   .filter((scientict) => scientict.born >= 1800 && scientict.born < 1900) // []
//   .map((scientict) => `${scientict.name} ${scientict.surname}`);

// console.log("result", result);

// const result = scientists.reduce(
//   (acc, scientist) => acc + (scientist.dead - scientist.born),
//   0
// );
// // const average = result / scientists.length;

// console.log("result", result);
// // console.log(`average`, average);

// const numbers = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [5, 6, 7],
// ];

// const result = numbers.reduce((acc, numberArr) => [...acc, ...numberArr], []);
// console.log(`result`, result);

// const arr = ["A", "C", "B"];

// arr.sort();

// console.log(`arr`, arr);

// const copy = [...scientists];

// copy.sort((a, b) => (a.name > b.name ? 99 : -35));
// copy.sort((a, b) => b.born - a.born); // a.born = 1000 b.born = 500
// 1000 - 500 = 500
// 500 - 1000 = -500
// albert
// Isaac

// copy.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));

// console.log(`copy`, copy);

// const result = scientists.filter(
//   (scientist) => scientist.born < 1400 || scientist.born > 1700
// );

// const result = scientists.filter((scientist) => scientist.id !== 1);
// const findResult = scientists.find((scientist) => scientist.id === 1);

// const deleteUser = (id) =>
//   scientists.filter((scientist) => scientist.id !== id);

// deleteUser(45);

// console.log(`result`, result);

// console.log(`findResult`, findResult);

// const findDateOfBirth = (name, lastName, arr) => {
//   const result = arr.find(
//     (scientist) => scientist.name === name && scientist.surname === lastName
//   );
//   // return result ? result.born : "Такой юзер не найден";
//   // return result?.born;
//   return result?.born ?? "Такой юзер не найден";
// };

// const result = scientists.every(
//   (scientist) =>
//     scientist.born >= 1800 && scientist.born < 1900 && scientist.dead > 1800
// );

// console.log(`result`, result);

// console.log(findDateOfBirth("Steve", "Einstein", scientists));

//  получить массив ученых которые родились в 19 ст
//  Посчитать суму лет сколько прожили все ученные
//  Отсортировать по алфавиту
//  Отсортировать по количеству прожитых лет
//   Удалить ученых которые родились в 15,16,17 ст
//   Найти год рождения Albert Einstein
//   Узнать все ли ученые работала в 19 ст

// async function getData() {
//   let result = null;
//   let response = await fetch("https://restcountries.eu/rest/v2/all");
//   result = await response.json();
//   return result;
// }

// // getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));

// const arr = JSON.parse(localStorage.getItem("arr"));
// console.log(arr);

// Получить стрыны из региона Europe
// Получить название самой большой страни в Европе
// Получить название самой маленькой страни в Европе
// Получить список стран с которыми граничит Швейцария (Switzerland)
// Получить процент который занимает  Австрия  в мире

// function findBorders(countryName, countryArray) {
//   const countryCode = countryArray.find(
//     (el) => el.name === countryName
//   ).alpha3Code;
//   console.log(countryCode);
//   const result = countryArray
//     .filter((el) => el.borders.includes(countryCode))
//     .map((el) => el.name);
//   return result;
// }

// console.log(findBorders("Switzerland", arr));

// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// // Метод sort - sortByAmount, sortByPrice
// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => a.amount - b.amount);
// };
// // console.table(sortByAscendingAmount(vehicles));

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };
// // console.table(sortByDescendingPrice(vehicles));

// // filterByAmount + только название модели
// // console.table(vehicles.filter(vehicle => vehicle.amount >= 12).map(vehicle => vehicle.model));

// // console.table(
// //   vehicles.reduce((result, vehicle) => {
// //     if (vehicle.amount >= 12) {
// //       return [...result, vehicle.model];
// //     }
// //     return result;
// //   }, []),
// // );

// // filter + sort
// // console.table(vehicles.filter(vehicle => vehicle.onSale).sort((a, b) => a.price - b.price));

// // Метод map - getModels
// const getModels = cars => {
//   return cars.map(car => car.model);
// };
// // console.table(getModels(vehicles));

// // Метод filter - filterByAmount, filterByPrice, getCarsWithDiscount, getCarsWithType

// const filterByAmount = (cars, amountThreshold) => {
//   return cars.filter(car => car.amount >= amountThreshold);
// };
// // console.table(filterByAmount(vehicles, 10));
// // console.table(filterByAmount(vehicles, 15));

// const filterByPrice = (cars, priceThreshold) => {
//   return cars.filter(car => car.price < priceThreshold);
// };
// // console.table(filterByPrice(vehicles, 25000));
// // console.table(filterByPrice(vehicles, 23000));

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => car.onSale);
// };
// // console.table(getCarsWithDiscount(vehicles));

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => car.type === type);
// };
// // console.table(getCarsWithType(vehicles, 'suv'));

// //  А если хочу отфильтровать и те что на sale и те что дешевле 23к,просто добовлять нескольео условий?или надо два раза фильтр делать?

// const getCarsOnSaleAndWithPrice = (cars, priceThreshold) => {
//   return cars.filter(car => car.price < priceThreshold && car.onSale);
// };
// // console.table(getCarsOnSaleAndWithPrice(vehicles, 23000));

// // Метод find - getCarByModel
// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model);
// };
// // console.log(getCarByModel(vehicles, 'F-150'));

// // Метод reduce - getTotalPrice
// const getTotalCarsAmount = cars => {
//   return cars.reduce((total, car) => total + car.amount, 0);
// };
// // console.log(getTotalCarsAmount(vehicles));
/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// //[100,50,150]
// const total = Object.values(salary);
// console.log(total);
// const res = total.reduce((acc, el, ind, arr)=> {
//   return acc + el;
// });//
// console.log(res);
// .reduce((acc, el) => {
//   return acc + el
// }, 0);
// const values = Object.values(salary);
// let total = 0;
// // console.log(result);
// for (const value of values){
//   total +=value;
// }
// console.log(total);

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((acc, { price, quantity }) => {
//   return acc + price * quantity;
// }, 0);

// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => {
  // console.log(acc);
  return [...acc, ...tweet.tags];
}, []);
console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     console.log(acc);
//     acc[tag] += 1;
//     console.log(acc);
//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1
