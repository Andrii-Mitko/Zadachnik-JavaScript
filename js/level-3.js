// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback.  Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.

// const doubleArray = (numbers, callback) => callback(numbers.map(number => number * 2));

// const numbers = [4, 2, 3, 7, 8, 9, 4, 5, 6, 1, 2, 50, 70, 80, 99, 3];

// const add = (e) => console.log(e);
// doubleArray(numbers, add);
// // add(5);

// const ggg = doubleArray(numbers, add);
// console.log(ggg);


// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.

// const capitalizeStrings = (strings, callback) => {
//     strings.forEach((string, i, arr) => arr[i] = string[0].toUpperCase() + string.slice(1));
//     callback(strings);
// };


//     const str = ['sasha', 'alex', 'small', 'cat', 'abadon', 'axe', 'alhemist', 'nazar', 'zahar', 'ivan', 'Vroclav'];
// const add = (elem) => console.log(elem);
// capitalizeStrings(str, add);





// const capitalizeStrings = (strings, callback) => callback(strings.map((str, index,arr) => arr[index] = str[0].toUpperCase()+str.slice(1)));

// const logToConsole = arg => console.log(arg);    

// capitalizeStrings(['sasha', 'alex', 'small', 'cat', 'abadon', 'axe', 'alhemist', 'nazar', 'zahar', 'ivan', 'Vroclav'], logToConsole);






// const capitalizeStrings = (strings, callback) => callback(strings.map((str, index,arr) => arr[index] = str[0].toUpperCase()+str.slice(1)));

// const logToConsole = arg => console.log(arg);    

// const arr = ['sasha', 'alex', 'small', 'cat', 'abadon', 'axe', 'alhemist','nazar','zahar','ivan', 'Vroclav'];

// capitalizeStrings(arr,logToConsole);
// console.log(arr);