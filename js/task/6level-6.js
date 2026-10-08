//! Уровень 6.1 задачника JavaScript

//* =============================================

//? №1
//? Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Тисни тут';
// const ul = document.createElement('ul');
// main.append(btn, ul);
// const arr = ['a', 'b', 'c', 'd', 'i', 'f'];

// btn.addEventListener('click', () => {
//   arr.forEach(item => {
//     const li = document.createElement('li');
//     ul.append(li);
//     li.textContent = item;
//   });
// });

//* =============================================

//? №2
//? Дана кнопка и пустой список ul. По клику на кнопку заполните список числами от 1 до 10.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Тисни тут';
// const ul = document.createElement('ul');
// main.append(btn, ul);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// btn.addEventListener('click', () => {
//   arr.forEach(item => {
//     const li = document.createElement('li');
//     ul.append(li);
//     li.textContent = item;
//   });
// });

//* =============================================

//? №3
//? Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с текстом '!'.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Тисни тут';
// const ul = document.createElement('ul');
// main.append(btn, ul);
// btn.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = '!';
//   ul.append(li);
// });

//* =============================================

//? №4
//? Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с порядковым номером.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// const ul = document.createElement('ul');
// btn.textContent = 'Тисни тут';
// main.append(btn, ul);
// let num = 0;
// btn.addEventListener('click', () => {
//   const li = document.createElement('li');
//   num += 1;
//   li.textContent = num;
//   ul.append(li);
// });

//* =============================================

//? №5
//? Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите последний пункт списка.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// const ul = document.createElement('ul');
// main.append(btn, ul);
// btn.textContent = 'Видалити останній пункт';

// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = `Пункт ${i}`;
//   ul.append(li);
// }

// btn.addEventListener('click', () => {
//   if (ul.lastElementChild) {
//     ul.lastElementChild.remove();
//   }
// });

//* =============================================

//? №6
//? Дана кнопка и список ul, заполненный пунктами.По клику на кнопку удалите случайный пункт списка.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Видалити випадковий пункт';
// const ul = document.createElement('ul');
// main.append(btn, ul);
// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = `Пункт №${i}`;
//   ul.append(li);
// }

// btn.addEventListener('click', () => {
//   const items = ul.querySelectorAll('li');
//   if (items.length === 0) return;
//   items[Math.floor(Math.random() * items.length)].remove();
// });

//! =============================================

//; Уровень 6.2 задачника JavaScript

//! =============================================

//? №1
//? По клику на кнопку создайте HTML таблицу с заданной шириной и высотой.

// const main = document.querySelector('main');
// const btn = document.createElement('button');

// btn.textContent = 'Створити таблицю';
// main.append(btn);

// btn.addEventListener('click', () => {
//   const table = document.createElement('table');

//   for (let i = 0; i < 5; i++) {
//     const tr = document.createElement('tr');

//     for (let j = 0; j < 4; j++) {
//       const td = document.createElement('td');
//       td.textContent = `${i + 1}:${j + 1}`;
//       tr.append(td);
//     }

//     table.append(tr);
//   }

//   main.append(table);
// });

//* =============================================

//? №2
//? По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли их порядковые номера.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Створити HTML таблицю';
// main.append(btn);
// btn.addEventListener('click', () => {
//   const table = document.createElement('table');
//   let num = 0;
//   for (let i = 1; i <= 5; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 1; j <= 4; j++) {
//       const td = document.createElement('td');
//       td.textContent = num += 1;
//       tr.append(td);
//     }
//     table.append(tr);
//   }
//   main.append(table);
// });

//* =============================================

//? №3
//? По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли номера их рядов и колонок.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Створити HTML таблицю';
// main.append(btn);
// btn.addEventListener('click', () => {
//   const table = document.createElement('table');

//   for (let i = 1; i <= 5; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 1; j <= 4; j++) {
//       const td = document.createElement('td');
//       td.textContent = `${i} : ${j}`;
//       tr.append(td);
//     }
//     table.append(tr);
//   }
//   main.append(table);
// });

//* =============================================

//? №4
//? Дан массив:
//? [
//? 	[1, 2, 3],
//? 	[4, 5, 6],
//? 	[7, 8, 9],
//? ]
//? По нажатию на кнопку создайте таблицу, заполненную данными из этого массива.

// const arrArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Створити таблицю';
// main.append(btn);
// btn.addEventListener('click', () => {
//   const table = document.createElement('table');
//   for (let i = 0; i < arrArr.length; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0; j < arrArr[i].length; j++) {
//       const td = document.createElement('td');
//       td.textContent = arrArr[i][j];
//       tr.append(td);
//     }
//     table.append(tr);
//   }
//   main.append(table);
// });

//! =============================================

//; Уровень 6.3 задачника JavaScript

//! =============================================

//? №1
//? Дан абзац и кнопка. Пусть первое нажатие на кнопку красит абзац в красный цвет, а второе нажатие в зеленый.

// const main = document.querySelector('main');
// const text = document.createElement('p');
// text.textContent = 'Абзац!';
// const btn = document.createElement('button');
// btn.textContent = 'Зминити колір';
// main.append(text, btn);

// btn.addEventListener('click', () => {
//   text.style.color === 'red'
//     ? (text.style.color = 'green')
//     : (text.style.color = 'red');
// });

//* =============================================

//? №2
//? Дан список ul. По клику на любую li добавьте ей в конец ее порядковый номер в списке, но только один раз.

// const arr = ['Перший', 'Другий', 'Один', 'Два', 'Три'];
// const main = document.querySelector('main');
// const ul = document.createElement('ul');
// arr.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ul.append(li);
// });
// main.append(ul);

// ul.addEventListener('click', e => {
//   if (e.target.tagName !== 'LI') {
//     return;
//   }
//   const index = [...ul.children].indexOf(e.target) + 1;
//   if (e.target.textContent.endsWith(`${index}`)) {
//     return;
//   }
//   e.target.textContent += ` - ${index}`;
// });

//* =============================================

//? №3
//? Дан список ul. По клику на любую li, если нажата клавиша Ctrl, удалите эту li из списка.

// const arr = ['Перший', 'Другий', 'Один', 'Два', 'Три'];
// const main = document.querySelector('main');
// const ul = document.createElement('ul');
// arr.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ul.append(li);
// });
// main.append(ul);

// ul.addEventListener('click', e => {
//   if (e.target.tagName !== 'LI') {
//     return;
//   }

//   if (e.ctrlKey) {
//     e.target.remove();
//   }
// });

//* =============================================

//? №4
//? Дан абзац с числом и кнопка. По нажатию на кнопку пусть число из абзаца каждую секунду увеличивается на единицу.

// const main = document.querySelector('main');
// const num = document.createElement('p');
// num.textContent = '0';

// const btn = document.createElement('button');
// btn.textContent = 'Збільшити';

// main.append(num, btn);

// let res = Number(num.textContent);
// let intervalId;

// btn.addEventListener('mousedown', () => {
//   intervalId = setInterval(() => {
//     res += 1;
//     num.textContent = res;
//   }, 1000);
// });

// btn.addEventListener('mouseup', () => {
//   clearInterval(intervalId);
// });

//* =============================================

//? №5
//? Дан инпут и абзац. В инпут вводится дата.Определите, была уже дата в текущем году.Результат выведите в абзац.

const main = document.querySelector('main');
const input = document.createElement('input');
input.type = 'date';
const text = document.createElement('p');
main.append(input, text);

input.addEventListener('input', e => {
  const date = new Date(e.target.value);
  const today = new Date();

  if (date.getFullYear() !== today.getFullYear()) {
    text.textContent = 'Дата не належить цьому року';
  } else if (date <= today) {
    text.textContent = 'Дата вже була цього року';
  } else {
    text.textContent = 'Дата ще не була цього року';
  }
});

//* =============================================

//! Уровень 6.4 задачника JavaScript

//* =============================================

//? №1
//? Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.

//* =============================================

// №2

// Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка.

// №3

// Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов.

// №4

// Дан инпут и ul.В инпут вводится год.Выведите в список даты всех пятниц 13 - е в заданном году.

// Уровень 6.5 задачника JavaScript
// №1

// Дан абзац и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в абзац, сколько полных лет юзеру.

// №2

// Дан абзац и инпут. В инпут вводятся числа, разделенные запятыми. Сделайте так, чтобы по мере ввода данных в инпут в абзац выводилась сумма введеных чисел.

// №3

// Дан абзац и кнопка. Каждое нажатие на кнопку добавляет новый инпут. В инпуты вводятся числа. Сделайте так, чтобы по мере ввода чисел в инпуты в абзац выводилась сумма введеных чисел.

// №4

// Дано произвольное количество инпутов и кнопка. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел и выведите в текст кнопки.

// №5

// Даны два инпута, абзац и кнопка.В инпуты через запятую вводятся числа.По клику на кнопку выведите через запятую в абзац числа, которые есть в обоих инпутах.

// Уровень 6.6 задачника JavaScript
// №1

// Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, номер которого введен в инпут.

// №2

// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива.

// №3

// Дана таблица, кнопка и массив с цветами. Пусть нажатие на любую ячейку красит ее в случайный цвет из массива цветов.

// №4

// Дан текстареа и див.В текстареа вводится текст.Сделайте так, чтобы по нажатию Shift + Enter этот текст добавился в див.

// Уровень 6.7 задачника JavaScript
// №1

// Выведите даты всех выходных дней текущего года в виде списка ul.

// №2

// Дан абзац и кнопка. По клику на кнопку выведите в абзац название дня недели последнего дня текущего месяца.

// №3

// Дана кнопка и селект. По клику на кнопку заполните селект числами от первого до последнего дня текущего месяца.

// №4

// Дан инпут, кнопка и абзац.В инпут вводится число.По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу.Например, при вводе числа 5 у нас должна получится строка '00000'.

// Уровень 6.8 задачника JavaScript
// №1

// Дана таблица. По клику на ячейку, если нажата клавиша Shift, красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый.

// №2

// Дан див и кнопка.По первому клику на кнопку покажите див, а по второму клику - спрячьте.

// Уровень 6.9 задачника JavaScript
// №1

// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в следующий цвет из массива и так по кругу.

// №2

// Дан абзац и два инпута. В инпуты вводятся даты. Выведите в абзац, сколько дней между введенными датами.

// №3

// Дан список ul. По клику на любую li записывайте в конец ее текста порядковый номер клика по этой li.

// №4

// Дана кнопка и список ul, заполненный пунктами с числами.По клику на кнопку добавляйте новую li с числом, на единицу больше числа последей li из списка.

// Уровень 6.10 задачника JavaScript
// №1

// Дана кнопка, инпут и список ul, В инпут вводится текст. По клику на кнопку добавьте в список новую li с этим текстом, но только если этот текст больше текста последнего тега li из списка.

// №2

// Сделайте вручную HTML таблицу 8 на 8. По нажатию на кнопку покрасьте каждую четную ячейку в белый цвет, а нечетную - в черный.

// №3

// Напишите код, который выведет на экран таблицу умножения.

// №4

// Даны текстареа, инпут и кнопка. В текстареа вводится текст со словами. В инпут вводится слово. По нажатию на кнопку выведите на экран, сколько раз встречается это слово в веденном тексте.

//! ============================================

// 	"Вставляє цей HTML в список": {
//     "prefix": "js arrey HTML в список",
//     "body": [
//       "function itemTemplate(item) {",
//       "  return `<li>\\${item}</li>`;",
//       "}",
//       "",
//       "function itemsTemplate(arr) {",
//       "  return arr.map(itemTemplate).join('');",
//       "}",
//       "",
//       "button.addEventListener('click', () => {",
//       "ul.innerHTML = itemsTemplate(arr);",
//       "});",
//     ],
//     "description": "Create UL list from array with templates"
//   },

//! ============================================

// По клику на кнопку создание HTML таблици с заданной шириной и высотой.
//   btn.addEventListener('click', () => {
//     const rows = 4;      // высота (кол-во строк)
//     const cols = 5;      // ширина (кол-во колонок)

//     const table = document.createElement('table');
//     table.style.borderCollapse = 'collapse';

//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');

//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td');
//             td.textContent = `${i + 1}-${j + 1}`;
//             td.style.border = '1px solid black';
//             td.style.padding = '5px';
//             td.style.width = '50px';
//             td.style.height = '50px';

//             tr.append(td);
//         }

//         table.append(tr);
//     }

//     div.append(table);
// });

//! ============================================

//   е заменити на (е)
