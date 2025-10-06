/**  РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
RegExp - это последовательность символов, 
которая определяет шаблон поиска.
Для чего используется?
1. Проверка, соответствует ли строка шаблону (например валидация e mail)
2. Поиск подстроки в строке 
3. Замены найденных подстрок
4. Извлеченеи информации из строки.

ОСНОВНОЙ СИНТАКСИС

В JS регулярное выражение создаётся двумя способами 
1. литеральный: const regex = /шаблон/флаг
этот способ используется чаще всего.

2. Через конструктор: const regex = new RegExp("шаблон", "флаг")

ФЛАГИ

i (ignore case) - игнорировать регистр
g (global) - глобальный поиск. Т.е. найти совпадения по всей строке.
m (multiline) многострочный режим
u (unicode) - поддержку unicode
s (dotAll) - позволяет символу "." соответствовать также и символам новой строки

ПРИМЕРЫ
*/

// 1. Найти слово hello в строке

const regex1 = /hello/;
const str1 = "hello world";
console.log("Пример 1: ", regex1.test(str1));

// Пример 1:  true

// 2. флаг i - игнорирование регистра

const regex2 = /hello/i;
const str2 = "Hello, World";
console.log("Пример 2: ", regex2.test(str2));

// Пример 2:  true

// 3. Используем флаг g - для глобального поиска
const regex3 = /l/g;
const str3 = "hello, World";
console.log("Пример 3: ", str3.match(regex3));

// Пример 3:  [ 'l', 'l', 'l' ]

// 4. Поиск символов
const regex4 = /[aeiou]/g;
const str4 = "Hello World";
console.log("Пример 4: ", str4.match(regex4));

// Пример 4:  [ 'e', 'o', 'o' ]

// 5. Диапазон символов 
const regex5 = /[a-f]/g;
const str5 = "fhjtirldkdf fkgkgatdfs";
console.log("Пример 5: ", str5.match(regex5));

/* Пример 5:  [
  'f', 'd', 'd',
  'f', 'f', 'a',
  'd', 'f'
]
*/

//6. Мета символ \d (digit - цифра)
const regex6 = /\d/g;
const str6 = "My phone number is 123-456-7890";
console.log("Пример 6: ", str6.match(regex6));

/*Пример 6:  [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
]*/ 
//7. Мета символ \w (word character)
// любая латинская буква, цифра или символ подчёркивание "_"
// это эквивалентно шаблону [a-zA-Z0-9_]
const regex7 = /\w/g;
const str7 = "user_id_123";
console.log("Пример 7: ", str7.match(regex7));

/**Пример 7:  [
  'u', 's', 'e', 'r',
  '_', 'i', 'd', '_',
  '1', '2', '3'
] */

//8. Мета символ \s (пробельный символ)
// найдёт любой символ пробел, табуляция, перенос строки
const regex8 = /\s/g;
const str8 = "hello\tworld\nnew line";
console.log("Пример 8: ", str8.match(regex8));

// Пример 8:  [ '\t', '\n', ' ' ]

// 9. Инвертированные мета символы \D \W \S
const regex9 = /\D/g;
const str9 = "ID: 12345";
console.log("Пример 9: ", str9.match(regex9));

// Пример 9:  [ 'I', 'D', ':', ' ' ]

// Квантификаторы (указание количества повторений)
// применяются к символу или группе, стоящей перед ними
//10. квантификатор * - ноль или более повторений
const regex10 = /go*/g;
const str10 = "g go goo gooo";
console.log("Пример 10: ", str10.match(regex10));

// Пример 10:  [ 'g', 'go', 'goo', 'gooo' ]

// 11.квантификатор ? 
// colou?r ищем "colo", затем "u" может быть, а может и не быть, но потом - "r"
const regex11 = /colou?r/;
console.log("Пример 11(color): ", regex11.test("color"));
console.log("Пример 11(color): ", regex11.test("colour"));

// Пример 11(color):  true
// Пример 11(color):  true

// 12.квантификатор {n}
// количество повторений

const regex12 =/\d{3}/g;
const str12 = "123 45 6789 123"
console.log("Пример 12: ", str12.match(regex12));

// Пример 12:  [ '123', '678', '123' ]

// 13.квантификатор {n,}
// {n,} - n или больше повторений
const regex13 =/\d{3,}/g;
const str13 = "1 12 123 1234"
console.log("Пример 13: ", str13.match(regex13));

// Пример 13:  [ '123', '1234' ]

// 14.квантификатор {n,m} - от n до m
const regex14 =/\d{2,3}/g;
const str14 = "1 12 123 1234"
console.log("Пример 14: ", str14.match(regex14));

// Пример 14:  [ '12', '123', '123' ]

// ГРАНИЦЫ И ЯКОРЯ

// 15. Якорь ^ начало строки. Этот шаблон должен находиться в начале
const regex15=/^Hello/;
const str15 = "Hello World"
console.log("Пример 15: ", regex15.test(str15));

// Пример 15:  true

// 15. Якорь $ конец строки. Этот шаблон должен находиться в самом конце
const regex16=/World$/;
const str16 = "Hello World"
console.log("Пример 16: ", regex16.test(str16));

// Пример 16:  true

// ГРУППИРОВКА И АЛЬТЕРНАТИВЫ

// 17 Группировка ()
// () - группирует несколько символов в единое целое. Можно применять квантификаторы
const regex17=/(ha)/g;
const str17 = "hahaha ha hah"
console.log("Пример 17: ", str17.match(regex17));

// Пример 17:  [ 'ha', 'ha', 'ha', 'ha', 'ha' ]

// 18. Альтернатива | ИЛИ работает как дизъюнкция
const regex18=/cat|dog/g;
const str18 = "I like cats and dogs";
console.log("Пример 18: ", str18.match(regex18));

// Пример 18:  [ 'cat', 'dog' ]