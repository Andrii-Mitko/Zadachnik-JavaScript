//*******************************************************/

//! Callback

//*******************************************************/

//? Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback.Функція повинна обчислити суму чисел у масиві та передати результат у колбек.

// function sumArray(numbers, callback) {
//   const sum = numbers.reduce((acc, n) => acc + n, 0);
//   callback(sum);
// }

// sumArray([1, 2, 3, 4, 5], res => {
//   console.log(res);
// });

//********************************************************/

//? Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback.Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.

// function doubleArray(numbers, callback) {
//   const arr = numbers.map(n => n * 2);
//   callback(arr);
// }

// doubleArray([1, 2, 3, 4, 5], res => {
//   console.log(res);
// });

//********************************************************/

//? Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.

// function filterWords(words, condition, callback) {
//   callback(condition(words));
// }

// const arr = ['один', 'два', 'три', true];
// function condition(ar) {
//   return ar.filter(n => typeof n === 'string');
// }

// filterWords(arr, condition, res => {
//   console.log(res);
// });

//********************************************************/

//? Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

// function capitalizeStrings(strings, callback) {
//   const result = strings.map(str => str[0].toUpperCase() + str.slice(1));
//   callback(result);
// }

// const arr = ['один', 'два', 'три'];

// capitalizeStrings(arr, res => {
//   console.log(res);
// });

//********************************************************/

//? Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.

// function sortNumbers(numbers, callback) {
//   const sort = numbers.toSorted((a, b) => a - b);
//   callback(sort);
// }
// const nums = [1, 7, 2, 8, 3, 9, 4, 5, 6];

// sortNumbers(nums, res => {
//   console.log(res);
// });

//********************************************************/

//? Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.

// function findMax(numbers, callback) {
//   const result = Math.max(...numbers);
//   callback(result);
// }
// const nums = [1, 7, 2, 8, 3, 9, 4, 5, 6];
// findMax(nums, res => {
//   console.log(res);
// });

//********************************************************/

//? Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.

// function checkEven(numbers, callback) {
//   const result = numbers.every(n => n % 2 === 0);
//   callback(result);
// }
// const nums = [1, 7, 2, 8, 3, 9, 4, 5, 6];
// checkEven(nums, res => {
//   res === true
//     ? console.log('Всі числа парні!')
//     : console.log('Є числа не парні');
// });

//********************************************************/

//? Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.

// function concatStrings(strings, separator, callback) {
//   const concat = strings.join(separator);
//   callback(concat);
// }
// const arr = ['один', 'два', 'три'];
// const separ = '-';
// concatStrings(arr, separ, res => {
//   console.log(res);
// });

//********************************************************/

//? Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.

// function parseNumbers(strings, callback) {
//   const nums = strings.map(n => Number(n));
//   callback(nums);
// }
// const arr = ['1', '7', '2', '8', '3', '9', '4', '5', '6'];
// parseNumbers(arr, res => {
//   console.log(res);
// });

//********************************************************/

//? Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.

// function countCharacters(strings, callback) {
//   const count = strings.reduce((acc, n) => acc + n.length, 0);
//   callback(count);
// }
// const arr = ['один', 'два', 'три'];
// countCharacters(arr, res => {
//   console.log(res);
// });

//********************************************************/
