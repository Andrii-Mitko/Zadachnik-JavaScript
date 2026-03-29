
//; "ЦЕЙ КОД  ДО ВСІХ ЗАВДАНЬ 5 РІВНЯ"



const main = document.querySelector('main');
main.style.cssText = 'display: flex; justify-content: center; flex-direction: column; align-items: center;';
const title = document.querySelector('h1')
 const div = document.querySelector('.div');
    div.style.cssText = 'display: flex; flex-direction: column;';
    const inputFirst = document.createElement('input');
    inputFirst.style.cssText = 'margin: 10px; padding: 5px; ';
    const inputSecond = document.createElement('input');
    inputSecond.style.cssText = 'margin: 10px; padding: 5px;';
    const btn = document.createElement('button')
    btn.style.cssText = " padding: 10px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer; margin: 10px;";
    btn.textContent = 'Результат';
    const pText = document.createElement('p');
    pText.style.cssText = 'margin: 15px; padding: 10px;';
    div.append(inputFirst, inputSecond, btn, pText);

//! =============================================

//; Уровень 5.1 задачника JavaScript

//! =============================================

//? №1
//? Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.

// title.textContent = 'СУМА';
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const num1 = inputFirst.value;
// const num2 = inputSecond.value;
//   if (isNaN(num1) || isNaN(num2)) {
//     pText.textContent = 'Введите числа';
//     return;
//   }
//   pText.textContent = Number(num1) + Number(num2);
//    inputFirst.value = '';
//   inputSecond.value = '';
// });
   
//! =============================================

//? №2
//? Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

// title.textContent = 'В Другу Степень';
// inputFirst.remove();
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const num = inputSecond.value;
//     if (isNaN(num)) {
//         pText.textContent = 'Це не число!';
//         return;
//     }
//     pText.textContent = num**2;
//     inputSecond.value = '';
// });


//! =============================================

//? №3
//? Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

// const pText1 = document.createElement('p');
// const pText2 = document.createElement('p');
// const pText3 = document.createElement('p');
// const pText4 = document.createElement('p');
// pText1.style.cssText = 'margin: 15px; padding: 10px;';
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// pText3.style.cssText = 'margin: 15px; padding: 10px;';
// pText4.style.cssText = 'margin: 15px; padding: 10px;';
// const div2 = document.createElement('div');
// div.append(div2);
// div2.style.cssText = 'display: flex; flex-direction: row; ';
// div2.append(pText1, pText2, pText3, pText4);
// pText1.textContent = 10;
// pText2.textContent = 20;
// pText3.textContent = 30;
// pText4.textContent = 40;
// inputFirst.remove();
// inputSecond.remove();

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     pText.textContent = Number(pText1.textContent) + Number(pText2.textContent) + Number(pText3.textContent) + Number(pText4.textContent);
// });

//! =============================================

//? №4
//? Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.

// title.textContent = 'Піднесення до квадрата';
// const pText1 = document.createElement('p');
// const pText2 = document.createElement('p');
// const pText3 = document.createElement('p');
// const pText4 = document.createElement('p');
// pText1.style.cssText = 'margin: 15px; padding: 10px;';
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// pText3.style.cssText = 'margin: 15px; padding: 10px;';
// pText4.style.cssText = 'margin: 15px; padding: 10px;';
// const div2 = document.createElement('div');
// div.append(div2);
// div2.style.cssText = 'display: flex; flex-direction: row; ';
// div2.append(pText1, pText2, pText3, pText4);
// pText1.textContent = 2;
// pText2.textContent = 3;
// pText3.textContent = 4;
// pText4.textContent = 5;
// inputFirst.remove();
// inputSecond.remove();
// btn.remove();
 
// div2.addEventListener('click', e => {
//     e.preventDefault();
//     if (e.target.tagName === 'P') {
//         const num = Number(e.target.textContent)
//         e.target.textContent = num * num;
//     };
// });

//! =============================================

//? №5
//? Даны инпуты, в которые вводятся числа.Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.

// title.textContent = 'Піднесення до квадрата через втрату фокусу'
// btn.remove();

// div.addEventListener('focusout', e => {
//     e.preventDefault();
//    if (e.target.tagName === 'INPUT') {
//         const num = Number(e.target.value)
//        e.target.value = num * num;
  
//     };
// });

//! =============================================

//; Уровень 5.2 задачника JavaScript

//! =============================================

//? №1
//? Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

// title.textContent = 'Cума чисел від 1 до 100';
// inputFirst.remove();
// inputSecond.remove();
// btn.addEventListener('click', e => {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     };
//     pText.textContent = sum;
// });

//! =============================================

//? №2
//? Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.

// title.textContent = 'СУМА';
// btn.addEventListener('click', (e) => {
//   const num1 = Number(inputFirst.value);
//   const num2 = Number(inputSecond.value);
//   if (isNaN(num1) || isNaN(num2)) {
//     pText.textContent = 'Введите числа';
//     return;
//   }
//   pText.textContent = num1 + num2;
//    inputFirst.value = '';
//   inputSecond.value = '';
// });

//! =============================================

//? №3
//? Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.

//  title.textContent = 'Кількість абзаців у div'
//  btn.addEventListener('click', e => {
//     const pArr = document.querySelectorAll('p');
//     div.textContent = pArr.length;
// })

//! =============================================

//? №4
//? Дана кнопка и инпут.В инпут вводится строка.По нажатию на кнопку определите, сколько символов в введенной строке.

// title.textContent = 'Кількість символів у введеному рядку';
// inputFirst.remove();
// btn.addEventListener('click', () => {
//     pText.textContent = inputSecond.value.length;
//     inputSecond.value = '';
// });

//! =============================================

//; Уровень 5.3 задачника JavaScript

//! =============================================

//? №1
//? Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.

// title.textContent = 'Факторіал числа';
// inputFirst.remove();
// btn.addEventListener('click', e => {
//     let fact = 1;
//     const num = Number(inputSecond.value);
//     if (isNaN(num) || num < 0) {
//         pText.textContent = 'Некоректні дані!'
//         return;
//     } else {
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     pText.textContent = fact;
//         inputSecond.value = '';
//         }
// });

//! =============================================

//? №2
//? Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.

// title.textContent = 'Яке число більше?';
// btn.addEventListener('click', () => {
//   const num1 = Number(inputFirst.value);
// const num2 = Number(inputSecond.value);
// if (!Number.isInteger(num1) ||!Number.isInteger(num2)) {
//     pText.textContent = 'Некоректні дані!';
// } else {
//     pText.textContent = Math.max(num1, num2);
//     }
//     inputFirst.value = '';
//     inputSecond.value = '';
// });

//! =============================================

//? №3
//? Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.

// title.textContent = 'Сума цифр числа';
// inputFirst.remove();
// btn.addEventListener('click', () => {
//     const numStr = inputSecond.value;
//     if (isNaN(Number(numStr))) {
//         pText.textContent = 'Некоректні дані!';
//     } else {
//         const sum = Math.abs(Number(numStr));
//          pText.textContent = String(sum).split('').reduce((acc, n) => acc + Number(n), 0);
//         }
//     inputSecond.value = '';
// });

//! =============================================

//? №4
//? Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.

// title.textContent = 'Зміна порядку слів';
// inputFirst.remove();
//         btn.addEventListener('click', () => {
//             pText.textContent = inputSecond.value.split('').reverse().join('');
//             inputSecond.value = '';
//     });

//! =============================================

//? №5
//? Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

// title.textContent = 'Числа по порядку';
// inputFirst.remove();
// inputSecond.remove();
// const pText2 = document.createElement('p');
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// div.append(pText2);
// let num = null;
// btn.addEventListener('click', e => {
//         num += 1
//         pText.textContent = num;
//     pText2.textContent = num + 1;
// });

//! =============================================

//? №6
//? Дан инпут, абзац и кнопка.В инпут вводится число.По клику на кнопку выведите в абзац факториал этого числа.

// title.textContent = 'Факторіал числа';
// inputFirst.remove();
// btn.addEventListener('click', () => {
//     let fact = 1;
//     const num = Number(inputSecond.value);
//     if (isNaN(num) || num < 0) {
//         pText.textContent = 'Некоректні дані!'
//         return;
//     } else {
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     pText.textContent = fact;
//         inputSecond.value = '';
//         }
// });

//! =============================================

//; Уровень 5.4 задачника JavaScript

//! =============================================

//? №1
//? Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.

// title.textContent = "Значення '!'";
// inputFirst.remove();
// inputSecond.remove();
// btn.remove();
// pText.textContent = 'Абзац с текстом';
// const pText2 = document.createElement('p');
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// div.append(pText2);
// pText2.textContent = 'Абзац с текстом';
//     div.addEventListener('click', e => {
//         if (e.target.tagName === 'P') {
//             e.target.textContent = '!';
//         };
//     });

//! =============================================

//? №2
//? Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.

// title.textContent = 'Отримати атрибути';
// inputFirst.remove();
// inputSecond.remove();
// const linkFirst = document.createElement('a');
// const linkSecond = document.createElement('a');
// div.append(linkFirst, linkSecond);
// linkFirst.href = 'https://google.com';
// linkFirst.textContent = 'Google';
// linkSecond.href = 'https://chatgpt.com';
// linkSecond.textContent = 'GPT';
// btn.addEventListener('click', () => {
//     const href1 = linkFirst.href;
//     const href2 = linkSecond.href;
//     const href = [href1, href2];
//     pText.textContent = href;
// });

//! =============================================

//? №3
//? Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.

// title.textContent = 'У циклі рядок «123456789»';
// inputFirst.remove();
// inputSecond.remove();
// btn.addEventListener('click', () => {
//     let str = '';
//         for (let i = 1; i < 10; i++) {
//             str += String(i);
//     }
//     pText.textContent = str;
// });


//! =============================================

//? №4
//? Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.

// title.textContent = 'Поточний рік, місяць, день';
// inputFirst.remove();
// inputSecond.remove();
// const pText2 = document.createElement('p');
// const pText3 = document.createElement('p');
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// pText3.style.cssText = 'margin: 15px; padding: 10px;';
// div.append(pText2, pText3);
//     btn.addEventListener('click', () => {
//         const date = new Date();
//         pText.textContent = date.getFullYear();
//         pText2.textContent = date.toLocaleString('uk-UA', { month: 'long' });
//         pText3.textContent = date.getDate();
// });

//! =============================================

//? №5
//? Дана ссылка, абзац и кнопка.По нажатию на кнопку запишите href ссылки в текст абзаца.

// title.textContent = 'Отримати атрибути';
// inputFirst.remove();
// inputSecond.remove();
// const linkFirst = document.createElement('a');
// div.append(linkFirst);
// linkFirst.href = 'https://google.com';
// linkFirst.textContent = 'Google';
// btn.addEventListener('click', () => {
//     pText.textContent = linkFirst.href;
// });

//! =============================================

//; Уровень 5.5 задачника JavaScript

//! =============================================

//? №1
//? Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.

// title.textContent = 'Рік, місяць, день';
// inputFirst.remove();
// const pText2 = document.createElement('p');
// const pText3 = document.createElement('p');
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// pText3.style.cssText = 'margin: 15px; padding: 10px;';
// div.append(pText2, pText3);
//     btn.addEventListener('click', () => {
//         const date = new Date(inputSecond.value);
//         pText.textContent = date.getFullYear();
//         pText2.textContent = date.toLocaleString('uk-UA', { month: 'long' });
//         pText3.textContent = date.getDate();
// });

//! =============================================

//? №2
//? Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.

// title.textContent = 'масив чисел';
//     btn.addEventListener('click', () => {
//         const num1 = Number(inputFirst.value);
//         const num2 = Number(inputSecond.value);
//         if (isNaN(num1) || isNaN(num2)) {
//             pText.textContent = 'Некоректні дані!';
//         return;
//         }
//         let arr = [];
//         for (let i = num1; i <= num2; i++) {
//             arr.push(i);
//         }
//         pText.textContent = arr;
// });

//! =============================================

//? №3
//? Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.

// title.textContent = 'Останній символ рядка';
// inputFirst.remove();
//     btn.addEventListener('click', () => {
//         const str = inputSecond.value;
//         pText.textContent = str[str.length - 1];
// });

//! =============================================

//? №4
//? Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.

// title.textContent = 'Збільшення на одиницю';
// inputFirst.remove();
// inputSecond.remove();
// pText.textContent = 1;
// let num = Number(pText.textContent);
// btn.addEventListener('click', () => {
//     num += 1;
//     pText.textContent = num;
// });

//! =============================================

//? №5
//? Дан инпут и абзац.В инпут вводится строка со словами.По потери фокуса выведите в абзац количество слов во введенной строке.

// title.textContent = 'Кількість слів';
// inputFirst.remove();
// btn.remove();
//     inputSecond.addEventListener('focusout', () => {
//         const str = inputSecond.value.trim();
//         pText.textContent = str.split(/\s+/).length;
// });

//! =============================================

//; Уровень 5.6 задачника JavaScript

//! =============================================

//? №1
//? Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.

// title.textContent = 'Високосний рік';
// inputFirst.remove();
//     btn.addEventListener('click', e => {
//         const year = Number(inputSecond.value);
//         if (isNaN(year)) {
//             pText.textContent = 'Це не рік';
//         } else {
//             if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//                 pText.textContent = 'Це високосний рік';
//             } else {
//                 pText.textContent = 'Це звичайний рік';
//             }
//         }
//         inputSecond.value = ''
// });

//! =============================================

//? №2
//? Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.

// title.textContent = 'Випадкове число';
// inputFirst.remove();
//     btn.addEventListener('click', () => {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         inputSecond.value = randomNumber;
// });

//! =============================================

//? №3
//? Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.

// title.textContent = 'День недели';
// inputFirst.remove();
// const pText2 = document.createElement('p');
// pText2.style.cssText = 'margin: 15px; padding: 10px;';
// title.append(pText2);
// pText2.textContent = 'Введіть дату';
// const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
//     btn.addEventListener('click', e => {
//         const date = new Date(inputSecond.value);
//         if (isNaN(date.getTime())) {
//             pText.textContent = 'Некоректна дата';
//         } else {
//             const day = date.getDay();
//             pText.textContent = days[day];
//         }
//         inputSecond.value = '';
// });

//! =============================================

//? №4
//? Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

// title.textContent = 'Збільшення розміру div';
// div.style.cssText += 'width: 200px; height: 200px; border: 2px solid red;';
// btn.addEventListener('click', () => {
//     // Получаем текущие значения из style
//     let width = parseInt(div.style.width);   // "200px" → 200
//     let height = parseInt(div.style.height); // "200px" → 200

//     // Увеличиваем
//     width *= 2;
//     height *= 2;

//     // Присваиваем обратно в style
//     div.style.width = width + 'px';
//     div.style.height = height + 'px';
// });

//! =============================================

//? №5
//? Даны ссылки.Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.

// title.textContent = 'При наведенні курсору на будь-яке посилання над ним з’являлося значення його атрибута';
// div.innerHTML = `
//   <a href="https://google.com">Google</a>
//   <a href="https://chat.openai.com" target="_blank">ChatGPT</a>
//   <a href="https://uk.wikipedia.org" title="Вікіпедія українською">Вікіпедія</a>
//   <a href="https://github.com" id="githubLink" class="external-link">GitHub</a>
//   <a href="mailto:example@example.com">Написати лист</a>`;

// const links = div.querySelectorAll('a');

// links.forEach(link => {
//   link.addEventListener('mouseenter', e => {
//     // Создаём подсказку над ссылкой
//     const tooltip = document.createElement('span');
//     tooltip.textContent = link.getAttribute('href');
//     tooltip.style.position = 'absolute';
//     tooltip.style.background = 'yellow';
//     tooltip.style.padding = '2px 5px';
//     tooltip.style.border = '1px solid black';
//     tooltip.style.fontSize = '12px';
//     tooltip.classList.add('tooltip');

//     // Добавляем в документ
//     document.body.appendChild(tooltip);

//     // Позиционируем над ссылкой
//     const rect = link.getBoundingClientRect();
//     tooltip.style.left = rect.left + 'px';
//     tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

//     // Удаляем подсказку при уходе мыши
//     link.addEventListener('mouseleave', () => {
//       tooltip.remove();
//     }, { once: true });
//   });
// });



//! =============================================

//; Уровень 5.7 задачника JavaScript

//! =============================================

//? №1
//? Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.

// title.textContent = 'Сума чисел';
// inputFirst.remove();
// const list = document.createElement('ul');
// div.append(list);
// list.innerHTML = `
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>`;
//         btn.addEventListener('click', e => {
//             const listAll = document.querySelectorAll('li');
//             let sum = 0;
//             listAll.forEach(n => sum += Number((n.textContent)));
//             inputSecond.value = sum;
//     });

//! =============================================

//? №2
//? Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.

// title.textContent = 'Збільшення на одиницю';
// inputFirst.remove();
// inputSecond.remove();
// const list = document.createElement('ul');
// div.append(list);
// list.innerHTML = `
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>`;
//         btn.addEventListener('click', () => {
//             const items = document.querySelectorAll('li');
//             items.forEach(n => n.textContent ++);
//     });

//! =============================================

//? №3
//? Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.

// title.textContent = 'Отримати масив дільників числа';
// inputFirst.remove();
//     btn.addEventListener('click', () => {
//         const num = Number(inputSecond.value);
//         if (isNaN(num)) {
//             pText.textContent = 'Некоректне число';
//         } else {
//             const arr = [];
//             for (let i = 1; i <= num; i++) {
//                 if (num % i === 0) {
//                     arr.push(i);
//                 }
//             }
//             const result = arr.join(', ')
//             pText.textContent = result;
//         }
//         inputSecond.value = '';
// });

//! =============================================

//? №4
//? Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.

// title.textContent = 'Текст перевертається';
// div.innerHTML = `<p>script</p>
//     <p>type</p>
//     <p>module</p>
//     <p>class</p>
//     <p>color</p>`
// const texts = div.querySelectorAll('p');
//     div.addEventListener('click', e => {
//         if (e.target.tagName === 'P') {
//             e.target.textContent = e.target.textContent.split('').reverse().join('');
//     }
// });

//! =============================================

//? №5
//? В инпут вводится число из 6 - ти цифр.По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.

// title.textContent = 'Перевірка, чи дорівнює сума перших трьох цифр сумі других трьох цифр';
// inputFirst.remove();
// const text = document.querySelector('p');
// text.textContent = 'Введіть число, що складається з 6 цифр';
//     btn.addEventListener('click', () => {
//         const num = inputSecond.value;
//         if (isNaN(+num) || num.length !== 6) {
//              pText.textContent = 'Некоректне число';
//         } else {
//             const num1 = num.slice(0, 3).split('').reduce((acc1, n1) => acc1 + +n1, 0);
//             const num2 = num.slice(3).split('').reduce((acc2, n2) => acc2 + +n2, 0);
//         pText.textContent = num1 === num2 ? 'число дорівнює' : 'число НЕ дорівнює';
//         };
//         inputSecond.value = '';
//         });

//! =============================================

//; Уровень 5.8 задачника JavaScript

//! =============================================

//? №1
//? Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.

// title.textContent = 'Квадрат числа при втраті фокусу';
// btn.remove();
//     div.addEventListener('focusout', e => {
//         if (e.target.tagName === 'INPUT') {
//             const num = +e.target.value;
//             if (isNaN(num)) {
//                  pText.textContent = 'Некоректне число';
//             } else {
//                 pText.textContent = '';
//                 e.target.value = num**2;
//             }
//         }
// });
 

//! =============================================

//? №2
//? Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.

// title.textContent = 'Випадковий елемент масиву';
// inputFirst.remove();
// pText.textContent = 'Сделайте так чтобы по клику на кнопку в инпут выводился случайный элемент массива';
//     btn.addEventListener('click', () => {
//         const arr = pText.textContent.split(' ');
//         const index = Math.floor(Math.random() * arr.length);
//         inputSecond.value = arr[index];
// });


//! =============================================

//? №3
//? Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.

// title.textContent = 'Через кому вводяться числа. Сума чисел.';
// inputFirst.remove();
// btn.remove();
//     inputSecond.addEventListener('blur', () => {
//         const arrTotal = inputSecond.value;
//         const arr = arrTotal.split(',').filter(n => !isNaN(+n));
//         pText.textContent = arr.reduce((acc, n) => acc + +n, 0)
// });

//! =============================================

//? №4
//? Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.

// title.textContent = 'Спільні дільники чисел';
//     btn.addEventListener('click', () => {
//         const num1 = +inputFirst.value;
//         const num2 = +inputSecond.value;
//         if (isNaN(num1) || isNaN(num2)) {
//             pText.textContent = 'Некоректне число';
//         } else {
//             const num1Arr = [];
//             for (let i = 1; i <= num1; i++) {
//                 if (num1 % i === 0) {
//                     num1Arr.push(i);
//                 }
//             };
//             const num2Arr = [];
//             for (let j = 1; j <= num2; j++) {
//                 if (num2 % j === 0) {
//                     num2Arr.push(j);
//                 }
//             }
//             console.log(num1Arr.filter(n => num2Arr.includes(n)));
//         };
//         inputFirst.value = '';
//         inputSecond.value = '';
// });

//! =============================================

//? №5
//? Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.

// title.textContent = 'Число 13';
// inputFirst.remove();
// btn.addEventListener('click', () => {
//     const arr = inputSecond.value
//         .split(',')
//         .map(n => n.trim())       // прибираємо пробіли
//         .filter(n => n !== '' && !isNaN(+n))  // залишаємо тільки числа

//     pText.textContent = arr.includes('13') ? 'Є число 13' : 'Нема числа 13';
//     inputSecond.value = '';
// });

//! =============================================

//? №6
//? Дан инпут и кнопка.В него вводится число из шести цифр.По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр.

// title.textContent = 'Cчастливый билет';
// inputFirst.remove();
// const text = document.querySelector('p');
// text.textContent = 'Введіть число, що складається з 6 цифр';
//     btn.addEventListener('click', () => {
//         const num = inputSecond.value;
//         if (isNaN(+num) || num.length !== 6) {
//              pText.textContent = 'Некоректне число';
//         } else {
//             const num1 = num.slice(0, 3).split('').reduce((acc1, n1) => acc1 + +n1, 0);
//             const num2 = num.slice(3).split('').reduce((acc2, n2) => acc2 + +n2, 0);
//         pText.textContent = num1 === num2 ? 'Cчастливый билет' : 'Програш';
//         };
//         inputSecond.value = '';
//         });


//! =============================================

//; Уровень 5.9 задачника JavaScript

//! ============================================

//? №1
//? Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.

// title.textContent = 'Числа з масива';
// inputFirst.remove();
// pText.textContent = [1, 5, 6, 7, 6, 7];
// btn.addEventListener('click', () => {
//     inputSecond.value = pText.textContent;
// });

//! ============================================

//? №2
//? Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.

// title.textContent = 'Червоний текст';
// div.innerHTML = `<p class="redt">script</p>
//     <p class="redt">type</p>
//     <p class="redt">module</p>
//     <p class="redt">class</p>
//     <p class="redt">color</p>`;
// const textRed = document.querySelectorAll('.redt');
// div.append(...textRed);
//     div.addEventListener('click', e => {
//         if (e.target.tagName === 'P') {
//             e.target.style.color = 'red';
//         };
// });

//! ============================================

//? №3
//? Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.

// title.textContent = "Парне / непарне число";
// inputFirst.remove();
// btn.remove();
// inputSecond.style.border = '1px solid black';
//     inputSecond.addEventListener('change', e => {
//         const num = +inputSecond.value;
//         if (isNaN(num)) {
//             pText.textContent = 'Некоректне число';
//             inputSecond.style.border = '2px solid black';
//         } else {
//             pText.textContent = '';
//             +num % 2 === 0 ? inputSecond.style.border = '2px solid green' : inputSecond.style.border = '2px solid red';
//         }
// });

//! ============================================

//? №4
//? В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 35.12.2025.

// title.textContent = "Дата";
// inputFirst.remove();
// btn.remove();
//     inputSecond.addEventListener('blur', () => {
//         const date = new Date(inputSecond.value);
//         if ((isNaN(date.getTime()))) {
//             inputSecond.value = '';
//             pText.textContent = 'Це не дата';
//         } else {
//             pText.textContent = '';
//             const arr = [];
//             arr.push(date.getDate());
//             arr.push(String(date.getMonth() + 1).padStart(2, '0'));
//             arr.push(date.getFullYear());
//             inputSecond.value = arr.join('.')
//         };
// });


//! ============================================

//? №5
//? Дан пустой список ul и текстареа.В него вводится текст со знаками препинания.По потери фокуса запишите каждое предложение из текста в свой тег li.

div.innerHTML = `<textarea placeholder="Введіть текст тут..."></textarea>
      <ul></ul>`;


//! ============================================

// Уровень 5.10 задачника JavaScript
// №1

// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.

// №2

// Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив в консоль.

// №3

// Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.

// №4

// Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.

// №5

// Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.

// №6

// Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.