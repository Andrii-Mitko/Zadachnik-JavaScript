//! =======================================================================

//; Уровень 8.1 задачника JavaScript

//! =======================================================================

//? №1
//? Дан массив:
//? [
//? 	[1, 2, 3],
//? 	[1, 2],
//? 	[1, 2, 3, 4, 5],
//? 	[1],
//? 	[1, 2, 3, 4],
//? ]
//? Отсортируйте элементы массива по возрастанию количества элементов в подмассиве.

// const arr = [[1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4]];
// const arr1 = arr.toSorted((a, b) => a.length - b.length);
// console.log(arr1);

//* =======================================================================

//? №2
//? Дан массив:
//? [
//? 	[2, 4, 5],
//? 	[1, 2, 3],
//? 	[0, 1, 1],
//? 	[5, 7, 1],
//? ]
//? Отсортируйте элементы массива по возрастанию суммы элементов подмассива.

// const arr = [
//   [2, 4, 5],
//   [1, 2, 3],
//   [0, 1, 1],
//   [5, 7, 1],
// ];
// const result = arr.toSorted(
//   (a, b) => a.reduce((z, num) => z + num, 0) - b.reduce((z, num) => z + num, 0),
// );
// console.log(result);

//* =======================================================================

//? №3
//? Выведите на экран следующую пирамидку:
//? x
//? xx
//? xxx
//? xxxx
//? xxxxx

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// let x = '';
// for (let i = 1; i <= 5; i++) {
//   const li = document.createElement('li');
//   x = 'x'.repeat(i);
//   li.textContent = x;
//   ul.append(li);
// }
// div.append(ul);

//! =======================================================================

//; Уровень 8.2 задачника JavaScript

//! =======================================================================

//? №1
//? В текстареа вводится текст со словами. По потери фокуса сделайте таблицу, в первой колонке которой будут слова из текста, во второй колонке - количество раз, которое это слово встречается, а в третьей - процентное содержание этого слова в текста.

// const textarea = document.createElement('textarea');

// const div = document.querySelector('.div');
// div.append(textarea);

// textarea.addEventListener('blur', () => {
//   const oldTable = document.querySelector('table');
//   if (oldTable) {
//     oldTable.remove();
//   }
//   const text = textarea.value.trim();
//   if (text === '') return;
//   const arrTextFull = text.match(/[а-яёіїєґa-z]+/gi) ?? [];
//   if (arrTextFull.length === 0) return;
//   const arrText = [...new Set(arrTextFull)];

//   const table = document.createElement('table');
//   for (let i = 0; i < arrText.length; i++) {
//     const tr = document.createElement('tr');

//     for (let j = 1; j <= 3; j++) {
//       const td = document.createElement('td');
//       let str = arrText[i];
//       const count = arrTextFull.filter(item => item === str).length;
//       if (j === 1) {
//         td.textContent = str;
//         tr.append(td);
//       }
//       if (j === 2) {
//         td.textContent = count;
//         tr.append(td);
//       }
//       if (j === 3) {
//         const res = (count / arrTextFull.length) * 100;
//         td.textContent = `${Math.round(res)}%`;
//         tr.append(td);
//       }
//     }
//     table.append(tr);
//   }
//   div.append(table);
// });

//* =======================================================================

//? №2
//? Дан список ul и кнопка. По нажатию на кнопку отсортируйте пункты списка по возрастанию.

// const ul = document.createElement('ul');
// ul.innerHTML = `
// <li>Пункт 144</li>
// <li>Пункт 24</li>
// <li>Пункт 30</li>
// <li>Пункт 4</li>
// <li>Пункт 10</li>
// `;
// const btn = document.createElement('button');
// btn.textContent = 'відсортировати';
// const div = document.querySelector('.div');
// div.append(ul, btn);
// btn.addEventListener('click', headers);
// function headers() {
//   const arr = [...ul.querySelectorAll('li')].toSorted(
//     (a, b) =>
//       Number(a.textContent.match(/\d+/)[0]) -
//       Number(b.textContent.match(/\d+/)[0]),
//   );
//   ul.append(...arr);
// }

//* =======================================================================

//? №3
//? Дан массив, подмассивы которого содержат цифры:
//? [
//? 	[1, 2, 3],
//? 	[4, 5, 6],
//? 	[7, 8, 9],
//? ]
//? Слейте элементы этого массива в числа:
//? [123, 456, 789]

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const result = arr.map(item => Number(item.join('')));
// console.log(result);

//* =======================================================================

//? №4
//? Выведите на экран следующую пирамидку:
//? xx
//? xxxx
//? xxxxxx
//? xxxxxxxx
//? xxxxxxxxxx

// const ul = document.createElement('ul');
// for (let i = 2; i < 11; i += 2) {
//   const li = document.createElement('li');
//   li.textContent = 'x'.repeat(i);
//   ul.append(li);
// }
// const div = document.querySelector('.div');
// div.append(ul);

//! =======================================================================

//; Уровень 8.3 задачника JavaScript

//! =======================================================================

//? №1
//? Пусть даны чекбоксы, отмеченные и нет. По нажатию на кнопку сделайте так, чтобы все чекбоксы сменили свое состояние.

// const arr = [
//   'Перший',
//   'Другий',
//   'Третій',
//   'чотвертий',
//   "п'ятий",
//   'шостий',
//   'сьомий',
//   'восьмий',
//   "дев'ятий",
//   'десятий',
// ];
// const ul = document.createElement('ul');
// arr.forEach(text => {
//   const li = document.createElement('li');
//   const input = document.createElement('input');
//   input.type = 'checkbox';
//   const label = document.createElement('label');
//   label.append(input, text);
//   li.append(label);
//   ul.append(li);
// });
// const btn = document.createElement('button');
// btn.textContent = 'Змінити';
// const div = document.querySelector('.div');
// div.append(ul, btn);

// btn.addEventListener('click', change);
// function change() {
//   ul.querySelectorAll('input').forEach(item => {
//     item.checked = !item.checked;
//   });
// }

//* =======================================================================

//? №2
//? Дан следующий массив:
//? let arr = [1, 2, 3, 4, 5, 6];
//? Дано также число:
//? let num = 3;
//? Добавьте в приведенный массив столько пустых строк, чтобы длина массива стала равна квадрату числа из переменной.

// let arr = [1, 2, 3, 4, 5, 6];
// let num = 3;
// const numLength = num * num - arr.length;
// if (numLength > 1) {
//   for (let i = 0; i < numLength; i++) {
//     arr.push('');
//   }
// }
// console.log(arr);

//* =======================================================================

//? №3
//? Выведите на экран следующую пирамидку:
//? 111
//? 222
//? 333
//? 444
//? 555
//? 666
//? 777
//? 888
//? 999

// const arr = [];
// for (let i = 1; i <= 9; i++) {
//   arr.push(String(i).repeat(3));
// }
// const ul = document.createElement('ul');
// arr.forEach(num => {
//   const li = document.createElement('li');
//   li.textContent = num;
//   ul.append(li);
// });
// const div = document.querySelector('.div');
// div.append(ul);

//! =======================================================================

//; Уровень 8.4 задачника JavaScript

//! =======================================================================

//? №1
//? Дана кнопка и блок с текстом. Текст по высоте не влазит в блок и скрыт. По клику на кнопку распахните блок на всю высоту.

// const btn = document.createElement('button');
// btn.textContent = 'more';
// const text = document.createElement('p');
// text.style.maxHeight = '100px';
// text.style.overflow = 'hidden';
// text.textContent =
//   'Дана кнопка и блок с текстом. Текст по высоте не влазит в блок и скрыт. По клику на кнопку распахните блок на всю высоту.';
// const block = document.createElement('div');
// block.style.maxWidth = '200px';
// block.style.height = '100px';
// block.append(text);
// const div = document.querySelector('.div');
// div.append(btn, block);

// btn.addEventListener('click', more);
// function more() {
//   block.style.height === 'auto'
//     ? (block.style.height = '100px')
//     : (block.style.height = 'auto');
//   text.style.maxHeight === 'none'
//     ? (text.style.maxHeight = '100px')
//     : (text.style.maxHeight = 'none');
//   btn.textContent === 'more'
//     ? (btn.textContent = 'less')
//     : (btn.textContent = 'more');
// }

//* =======================================================================

//? №2
//? Дана строка с текстом. Получите процентное содержание каждого символа текста в виде объекта, в котором ключами будут символы, а значениями - их процентное содержание.

// const str = 'Дана строка с текстом.';
// const arr = str.split('');
// const result = {};

// arr.forEach(item => {
//   result[item] =
//     ((arr.filter(n => item === n).length / arr.length) * 100)
//       .toFixed()
//       .padStart(2, '0') + '%';
// });

// console.log(result);

//* =======================================================================

//? №3
//? Дан список ul и инпут. По мере ввода текста в инпут оставляйте видимыми только те li, текст которых начинается на текст, введенный в инпут.

// const ul = document.createElement('ul');
// ul.innerHTML = `
//   <li>Яблоко</li>
//   <li>Абрикос</li>
//   <li>Апельсин</li>
//   <li>Ананас</li>
//   <li>Банан</li>
//   <li>Брусника</li>
//   <li>Виноград</li>
//   <li>Вишня</li>
//   <li>Груша</li>
//   <li>Гранат</li>
//   <li>Дыня</li>
//   <li>Персик</li>
//   <li>Слива</li>
//   <li>Черешня</li>
// `;
// const input = document.createElement('input');
// const div = document.querySelector('.div');
// div.append(ul, input);

// input.addEventListener('input', filt);
// function filt(e) {
//   const value = e.target.value.trim().toLowerCase();

//   ul.querySelectorAll('li').forEach(item => {
//     item.style.display = item.textContent.toLowerCase().startsWith(value)
//       ? ''
//       : 'none';
//   });
// }

//* =======================================================================

//? №4
//? Выведите на экран следующую пирамидку:
//? 1
//? 22
//? 333
//? 4444
//? 55555
//? 666666
//? 7777777
//? 88888888
//? 999999999

// const ul = document.createElement('ul');
// for (let i = 1; i < 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = String(i).repeat(i);
//   ul.append(li);
// }
// const div = document.querySelector('.div');
// div.append(ul);

//* =======================================================================

//? №5
//? Дан список городов и их стран, хранящийся в следующей структуре:
//? let data = [
//? 	{
//? 		country: 'country1',
//? 		city:    'city11',
//? 	},
//? 	{
//? 		country: 'country2',
//? 		city:    'city21',
//? 	},
//? 	{
//? 		country: 'country3',
//? 		city:    'city31',
//? 	},
//? 	{
//? 		country: 'country1',
//? 		city:    'city12',
//? 	},
//? 	{
//? 		country: 'country1',
//? 		city:    'city13',
//? 	},
//? 	{
//? 		country: 'country2',
//? 		city:    'city22',
//? 	},
//? 	{
//? 		country: 'country3',
//? 		city:    'city31',
//? 	},
//? ]
//? Напишите код, которой переделает структуру данных вот в такую:
//? {
//? 	'country1': [
//? 		'city11', 'city12', 'city13',
//? 	],
//? 	'country2': [
//? 		'city21', 'city22'
//? 	],
//? 	'country3': [
//? 		'city31', 'city32'
//? 	],
//? }

// let data = [
//   {
//     country: 'country1',
//     city: 'city11',
//   },
//   {
//     country: 'country2',
//     city: 'city21',
//   },
//   {
//     country: 'country3',
//     city: 'city31',
//   },
//   {
//     country: 'country1',
//     city: 'city12',
//   },
//   {
//     country: 'country1',
//     city: 'city13',
//   },
//   {
//     country: 'country2',
//     city: 'city22',
//   },
//   {
//     country: 'country3',
//     city: 'city31',
//   },
// ];
// const newData = data.map(item => ({
//   [item.country]: [item.city],
// }));
// const result = {};
// data.forEach(item => {
//   if (!result[item.country]) {
//     result[item.country] = [];
//   }

//   result[item.country].push(item.city);
// });

// console.log(result);

//! =======================================================================

//; Уровень 8.5 задачника JavaScript

//! =======================================================================

//? №1
//? Дан массив со словами. Выведите слова, начинающиеся на одинаковые буквы в своем отдельном списке ul. Над каждым списком сделайте h2 с названием буквы, для которой сделан список.

// const words = [
//   'яблоко',
//   'машина',
//   'дом',
//   'книга',
//   'стол',
//   'город',
//   'река',
//   'солнце',
//   'дерево',
//   'кошка',
//   'собака',
//   'телефон',
//   'компьютер',
//   'школа',
//   'море',
//   'окно',
//   'дверь',
//   'стул',
//   'лампа',
//   'ручка',
//   'карандаш',
//   'тетрадь',
//   'учитель',
//   'ученик',
//   'работа',
//   'день',
//   'ночь',
//   'утро',
//   'вечер',
//   'неделя',
//   'месяц',
//   'год',
//   'время',
//   'человек',
//   'семья',
//   'друг',
//   'ребёнок',
//   'мама',
//   'папа',
//   'брат',
//   'сестра',
//   'сосед',
//   'улица',
//   'дорога',
//   'мост',
//   'магазин',
//   'рынок',
//   'парк',
//   'сад',
//   'лес',
//   'поле',
//   'гора',
//   'озеро',
//   'океан',
//   'облако',
//   'дождь',
//   'снег',
//   'ветер',
//   'погода',
//   'цветок',
//   'трава',
//   'лист',
//   'корень',
//   'ветка',
//   'птица',
//   'рыба',
//   'бабка',
//   'лошадь',
//   'корова',
//   'овца',
//   'курица',
//   'утка',
//   'мышь',
//   'заяц',
//   'лиса',
//   'волк',
//   'медведь',
//   'лев',
//   'тигр',
//   'слон',
//   'обезьяна',
//   'хлеб',
//   'молоко',
//   'сыр',
//   'масло',
//   'мясо',
//   'суп',
//   'каша',
//   'сахар',
//   'соль',
//   'вода',
//   'чай',
//   'кофе',
//   'сок',
//   'тарелка',
//   'чашка',
//   'ложка',
//   'вилка',
//   'нож',
// ];

// words.push('Зебра');

// const letters = [...new Set(words.map(word => word[0].toLowerCase()))].toSorted(
//   (a, b) => a.localeCompare(b),
// );
// const div = document.querySelector('.div');
// letters.forEach(letter => {
//   const divLetter = document.createElement('div');
//   const title = document.createElement('h2');
//   title.textContent = letter.toUpperCase();
//   const ul = document.createElement('ul');
//   const letterWords = words.filter(word =>
//     word.toLowerCase().startsWith(letter),
//   );
//   letterWords.forEach(word => {
//     const li = document.createElement('li');
//     li.textContent = word;
//     ul.append(li);
//   });
//   divLetter.append(title, ul);
//   div.append(divLetter);
// });

//* =======================================================================

//? №2
//? Даны три селекта. В первом селекте выведите дни месяца от 1 до 31, во втором - названия месяцев года, а в третьем - года за предыдущие и следующие 10 лет.

// const labelDate = document.createElement('label');
// labelDate.textContent = 'Обрати дату';
// const selectData = document.createElement('select');
// for (let i = 1; i <= 31; i++) {
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = i;
//   selectData.append(option);
// }
// labelDate.append(selectData);

// const labelMonth = document.createElement('label');
// labelMonth.textContent = 'Обрати місяць';
// const selectMonth = document.createElement('select');
// for (let i = 1; i <= 12; i++) {
//   const month = new Date(2026, i - 1).toLocaleString('uk-UA', {
//     month: 'long',
//   });
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = month;
//   selectMonth.append(option);
// }
// labelMonth.append(selectMonth);

// const labelYear = document.createElement('label');
// labelYear.textContent = 'Обрати рік';
// const selectYear = document.createElement('select');
// for (
//   let i = new Date().getFullYear() - 10;
//   i <= new Date().getFullYear() + 10;
//   i++
// ) {
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = i;
//   selectYear.append(option);
// }
// labelYear.append(selectYear);

// const div = document.querySelector('.div');
// div.append(labelDate, labelMonth, labelYear);

//* =======================================================================

//? №3
//? Модифицируйте предыдущую задачу так, чтобы по умолчанию в селектах была выбрана текущая дата.

// const labelDate = document.createElement('label');
// labelDate.textContent = 'Обрати дату';
// const selectData = document.createElement('select');

// for (let i = 1; i <= 31; i++) {
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = i;
//   selectData.append(option);
// }
// selectData.value = new Date().getDate();
// labelDate.append(selectData);

// const labelMonth = document.createElement('label');
// labelMonth.textContent = 'Обрати місяць';
// const selectMonth = document.createElement('select');

// for (let i = 1; i <= 12; i++) {
//   const month = new Date(new Date().getFullYear(), i - 1).toLocaleString(
//     'uk-UA',
//     {
//       month: 'long',
//     },
//   );
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = month;
//   selectMonth.append(option);
// }
// selectMonth.value = new Date().getMonth() + 1;
// labelMonth.append(selectMonth);

// const labelYear = document.createElement('label');
// labelYear.textContent = 'Обрати рік';
// const selectYear = document.createElement('select');

// for (
//   let i = new Date().getFullYear() - 10;
//   i <= new Date().getFullYear() + 10;
//   i++
// ) {
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = i;
//   selectYear.append(option);
// }
// selectYear.value = new Date().getFullYear();
// labelYear.append(selectYear);

// const div = document.querySelector('.div');
// div.append(labelDate, labelMonth, labelYear);

//* =======================================================================

//? №4
//? Модифицируйте предыдущую задачу так, чтобы в первом селекте количество дней соответствовало выбранному месяцу и году.

// const labelDate = document.createElement('label');
// labelDate.textContent = 'Обрати дату';
// const selectData = document.createElement('select');

// for (let i = 1; i <= 31; i++) {
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = i;
//   selectData.append(option);
// }
// selectData.value = new Date().getDate();
// labelDate.append(selectData);

// const labelMonth = document.createElement('label');
// labelMonth.textContent = 'Обрати місяць';
// const selectMonth = document.createElement('select');

// for (let i = 1; i <= 12; i++) {
//   const month = new Date(new Date().getFullYear(), i - 1).toLocaleString(
//     'uk-UA',
//     {
//       month: 'long',
//     },
//   );
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = month;
//   selectMonth.append(option);
// }
// selectMonth.value = new Date().getMonth() + 1;
// labelMonth.append(selectMonth);

// const labelYear = document.createElement('label');
// labelYear.textContent = 'Обрати рік';
// const selectYear = document.createElement('select');

// for (
//   let i = new Date().getFullYear() - 10;
//   i <= new Date().getFullYear() + 10;
//   i++
// ) {
//   const option = document.createElement('option');
//   option.value = i;
//   option.textContent = i;
//   selectYear.append(option);
// }
// selectYear.value = new Date().getFullYear();
// labelYear.append(selectYear);

// const div = document.querySelector('.div');
// div.append(labelDate, labelMonth, labelYear);

// function updateDays() {
//   const year = Number(selectYear.value);
//   const month = Number(selectMonth.value);
//   const currentDay = Number(selectData.value);
//   // Определяем количество дней в месяце
//   const daysInMonth = new Date(year, month, 0).getDate();
//   // Очищаем список дней
//   selectData.innerHTML = '';
//   // Создаём новые option
//   for (let i = 1; i <= daysInMonth; i++) {
//     const option = document.createElement('option');
//     option.value = i;
//     option.textContent = i;
//     selectData.append(option);
//   }
//   // Сохраняем выбранный день, если он существует
//   selectData.value = Math.min(currentDay, daysInMonth);
// }

// selectMonth.addEventListener('change', updateDays);
// selectYear.addEventListener('change', updateDays);

// updateDays();

//* =======================================================================

//? №5
//? Выведите на экран следующую пирамидку:
//? 1
//? 333
//? 55555
//? 7777777
//? 999999999

// const ul = document.createElement('ul');
// ul.style.flexDirection = 'column';
// for (let i = 1; i <= 9; i += 2) {
//   const li = document.createElement('li');
//   li.textContent = String(i).repeat(i);
//   ul.append(li);
// }
// const div = document.querySelector('.div');
// div.append(ul);

//! =======================================================================

//; Уровень 8.6 задачника JavaScript

//! =======================================================================

//? №1
//? Дан абзац с текстом и кнопка. По клику на кнопку покрасьте каждый символ в случайный цвет так, чтобы у соседних символов были разные цвета.

// const text = document.createElement('p');
// text.textContent = 'Дан абзац с текстом ';
// const button = document.createElement('button');
// button.textContent = 'Тисни тут';
// button.addEventListener('click', colorFunc);
// const div = document.querySelector('.div');
// div.append(text, button);

// function getRandomHexColor() {
//   const hex = Math.floor(Math.random() * 0xffffff).toString(16);
//   return '#' + hex.padStart(6, '0');
// }

// function colorFunc() {
//   const letters = text.textContent.split('');
//   text.textContent = '';

//   let previousColor = '';

//   letters.forEach(letter => {
//     const span = document.createElement('span');
//     let color = getRandomHexColor();

//     while (color === previousColor) {
//       color = getRandomHexColor();
//     }

//     span.textContent = letter;
//     span.style.color = color;

//     text.append(span);
//     previousColor = color;
//   });
// }
//* =======================================================================

//? №2
//? Дан абзац со словами и инпут. В инпут вводится слово. По клику на кнопку найдите это слово в абзаце и покрасьте его в красный цвет.

// const text = document.createElement('p');
// text.textContent = 'Дан абзац со словами';
// const input = document.createElement('input');
// const button = document.createElement('button');
// button.textContent = 'Тисни тут';
// button.addEventListener('click', btnClick);

// const div = document.querySelector('.div');
// div.append(text, input, button);

// function btnClick() {
//   const value = input.value.trim();

//   if (value === '') return;

//   const arr = text.textContent.split(' ');
//   text.textContent = '';
//   arr.forEach(item => {
//     const span = document.createElement('span');
//     span.textContent = item;
//     if (item === value) {
//       span.style.color = 'red';
//     }
//     text.append(span, ' ');
//   });
//   input.value = '';
// }

//* =======================================================================

//? №3
//? Дано меню со ссылками. Покрасьте в красный цвет ту ссылку, адрес которой совпадает с URL из адресной строки браузера.

// const div = document.querySelector('.div');
// const urls = [
//   'https://example.com/',
//   'https://google.com/',
//   'https://github.com/',
// ];

// urls.forEach(url => {
//   const link = document.createElement('a');
//   link.href = url;
//   link.textContent = url;

//   if (link.href === window.location.href) {
//     link.style.color = 'red';
//   }

//   div.append(link, document.createElement('br'));
// });

//* =======================================================================

//? №4
//? Выведите на экран следующую пирамидку:
//? xxxxx
//? xxxx
//? xxx
//? xx
//? x

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// for (let i = 5; i >= 1; i--) {
//   const li = document.createElement('li');
//   li.textContent = 'x'.repeat(i);
//   ul.append(li);
// }
// div.append(ul);

//* =======================================================================

//? №5
//? Дан список событий за определенные даты, хранящийся в следующей структуре:
//? let events = [
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name1'
//? 	},
//? 	{
//? 		date:  '2019-12-31'
//? 		event: 'name2'
//? 	},
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name3'
//? 	},
//? 	{
//? 		date:  '2019-12-30'
//? 		event: 'name4'
//? 	},
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name5'
//? 	},
//? 	{
//? 		date:  '2019-12-31'
//? 		event: 'name6'
//? 	},
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name7'
//? 	},
//? 	{
//? 		date:  '2019-12-30'
//? 		event: 'name8'
//? 	},
//? 	{
//? 		date:  '2019-12-30'
//? 		event: 'name9'
//? 	},
//? ]
//? Напишите код, которой переделает структуру данных вот в такую:
//? {
//? 	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
//? 	'2019-12-30': ['name4', 'name8', 'name9'],
//? 	'2019-12-31': ['name2', 'name6'],
//? }

// let events = [
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

// const result = {};

// events.forEach(item => {
//   if (!result[item.date]) {
//     result[item.date] = [];
//   }
//   result[item.date].push(item.event);
// });
// console.log(result);

//! =======================================================================

//; Уровень 8.7 задачника JavaScript

//! =======================================================================

//? №1
//? Дано слово. Перемешайте буквы этого слова в случайном порядке.

// const word = 'слово'.split('');
// const arr = [];
// function random() {
//   return Math.floor(Math.random() * word.length);
// }
// while (arr.length < word.length) {
//   let num = random();
//   if (!arr.includes(num)) arr.push(num);
// }

// const result = arr.map(item => word[item]);
// console.log(result.join(''));

//* =======================================================================

//? №2
//? Дан инпут, кнопка и список ul. В инпут вводится число. По клику на кнопку выведите список всех возможных вариантов разложения числа на два множителя.

// const div = document.querySelector('.div');
// const input = document.createElement('input');
// input.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'Множина';
// const ul = document.createElement('ul');
// div.append(input, btn, ul);

// btn.addEventListener('click', btnClick);
// function btnClick() {
//   ul.innerHTML = '';

//   const inputNum = Number(input.value);
//   if (input.value.trim === '' || inputNum === 0) return;

//   for (let i = 1; i <= inputNum; i++) {
//     if (inputNum % i === 0) {
//       const j = inputNum / i;
//       const li = document.createElement('li');
//       li.textContent = `${i} * ${j}`;
//       ul.append(li);
//     }
//   }
// }

//* =======================================================================

//? №3
//? На странице через абсолютное позиционирование расположены дивы, могущие накладываться друг на друга. По клику на любой див сделайте так, чтобы он стал поверх остальных.

// const divMain = document.querySelector('.div');
// divMain.style.position = 'relative';
// const div1 = document.createElement('div');
// div1.style.position = 'absolute';
// div1.style.backgroundColor = 'red';
// div1.style.top = '10px';
// div1.style.left = '10px';
// div1.style.zIndex = '100';
// div1.style.width = '100px';
// div1.style.height = '100px';
// const div2 = document.createElement('div');
// div2.style.position = 'absolute';
// div2.style.backgroundColor = 'green';
// div2.style.top = '40px';
// div2.style.left = '40px';
// div2.style.zIndex = '200';
// div2.style.width = '100px';
// div2.style.height = '100px';
// const div3 = document.createElement('div');
// div3.style.position = 'absolute';
// div3.style.backgroundColor = 'blue';
// div3.style.top = '80px';
// div3.style.left = '80px';
// div3.style.zIndex = '300';
// div3.style.width = '100px';
// div3.style.height = '100px';
// divMain.append(div1, div2, div3);

// divMain.addEventListener('click', divMainClick);
// function divMainClick(event) {
//   const ev = event.target;
//   if (ev.tagName !== 'DIV') return;
//   const arr = [...divMain.querySelectorAll('div')];
//   arr.forEach(div => {
//     div === ev ? (div.style.zIndex = '300') : (div.style.zIndex = '200');
//   });
// }

//* =======================================================================

//? №4
//? Выведите на экран следующую пирамидку:
//? 999999999
//? 88888888
//? 7777777
//? 666666
//? 55555
//? 4444
//? 333
//? 22
//? 1

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// div.append(ul);

// for (let i = 9; i >= 1; i--) {
//   const li = document.createElement('li');
//   li.textContent = String(i).repeat(i);
//   ul.append(li);
// }

//* =======================================================================

//? №5
//? Дан список событий за определенные даты, хранящийся в следующей структуре:
//? let events = {
//? 	'2019-12-29': ['name1', 'name3', 'name5', 'name7'],
//? 	'2019-12-30': ['name4', 'name8', 'name9'],
//? 	'2019-12-31': ['name2', 'name6'],
//? }
//? Напишите код, которой переделает структуру данных вот в такую:
//? let events = [
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name1'
//? 	},
//? 	{
//? 		date:  '2019-12-31'
//? 		event: 'name2'
//? 	},
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name3'
//? 	},
//? 	{
//? 		date:  '2019-12-30'
//? 		event: 'name4'
//? 	},
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name5'
//? 	},
//? 	{
//? 		date:  '2019-12-31'
//? 		event: 'name6'
//? 	},
//? 	{
//? 		date:  '2019-12-29'
//? 		event: 'name7'
//? 	},
//? 	{
//? 		date:  '2019-12-30'
//? 		event: 'name8'
//? 	},
//? 	{
//? 		date:  '2019-12-30'
//? 		event: 'name9'
//? 	},
//? ]

// let events = {
//   '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
//   '2019-12-30': ['name4', 'name8', 'name9'],
//   '2019-12-31': ['name2', 'name6'],
// };

// let res = [];

// for (const key in events) {
//   for (const item of events[key]) {
//     res.push({
//       date: key,
//       event: item,
//     });
//   }
// }

// const sorted = res.toSorted((a, b) => a.event.localeCompare(b.event));
// events = sorted;

// console.log(events);

//! =======================================================================

//; Уровень 8.8 задачника JavaScript

//! =======================================================================

//? №1
//? Даны два селекта. В первом селекте выводятся страны. Сделайте так, чтобы во втором селекте выводились города выбранной страны.

// const countries = {
//   Україна: ['Київ', 'Одеса', 'Львів', 'Харків'],
//   Польща: ['Варшава', 'Краків', 'Вроцлав'],
//   Німеччина: ['Берлін', 'Мюнхен', 'Гамбург'],
//   Франція: ['Париж', 'Ліон', 'Марсель'],
// };

// const div = document.querySelector('.div');

// const labelCountries = document.createElement('label');
// labelCountries.htmlFor = 'Countries';
// labelCountries.textContent = 'Оберіть країну:';
// const selectCountries = document.createElement('select');
// selectCountries.id = 'Countries';
// selectCountries.name = 'Countries';
// selectCountries.innerHTML = `
//   <option>...</option>
//   <option>Україна</option>
//   <option>Польща</option>
//   <option>Німеччина</option>
//   <option>Франція</option>
// `;
// labelCountries.append(selectCountries);

// const labelCity = document.createElement('label');
// labelCity.htmlFor = 'city';
// labelCity.textContent = 'Оберіть місто:';
// const selectCity = document.createElement('select');
// selectCity.id = 'city';
// selectCity.name = 'city';
// labelCity.append(selectCity);

// div.append(labelCountries, labelCity);

// selectCountries.addEventListener('change', () => {
//   const country = selectCountries.value;

//   selectCity.innerHTML = '<option value="">Оберіть місто</option>';

//   if (!country) return;

//   countries[country].forEach(city => {
//     const option = document.createElement('option');
//     option.value = city;
//     option.textContent = city;

//     selectCity.append(option);
//   });
// });

//* =======================================================================

//? №2
//? Даны инпут и кнопка. В инпут вводится число. По клику на кнопку, проверьте, является ли это число совершенным.

// const input = document.createElement('input');
// input.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'Calculate';
// const text = document.createElement('p');
// const div = document.querySelector('.div');
// div.append(input, btn, text);

// btn.addEventListener('click', inputClick);

// function inputClick() {
//   text.textContent = '';
//   const value = Number(input.value);
//   if (input.value.trim() === '' || value < 1) return;
//   const arr = [];
//   for (let i = 1; i < value; i++) {
//     if (value % i === 0) {
//       arr.push(i);
//     }
//   }
//   const result = arr.reduce((z, num) => z + num, 0);

//   result === value
//     ? (text.textContent = 'Це досконале число!')
//     : (text.textContent = 'Це не досконале число!');
// }

//* =======================================================================

//? №3
//? Дан список событий за определенные месяцы, хранящийся в следующей структуре:
//? let events = [
//? 	{
//? 		date:  '2019-12'
//? 		event: 'name1'
//? 	},
//? 	{
//? 		date:  '2019-12'
//? 		event: 'name2'
//? 	},
//? 	{
//? 		date:  '2019-11'
//? 		event: 'name3'
//? 	},
//? 	{
//? 		date:  '2019-11'
//? 		event: 'name4'
//? 	},
//? 	{
//? 		date:  '2020-10'
//? 		event: 'name5'
//? 	},
//? 	{
//? 		date:  '2020-10'
//? 		event: 'name6'
//? 	},
//? 	{
//? 		date:  '2020-11'
//? 		event: 'name5'
//? 	},
//? 	{
//? 		date:  '2020-11'
//? 		event: 'name6'
//? 	},
//? 	{
//? 		date:  '2020-12'
//? 		event: 'name7'
//? 	},
//? 	{
//? 		date:  '2020-12'
//? 		event: 'name8'
//? 	},
//? 	{
//? 		date:  '2020-12'
//? 		event: 'name9'
//? 	},
//? ]
//? Напишите код, которой переделает структуру данных вот в такую:
//? {
//? 	2019: {
//? 		11: [массив событий],
//? 		12: [массив событий],
//? 	}
//? 	2020: {
//? 		10: [массив событий],
//? 		11: [массив событий],
//? 		12: [массив событий],
//? 	}
//? }

// let events = [
//   {
//     date: '2019-12',
//     event: 'name1',
//   },
//   {
//     date: '2019-12',
//     event: 'name2',
//   },
//   {
//     date: '2019-11',
//     event: 'name3',
//   },
//   {
//     date: '2019-11',
//     event: 'name4',
//   },
//   {
//     date: '2020-10',
//     event: 'name5',
//   },
//   {
//     date: '2020-10',
//     event: 'name6',
//   },
//   {
//     date: '2020-11',
//     event: 'name5',
//   },
//   {
//     date: '2020-11',
//     event: 'name6',
//   },
//   {
//     date: '2020-12',
//     event: 'name7',
//   },
//   {
//     date: '2020-12',
//     event: 'name8',
//   },
//   {
//     date: '2020-12',
//     event: 'name9',
//   },
// ];

// const result = {};

// events.forEach(item => {
//   let year = item.date.slice(0, 4);
//   let month = item.date.slice(5);

//   if (!result[year]) {
//     result[year] = {};
//   }

//   if (!result[year][month]) {
//     result[year][month] = [];
//   }

//   result[year][month].push(item.event);
// });

// console.log(result);

//! =======================================================================

//; Уровень 8.9 задачника JavaScript

//! =======================================================================

//? №1
//? Дано меню со ссылками. Сделайте так, чтобы по клику на ссылку меню под ней выпадало подменю.

// const div = document.querySelector('.div');
// const menu = document.createElement('ul');
// menu.style.flexDirection = 'row';
// const menuItems = [
//   { text: 'Головна', href: '#home' },
//   { text: 'Про нас', href: '#about' },
//   { text: 'Послуги', href: '#services' },
//   { text: 'Портфоліо', href: '#portfolio' },
//   { text: 'Контакти', href: '#contacts' },
// ];

// menuItems.forEach(item => {
//   const li = document.createElement('li');
//   const a = document.createElement('a');

//   a.textContent = item.text;
//   a.href = item.href;

//   li.append(a);
//   menu.append(li);
// });
// div.append(menu);

// const data = {
//   home: ['Головна 1', 'Головна 2', 'Головна 3'],
//   about: ['Про нас 1', 'Про нас 2', 'Про нас 3'],
//   services: ['Послуга 1', 'Послуга 2', 'Послуга 3'],
//   portfolio: ['Проєкт 1', 'Проєкт 2', 'Проєкт 3'],
//   contacts: ['Телефон', 'Email', 'Адреса'],
// };

// menu.addEventListener('click', menuClick);

// function menuClick(event) {
//   if (event.target.tagName !== 'A') return;

//   event.preventDefault();

//   // Получаем ключ из href
//   const key = event.target.getAttribute('href').slice(1);

//   // Проверяем, существует ли подменю
//   const existingSubmenu = event.target.nextElementSibling;

//   if (existingSubmenu) {
//     existingSubmenu.remove();
//     return;
//   }

//   // Получаем данные для подменю
//   const submenuItems = data[key];

//   // Создаём подменю
//   const submenu = document.createElement('ul');

//   submenuItems.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     submenu.append(li);
//   });

//   // Добавляем подменю после ссылки
//   event.target.after(submenu);
// }

//* =======================================================================

//? №2
//? Дан абзац со словами и кнопка. По клику на кнопку покрасьте каждое слово в случайный цвет так, чтобы у соседних абзацев были разные цвета.

// const div = document.querySelector('.div');
// const text = document.createElement('p');
// text.textContent = 'абзац со словами';
// const btn = document.createElement('button');
// btn.textContent = 'Color';
// div.append(text, btn);

// btn.addEventListener('click', btnClick);

// function getRandomHexColor() {
//   const hex = Math.floor(Math.random() * 0xffffff).toString(16);
//   return '#' + hex.padStart(6, '0');
// }

// function btnClick() {
//   const arr = text.textContent.split(' ');
//   text.textContent = '';

//   let previousColor = '';

//   arr.forEach(item => {
//     const span = document.createElement('span');
//     span.textContent = item;

//     let color = getRandomHexColor();

//     while (color === previousColor) {
//       color = getRandomHexColor();
//     }

//     span.style.color = color;
//     previousColor = color;

//     text.append(span, ' ');
//   });
// }

//* =======================================================================

//? №3
//? Дан див. У этого дива есть крестик закрытия. Сделайте так, чтобы по клику на крестик, либо на любое место страницы вне дива, этот див прятался.

// const main = document.querySelector('.div');
// const div = document.createElement('div');
// div.style.height = '400px';
// div.style.width = '800px';
// div.style.backgroundColor = 'red';
// const btn = document.createElement('button');
// btn.textContent = 'X';
// btn.style.marginLeft = 'auto';
// div.append(btn);
// main.append(div);

// main.addEventListener('click', mainClick);
// function mainClick(e) {
//   if (e.target === btn || !div.contains(e.target)) {
//     div.hidden = true;
//   }
// }

//* =======================================================================

//? №4
//? Дан текстареа и ul. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter каждая строка текста добавилась в список в виде отдельного тега li.

// const div = document.querySelector('.div');
// const textarea = document.createElement('textarea');
// const ul = document.createElement('ul');

// div.append(textarea, ul);

// textarea.addEventListener('keydown', textareaKeydown);

// function textareaKeydown(e) {
//   if (e.key === 'Enter' && e.shiftKey) {
//     e.preventDefault();

//     const li = document.createElement('li');
//     li.textContent = textarea.value;

//     ul.append(li);
//     textarea.value = '';
//   }
// }

//* =======================================================================

//? №5
//? Дан такой список дел за определенную дату:
//? let affairs = {
//? 	'2019-12-31': ['массив дел'],
//? 	'2018-11-29': ['массив дел'],
//? 	'2018-11-30': ['массив дел'],
//? 	'2018-12-27': ['массив дел'],
//? 	'2019-12-29': ['массив дел'],
//? 	'2019-12-30': ['массив дел'],
//? 	'2018-12-30': ['массив дел'],
//? 	'2018-12-31': ['массив дел'],
//? }
//? Выведите на экран все дела за 2018 год.

// let affairs = {
//   '2019-12-31': ['массив дел'],
//   '2018-11-29': ['массив дел'],
//   '2018-11-30': ['массив дел'],
//   '2018-12-27': ['массив дел'],
//   '2019-12-29': ['массив дел'],
//   '2019-12-30': ['массив дел'],
//   '2018-12-30': ['массив дел'],
//   '2018-12-31': ['массив дел'],
// };

// const div = document.querySelector('.div');
// const ul = document.createElement('ul');
// const keys = Object.keys(affairs);
// keys.forEach(element => {
//   const date = new Date(element);

//   if (date.getFullYear() === 2018) {
//     const li = document.createElement('li');
//     li.textContent = affairs[element];
//     ul.append(li);
//   }
// });
// div.append(ul);

//! =======================================================================

//; Уровень 8.10 задачника JavaScript

//! =======================================================================

//? №1
//? Даны два инпута и кнопка. В инпуты вводятся числа. По клику на кнопку, проверьте, являются ли эти числа дружественными или нет.

// const div = document.querySelector('.div');
// const input1 = document.createElement('input');
// input1.type = 'number';
// const input2 = document.createElement('input');
// input2.type = 'number';
// const btn = document.createElement('button');
// btn.textContent = 'Check';
// const text = document.createElement('p');
// text.textContent = '';
// div.append(input1, input2, btn, text);

// btn.addEventListener('click', btnClick);

// function btnClick() {
//   const num1 = Number(input1.value);
//   const num2 = Number(input2.value);
//   input1.value = '';
//   input2.value = '';
//   if (num1 === 0 || num2 === 0) return;
//   let num11 = 0;
//   for (let i = 1; i < num1; i++) {
//     if (num1 % i === 0) {
//       num11 += i;
//     }
//   }
//   let num22 = 0;
//   for (let i = 1; i < num2; i++) {
//     if (num2 % i === 0) {
//       num22 += i;
//     }
//   }

//   num11 === num2 && num22 === num1
//     ? (text.textContent = 'Ці числа є дружніми')
//     : (text.textContent = 'Ці числа не є дружніми');
// }

//* =======================================================================

//? №2
//? Дан некоторый массив:
//? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//? Дана переменная:
//? let n = 3;
//? Превратите этот массив в двухмерный, по n элементов в подмассиве.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let n = 3;
// const result = [];
// for (let i = 0; i < arr.length; i += n) {
//   result.push([arr[i], arr[i + 1], arr[i + 2]]);
// }
// console.log(result);

//* =======================================================================

//? №3
//? Дан массив:
//? [
//? 	[1, 2, 3, 4, 5],
//? 	[1, 2, 3],
//? 	[1, 2],
//? ]
//? Добавьте в каждый подмассив столько пустых строк, чтобы количество элементов в каждом подмассиве стало равно количеству элементов в самом длинном подмассиве.

// const arr = [
//   [1, 2, 3, 4, 5],
//   [1, 2, 3],
//   [1, 2],
// ];

// const length = Math.max(...arr.map(num => num.length));
// const result = [];
// arr.forEach(item => {
//   if (item.length !== length) {
//     let m = length - item.length;
//     for (let i = 1; i <= m; i++) {
//       item.push('');
//     }
//   }
//   result.push(item);
// });

// console.log(result);

//* =======================================================================
