//! Обєкти

//! ОСНОВИ

//! =========================================================

//? Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
// };

//! =========================================================

//? Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
// };
// console.log(person.name);

//! =========================================================

//? Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
// };
// person.age = 51;
// console.log(person.age);

//! =========================================================

//? Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
// };
// person.placeOfWork = 'ONKO';
// console.log(person.placeOfWork);

//! =========================================================

//? Видалення властивостей: Видаліть властивість професія з об'єкта person.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
//     placeOfWork:'ONKO',
// };
// delete person.profession;
// console.log(person.profession);

//! =========================================================

//? Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
//     placeOfWork:'ONKO',
// };
// console.log('profession' in person);

//! =========================================================

//? Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
//     placeOfWork:'ONKO',
// };

// const friend = {
//     name: 'oleksandr',
//     age: 62,
//     profession: 'driver',
//     placeOfWork:'ONKO',
// };
// const total = { ...person, ...friend };

// console.log(total);

//! =========================================================

//? Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

// const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
//     placeOfWork:'ONKO',
// };
// for (const key in person) {
//     console.log(`${key}-${person[key]}`);
// };

//! =========================================================

//? Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

//  const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
//      placeOfWork: 'ONKO',
//      greet() {
//       console.log(`Привіт ${this.name}!`);
//    }
// };
// person.greet()


//! =========================================================

//? Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

//  const person = {
//     name: 'Andrii',
//     age: 50,
//     profession: 'developer',
//      placeOfWork: 'ONKO',
//      greet() {
//       console.log(`Привіт ${this.name}!`);
//    }
// };

// console.log(Object.keys(person));

//! =========================================================


//? ЗАДАЧІ #1

// //*1
// //? Напиши функцію, яка створює об'єкт з ім'ям і віком.
// //? Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// //? Поверни цей об'єкт.
// const fooObj = (userName, age) => {
//     const obj = {
//         name: userName,
//         age: age,
//     };
//     return obj;
// }
// const person = fooObj('Andrii', 50)
// console.log(person);

// //*2
// //? Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// //? Поверни оновлений об'єкт.
// const fooAccepts = (objX) => {
//     objX.address = 'Mariupol';
// }
// fooAccepts(person);
// console.log(person);

// //*3
// //? Напиши функцію, яка приймає об'єкт і новий вік.
// //? Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// //? Поверни оновлений об'єкт.
// const foo3 = (obj3, age3) => {
//     obj3.age = age3;
//     return obj3
// }
// foo3(person, 51);
// console.log(person);

// //*4
// //? Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// //? Поверни оновлений об'єкт.
// const foo4 = (obj4) => {
//     delete obj4.age;
// }
// foo4(person);
// console.log(person);

// //*5
// //? Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// const foo5 = (obj5) => {
//     return obj5.name;
// }
// console.log(foo5(person));

// //*6
// //? Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// const foo6 = (obj6) => 'address' in obj6;
// console.log(foo6(person));

// //*7
// //? Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// //? Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// //? Поверни результат.
// const foo7 = (obj7, obj77) => {
//     const obj777 = Object.assign({}, obj7, obj77);
//     return obj777;
// }
//  const friend = {
//     name: 'oleksandr',
//     age: 62,
//     profession: 'driver',
//     placeOfWork:'ONKO',
// };
// console.log(foo7(person, friend));

// //*8
// //? Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// //? Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// //? Поверни об'єкт.
// const foo8 = (userName = "Unknown", age = 0, address) => {
//     return {
//         userName,
//         age,
//         address,
//     };
// };
//     console.log(foo8('userName', 10));
// //*9
// //? Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// const foo9 = (obj9, userName, age) => {
//     obj9.userName = userName;
//     obj9.age = age;
//     return obj9;
// };
// const obj9 = {
//     userName: 'oleksandr',
//     age: 62,
//     profession: 'driver',
//     placeOfWork:'ONKO',
// }
// console.log(foo9(obj9, 'Andrii', 50));

// //*10
// //? Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// //? Якщо в об'єкті вже є "email", нічого не роби.
// //? Поверни оновлений об'єкт.
// const foo10 = (obj9, email) => {
//     if (!obj9.hasOwnProperty('email')) {
//         obj9.email = email;
//         return obj9;
// }
// }
// console.log(foo10(obj9, 'andreymit123@gmail.com'));

// //*11
// //? Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// //? Поверни оновлений об'єкт.
// const foo11 = (obj9) => {
//     obj9.age = `${obj9.age}`;
//     return obj9;
// }
// console.log(foo11(obj9));

// //*12
// //? Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// //? Якщо її немає, поверни об'єкт без змін.
// const foo12 = (obj9) => {
//     if (obj9.hasOwnProperty('address')) {
//         obj9.address = 'Mariupol';
//     }
//     return obj9;
// }
// console.log(foo12(obj9));

// //*13
// //? Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
//  const userName = {
//     name: 'Andrii',
//     city: 'Mariupol',
// };
// const foo13 = (userName) => {
// return `User ${userName.name} from ${userName.city}!`
// };
// console.log(foo13(userName));


// //*14
// //? Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// const arr14 = [["name", "John"], ["age", 25], ["address", "123 Street"]];

// const foo14 = (arr14) => {
//     const obj14 = {};
//     arr14.forEach(element => {
//         const x = element[0];
//         const y = element[1];
//        obj14[x] = y;
//     })
//     return obj14;
// };
// console.log( foo14(arr14));

// //*15
// //? Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// const arr15 = [{name: "John", age: 25}, {age: 50}, {address: "123 Street", age: 75}];
// const foo15 = (arr15) => {
//     arr15.forEach(el => el.age += 1);
//     return arr15;
// }
// console.log(foo15(arr15));

//! =========================================================

// ЗАДАЧІ №2

//! =========================================================

//? 1
//? Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.

// const contactBook = {
//     contacts: [],

//     // Додати контакт
//     add(contact) {
//         this.contacts.push(contact);
//     },

//     // Видалити контакт по імені
//     remove(name) {
//         this.contacts = this.contacts.filter(c => c.name !== name);
//     },

//     // Показати всі контакти
//     list() {
//         return this.contacts;
//     },

//     // Знайти контакт по імені
//     findByName(name) {
//         return this.contacts.filter(c => c.name === name);
//     }
// };

//! =========================================================

//? 2
//? Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.

// const rectangle = {
//      d: 5,
//     h: 10,
//      pl() {
//         return this.d * this.h
//     },
//     per() {
//         return (this.d + this.h) * 2;
//     },
// }
// console.log(`площa = ${rectangle.pl()}, периметр = ${rectangle.per()}`);

//! =========================================================

//? 2

//? Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.

// const toDoList = {

//     listTask: [],
//     add(task) {
//         this.listTask.push(task);
      
//     },
//     retTask() {
//         return this.listTask;
//     },
//     setTask(task) {
//         for (const item of this.listTask) {
//             item.task === task ? item.codition = true : null;
//         }
//    },
// }
// toDoList.add({ task: 25, codition: false });
// console.log(toDoList.retTask());
// toDoList.setTask(25);
// console.log(toDoList.retTask());

//todo =========================================================

//? 3
//? Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).

// const bankAccount = {
//     balans: 0,
//     dep(cash) {
//         this.balans += cash;
//     },
//     kr(cash) {
//         if (this.balans >= cash) {
//             this.balans -= cash;
//         } else {
//             console.log('Недостатньо коштів');
//             }
//     },
//     per() {
//     console.log(this.balans);
// },
// };
// bankAccount.dep(180);
// bankAccount.kr(150);
// bankAccount.per();

//! =========================================================

//? 4
//? Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.

// const libraryCatalog = {
//     books: [],
//     add(book) {
//         this.books.push(book);
//     },
//     sourch(str) {
//         for (const book of this.books) {
//             book.aftor === str || book.ISBN === str ? console.log(book) : null;
// }
//     },

//     vse() {
//         console.log(this.books);
//     }
// }
// libraryCatalog.add({ aftor: 'pushkin', ISBN: '25' });
// libraryCatalog.add({ aftor: 'pushkin', ISBN: '50' });
// libraryCatalog.add({ aftor: 'pupkin', ISBN: '40' });
// libraryCatalog.sourch('pushkin');
// libraryCatalog.vse();

//! =========================================================

//? 5
//? Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.

// const temperatureConverter = {
//   toF(celsius) {
//     return ((celsius * 9/5) + 32).toFixed(2);
//   },
//   toC(fahrenheit) {
//     return ((fahrenheit - 32) * 5/9).toFixed(2);
//   }
// };
// console.log(temperatureConverter.toF(36.6));
// console.log(temperatureConverter.toC(87));

//! =========================================================

//? 6
//? Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.

// const shoppingCart = {
//   products: [],
//   addProduct(product) {
//     const existing = this.products.find(p => p.name === product.name);
//     if (existing) {
//       existing.quantity += product.quantity;
//     } else {
//       this.products.push({ ...product });
//     }
//   },
//   getTotal() {
//     return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
//   },
//   showProducts() {
//     this.products.forEach(p => {
//       console.log(`${p.name}: ${p.quantity} шт/кг по ${p.price} грн = ${p.price * p.quantity} грн`);
//     });
//   }
// };
// shoppingCart.addProduct({ name: "Помидоры", price: 30, quantity: 2 });
// shoppingCart.addProduct({ name: "Молоко", price: 40, quantity: 1 });
// shoppingCart.addProduct({ name: "Помидоры", price: 30, quantity: 1 });
// shoppingCart.showProducts();
// console.log(`Загальна вартість: ${shoppingCart.getTotal()} грн`);

//! =========================================================

//? 6
//? Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.

// const socialNetworkUser = {
//   users: [{ userName: 'Andrii', friends: ['Olecsandr', 'Miroslav', 'Mikolai'] }],
  
//     addFriend({ name, friend }) {
//     const user = this.users.find(u => u.userName === name);
//     if (user) {
//       if (!user.friends.includes(friend)) {
//         user.friends.push(friend);
//       }
//     } else {
//       this.users.push({ userName: name, friends: [friend] });
//     }
//   },

//    removeFriend({ name, friend }) {
//     const user = this.users.find(u => u.userName === name);
//     if (!user) return;

//     const index = user.friends.indexOf(friend);
//     if (index !== -1) {
//       user.friends.splice(index, 1);
//     }
//   },
//   getFriends(name) {
//     const user = this.users.find(u => u.userName === name);
//     return user ? user.friends : [];
//   },
// };

// socialNetworkUser.addFriend({ name: "Andrii", friend: "Ivan" });
// socialNetworkUser.removeFriend({ name: "Andrii", friend: "Mikolai" });
// console.log(socialNetworkUser.getFriends("Andrii"));

//! =========================================================

//? 7

//? Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
//? Створити об'єкт musicPlayer:
//? Властивості:
//? songs (масив пісень)
//? currentSong (індекс або ідентифікатор поточної пісні)
//? Методи:
//? addSong(song) - метод, що приймає пісню та додає її до списку пісень.
//? play() - метод, що відтворює поточну пісню.
//? pause() - метод, що ставить відтворення на паузу.
//? next() - метод, що перемикає на наступну пісню.
//? previous() - метод, що перемикає на попередню пісню.


//! =========================================================

//? Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.

//? Створити об'єкт myString:

//? Методи:
//? reverse(str) - метод, що приймає рядок та повертає його в перевернутому вигляді.
//? ucFirst(str) - метод, що приймає рядок та повертає цей же рядок, зробивши його першу літеру заголовною.
//? ucWords(str) - метод, що приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

//! =========================================================

//? Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.

//? Створити об'єкт validator:

//? Методи:
//? isEmail(str) - метод, що приймає рядок та перевіряє, чи є він коректним емейлом. Повертає true або false.
//? isDomain(str) - метод, що приймає рядок та перевіряє, чи є він коректним доменом. Повертає true або false.
//? isDate(str) - метод, що приймає рядок та перевіряє, чи є він коректною датою. Повертає true або false.
//? isPhone(str) - метод, що приймає рядок та перевіряє, чи є він коректним номером телефону. Повертає true або false.

//! =========================================================











