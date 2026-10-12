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

// //? №5
// //? Дан инпут и абзац. В инпут вводится дата.Определите, была уже дата в текущем году.Результат выведите в абзац.

// const main = document.querySelector('main');
// const input = document.createElement('input');
// input.type = 'date';
// const text = document.createElement('p');
// main.append(input, text);

// input.addEventListener('input', e => {
//   const date = new Date(e.target.value);
//   const today = new Date();

//   if (date.getFullYear() !== today.getFullYear()) {
//     text.textContent = 'Дата не належить цьому року';
//   } else if (date <= today) {
//     text.textContent = 'Дата вже була цього року';
//   } else {
//     text.textContent = 'Дата ще не була цього року';
//   }
// });

//* =============================================

//! Уровень 6.4 задачника JavaScript

//* =============================================

//? №1
//? Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.

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
//   e.target.remove();
// });

//* =============================================

//? №2
//? Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка.

// const main = document.querySelector('main');
// const ul = document.createElement('ul');
// const input = document.createElement('input');
// main.append(ul, input);

// input.addEventListener('focusout', e => {
//   const li = document.createElement('li');
//   li.textContent = e.target.value;
//   ul.append(li);
//   e.target.value = '';
// });

//* =============================================

//? №3
//? Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов.

// const main = document.querySelector('main');

// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');

// const btn = document.createElement('button');
// btn.textContent = 'Додати рядок';

// const table = document.createElement('table');

// main.append(input1, input2, input3, btn, table);

// btn.addEventListener('click', () => {
//   const tr = document.createElement('tr');

//   for (const input of [input1, input2, input3]) {
//     const td = document.createElement('td');
//     td.textContent = input.value;
//     tr.append(td);
//   }

//   table.append(tr);
// });

//* =============================================

//? №4
//? Дан инпут и ul.В инпут вводится год.Выведите в список даты всех пятниц 13 - е в заданном году.

// const main = document.querySelector('main');

// const input = document.createElement('input');
// input.type = 'number';
// input.placeholder = 'Введіть рік';

// const ul = document.createElement('ul');

// main.append(input, ul);

// input.addEventListener('input', e => {
//   const year = Number(e.target.value);

//   ul.innerHTML = '';

//   for (let month = 0; month < 12; month++) {
//     const date = new Date(year, month, 13);

//     if (date.getDay() !== 5) {
//       continue;
//     }

//     const li = document.createElement('li');
//     li.textContent = date.toLocaleDateString('uk-UA');

//     ul.append(li);
//   }
// });

//* =============================================

//! Уровень 6.5 задачника JavaScript

//* =============================================

//? №1
//? Дан абзац и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в абзац, сколько полных лет юзеру.

// const main = document.querySelector('main');
// const text = document.createElement('p');
// const input = document.createElement('input');
// input.type = 'date';
// input.placeholder = 'YYYY-MM-DD';
// main.append(text, input);

// input.addEventListener('input', e => {
//   if (!e.target.value) {
//     text.textContent = '';
//     return;
//   }

//   const birthDate = new Date(`${e.target.value}T00:00:00`);
//   const today = new Date();

//   let age = today.getFullYear() - birthDate.getFullYear();

//   if (
//     today.getMonth() < birthDate.getMonth() ||
//     (today.getMonth() === birthDate.getMonth() &&
//       today.getDate() < birthDate.getDate())
//   ) {
//     age--;
//   }

//   text.textContent = age;
// });

//* =============================================

//? №2
//? Дан абзац и инпут. В инпут вводятся числа, разделенные запятыми. Сделайте так, чтобы по мере ввода данных в инпут в абзац выводилась сумма введеных чисел.

// const main = document.querySelector('main');
// const text = document.createElement('p');
// const input = document.createElement('input');
// input.placeholder = '1, 2, 3...';
// main.append(text, input);
// input.addEventListener('input', e => {
//   const sum = e.target.value.split(',').reduce((s, num) => s + Number(num), 0);
//   text.textContent = sum;
// });

//* =============================================

//? №3
//? Дан абзац и кнопка. Каждое нажатие на кнопку добавляет новый инпут. В инпуты вводятся числа. Сделайте так, чтобы по мере ввода чисел в инпуты в абзац выводилась сумма введеных чисел.

// const main = document.querySelector('main');
// const p = document.createElement('p');
// const button = document.createElement('button');
// button.textContent = 'Додати input';
// const ul = document.createElement('ul');
// main.append(p, button, ul);
// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   const input = document.createElement('input');
//   li.append(input);
//   ul.append(li);
// });

// let sum = 0;

// ul.addEventListener('input', () => {
//   const sum = [...ul.querySelectorAll('input')].reduce(
//     (total, input) => total + (Number(input.value) || 0),
//     0,
//   );

//   p.textContent = sum;
// });

//* =============================================

//? №4
//? Дано произвольное количество инпутов и кнопка. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел и выведите в текст кнопки.

// const main = document.querySelector('main');
// const ul = document.createElement('ul');
// const buttonInput = document.createElement('button');
// buttonInput.textContent = 'Створити Input';
// const buttonSum = document.createElement('button');
// buttonSum.textContent = 'Сумма';
// main.append(ul, buttonInput, buttonSum);

// buttonInput.addEventListener('click', () => {
//   const li = document.createElement('li');
//   const input = document.createElement('input');
//   input.type = 'number';
//   li.append(input);
//   ul.append(li);
// });

// buttonSum.addEventListener('click', () => {
//   const numArr = [...document.querySelectorAll('ul li input')];
//   const sum = numArr.reduce((z, num) => z + Number(num.value), 0);
//   buttonSum.textContent = sum;
// });

//* =============================================

//? №5
//? Даны два инпута, абзац и кнопка.В инпуты через запятую вводятся числа.По клику на кнопку выведите через запятую в абзац числа, которые есть в обоих инпутах.

// const main = document.querySelector('main');
// const input1 = document.createElement('input');
// input1.placeholder = '1,2,3...';
// const input2 = document.createElement('input');
// input2.placeholder = '1,2,3...';
// const text = document.createElement('p');
// const btn = document.createElement('button');
// btn.textContent = 'Сравнить';
// main.append(input1, input2, text, btn);

// btn.addEventListener('click', () => {
//   const numbers1 = input1.value.split(',').map(item => item.trim());
//   const numbers2 = input2.value.split(',').map(item => item.trim());

//   const commonNumbers = numbers1.filter(number => numbers2.includes(number));

//   text.textContent = commonNumbers.join(', ');
// });

//* =============================================

//! Уровень 6.6 задачника JavaScript

//* =============================================

//? №1
//? Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, номер которого введен в инпут.

// const main = document.querySelector('main');
// main.style.display = 'flex';
// main.style.flexDirection = 'column';
// main.style.alignItems = 'center';
// const words = ['яблуко', 'книга', 'сонце', 'річка'];
// const input = document.createElement('input');
// input.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'Виявити';
// const text = document.createElement('p');
// main.append(words.join(', '), input, btn, text);

// btn.addEventListener('click', () => {
//   const index = Number(input.value) - 1;
//   if (input.value === '' || index < 0 || index >= words.length) {
//     return (text.textContent = `Введіть число від 1 до ${words.length}`);
//   }
//   text.textContent = words[index];
// });

//* =============================================

//? №2
//? Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива.

// const main = document.querySelector('main');
// const text = document.createElement('p');
// text.textContent = 'При натисканні на кнопку колір тексту змінюватиметься!';
// const btn = document.createElement('button');
// btn.textContent = 'Змінити колір';
// main.append(text, btn);

const colors = [
  '#FF1744',
  '#F50057',
  '#D500F9',
  '#651FFF',
  '#3D5AFE',
  '#2979FF',
  '#00B0FF',
  '#00E5FF',
  '#1DE9B6',
  '#00E676',
  '#76FF03',
  '#C6FF00',
  '#FFEA00',
  '#FFC400',
  '#FF9100',
  '#FF3D00',
  '#FF6E40',
  '#FF5252',
  '#E040FB',
  '#7C4DFF',
  '#448AFF',
  '#40C4FF',
  '#18FFFF',
  '#64FFDA',
  '#69F0AE',
  '#B2FF59',
  '#EEFF41',
  '#FFFF00',
  '#FFD740',
  '#FFAB40',
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B',
  '#00A8E8',
  '#FF0080',
  '#FF00FF',
  '#A100FF',
  '#5B00FF',
  '#0055FF',
  '#00A3FF',
  '#00FFD1',
  '#00FF88',
  '#A8FF00',
  '#FFE600',
  '#FFB000',
  '#FF5E00',
  '#FF2E63',
  '#FB5607',
  '#8338EC',
  '#3A86FF',
  '#06D6A0',
  '#FFD166',
  '#EF476F',
  '#118AB2',
  '#F15BB5',
  '#FEE440',
  '#00BBF9',
  '#00F5D4',
  '#9B5DE5',
  '#FF70A6',
  '#FF9770',
  '#FFD670',
  '#E9FF70',
  '#70D6FF',
  '#B8F2E6',
  '#FAF3DD',
  '#CDB4DB',
  '#FFC8DD',
  '#A2D2FF',
  '#FFADAD',
  '#FFD6A5',
  '#FDFFB6',
  '#CAFFBF',
  '#9BF6FF',
  '#A0C4FF',
  '#BDB2FF',
  '#FFC6FF',
  '#FFFFFC',
  '#FF006E',
  '#FB5607',
  '#FFBE0B',
  '#8338EC',
  '#3A86FF',
  '#06D6A0',
  '#FF4D6D',
  '#C9184A',
  '#FF758F',
  '#FFCCD5',
  '#7209B7',
  '#560BAD',
  '#480CA8',
  '#3F37C9',
  '#4361EE',
  '#4895EF',
  '#4CC9F0',
  '#2EC4B6',
  '#CBF3F0',
  '#FFBF69',
  '#FF9F1C',
];

// btn.addEventListener('click', () => {
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   text.style.color = randomColor;
// });

//* =============================================

//? №3
//? Дана таблица, кнопка и массив с цветами. Пусть нажатие на любую ячейку красит ее в случайный цвет из массива цветов.

// const table = document.createElement('table');

// for (let i = 1; i <= 5; i++) {
//   const tr = document.createElement('tr');
//   for (let j = 1; j <= 5; j++) {
//     const td = document.createElement('td');
//     tr.append(td);
//   }
//   table.append(tr);
// }
// const btn = document.createElement('button');
// btn.textContent = 'Сброс';

// const main = document.querySelector('main');
// main.append(table, btn);

// table.addEventListener('click', e => {
//   if (e.target.tagName !== 'TD') {
//     return;
//   }
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   e.target.style.backgroundColor = randomColor;
// });

// btn.addEventListener('click', () => {
//   table.querySelectorAll('td').forEach(item => {
//     item.style.backgroundColor = '';
//   });
// });

//* =============================================

//? №4
//? Дан текстареа и див.В текстареа вводится текст.Сделайте так, чтобы по нажатию Shift + Enter этот текст добавился в див.

// const main = document.querySelector('main');
// const textarea = document.createElement('textarea');
// const div = document.createElement('div');
// main.append(textarea, div);
// textarea.addEventListener('keydown', e => {
//   if (e.shiftKey && e.key === 'Enter') {
//     div.textContent = textarea.value;
//     textarea.value = '';
//   }
// });

//* =============================================

//! Уровень 6.7 задачника JavaScript

//* =============================================

//? №1
//? Выведите даты всех выходных дней текущего года в виде списка ul.

// const main = document.querySelector('main');
// const ul = document.createElement('ul');
// main.append(ul);
// const year = new Date().getFullYear();

// for (let month = 0; month < 12; month++) {
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   for (let day = 1; day <= daysInMonth; day++) {
//     const date = new Date(year, month, day);
//     const weekDay = date.getDay();

//     if (weekDay === 0 || weekDay === 6) {
//       const li = document.createElement('li');
//       li.textContent = date.toLocaleDateString('uk-UA');
//       ul.append(li);
//     }
//   }
// }

//* =============================================

//? №2
//? Дан абзац и кнопка. По клику на кнопку выведите в абзац название дня недели последнего дня текущего месяца.

// const main = document.querySelector('main');
// const text = document.createElement('text');
// const btn = document.createElement('button');
// btn.textContent = 'День тиждня цього місяця';
// main.append(text, btn);

// btn.addEventListener('click', () => {
//   const lastDay = new Date(
//     new Date().getFullYear(),
//     new Date().getMonth() + 1,
//     0,
//   );
//   const weekday = lastDay.toLocaleDateString('uk-UA', { weekday: 'long' });

//   text.textContent = weekday;
// });

//* =============================================

//? №3
//? Дана кнопка и селект. По клику на кнопку заполните селект числами от первого до последнего дня текущего месяца.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Дати';
// const select = document.createElement('select');
// main.append(btn, select);
// btn.addEventListener('click', () => {
//   const lastDay = new Date(
//     new Date().getFullYear(),
//     new Date().getMonth() + 1,
//     0,
//   ).getDate();

//   select.replaceChildren();

//   for (let day = 1; day <= lastDay; day++) {
//     const option = document.createElement('option');
//     option.textContent = day;
//     select.append(option);
//   }
// });

//* =============================================

//? №4
//? Дан инпут, кнопка и абзац.В инпут вводится число.По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу.Например, при вводе числа 5 у нас должна получится строка '00000'.

// const main = document.querySelector('main');
// const input = document.createElement('input');
// input.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'Тисни тут';
// const text = document.createElement('p');
// main.append(input, btn, text);

// btn.addEventListener('click', () => {
//   const arr = input.value
//     .split('')
//     .map(num => (num = '0'))
//     .join(' ');
//   text.textContent = String(arr);
// });

//* =============================================

//! Уровень 6.8 задачника JavaScript

//* =============================================

//? №1
//? Дана таблица. По клику на ячейку, если нажата клавиша Shift, красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый.

// const main = document.querySelector('main');
// const table = document.createElement('table');

// for (let i = 1; i <= 5; i++) {
//   const tr = document.createElement('tr');
//   for (let j = 1; j <= 4; j++) {
//     const td = document.createElement('td');
//     td.textContent = `${i}, ${j}`;
//     tr.append(td);
//   }
//   table.append(tr);
// }

// main.append(table);

// table.addEventListener('click', e => {
//   if (e.target.tagName !== 'TD') {
//     return;
//   }
//   if (e.shiftKey) {
//     e.target.style.backgroundColor = 'red';
//   }
//   if (e.ctrlKey) {
//     e.target.style.backgroundColor = 'green';
//   }
// });

//* =============================================

//? №2
//? Дан див и кнопка.По первому клику на кнопку покажите див, а по второму клику - спрячьте.

// const main = document.querySelector('main');
// const div = document.querySelector('.div');
// div.style.width = '100%';
// div.style.height = '200px';
// div.style.backgroundColor = 'green';
// div.style.display = 'none';
// const btn = document.createElement('button');
// btn.textContent = 'Показати';
// main.append(div, btn);

// btn.addEventListener('click', () => {
//   div.style.display === 'none'
//     ? (div.style.display = 'block')
//     : (div.style.display = 'none');
// });

//* =============================================

//! Уровень 6.9 задачника JavaScript

//* =============================================

//? №1
//? Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в следующий цвет из массива и так по кругу.

// const main = document.querySelector('main');
// const text = document.createElement('p');
// text.textContent = 'Путин - хуйло!';
// const btn = document.createElement('button');
// btn.textContent = 'Зминити колір';
// main.append(text, btn);

// let index = 0;

// btn.addEventListener('click', () => {
//   text.style.color = colors[index];
//   index = (index + 1) % colors.length;
// });

//* =============================================

//? №2
//? Дан абзац и два инпута. В инпуты вводятся даты. Выведите в абзац, сколько дней между введенными датами.

// const main = document.querySelector('main');
// const text = document.createElement('p');
// const input1 = document.createElement('input');
// input1.type = 'date';
// const input2 = document.createElement('input');
// input2.type = 'date';
// main.append(text, input1, input2);

// input2.addEventListener('change', () => {
//   if (!input1.value || !input2.value) return;
//   const mDay =
//     Math.abs(new Date(input1.value) - new Date(input2.value)) /
//     (1000 * 60 * 60 * 24);
//   text.textContent = mDay;
// });

//* =============================================

//? №3
//? Дан список ul. По клику на любую li записывайте в конец ее текста порядковый номер клика по этой li.

// const main = document.querySelector('main');
// const ul = document.createElement('ul');
// const arr = [
//   'яблуко',
//   'будинок',
//   'машина',
//   'книга',
//   'сонце',
//   'дерево',
//   'вода',
//   'комп’ютер',
//   'телефон',
//   'квітка',
// ];
// arr.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ul.append(li);
// });
// main.append(ul);

// ul.addEventListener('click', e => {
//   if (e.target.tagName !== 'LI') return;

//   const count = Number(e.target.dataset.count || 0) + 1;

//   e.target.dataset.count = count;
//   e.target.textContent = e.target.textContent.replace(/\s*\(\d+\)$/, '');
//   e.target.textContent += ` (${count})`;
// });

//* =============================================

//? №4
//? Дана кнопка и список ul, заполненный пунктами с числами.По клику на кнопку добавляйте новую li с числом, на единицу больше числа последей li из списка.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Додати число';
// const ul = document.createElement('ul');
// ul.innerHTML = '<li>1</li><li>2</li><li>3</li>';
// main.append(btn, ul);

// btn.addEventListener('click', () => {
//   const num = Number(ul.lastElementChild.textContent) + 1;
//   const li = document.createElement('li');
//   li.textContent = num;
//   ul.append(li);
// });

//* =============================================

//! Уровень 6.10 задачника JavaScript

//* =============================================

//? №1
//? Дана кнопка, инпут и список ul, В инпут вводится текст. По клику на кнопку добавьте в список новую li с этим текстом, но только если этот текст больше текста последнего тега li из списка.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Додати текст';
// const input = document.createElement('input');
// const ul = document.createElement('ul');
// ul.innerHTML = `<li>1</li><li>2</li><li>3</li>`;
// main.append(btn, input, ul);

// btn.addEventListener('click', () => {
//   if (ul.lastElementChild.textContent.length < input.value.length) {
//     const li = document.createElement('li');
//     li.textContent = input.value;
//     ul.append(li);
//     input.value = '';
//   }
// });

//* =============================================

//? №2
//? Сделайте вручную HTML таблицу 8 на 8. По нажатию на кнопку покрасьте каждую четную ячейку в белый цвет, а нечетную - в черный.

// const main = document.querySelector('main');
// const table = document.createElement('table');
// table.innerHTML = ` <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>
//   <tr>
//     <td></td><td></td><td></td><td></td>
//     <td></td><td></td><td></td><td></td>
//   </tr>`;
// const btn = document.createElement('button');
// btn.textContent = 'Шахмати';
// main.append(table, btn);

// btn.addEventListener('click', () => {
//   const arrTD = [...table.querySelectorAll('td')];

//   arrTD.forEach((item, index) => {
//     item.style.backgroundColor = index % 2 === 0 ? 'black' : 'white';
//     item.style.width = '50px';
//     item.style.height = '50px';
//   });
// });

//* =============================================

//? №3
//? Напишите код, который выведет на экран таблицу умножения.

// const main = document.querySelector('main');
// const table = document.createElement('table');

// for (let i = 1; i <= 10; i++) {
//   const tr = document.createElement('tr');

//   for (let j = 1; j <= 10; j++) {
//     const td = document.createElement('td');
//     td.textContent = i * j;

//     if (i === 1 || j === 1) {
//       td.style.backgroundColor = 'grey';
//       td.style.fontWeight = 'bold';
//     }

//     tr.append(td);
//   }

//   table.append(tr);
// }

// main.append(table);
//* =============================================

//? №4
//? Даны текстареа, инпут и кнопка. В текстареа вводится текст со словами. В инпут вводится слово. По нажатию на кнопку выведите на экран, сколько раз встречается это слово в веденном тексте.

// const main = document.querySelector('main');
// const textArea = document.createElement('textarea');
// const input = document.createElement('input');
// const btn = document.createElement('button');
// btn.textContent = 'Количество';
// const text = document.createElement('p');
// main.append(textArea, input, btn, text);

// btn.addEventListener('click', () => {
//   const count = textArea.value.split(' ').reduce((total, word) => {
//     if (word === input.value) {
//       return total + 1;
//     }
//     return total;
//   }, 0);
//   text.textContent = count;
// });
