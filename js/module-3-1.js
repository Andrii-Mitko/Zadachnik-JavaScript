//! Прості задачі

//! ===========================================================

//? Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// const fooArr = (arr) => arr.forEach((element) => console.log(element));
// const arr3 = ['Hello', '42', 'true', 'null'];
// fooArr(arr3);

//! ===========================================================

//? Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

// const fooArr = (arr) => {
//     for (let i = 1; i < arr.length; i += 2) {
//         console.log(arr[i]);
//     }
// }

//! ===========================================================

//? Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

// const fooArr = (arr) => {
//     for (const num of arr) {
//         if (num % 2 === 0) {
//             console.log(num);
//         }
//     }
// }

//! ===========================================================

//? Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// const foo = (arr, max) => {
//     for (const item of arr) {
//         if (item > max) {
//             console.log(item);
//         }
//     }
// }

//! ===========================================================

//? Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// const fooNum = (arrNum) => {
//     let sum = 0;
//     for (const num of arrNum) {
//         sum += num;
//     }
//     return sum;
// }

//! ===========================================================

//? Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

// const foo = (arr, element) => {
//     let sum = 0;
//     for (const item of arr) {
//         if (item === element) {
//             sum += 1;
//  }
//     }
//     return sum;
// }

//! ===========================================================

//? Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// const fooArrNum = (arrNum) => arrNum.filter((num) => num >= 0);

//! ===========================================================

//? Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.

// const fooArr = (strs) => strs.map((str) => str.length < 6 ? str.toLowerCase() : str.toUpperCase());

//! ===========================================================

//? Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

// const fooArrNum = (arrNum) => arrNum.filter((num) => num % 2 !== 0);

//! ===========================================================

//? Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.

// const fooArrNum = (arrNum) => arrNum.map((num, i) => num * i);

//! ===========================================================

//? Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.

//! ===========================================================

//! Середні задачі

//! ===========================================================

//? Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// const fooArr = (arr1, arr2) => {
//     const arr = [];
//     for (const item of arr1) {
//         for (const i of arr2) {
//             if (item === i) {
//                 arr.push(item);
//             }
//         }
//     }
//     return arr;
// };

//! ===========================================================

//? Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// const fooArr = (arr1, arr2) => {
//     const arr = [];
//     for (const el of arr1) {
//         if (!arr2.includes(el)) {
//            arr.push(el)
//        }
//     }
//     return arr;
// };

//! ===========================================================

//? Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// const fooArr = (arr) => {
//     let minArr = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length < minArr.length) {
//             minArr = arr[i];
//         }
//     }
//     return minArr;
// };
// const arrArr = ["cat", "elephant", "hi", "JavaScript"];

//! ===========================================================

//? Напиши функцію яка приймає масив та знаходить максимальний елемент.

// const fooArr = (arr) => {
//     let maxArr = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > maxArr.length) {
//             maxArr = arr[i];
// }
//     }
//     return maxArr;
// }
// const arrArr = ["cat", "elephant", "hi", "JavaScript"];
// console.log(fooArr(arrArr));


//! ===========================================================

//? Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

// const fooArr = (arr) => {
//     let average = 0;
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i].length;
//     }
//     const aver = average / arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > aver) {
//             newArr.push(arr[i]);
//         }
//     } return newArr;
// }

// *--------------

// const fooArr = (arr) => {
//     const aver = arr.reduce((sum, el) => sum + el.length, 0) / arr.length;
//     return arr.filter(el => el.length > aver);
// }

// *--------------

// const arrArr = ["cat", "elephant", "hi", "JavaScript"];
// console.log(fooArr(arrArr));

//! ===========================================================

//? Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

// const fooArr = (arr) => arr.filter((el, i) => el.length > i);

// const arrArr = ["cat", "elephant", "hi", "JavaScript"];
// console.log(fooArr(arrArr));

//! ===========================================================

//? Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.

// const fooNum = (numbers) => {
//     let numb = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < numb) {
//     numb = numbers[i]
// }
//     }
//     return numbers.filter((num) => num !== numb)
// }

// // *--------------

// const fooNum = (numbers) => {
//     let min = Math.min(...numbers);
//     const index = numbers.indexOf(min);
//     numbers.splice(index, 1); // видаляємо перший мінімум
//     return numbers;
// };

// // *--------------

// const arrNum = [3, 7, 1, 9, 4, 12, 51, 25, 15, 256, 6];
// console.log(fooNum(arrNum));

//! ===========================================================

//? Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.

// const fooNum = (start, end) => {
//     const arr = [];
//     for (let i = start; i <= end; i++) {
//         if (!i.toString().includes('5')) {
//             arr.push(i);
//         }
//     }
//     return arr;
// };
// console.log(fooNum(10, 25));

//! ===========================================================

//! Складні

//! ===========================================================

//? Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.

// const fooArrNum = (arrNum) => {
//     const newArr = [];
//     arrNum.forEach((num) => num % 2 === 0 ? newArr.unshift(num) : newArr.push(num));
//     return newArr
// }

// const arRNum = [3, 7, 1, 9, 4, 12, 51, 25, 15, 256, 6];
// console.log(fooArrNum(arRNum));

//! ===========================================================

//? Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.

// const fooArrNum = (arrNum) => {
//     const newNum = [];
//     let sum = 0;
//     for (const num of arrNum) {
//         sum += num;
//         newNum.push(sum);
//     }
//     return newNum
// };

// const arRNum = [3, 7, 1, 9, 4, 3, 51, 25, 15, 256, 6];
// console.log(fooArrNum(arRNum));

//! ===========================================================

//? Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.

// const fooArrNum = (arrNum) => arrNum.filter(num => arrNum.indexOf(num) === arrNum.lastIndexOf(num));

// const arRNum = [3, 7, 1, 9, 4, 3, 51, 25, 15, 256, 6];
// console.log(fooArrNum(arRNum));

//! ===========================================================

//? Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.

// const fooArr = (arr1, arr2) => {
//     const arr = [];
//     for (const el of arr1) {
//         if (!arr.includes(el)) arr.push(el);
//     }
//     for (const el of arr2) {
//         if (!arr.includes(el)) arr.push(el);
//     }
//     return arr;
// };

// const a = ["apple", "banana", "cherry"];
// const b = ["banana", "cherry", "apple"];
// console.log(fooArr(a, b));



//! ===========================================================

//? Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.

// const fooArrNum = (arrNum) => {
//     const arr = [];
//     for (let i = 0; i < arrNum.length; i++) {
//         const prev = arrNum[i - 1] ?? arrNum[i];
//         const next = arrNum[i + 1] ?? arrNum[i];
//         arr.push((prev + next) / 2);
//     }
//     return arr;
// };
// const arRNum = [3, 7, 1, 9, 4, 3, 51, 25, 15, 256, 6];
// console.log(fooArrNum(arRNum));

//! ===========================================================

//? Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.

// const fooArrNum = (arrNum) => {
//     const arrNum1 = arrNum.toSorted((a, b) => a - b);
//     const arrNum2 = arrNum.toSorted((a, b) => b - a);
//     return {arrNum1, arrNum2};
// }
// const arRNum = [3, 7, 1, 9, 4, 3, 51, 25, 15, 256, 6];
// console.log(fooArrNum(arRNum));

//! ===========================================================

//? Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.

// const fooArrStr = (arrStr) => arrStr.toSorted((a, b) => a.length - b.length);

// const arrArr = ["cat", "elephant", "hi", "JavaScript"];
// console.log(fooArrStr(arrArr));

//! ===========================================================