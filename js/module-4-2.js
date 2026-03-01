//; Масив обєктів - spred та rest

//! ===============================================

//? 1. Завдання:
//? Створи об'єкт із властивостями firstName (рядок), lastName (рядок) та age (число). Додай метод getFullName, який повертає повне ім'я у форматі: [firstName] [lastName]. Також додай метод incrementAge, який збільшує вік на 1.

// const objName = {
//      firstName: 'Andrii',
//   lastName: 'Mitko',
//   age: 50,
//  getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     incrementAge() {
//         return this.age += 1;
//     },
// };
// console.log(objName.getFullName());
// console.log(objName.incrementAge());

//! ===============================================

//? 2. Завдання:
//? Створи об'єкт із властивостями bankName (рядок), accountNumber (число) та balance (число). Додай метод deposit, який приймає суму як аргумент і додає її до балансу, а також метод withdraw, який приймає суму і зменшує баланс, якщо сума не перевищує наявний баланс. Метод має повертати новий баланс.

// const obj2 = {
//     bankName: '',
//     accountNumber: 0,
//     balance: 0,
//     deposit(sum) {
//         return this.balance += sum;
//     },
//     withdraw(sum) {
//       return  this.balance >= sum ? this.balance -= sum : 'Зменьшить суму!';
//     },
// };
// console.log(obj2.deposit(250));
// console.log(obj2.withdraw(100));
// console.log(obj2.withdraw(200));

//! ===============================================

//? 3. Завдання:
//? Створи об'єкт з властивостями width (число), height (число). Додай метод calculateArea, який повертає площу прямокутника, та метод calculatePerimeter, який повертає периметр.

// const obj3 = {
//     width: 0,
//     height: 0,
//     calculateArea(width, height) {
//         return width * height;
//     },
//     calculatePerimeter(width, height) {
//         return  (width + height) * 2;
//     },
// };
// console.log(obj3.calculateArea(25, 25));
// console.log(obj3.calculatePerimeter(25, 25));

//! ===============================================

//? 4. Завдання:
//? Створи об'єкт із властивостями name (рядок), position (рядок) та salary (число). Додай метод getInfo, який повертає рядок у форматі: [name] працює на позиції [position] із зарплатою [salary].

// const obj4 = {
//     name: '',
//     position: '',
//     salary: 0,
//     getInfo (name, position, salary) {
//        return `${name} працює на позиції ${position} із зарплатою ${salary}.`
//    }
// }
// console.log(obj4.getInfo('Andrii', 'Mariupol', 100));

//! ===============================================

//? 5. Завдання:
//? Створи об'єкт із властивостями countryName (рядок), capital (рядок) та population (число). Додай метод getDetails, який повертає рядок у форматі: Країна: [countryName], столиця: [capital], населення: [population].

// const country = {
//   countryName: "Україна",
//   capital: "Київ",
//   population: 42000000,
//   getDetails() {
//     return `Країна: ${this.countryName}, столиця: ${this.capital}, населення: ${this.population}`;
//   }
// };


//! ===============================================

//? 6. Завдання:
//? Створи об'єкт із властивостями itemName (рядок), quantity (число) та pricePerItem (число). Додай метод calculateTotalPrice, який повертає загальну вартість, множачи quantity на pricePerItem.

// const obj6 = {
//     itemName: "м'ясо",
//     quantity: 2,
//     pricePerItem: 150,
//     calculateTotalPrice() {
//         return this.quantity * this.pricePerItem;
//     },
// };
// console.log(obj6.calculateTotalPrice());

//! ===============================================

//? 7. Завдання:
//? Створи об'єкт із властивостями email (рядок) та password (рядок). Додай метод checkLogin, який приймає два аргументи (email і password) і повертає true, якщо вони збігаються зі значеннями об'єкта.

// const obj7 = {
//     email: 'andreymit123@gmail.com',
//     password: 'password',
//     checkLogin(email, password) {
//         return this.email === email && this.password === password ;
//     }
// }
// console.log(obj7.checkLogin('andreymit123', 'andreymit123'));

//! ===============================================

//? 8. Завдання:
//? Створи об'єкт із властивостями temperature (число) та unit (рядок, що приймає значення "C" або "F"). Додай метод convertToCelsius, який переводить температуру з Фаренгейта в Цельсій, якщо unit дорівнює "F", та метод convertToFahrenheit, який робить зворотнє перетворення.

// const obj8 = {
//     temperature: 36,
//     unit: 'C',
//     convertToCelsius() {
//         if (this.unit === 'F') {
//             return (this.temperature - 32) * (5 / 9);
//         } else {
//             return this.temperature;
//         };
//     },
//     convertToFahrenheit() {
//         if (this.unit === 'C') {
//             return this.temperature * (9 / 5) + 32;
//         } else {
//             return this.temperature;
//         };
//     },
// }
// console.log(obj8.convertToCelsius());
// console.log(obj8.convertToFahrenheit());

//! ===============================================

//? 9. Завдання:
//? Створи об'єкт із властивостями vehicleType (рядок), fuelType (рядок) та fuelEfficiency (число). Додай метод calculateRange, який приймає кількість пального (число) і повертає відстань, яку можна подолати.

// const obj9 = {
//     vehicleType: 'vehicleType',
//     fuelType: 'fufuelType',
//     fuelEfficiency: 10,
//     calculateRange(litr) {
//         return this.fuelEfficiency * litr;
//  }
// }
// console.log(obj9.calculateRange(3));

//! ===============================================

//? 10. Завдання:
//? Створи об'єкт із властивостями studentName (рядок), grade (число) та subject (рядок). Додай метод upgradeGrade, який збільшує значення grade на 1, та метод getReport, який повертає рядок у форматі: [studentName] має оцінку [grade] з предмету [subject].

// const obj10 = {
//     studentName: 'Андрій',
//     grade: 5,
//     subject: 'математика',
//     upgradeGrade() {
//      return  this.grade += 1;

//     },
//     getReport() {
//  return `${this.studentName} має оцінку ${this.grade} з предмету ${this.subject}.`;
//     },
// };
// console.log(obj10.upgradeGrade());
// console.log(obj10.getReport());

//! ===============================================

//? 11. Завдання:
//? Створи об'єкт із властивостями movieTitle (рядок), director (рядок) та duration (число, у хвилинах). Додай метод getMovieInfo, який повертає опис фільму у форматі: [movieTitle], режисер [director], тривалість [duration] хв.

// const foo11 = {
//     movieTitle: 'Rembo',
//     director: 'Djon Rembo',
//     duration: 90,
//     getMovieInfo() {
//         return `${this.movieTitle}, режисер ${this.director}, тривалість ${this.duration} хв.`
//     }
// }
// console.log(foo11.getMovieInfo());

//! ===============================================

//? 12. Завдання:
//? Створи об'єкт із властивостями username (рядок), isOnline (булеве значення). Додай метод toggleStatus, який змінює значення isOnline на протилежне.

// const foo12 = {
//     username: 'Андрій',
//     isOnline: true,
//     toggleStatus() {
//         return this.isOnline = !this.isOnline ;
//     },
// };
// console.log(foo12.toggleStatus());

//! ===============================================

//? 13. Завдання:
//? Створи об'єкт із властивостями day (число), month (число) та year (число). Додай метод formatDate, який повертає рядок у форматі: DD/MM/YYYY.

// const foo13 = {
//     day: 5,
//     month: 6,
//     year: 1999,
//     formatDate() {
//         return `${String(this.day).padStart(2, '0')}/${String(this.month).padStart(2, '0')}/${this.year}`;
//     },
// };
// console.log(foo13.formatDate());

//! =============================================

//? 14. Завдання:
//? Створи об'єкт із властивостями colorName (рядок) та isPrimary (булеве значення). Додай метод checkPrimary, який повертає true, якщо colorName є одним із базових кольорів: "red", "blue", "yellow".

// const obj14 = {
//     colorName: 'green',
//     isPrimary: true,
//     color: ["red", "blue", "yellow"],
//     checkPrimary() {
//         return this.color.includes(this.colorName);
//     },
// };
// console.log(obj14.checkPrimary());

//! =============================================

//? 15. Завдання:
//? Створи об'єкт із властивостями animalType (рядок), age (число). Додай метод isAdult, який повертає true, якщо вік тварини більше або дорівнює 2.

// const obj15 = {
//     animalType: 'Кошка',
//     age: 6,
//     isAdult() {
//         return this.age >= 2;
//     },
// };
// console.log(obj15.isAdult());

//! =============================================

//? 16. Завдання:
//? Створи об'єкт із властивостями planetName (рядок), diameter (число, у км). Додай метод getRadius, який повертає радіус планети, ділячи diameter на 2.

// const obj16 = {
//     planetName: 'Земля',
//     diameter: 40000,
//     getRadius() {
//         return this.diameter / 2;
//     },
// };
// console.log(obj16.getRadius());

//! =============================================

//? 17. Завдання:
//? Створи об'єкт із властивостями songName (рядок), artist (рядок) та duration (число, у хвилинах). Додай метод getSongInfo, який повертає рядок: "Song '[songName]' by [artist], [duration] minutes".

// const obj17 = {
//     songName: 'Крошка моя',
//     artist: 'Не помню',
//     duration: 3,
//     getSongInfo() {
//         return `Song '${this.songName}' by ${this.artist}, ${this.duration} minutes`
//     }
// }
// console.log(obj17.getSongInfo());

//! =============================================

//? 18. Завдання:
//? Створи об'єкт із властивостями cityName (рядок), population (число) та isCapital (булеве значення). Додай метод getCityInfo, який повертає опис міста у форматі: [cityName] має населення [population]. Столиця: [isCapital].

// const obj18 = {
//     cityName: 'Маріуполь',
//     population: 500000,
//     isCapital: false,
//     getCityInfo() {
//        return `${this.cityName} має населення ${this.population}. Столиця: ${this.isCapital}.`
//     }
// }
// console.log(obj18.getCityInfo());

//! =============================================

//? 19. Завдання:
//? Створи об'єкт із властивостями username (рядок), level (число). Додай метод levelUp, який збільшує рівень на 1, та метод getUserInfo, який повертає рядок: [username], рівень: [level].

// const obj19 = {
//     username: 'Андрій',
//     level: 50,
//     levelUp() {
//         return this.level += 1;
//     },
//     getUserInfo() {
//         return `${this.username}, рівень: ${this.level}`;
//     },
// };
// console.log(obj19.levelUp());
// console.log(obj19.getUserInfo());

//! =============================================

//? 20. Завдання:
//? Створи об'єкт із властивостями eventName (рядок), date (рядок). Додай метод getEventInfo, який повертає рядок: Подія: [eventName], Дата: [date].

// const obj20 = {
//     eventName: 'Начало войни',
//     date: '24/02/22',
//     getEventInfo() {
//         return `Подія: ${this.eventName}, Дата: ${this.date}`
//     }
// }
// console.log(obj20.getEventInfo());

//! =============================================

//? 21. Завдання:
//? Створи об'єкт із властивостями length (число) та width (число). Додай метод isSquare, який повертає true, якщо довжина і ширина однакові.

// const obj21 = {
//     length: 22,
//     width: 22,
//     isSquare() {
//        return this.length === this.width;
//     },
// };
// console.log(obj21.isSquare());

//! =============================================

//? 22. Завдання:
//? Створи об'єкт із властивостями temperature (число). Додай метод isFreezing, який повертає true, якщо температура менше або дорівнює 0.

// const obj22 = {
//     temperature: 36,
//     isFreezing() {
//         return this.temperature <= 0;
//     },
// };
// console.log(obj22.isFreezing());

//! =============================================

//? 23. Завдання:
//? Створи об'єкт із властивостями score (число). Додай метод resetScore, який встановлює значення score на 0.

// const obj23 = {
//     score: 50,
//     resetScore() {
//         return this.score = 0;
//    }
// }
// console.log(obj23.resetScore());

//! =============================================

//? 24. Завдання:
//? Створи об'єкт із властивостями name (рядок), price (число). Додай метод discount, який приймає відсоток знижки і повертає нову ціну.

// const obj24 = {
//     name: 'Хлеб',
//     price: 30,
//     discount(interest) {
//         return this.price - ((this.price / 100) * interest);
//     },
// };
// console.log(obj24.discount(10));

//! =============================================

//? 25. Завдання:
//? Створи об'єкт із властивостями weight (число, у кг). Додай метод convertToPounds, який повертає вагу в фунтах (1 кг = 2.20462 фунта).

// const obj25 = {
//     weight: 10,
//     convertToPounds() {
//         return Math.floor(this.weight * 2.20462);
//     }
// }
// console.log(obj25.convertToPounds());

//! =============================================

//? 26. Завдання:
//? Створи об'єкт із властивостями speed (число). Додай метод increaseSpeed, який приймає число і додає його до швидкості.

// const obj26 = {
//     speed: 50,
//     increaseSpeed(pl) {
//         return this.speed += pl;
//     },
// };
// console.log(obj26.increaseSpeed(20));

//! =============================================

//? 27. Завдання:
//? Створи об'єкт із властивостями title (рядок), isPublished (булеве значення). Додай метод togglePublish, який змінює значення isPublished на протилежне.

// const obj27 = {
//     title: 'lipton',
//     isPublished: true,
//     togglePublish() {
//         return this.isPublished = !this.isPublished;
//     },
// };
// console.log(obj27.togglePublish());

//! =============================================

//? 28. Завдання:
//? Створи об'єкт із властивостями email (рядок). Додай метод isGmail, який повертає true, якщо email містить домен "@gmail.com".

// const obj28 = {
//     email: 'andreymit123@gmail.com',
//     domen: '@gmail.com',
//     isGmail() {
//         return this.email.slice(this.email.length - 10) === this.domen;
//     },
// };
// console.log(obj28.isGmail());

//! =============================================

//? 29. Завдання:
//? Створи об'єкт із властивостями x (число), y (число). Додай метод calculateDistance, який повертає відстань від початку координат (формула: √(x² + y²)).

// const obj29 = {
//     x: 5,
//     y: 10,
//     calculateDistance() {
//         return Math.sqrt(this.x ** 2 + this.y ** 2).toFixed(2);
//     },
// };
// console.log(obj29.calculateDistance());

//! =============================================

//? 30. Завдання:
//? Створи об'єкт із властивостями hours (число), minutes (число). Додай метод convertToMinutes, який повертає загальну кількість хвилин.

const obj30 = {
    hours: 2,
    minutes: 25,
    convertToMinutes() {
        return this.hours * 60 + this.minutes;
    },
};
console.log(obj30.convertToMinutes());

//! =============================================

//? 31
//? Написати систему контролю банку.
//? Властивості:
//? - список користувачів [userId, FIO,'password']
//? - список рахунків [userId, accountNumber, value]
//? Методи:
//? - додати користувача
//? - видалити користувача
//? - створити рахунок
//? - видалити рахунок
//? - додати гроші на рахунок
//? - зняти гроші з рахунка

const sistemControl = {
    listUser: [],
    listRax: [],
    addListUser(userId, FIO, password) {
        return this.listUser.push({ userId, FIO, password });
    },
    removeListUser(FIO, userId) {
        this.listUser = this.listUser.filter(user =>
            user.FIO !== FIO || user.userId !== userId);
    },
    addListRax(userId, accountNumber, value) {
        return this.listRax.push({ userId, accountNumber, value });
    },

};


//! =============================================

// Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання. Об'єкт task, який буде містити властивості Name, deadline, priority та done. Додайте методи для відмітки завдання як виконаного та для виведення інформаціїпро завдання.

// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з властивостями назва, ціна та кількість. Додайте методи для додавання товару, видалення товару та підрахунку загальної вартості.

// Система реєстрації: Створіть систему реєстрації користувачів, де кожен користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод для перевірки введеного пароля при вході.

// Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга буде об'єктом з властивостями назва, автор, рік видання та прочитано (true/false). Додайте методи для відмітки книги як прочитаної та виведення статистики про прочитані книги.

// Ігровий персонаж: Створіть об'єкт, який представляє ігрового персонажа. Додайте властивості, такі як ім'я, рівень, здоров'я, атака тощо. Реалізуйте методи для атаки інших персонажів та відновлення здоров'я.

// Список контактів: Створіть програму для управління списком контактів. Кожен контакт буде об'єктом з властивостями ім'я, телефон, email тощо. Додайте методи для додавання, видалення та пошуку контактів.

// Календар подій: Створіть календар подій, де кожна подія буде об'єктом з властивостями назва, дата, місце та повідомлення. Додайте методи для додавання події, видалення події та перегляду подій на певну дату.

// Онлайн-магазин: Створіть онлайн-магазин з можливістю додавання товарів у кошик та оформлення замовлення. Кожен товар буде об'єктом з властивостями назва, ціна, наявність тощо. Реалізуйте методи для додавання товару у кошик, підрахунку загальної вартості та оформлення замовлення.

// Пошук інформації: Створіть програму, яка дозволить шукати інформацію в тексті. Ви створюєте об'єкт зі збереженими текстовими даними та методами для пошуку заданого слова або фрази у тексті.

// Банківський рахунок: Створіть об'єкт account, який міститиме інформацію про банківський рахунок користувача, таку як ім'я, баланс та історія транзакцій. Додайте методи для додавання та витрати коштів, а також для виведення історії транзакцій.

// // TASK№10
// function A() {
//   this.name = 'Function A';
//   return {
//     name: 'Returned Object',
//     getThis: function () {
//       console.log(this.name);
//     },
//   };
// }

// const result = new A();
// result.getThis();





// This





// //!======================================================
// TASK№1


// function greet() {
//   console.log(this);
// }

// const person = {
//   name: 'Olga',
//   sayHi: greet,
// };

// const ref = person.sayHi;
// ref();
// //!======================================================

// //!======================================================
// // TASK№2
// const obj = {
//   name: 'Test',
//   method: function () {
//     console.log(this);
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const arrow = obj.method();
// arrow();
// //!======================================================
// //!======================================================
// // TASK№3
// function whoIsThis() {
//   console.log(this);
// }

// const bound = whoIsThis.bind({ name: 'Bound context' });

// const callLater = fn => fn();

// callLater(bound);
// //!======================================================
// //!======================================================
// // TASK№4
// const user = {
//   name: 'Alice',
//   showName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(user.showName, 100);
// //!======================================================
// //!======================================================
// // TASK№5
// function showThis(a, b) {
//   console.log(this, a, b);
// }

// showThis.call({ x: 10 }, 1, 2);
// showThis.apply({ x: 20 }, [3, 4]);
// //!======================================================
// //!======================================================
// // TASK№6
// const name = 'Global';

// const obj = {
//   name: 'Object',
//   show: function () {
//     console.log(this.name);
//     const nested = function () {
//       console.log(this.name);
//     };
//     nested();
//   },
// };

// obj.show();
// //!======================================================
// //!======================================================
// // TASK№7
// const a = {
//   name: 'A',
//   say: function () {
//     console.log(this.name);
//   },
// };

// const b = {
//   name: 'B',
// };

// const sayFromA = a.say;
// sayFromA.call(b);
// //!======================================================

// //!======================================================
// // TASK№8
// const obj = {
//   name: 'Nested',
//   outer: function () {
//     return {
//       inner: () => {
//         console.log(this.name);
//       },
//     };
//   },
// };

// const innerFn = obj.outer().inner;
// innerFn();
// //!======================================================

// //!======================================================
// // TASK№9
// const obj = {
//   method: function () {
//     console.log(this);
//   },
// };

// const other = {
//   method: obj.method,
// };

// const copy = other.method;
// copy();
// //!======================================================

// //!======================================================
