//! Уровень 7.1 задачника JavaScript

//* =======================================================================

//? №1
//? Дана кнопка и список ul, заполненный числами. По клику на кнопку удалите пункт списка, содержащий самое максимальное число.

// const main = document.querySelector('main');
// const btn = document.createElement('button');
// btn.textContent = 'Видалити';
// const ul = document.createElement('ul');
// ul.innerHTML = `
//   <li>25</li>
//   <li>26</li>
//   <li>65</li>
//   <li>66</li>
//   <li>85</li>
//   <li>28</li>`;
// main.append(btn, ul);

// btn.addEventListener('click', () => {
//   const listAll = [...document.querySelectorAll('li')];
//   if (listAll.length > 0) {
//     const sortList = listAll.toSorted((a, b) => Number(b.textContent) - Number(a.textContent));
//     sortList[0].remove();
//   }
//   return;
// });

//* =======================================================================

//? №2
//? Дан абзац, содержащий текст со словами. Дана также кнопка. По клику на кнопку возьмите каждое слово в свой тег span.

// const div = document.querySelector('.div');
// const text = document.createElement('p');
// text.textContent = 'текст со словами';
// const btn = document.createElement('button');
// btn.textContent = 'span';
// div.append(text, btn);

// btn.addEventListener('click', () => {
//   const arr = text.textContent
//     .split(' ')
//     .map(item => `<span>${item}</span>`)
//     .join(' ');
//   text.innerHTML = arr;
// });

//* =======================================================================

//? №3
//? Дан абзац, содержащий текст со словами и с дробями вида 1/2. Дана также кнопка. По клику на кнопку возьмите каждую дробь в свой тег span.

// const div = document.querySelector('.div');
// const text = document.createElement('p');
// text.textContent = 'текст со словами и с дробями вида 1/2 или 2/5';
// const btn = document.createElement('button');
// btn.textContent = 'Обгорнути дроби';
// div.append(text, btn);

// btn.addEventListener('click', () => {
//   const words = text.textContent.split(' ');

//   const result = words.map(word => {
//     if (/^\d+\/\d+$/.test(word)) {
//       const span = document.createElement('span');
//       span.textContent = word;
//       return span.outerHTML;
//     }

//     return word;
//   });

//   text.innerHTML = result.join(' ');
// });

//* =======================================================================

//? №4
//? Дана таблица и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в первой колонке все даты рождения юзера, а во второй колонке - соответствующие дни недели.

// const div = document.querySelector('.div');

// const input = document.createElement('input');
// input.type = 'date';

// const table = document.createElement('table');

// div.append(input, table);

// input.addEventListener('input', () => {
//   table.innerHTML = '';

//   if (!input.value) {
//     return;
//   }

//   const birthday = new Date(input.value);
//   const birthYear = birthday.getFullYear();
//   const birthMonth = birthday.getMonth();
//   const birthDay = birthday.getDate();
//   const currentYear = new Date().getFullYear();

//   if (birthday > new Date()) {
//     return;
//   }

//   for (let year = birthYear; year <= currentYear; year++) {
//     const date = new Date(year, birthMonth, birthDay);

//     const tr = document.createElement('tr');

//     const dateTd = document.createElement('td');
//     dateTd.textContent = date.toLocaleDateString('uk-UA');

//     const dayTd = document.createElement('td');
//     dayTd.textContent = date.toLocaleDateString('uk-UA', {
//       weekday: 'long',
//     });

//     tr.append(dateTd, dayTd);
//     table.append(tr);
//   }
// });

//* =======================================================================

//? №5
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	[
//? 		[1, 2, 3],
//? 		[1, 2, 3],
//? 		[1, 2, 3],
//? 	],
//? 	[
//? 		[1, 2, 3],
//? 		[1, 2, 3],
//? 		[1, 2, 3],
//? 	],
//? 	[
//? 		[1, 2, 3],
//? 		[1, 2, 3],
//? 		[1, 2, 3],
//? 	],
//? ]

// const arr1 = [1, 2, 3];
// const arr2 = [];
// const arr3 = [];

// for (let i = 0; i < 3; i++) {
//   arr2.push([...arr1]);
// }

// for (let i = 0; i < 3; i++) {
//   arr3.push([...arr2]);
// }

// console.log(arr3);

//* =======================================================================

//! Уровень 7.2 задачника JavaScript

//* =======================================================================

//? №1
//? Дан список ul с числами, инпут и кнопка. В инпут вводится число. По клику на кнопку покрасьте в красный цвет li, содержащее введенное число.

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// ul.innerHTML = `<li>2</li><li>5</li><li>8</li><li>6</li><li>12</li><li>42</li><li>72</li><li>26</li><li>28</li><li>88</li>`;
// const input = document.createElement('input');
// input.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'color red';
// div.append(ul, input, btn);

// btn.addEventListener('click', () => {
//   if (input.value === '') return;
//   const num = Number(input.value);
//   const arr = [...document.querySelectorAll('li')];
//   const index = arr.findIndex(li => Number(li.textContent) === num);
//     if (index === -1) return;
//   arr[index].style.backgroundColor = 'red';
// });

//* =======================================================================

//? №2
//? Дан инпут. В него вводится год. Выведите даты всех пятниц 13-е заданного года в виде списка ul.

// const div = document.querySelector('.div');
// const input = document.createElement('input');
// input.type = 'number';
// const ul = document.createElement('ul');
// div.append(input, ul);

// input.addEventListener('input', () => {
//   ul.innerHTML = '';

//   const year = Number(input.value);

//   if (!input.value || year < 1 || !Number.isInteger(year)) return;

//   for (let month = 0; month < 12; month++) {
//     const date = new Date(year, month, 13);

//     if (date.getDay() === 5) {
//       const li = document.createElement('li');
//       li.textContent = date.toLocaleDateString('uk-UA');
//       ul.append(li);
//     }
//   }
// });

//* =======================================================================

//? №3
//? Даны чекбоксы, с помощью которых у юзера спрашиваются языки, которые он знает. Дан также абзац. По мере выбора чекбоксов юзером выводите в абзац выбранные языки через запятую.

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// ul.innerHTML = `
// <li><input type="checkbox" />JavaScript</li>
// <li><input type="checkbox" />TypeScript</li>
// <li><input type="checkbox" />Python</li>
// <li><input type="checkbox" />Java</li>
// <li><input type="checkbox" />C#</li>
// <li><input type="checkbox" />C++</li>
// <li><input type="checkbox" />PHP</li>
// <li><input type="checkbox" />Go</li>
// <li><input type="checkbox" />Kotlin</li>
// <li><input type="checkbox" />Swift</li>
// <li><input type="checkbox" />SQL</li>
// <li><input type="checkbox" />Rust</li>
// `;
// const text = document.createElement('p');
// div.append(ul, text);

// ul.addEventListener('change', e => {
//   if (e.target.tagName !== 'INPUT') return;
//   const arr = [...document.querySelectorAll('li input')];
//   const arrText = arr
//     .filter(item => item.checked === true)
//     .map(item => item.parentElement.textContent);

//   text.textContent = arrText.join(', ');
// });

//* =======================================================================

//? №4
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	['x'],
//? 	['x', 'x'],
//? 	['x', 'x', 'x'],
//? 	['x', 'x', 'x', 'x'],
//? 	['x', 'x', 'x', 'x', 'x'],
//? ]

// function xxx() {
//   const arr = [];
//   let count = 0;

//   for (let i = 0; i < 5; i++) {
//     const arrX = [];
//     count++;
//     for (let j = 0; j < count; j++) {
//       arrX.push('x');
//     }
//     arr.push(arrX);
//   }

//   return arr;
// }
// console.log(xxx());

//* =======================================================================

//? №5
//? Дан следующая верстка:
//? <p>111</p>
//? <p>222</p>
//? <p>333</p>
//? <p>444</p>
//? <p>555</p>
//? Получите содержимое текстов абзацев в виде массива:
//? [
//? 	'111',
//? 	'222',
//? 	'333',
//? 	'444',
//? 	'555',
//? ]

// const div = document.querySelector('.div');
// div.innerHTML = `<p>111</p><p>222</p><p>333</p><p>444</p><p>555</p>`;
// const arr = [...div.querySelectorAll('p')].map(item => item.textContent);
// console.log(arr);

//! =======================================================================

//; Уровень 7.3 задачника JavaScript

//! =======================================================================

//? №1
//? Дан абзац, содержащий текст со словами. Некоторые слова повторяются два раза. По клику на кнопку удалите лишние одинаковые рядом стоящие слова.

// const div = document.querySelector('.div');
// const text = document.createElement('p');
// text.textContent = 'текст зі словами словами';
// const btn = document.createElement('button');
// btn.textContent = 'Видалити повтори';
// div.append(text, btn);

// btn.addEventListener('click', () => {
//   const arrText = text.textContent.split(' ');

//   for (let i = 0; i < arrText.length - 1; i++) {
//     if (arrText[i] === arrText[i + 1]) {
//       arrText.splice(i + 1, 1);
//       i--;
//     }
//   }

//   text.textContent = arrText.join(' ');
// });

//* =======================================================================

//? №2
//? Сделайте функцию, которая будет возвращать массив, заполненный N случайными числами из заданного диапазона так, чтобы числа не повторялись.

// function numArr(min, max, N) {
//   const arr = [];
//   while (arr.length < N) {
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (!arr.includes(randomNumber)) {
//       arr.push(randomNumber);
//     }
//   }
//   return arr;
// }

// console.log(numArr(1, 10, 5));

//* =======================================================================

//? №3
//? Дан следующая структура данных:
//? let data = [
//? 	{
//? 		text: '111',
//? 		href: '1.html',
//? 	},
//? 	{
//? 		text: '222',
//? 		href: '2.html',
//? 	},
//? 	{
//? 		text: '333',
//? 		href: '3.html',
//? 	},
//? ]
//? Сформируйте с помощью этих данных следующую верстку:
//? <a href="1.html">111</a>
//? <a href="2.html">222</a>
//? <a href="3.html">222</a>

// const div = document.querySelector('.div');
// let data = [
//   {
//     text: '111',
//     href: '1.html',
//   },
//   {
//     text: '222',
//     href: '2.html',
//   },
//   {
//     text: '333',
//     href: '3.html',
//   },
// ];

// div.innerHTML = data
//   .map(item => `<a href="${item.href}">${item.text}</a>`)
//   .join('');

//! =======================================================================

//; Уровень 7.4 задачника JavaScript

//! =======================================================================

//? №1
//? Дан ul. Выведите в него дни текущего месяца. Текущий день, а также выходные, выделите другими цветами.

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth();
// const dates = new Date(year, month + 1, 0).getDate();

// for (let i = 1; i <= dates; i++) {
//   const dayI = new Date(year, month, i);
//   const li = document.createElement('li');
//   li.textContent = i;
//   if (i === today.getDate()) {
//     li.style.backgroundColor = 'green';
//   } else if (dayI.getDay() === 0 || dayI.getDay() === 6) {
//     li.style.backgroundColor = 'red';
//   }
//   ul.append(li);
// }
// div.append(ul);

//* =======================================================================

//? №2
//? Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово выделялось красным цветом.

// const div = document.querySelector('.div');
// const text = document.createElement('p');
// text.textContent = 'текст зі словами';
// div.append(text);
// const arr = text.textContent.split(' ').map(item => `<span>${item}</span>`);
// text.innerHTML = arr.join(' ');
// text.addEventListener('click', e => {
//   if (e.target.tagName !== 'SPAN') {
//     return;
//   }
//   e.target.style.color = 'red';
// });

//* =======================================================================

//? №3
//? Дан инпут и кнопка. В него вводится число из четного количества цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма половины цифр равна сумме второй половине цифр.

// const div = document.querySelector('.div');
// const input = document.createElement('input');
// input.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'Щасливий білет';
// const text = document.createElement('p');
// div.append(input, btn, text);

// btn.addEventListener('click', () => {
//   const arr = input.value.split('');
//   if (arr.length % 2 !== 0 || arr.length === 0) {
//     return (text.textContent = 'Число повинно містити парну кількість цифр');
//   }
//   const num1 = arr
//     .slice(0, arr.length / 2)
//     .reduce((z, num) => z + Number(num), 0);
//   const num2 = arr.slice(arr.length / 2).reduce((z, num) => z + Number(num), 0);
//   if (num1 !== num2) {
//     return (text.textContent = 'Це число не є щасливим квитком');
//   }
//   return (text.textContent = 'Це число є щасливим квитком!');
// });

//* =======================================================================

//? №4
//? Дан инпут. В него вводится текст. Сделайте так, чтобы в инпут нельзя было ввести больше десяти символов. При превышении количества, символы просто не должны вводиться.

//* Варіант №1
// const div = document.querySelector('.div');
// const input = document.createElement('input');
// div.append(input);

// input.addEventListener('input', () => {
//   if (input.value.split('').length > 9) {
//     input.disabled = true;
//   }
// });

//* Варіант №2
// const div = document.querySelector('.div');
// const input = document.createElement('input');
// div.append(input);

// input.addEventListener('input', () => {
//   if (input.value.length > 10) {
//     input.value = input.value.slice(0, 10);
//   }
// });

//* Варіант №3
// const input = document.createElement('input');
// input.maxLength = 10;
// div.append(input);

//* =======================================================================

//? №5
//? Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку сделайте так, чтобы в абзаце начал тикать обратный отсчет от введенного в инпут числа до нуля.

// const div = document.querySelector('.div');
// const input = document.createElement('input');
// input.type = 'number';
// input.min = '0';

// const text = document.createElement('p');
// const btn = document.createElement('button');
// btn.textContent = 'Старт';

// div.append(input, text, btn);

// let timer;

// btn.addEventListener('click', () => {
//   clearInterval(timer);

//   let num = Number(input.value);

//   if (input.value.trim() === '' || num < 0 || !Number.isInteger(num)) {
//     return;
//   }

//   text.textContent = num;

//   timer = setInterval(() => {
//     if (num <= 0) {
//       clearInterval(timer);
//       return;
//     }

//     num--;
//     text.textContent = num;
//   }, 1000);
// });

//* =======================================================================

//? №6
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	[1],
//? 	[1, 2],
//? 	[1, 2, 3],
//? 	[1, 2, 3, 4, 5],
//? 	[1, 2, 3, 4, 5, 6],
//? ]

// const arr = [];

// for (let i = 1; i <= 6; i++) {
//   const arr1 = [];
//   for (let j = 1; j <= i; j++) {
//     arr1.push(j);
//   }
//   arr.push(arr1);
// }

// console.log(arr);

//! =======================================================================

//; Уровень 7.5 задачника JavaScript

//! =======================================================================

//? №1
//? Дана кнопка. По клику на кнопку плавно прокрутите окно браузера до самого низа.

// const div = document.querySelector('.div');
// const btn = document.createElement('button');
// btn.textContent = 'Вниз';
// div.append(btn);
// btn.addEventListener('click', () => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
// });

//* =======================================================================

//? №2
//? Даны кнопки и дивы. Каждая кнопка соответствует своему диву. Сделайте так, чтобы по первому клику на кнопку открывался ее див, а по второму клику - скрывался.

// const div = document.querySelector('.div');
// const btn1 = document.createElement('button');
// btn1.textContent = 'div1';
// const btn2 = document.createElement('button');
// btn2.textContent = 'div2';
// const btn3 = document.createElement('button');
// btn3.textContent = 'div3';
// const div1 = document.createElement('div');
// div1.textContent = 'div1';
// const div2 = document.createElement('div');
// div2.textContent = 'div2';
// const div3 = document.createElement('div');
// div3.textContent = 'div3';
// div.append(btn1, btn2, btn3);

// div.addEventListener('click', e => {
//   if (e.target.tagName !== 'BUTTON') return;
//   if (e.target === btn1) {
//     [...div.children].includes(div1) ? div1.remove() : div.append(div1);
//   }
//   if (e.target === btn2) {
//     [...div.children].includes(div2) ? div2.remove() : div.append(div2);
//   }
//   if (e.target === btn3) {
//     [...div.children].includes(div3) ? div3.remove() : div.append(div3);
//   }
// });

//* =======================================================================

//? №3
//? Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.

// function translit(str) {
//   const map = {
//     а: 'a',
//     б: 'b',
//     в: 'v',
//     г: 'g',
//     ґ: 'g',
//     д: 'd',
//     е: 'e',
//     ё: 'yo',
//     є: 'ye',
//     ж: 'zh',
//     з: 'z',
//     и: 'i',
//     і: 'i',
//     ї: 'yi',
//     й: 'y',
//     к: 'k',
//     л: 'l',
//     м: 'm',
//     н: 'n',
//     о: 'o',
//     п: 'p',
//     р: 'r',
//     с: 's',
//     т: 't',
//     у: 'u',
//     ф: 'f',
//     х: 'kh',
//     ц: 'ts',
//     ч: 'ch',
//     ш: 'sh',
//     щ: 'shch',
//     ъ: '',
//     ы: 'y',
//     ь: '',
//     э: 'e',
//     ю: 'yu',
//     я: 'ya',
//   };

//   return str.replace(/[а-яёіїєґъыьэ]/gi, char => {
//     const lower = char.toLowerCase();
//     const result = map[lower];

//     if (result === undefined) return char;

//     return char === lower
//       ? result
//       : result.charAt(0).toUpperCase() + result.slice(1);
//   });
// }

// console.log(translit('Привет, мир!'));
// console.log(translit('Привіт, світе!'));
// console.log(translit('Київ, Їжак, Ґрунт'));

//* =======================================================================

//? №4
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	['x', 'x', 'x', 'x', 'x'],
//? 	['x', 'x', 'x', 'x'],
//? 	['x', 'x', 'x'],
//? 	['x', 'x'],
//? 	['x'],
//? ]

// function funcX() {
//   let arr1 = ['x', 'x', 'x', 'x', 'x'];
//   let arr = [];

//   for (let i = 5; i > 0; i--) {
//     arr.push(arr1.slice(0, i));
//   }

//   return arr;
// }
// console.log(funcX());

//! =======================================================================

//; Уровень 7.6 задачника JavaScript

//! =======================================================================

//? №1
//? На странице через абсолютное позиционирование расположены два дива. По клику на кнопку проверьте, накладываются ли эти дивы друга на друга или нет.

// const div = document.querySelector('.div');
// div.style.position = 'relative';
// const div1 = document.createElement('div');
// div1.textContent = 'div1';
// div1.style.position = 'absolute';
// div1.style.right = '20px';
// div1.style.bottom = '20px';
// const div2 = document.createElement('div');
// div2.textContent = 'div2';
// div2.style.position = 'absolute';
// div2.style.top = '20px';
// div2.style.right = '20px';
// const btn = document.createElement('button');
// btn.textContent = 'Сравнить';
// div.append(div1, div2, btn);

// btn.addEventListener('click', () => {
//   const rect1 = div1.getBoundingClientRect();
//   const rect2 = div2.getBoundingClientRect();
//   const isOverlapping =
//     rect1.left < rect2.right &&
//     rect1.right > rect2.left &&
//     rect1.top < rect2.bottom &&
//     rect1.bottom > rect2.top;
//   console.log(isOverlapping ? 'Дивы накладываются' : 'Дивы не накладываются');
// });

//* =======================================================================

//? №2
//? Дана кнопка и ul. По клику на кнопку выведите список всех возможных счастливых билетов. Билет представляет собой строку из шести цифр, может быть с нулями спереди. Билет считается счастливым, если сумма сумма первых трех цифр равна сумме вторых трех цифр.

// const numbers = [];
// for (let i = 0; i < 1000000; i++) {
//   numbers.push(String(i).padStart(6, '0'));
// }
// const div = document.querySelector('.div');
// const btn = document.createElement('button');
// btn.textContent = 'Щасливі квитки';
// const ul = document.createElement('ul');
// div.append(btn, ul);
// btn.addEventListener('click', () => {
//   const arr = numbers.filter(item => {
//     const num1 = item
//       .split('')
//       .slice(0, 3)
//       .reduce((z, num) => z + Number(num), 0);

//     const num2 = item
//       .split('')
//       .slice(3)
//       .reduce((z, num) => z + Number(num), 0);
//     return num1 === num2;
//   });
//   arr.map(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     ul.append(li);
//   });
// });

//* =======================================================================

//? №3
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	'x',
//? 	'xx',
//? 	'xxx',
//? 	'xxxx',
//? 	'xxxxx',
//? ]

// function funcX() {
//   const arr = [];
//   let str = '';
//   for (let i = 1; i <= 5; i++) {
//     arr.push((str += 'x'));
//   }
//   return arr;
// }
// console.log(funcX());

//* =======================================================================

//? №4
//? Дан такой объект:
//? let data = {
//? 	2018: {
//? 		11: {
//? 			29: [1, 2, 3],
//? 			30: [4, 5],
//? 		},
//? 		12: {
//? 			30: [6, 7],
//? 			31: [8, 9],
//? 		},
//? 	},
//? 	2019: {
//? 		12: {
//? 			29: [10, 11],
//? 			30: [12, 13],
//? 			31: [14, 15],
//? 		}
//? 	},
//? }
//? Запишите все элементы этого объекта в какой-нибудь массив, вот так:
//? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let data = {
//   2018: {
//     11: {
//       29: [1, 2, 3],
//       30: [4, 5],
//     },
//     12: {
//       30: [6, 7],
//       31: [8, 9],
//     },
//   },
//   2019: {
//     12: {
//       29: [10, 11],
//       30: [12, 13],
//       31: [14, 15],
//     },
//   },
// };
// const result = Object.values(data).map(item =>
//   Object.values(item).map(it => Object.values(it).flat()),
// );

// console.log(result.flat(Infinity));

//! =======================================================================

//; Уровень 7.7 задачника JavaScript

//! =======================================================================

//? №1
//? Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива.

// const arr = [10, 20, 30, 40, 13, 23, 10, 40];
// const result = arr.reduce(
//   (z, num) =>
//     z +
//     String(num)
//       .split('')
//       .reduce((x, n) => {
//         if (Number(n) === 3) {
//           return x + 1;
//         }
//         return x;
//       }, 0),
//   0,
// );
// console.log(result);

//* =======================================================================

//? №2
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	'1',
//? 	'12',
//? 	'123',
//? 	'1234',
//? 	'12345',
//? ]

// let num = '';
// const arr = [];
// for (let i = 1; i < 6; i++) {
//   num += i;
//   arr.push(num);
// }
// console.log(arr);

//* =======================================================================

//? №3
//? Дан массив:
//? let affairs = [
//? 	{
//? 		date:  '2019-12-29',
//? 		event: 'name1',
//? 	},
//? 	{
//? 		date:  '2019-12-31',
//? 		event: 'name2',
//? 	},
//? 	{
//? 		date:  '2019-12-29',
//? 		event: 'name3',
//? 	},
//? 	{
//? 		date:  '2019-12-30',
//? 		event: 'name4',
//? 	},
//? 	{
//? 		date:  '2019-12-29',
//? 		event: 'name5',
//? 	},
//? 	{
//? 		date:  '2019-12-31',
//? 		event: 'name6',
//? 	},
//? 	{
//? 		date:  '2019-12-29',
//? 		event: 'name7',
//? 	},
//? 	{
//? 		date:  '2019-12-30',
//? 		event: 'name8',
//? 	},
//? 	{
//? 		date:  '2019-12-30',
//? 		event: 'name9',
//? 	},
//? ]
//? Получите из этого массива уникальные даты, то есть вот так:
//? ['2019-12-29', '2019-12-30', '2019-12-31']

// let affairs = [
//   {
//     date: '2019-12-29',
//     event: 'name1',
//   },
//   {
//     date: '2019-12-31',
//     event: 'name2',
//   },
//   {
//     date: '2019-12-29',
//     event: 'name3',
//   },
//   {
//     date: '2019-12-30',
//     event: 'name4',
//   },
//   {
//     date: '2019-12-29',
//     event: 'name5',
//   },
//   {
//     date: '2019-12-31',
//     event: 'name6',
//   },
//   {
//     date: '2019-12-29',
//     event: 'name7',
//   },
//   {
//     date: '2019-12-30',
//     event: 'name8',
//   },
//   {
//     date: '2019-12-30',
//     event: 'name9',
//   },
// ];
// const result = affairs.map(item => item.date);
// console.log([...new Set(result)]);

//! =======================================================================

//; Уровень 7.8 задачника JavaScript

//! =======================================================================

//? №1
//? Дана кнопка и список ul. По клику на кнопку добавьте в конец каждой li ссылку, по нажатию на которую текст li будет перечеркиваться (но не текст ссылки).

// const div = document.querySelector('.div');
// const btn = document.createElement('button');
// btn.textContent = 'Додати посилання';
// const ul = document.createElement('ul');
// ul.innerHTML = `<li><p>один</p></li>
//   <li><p>два</p></li>
//   <li><p>три</p></li>
//   <li><p>чотири</p></li>
//   <li><p>п'ять</p></li>`;
// div.append(btn, ul);

// btn.addEventListener('click', () => {
//   const arr = ul.querySelectorAll('li');
//   arr.forEach(item => {
//     if (item.querySelector('a')) return;
//     const a = document.createElement('a');
//     a.href = '#';
//     a.textContent = ' Закреслити';
//     item.append(a);
//   });
// });

// ul.addEventListener('click', e => {
//   if (e.target.tagName !== 'A') {
//     return;
//   }
//   e.preventDefault();
//   e.target.previousElementSibling.style.textDecoration = 'line-through';
// });

//* =======================================================================

//? №2
//? Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово меняло порядок своих букв на обратный.

// const div = document.querySelector('.div');
// const p = document.createElement('p');
// p.textContent = 'текст со словами';
// div.append(p);

// p.innerHTML = p.textContent
//   .split(' ')
//   .map(item => `<span>${item}</span>`)
//   .join(' ');

// p.addEventListener('click', e => {
//   if (e.target.tagName !== 'SPAN') return;
//   e.target.textContent = e.target.textContent.split('').reverse().join('');
// });

//* =======================================================================

//? №3
//? Дан следующий массив:
//? let users = [
//? 	{id: 1, name: 'user1', surn: 'surn1', age: 30},
//? 	{id: 2, name: 'user2', surn: 'surn2', age: 31},
//? 	{id: 3, name: 'user3', surn: 'surn3', age: 32},
//? ];
//? Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.

// let users = [
//   { id: 1, name: 'user1', surn: 'surn1', age: 30 },
//   { id: 2, name: 'user2', surn: 'surn2', age: 31 },
//   { id: 3, name: 'user3', surn: 'surn3', age: 32 },
// ];

// const div = document.querySelector('.div');

// const table = document.createElement('table');
// const tr = document.createElement('tr');
// for (const key in users[0]) {
//   const th = document.createElement('th');
//   th.textContent = key;
//   tr.append(th);
// }
// table.append(tr);
// for (let i = 0; i < users.length; i++) {
//   const tr = document.createElement('tr');
//   for (const key in users[i]) {
//     const td = document.createElement('td');
//     td.textContent = users[i][key];
//     tr.append(td);
//   }
//   table.append(tr);
// }

// div.append(table);

//* =======================================================================

//? №4
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	'1',
//? 	'12',
//? 	'123',
//? 	'1234',
//? 	'12345',
//? 	'1234',
//? 	'123',
//? 	'12',
//? 	'1',
//? ]

// function funcX() {
//   const arr = [];
//   let str = '';
//   for (let i = 1; i < 6; i++) {
//     arr.push((str += String(i)));
//   }
//   for (let j = 1; j < 5; j++) {
//     arr.push(str.slice(0, str.length - j));
//   }
//   return arr;
// }
// console.log(funcX());

//! =======================================================================

//; Уровень 7.9 задачника JavaScript

//! =======================================================================

//? №1
//? Дан абзац и инпут. В абзаце через пробел написаны слова. В инпут вводится некоторое слово. По потери фокуса проверьте, есть ли такое слово в абзаце, и если нет - добавьте его.

// const div = document.querySelector('.div');
// const p = document.createElement('p');
// p.textContent = 'В абзаце через пробел написаны слова';
// const input = document.createElement('input');
// div.append(p, input);

// input.addEventListener('blur', e => {
//   if (p.textContent.split(' ').includes(e.target.value.trim())) return;

//   p.textContent += ` ${e.target.value.trim()}`;
//   e.target.value = '';
// });

//* =======================================================================

//? №2
//? Напишите программу, которая сформирует следующую строку:
//? '-1-12-23-34-45-'

// const prog = '-1-12-23-34-45-';
// console.log(prog);

// function funcX() {
//   let str = '-';
//   for (let i = 1; i <= 45; i += 11) {
//     str += String(i) + '-';
//   }
//   return str;
// }
// console.log(funcX());

//* =======================================================================

//? №3
//? Напишите программу, которая сформирует следующий массив:
//? [
//? 	12,
//? 	34,
//? 	56,
//? 	78,
//? 	100,
//? ]

// function funcX() {
//   const arr = [];
//   for (let i = 12; i <= 100; i += 22) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(funcX());

//* =======================================================================

//? №4
//? Дан следующая верстка:
//? <a href="1.html">111</a>
//? <a href="2.html">222</a>
//? <a href="3.html">222</a>
//? Получите содержимое адресов и текстов ссылок в виде следующей структуры:
//? [
//? 	{
//? 		text: '111',
//? 		href: '1.html',
//? 	},
//? 	{
//? 		text: '222',
//? 		href: '2.html',
//? 	},
//? 	{
//? 		text: '333',
//? 		href: '3.html',
//? 	},
//? ]

// const div = document.querySelector('.div');
// div.innerHTML = `
// <a href="1.html">111</a>
// <a href="2.html">222</a>
// <a href="3.html">333</a>`;

// function funcX() {
//   const arr = [];
//   div.querySelectorAll('a').forEach(item => {
//     arr.push({ text: item.textContent, href: item.getAttribute('href') });
//   });
//   return arr;
// }
// console.log(funcX());

//* =======================================================================

//; Уровень 7.10 задачника JavaScript

//* =======================================================================

// №1
// Напишите программу, которая сформирует следующую строку:
// '-x-xx-xxx-xx-x-'

//* =======================================================================

// №2

// Напишите программу, которая сформирует следующую строку:

// '11 12 13 21 22 23 31 32 33'

//* =======================================================================

// №3

// Даны дивы с названиями продуктов и ценами. Дан также абзац. Сделайте так, чтобы кликами можно было выбрать несколько продуктов и их суммарная стоимость при этом писалась бы в абзац.

//* =======================================================================

// №4

// Дана таблица прямоугольного размера с нечетным количеством рядов и колонок.Дана кнопка.По клику на кнопку выделите каким - нибудь цветом центральную ячейку.

//* =======================================================================
