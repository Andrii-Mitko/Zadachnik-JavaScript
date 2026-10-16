//*  ==================================================================================

//? 1
//? Клас Calculator: Реалізуйте клас Calculator, який матиме методи для
//? Основні математичні операції: add, subtract, multiply, і divide. Кожен
//? метод прийматиме два числа і повертатиме результат відповідної операції.

// class Calculator {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   add() {
//     return this.num1 + this.num2;
//   }
//   subtract() {
//     return this.num1 - this.num2;
//   }
//   multiply() {
//     return this.num1 * this.num2;
//   }
//   divide() {
//     return this.num1 / this.num2;
//   }
// }
// const calculator = new Calculator(10, 2);
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

//*  ==================================================================================

//? 2
//? Клас ContactBook: Створіть клас Contact для подання контакту з полями name, email та phone. Потім реалізуйте клас ContactBook, який зберігатиме список контактів та надавати методи для додавання, видалення та пошуку контактів.

// class Contact {
//   constructor(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//   }
// }

// class ContactBook {
//   constructor() {
//     this.contacts = [];
//   }

//   addContact(contact) {
//     this.contacts.push(contact);
//   }

//   removeContact(name) {
//     const index = this.contacts.findIndex(contact => contact.name === name);

//     if (index !== -1) {
//       this.contacts.splice(index, 1);
//       return true;
//     }

//     return false;
//   }

//   searchContact(name) {
//     return this.contacts.find(contact => contact.name === name);
//   }
// }

// const book = new ContactBook();

// const contact1 = new Contact('Андрій', 'andrii@gmail.com', '0991234567');

// const contact2 = new Contact('Олена', 'olena@gmail.com', '0671234567');

// book.addContact(contact1);
// book.addContact(contact2);

// console.log(book.contacts);
// console.log(book.searchContact('Андрій'));

// book.removeContact('Андрій');

// console.log(book.contacts);

//*  ==================================================================================

//? 3
//? Клас Rectangle: Напишіть клас Rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Конструктор клас повинен приймати довжини двох сторін.

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
//   area() {
//     return this.length * this.width;
//   }
//   perimeter() {
//     return (this.length + this.width) * 2;
//   }
// }

// const rectangle = new Rectangle(10, 5);
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

//*  ==================================================================================

//? 4
//? Клас ToDoList: Створіть клас Task для представлення задач з полями title, description та completed. Потім реалізуйте клас ToDoList, який зберігатиме список задач та методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.

// class Task {
//   constructor(title, description, completed) {
//     this.title = title;
//     this.description = description;
//     this.completed = false;
//   }
// }

// class ToDoList {
//   constructor() {
//     this.tasks = [];
//   }
//   addTask(task) {
//     this.tasks.push(task);
//   }
//   taskCompleted(title) {
//     const task = this.tasks.find(task => task.title === title);
//     if (!task) return;
//     task.completed = true;
//     return task;
//   }
//   tasksList() {
//     return this.tasks;
//   }
// }

// const todo = new ToDoList();

// const task1 = new Task('Вивчити JavaScript', 'Розібрати класи');
// const task2 = new Task('Вивчити масиви', 'Повторити метод find');
// console.log(todo.tasksList());

//*  ==================================================================================

//? 5
//? Клас BankAccount: Реалізуйте клас BankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   balanceCheck() {
//     return this.balance;
//   }

//   deposit(amount) {
//     if (amount <= 0) {
//       throw new Error('Сума депозиту має бути більшою за нуль');
//     }

//     this.balance += amount;
//     return this.balance;
//   }

//   withdrawal(amount) {
//     if (amount <= 0) {
//       throw new Error('Сума зняття має бути більшою за нуль');
//     }

//     if (amount > this.balance) {
//       throw new Error('Недостатньо коштів на рахунку');
//     }

//     this.balance -= amount;
//     return this.balance;
//   }
// }

// const account = new BankAccount(2000);

// console.log(account.balanceCheck()); // 1000

// console.log(account.deposit(500)); // 1500

// console.log(account.withdrawal(300)); // 1200

// console.log(account.balanceCheck()); // 1200

// // Спроба зняти більше, ніж є на рахунку:
// try {
//   account.withdrawal(2000);
// } catch (error) {
//   console.log(error.message);
//   // Недостатньо коштів на рахунку
// }

//*  ==================================================================================

//? 6
//? Клас LibraryCatalog: Створіть клас Book для представлення книги з полями title, author та ISBN. Потім реалізуйте клас LibraryCatalog, який буде зберігати список книг у бібліотеці та надавати методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.

// class Book {
//   constructor(title, author, ISBN) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//   }
// }

// class LibraryCatalog {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(book);
//     return 'Книгу додано!';
//   }
//   searchBook(author, ISBN) {
//     const book = this.books.find(
//       book => book.author === author && book.ISBN === ISBN,
//     );
//     if (!book) {
//       return 'Такої книги не існує';
//     }
//     return book;
//   }
//   bookList() {
//     return this.books;
//   }
// }

// const book = new Book('Кобзар', 'Тарас Шевченко', '15-15');

// const catalog = new LibraryCatalog();

// console.log(catalog.addBook(book));

// console.log(catalog.searchBook('Тарас Шевченко', '15-15'));

// console.log(catalog.bookList());

//*  ==================================================================================

//? 7
//? Клас TemperatureConverter: Напишіть клас TemperatureConverter, який буде мати методи для конвертації температур між градусами Цельсія та Фаренгейта.

// class TemperatureConverter {
//   static celsiusToFahrenheit(celsius) {
//     return (celsius * 9) / 5 + 32;
//   }

//   static fahrenheitToCelsius(fahrenheit) {
//     return ((fahrenheit - 32) * 5) / 9;
//   }
// }

// console.log(TemperatureConverter.celsiusToFahrenheit(100)); // 212
// console.log(TemperatureConverter.fahrenheitToCelsius(32)); // 0

//*  ==================================================================================

//? 8
//? Клас ShoppingCart: Реалізуйте клас Product для представлення товару з полями name, price та quantity. Потім створіть клас ShoppingCart, який зберігатиме список товарів та надавати методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.

// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
// }

// class ShoppingCart {
//   constructor() {
//     this.products = [];
//   }
//   addProduct(product) {
//     this.products.push(product);
//   }
//   costProduct(product) {
//     const cost = product.price * product.quantity;
//     return cost;
//   }
//   costProductAll() {
//     const cost = this.products.reduce(
//       (z, product) => z + product.price * product.quantity,
//       0,
//     );
//     return cost;
//   }
//   listProduct() {
//     return this.products;
//   }
// }

// const product = new Product('Банан', 78, 25);

// const shoppingCart = new ShoppingCart();
// shoppingCart.addProduct(product);
// console.log(shoppingCart.costProduct(product));
// console.log(shoppingCart.costProductAll());
// console.log(shoppingCart.listProduct());

//*  ==================================================================================

//? 9
//? Клас SocialNetworkUser: Створіть клас SocialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.

// class SocialNetworkUser {
//   constructor(username, friends = []) {
//     this.username = username;
//     this.friends = friends;
//   }
//   addFriend(friend) {
//     if (this.friends.includes(friend)) {
//       return `Друг ${friend} вже є у списку`;
//     }
//     this.friends.push(friend);
//     return `Друг ${friend} добавлен`;
//   }
//   deletionFriend(friend) {
//     const index = this.friends.indexOf(friend);
//     if (index < 0) {
//       return `Друга ${friend} не існує`;
//     }
//     this.friends.splice(index, 1);
//     return `Друга ${friend} видалено`;
//   }
//   listFriends() {
//     return this.friends;
//   }
// }

// const user = new SocialNetworkUser('Андрій', ['Валя', 'Ніка']);
// console.log(user.addFriend('Масік'));
// console.log(user.deletionFriend('Валя'));
// console.log(user.listFriends());

//*  ==================================================================================

//? 10
//? Клас MusicPlayer: Реалізуйте клас Song для представлення пісні з полями title, артист і тривалість. Потім створіть клас MusicPlayer, який зберігатиме список пісень та надавати методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.

// class Song {
//   constructor(title, artist, duration) {
//     this.title = title;
//     this.artist = artist;
//     this.duration = duration;
//   }
// }

// class MusicPlayer {
//   constructor() {
//     this.songs = [];
//     this.currentSongIndex = 0;
//     this.isPlaying = false;
//   }

//   addSong(song) {
//     if (this.songs.includes(song)) {
//       return 'Така пісня вже є';
//     }

//     this.songs.push(song);
//     return 'Пісню додано!';
//   }

//   play() {
//     if (this.songs.length === 0) {
//       return 'Список пісень порожній';
//     }

//     this.isPlaying = true;
//     const song = this.songs[this.currentSongIndex];

//     return `Відтворюється: ${song.title} — ${song.artist}`;
//   }

//   pause() {
//     if (!this.isPlaying) {
//       return 'Музика вже на паузі';
//     }

//     this.isPlaying = false;
//     return 'Відтворення призупинено';
//   }

//   nextSong() {
//     if (this.songs.length === 0) {
//       return 'Список пісень порожній';
//     }

//     this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;

//     this.isPlaying = true;
//     return this.play();
//   }

//   previousSong() {
//     if (this.songs.length === 0) {
//       return 'Список пісень порожній';
//     }

//     this.currentSongIndex =
//       (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;

//     this.isPlaying = true;
//     return this.play();
//   }
// }

// const musicPlayer = new MusicPlayer();

// const song1 = new Song('Батарейка', 'Жуки', 138);
// const song2 = new Song('Обійми', 'Океан Ельзи', 240);
// const song3 = new Song('Старі фотографії', 'Скрябін', 210);

// console.log(musicPlayer.addSong(song1));
// console.log(musicPlayer.addSong(song2));
// console.log(musicPlayer.addSong(song3));

// console.log(musicPlayer.play());
// console.log(musicPlayer.pause());
// console.log(musicPlayer.play());

// console.log(musicPlayer.nextSong());
// console.log(musicPlayer.previousSong());

//*  ==================================================================================

//? 11
//? Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовком і метод ucWords, який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.

// class MyString {
//   reverse(str) {
//     return str.split('').reverse().join('');
//   }
//   ucFirst(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     return str
//       .split(' ')
//       .map(item => item.slice(0, 1).toUpperCase() + item.slice(1))
//       .join(' ');
//   }
// }

// const str = 'добрий день!';
// const myString = new MyString();
// console.log(myString.reverse(str));
// console.log(myString.ucFirst(str));
// console.log(myString.ucWords(str));

//*  ==================================================================================

//? 12
//? Реалізуйте клас Validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, клас буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону:

//!  ================================================================================================================

//? 13
//! Завдання Банківський рахунок

// Ви розробляєте систему управління банківськими рахунками. Вам потрібно створити клас BankAccount для подання банківського рахунку з різними властивостями та функціональністю.

// 1 Створіть клас BankAccount з приватною статичною властивістю bankName, яке зберігатиме ім'я банку за умовчанням.

// 2 Додайте приватні властивості accountNumber, balance та ownerName, які зберігатимуть номер рахунку, баланс та ім'я власника.

// 3 Створіть геттери та сеттери для властивостей balance та ownerName. Геттер для балансу має форматувати його як грошову суму.

// 4 Додайте статичний метод setBankName(bankName), який дозволить змінити ім'я банку за промовчанням всім рахунків.

// 5 Реалізуйте метод deposit(amount), який збільшуватиме баланс рахунку на зазначену суму.

// 6 Реалізуйте метод withdraw(amount), який зменшуватиме баланс рахунку на зазначену суму, але якщо на рахунку достатньо коштів.

// Приклад:

// // Створюємо банківський рахунок
// const account = new BankAccount('12345', 1000, 'John Doe');

// console.log(account.getAccountInfo());

// account.deposit(500);
// console.log(account.getAccountInfo());

// account.withdraw(200);
// console.log(account.getAccountInfo());

// account.balance = 1500;
// console.log(account.getAccountInfo());

// account.ownerName = 'Jane Smith';
// console.log(account.getAccountInfo());

// BankAccount.setBankName('NewBank');
// console.log(account.getAccountInfo());
// У цій задачі використовуються статичні властивості, приватні властивості, гетери та сеттери, щоб створити клас BankAccount, який представляє банківський рахунок з функціональністю для внесення депозитів, зняття коштів, зміни імені власника та виведення інформації про рахунок.

//!  ================================================================================================================

//? 14
// Завдання для класу ToDoList: Управління завданнями

// const

// Реалізуйте клас Task для подання завдання з полями:

// title (заголовок задачі)
// description (опис завдання)
// due_date (термін виконання завдання)
// priority (пріоритет завдання, наприклад, від 1 до 5)
// Потім створіть клас ToDoList, який представлятиме список завдань і буде мати такі методи:

// 1 add_task(task: Task): Додає передане завдання до списку завдань.
// 2 remove_task(task_title: str): Видаляє завдання за її заголовком.
// 3 get_task(task_title: str) -> Task: Повертає завдання з її заголовку.
// 4 get_all_tasks() -> List[Task]: Повертає перелік всіх завдань.
// 5 get_tasks_by_priority(priority: int) -> List[Task]: Повертає перелік завдань певного пріоритету.
// 6 get_tasks_by_due_date(date: datetime) -> List[Task]: Повертає список завдань, у яких термін виконання не пізніше вказаної дати.

// Приклад використання:

// const task1 = Task(
//   'Підготувати презентацію',
//   'Підготувати матеріали та слайди для презентації',
//   '2023-09-01',
//   3,
// );
// const task2 = Task(
//   'Зробити покупки',
//   'Купити продукти для приготування обіду',
//   '2023-08-25',
//   2,
// );
// const task3 = Task(
//   'Записати відеоурок',
//   'Записати урок з програмування',
//   '2023-08-28',
//   4,
// );
// Завдання полягає в тому, щоб реалізувати клас ToDoList з методами, які дозволяють керувати списком завдань: додавати, видаляти, отримувати інформацію про задачах та фільтрувати задачі за різними критеріями.

//!  ================================================================================================================

//? 15
// Завдання для класу FriendList: Управління списком друзів

// Ви розробляєте програму для керування списком друзів користувачів. Вам потрібно створити клас Friend для подання інформації про друга з полями:

// name (ім'я друга)
// age (вік друга)
// email (електронна пошта друга)
// isBestFriend (прапор, що вказує, чи є один найкращим другом)
// Потім створіть клас FriendList, який представлятиме список друзів користувача. Клас повинен мати такі методи:

// addFriend(friend: Friend): Додає переданого друга до списку друзів.
// removeFriend(email: string): Видаляє друга електронною поштою.
// getFriendByEmail(email: string): Повертає інформацію про друга щодо нього електронній пошті.
// getBestFriends(): Повертає список усіх найкращих друзів.
// getFriendsByAge(age: number): Повертає список друзів певного віку.
// Приклад використання:

// // Створюємо об'єкти Friend
// const friend1 = new Friend("John", 25, "john@example.com", true);
// const friend2 = new Friend("Jane", 30, "jane@example.com", false);
// const friend3 = new Friend("Michael", 28, "michael@example.com", true);

// // Створюємо об'єкт FriendList
// const myFriendList = новий FriendList();

// // Додаємо друзів до списку
// myFriendList.addFriend(friend1);
// myFriendList.addFriend(friend2);
// myFriendList.addFriend(friend3);

// // Видаляємо друга електронною поштою
// myFriendList.removeFriend("jane@example.com");

// // Отримуємо інформацію про друга електронною поштою
// const foundFriend = myFriendList.getFriendByEmail("john@example.com");

// // Отримуємо список найкращих друзів
// const bestFriends = myFriendList.getBestFriends();

// // Отримуємо список друзів певного віку
// const friendsWithAge28 = myFriendList.getFriendsByAge(28);
// Завдання полягає в реалізації класу FriendList з методами, які дозволяють керувати списком друзів, додавати та видаляти друзів, а також виконувати пошук та фільтрацію друзів за різними критеріями.

//!  ================================================================================================================

//? 16
// Завдання Створення ієрархії фігур

// Ви розробляєте програму для роботи з геометричними фігурами. Вам потрібно створити ієрархію класів для представлення різних фігур: кола, прямокутника та трикутника. Усі фігури повинні мати спільний метод calculateArea(), який обчислюватиме і повертатиме площу фігури.

// Створіть базовий клас Shape, який міститиме конструктор з координатами центру фігури та метод calculateArea(). Метод calculateArea() у базовому класі має повертати 0.

// Створіть підкласи для кожної геометричної фігури: Circle, Rectangle та Triangle. Кожен підклас повинен успадковувати від Shape.

// Реалізуйте метод calculateArea() для кожного підкласу, щоб він коректно обчислював площу відповідної фігури.

// Створіть кілька об'єктів кожного типу фігур та виведіть їх площі.

// Приклад:

// const circle = new Circle(0, 0, 5);
// const rectangle = new Rectangle(0, 0, 4, 6);
// const triangle = new Triangle(0, 0, 8, 5);

// console.log('Circle area:', circle.calculateArea()); // Output: Circle area: 78.53981633974483
// console.log('Rectangle area:', rectangle.calculateArea()); // Output: Rectangle area: 24
// console.log('Triangle area:', triangle.calculateArea()); // Output: Triangle area: 20
// Завдання полягає у створенні ієрархії класів з використанням успадкування, реалізації методу calculateArea() для кожного підкласу та демонстрації розрахунків площ різних постатей.

//!  ================================================================================================================

//? 17
// Завдання Онлайн магазин електроніки

// Ви розробляєте веб-додаток для онлайн-магазину електроніки. Вам потрібно створити ієрархію класів для різних типів продуктів: смартфонів, ноутбуків та навушників. Кожен продукт має свої характеристики, такі як бренд, модель, ціна та характеристики (наприклад, роздільна здатність екрану для смартфона, тип процесора для ноутбука та тип підключення для навушників).

// Створіть базовий клас Product, який міститиме конструктор з основними характеристиками продукту, такими як бренд, модель та ціна.

// Створіть підкласи для кожного типу продуктів: Smartphone, Laptop і Headphones. Кожен підклас повинен успадковувати від Product.

// Додайте додаткові характеристики для кожного типу продуктів, наприклад, для смартфонів - роздільна здатність екрана, для ноутбуків - тип процесора, для навушників – тип підключення.

// Реалізуйте метод productDescription(), який повертатиме рядок з опис продукту, включаючи всі його характеристики.

// Створіть декілька об'єктів кожного типу продуктів та виведіть їх описи.

// Приклад:

// const smartphone = новий Smartphone ("Apple", "iPhone 13", 999, "1920x1080");
// const laptop = new Laptop("Dell", "XPS 15", 1499, "Intel Core i7");
// const headphones = New Headphones("Sony", "WH-1000XM4", 349, "Bluetooth");

// console.log(smartphone.productDescription());
// console.log(laptop.productDescription());
// console.log(headphones.productDescription());
// Завдання полягає у створенні ієрархії класів з використанням успадкування, додаванні характеристик для кожного підкласу, реалізації методу productDescription() та демонстрації описів різних типів продуктів.
