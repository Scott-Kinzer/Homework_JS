// - Напишіть код,  який за допомоги document.getElementById
// або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний

let content = document.getElementById('content');
let k = content.textContent;
let rules = document.getElementById('rules');
let b = rules.textContent;


content.textContent = "Content";
rules.textContent = "Rules";
rules.style.background = "red";
content.style.background = "red";

rules.style.color = "blue";
content.style.color = "blue";
console.log(rules.className);

let fcRules = document.getElementsByClassName('fc_rules');

Array.from(fcRules).forEach(item => item.style.color = "red");

