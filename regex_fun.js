// Применение регулярных выражений

// 1. 
const funRegex1 = /\b(cat|dog|hamster)\b/g; //классические имена питомцев
const funStr1 = 'Office zz log: cat, cactus, dog, doge, hamster, hamster again';
console.log('Example 1:', funStr1.match(funRegex1)); 

// Example 1: [ 'cat', 'dog', 'hamster', 'hamster' ]

// 2. 
const funRegex2 = /\bha(ha)*\b/gi; //аккуратный смех из блоков "ha"
const funStr2 ='Meeting notes: ha haha HAHAHA haa haaah';
console.log('Example 2:', funStr2.match(funRegex2));

// Example 2: [ 'ha', 'haha', 'HAHAHA' ]

// 3. 
const funRegex3 = /\bCaptain\s\w+/g; //супергеройские псевдонимы на Captain
const funStr3 ='Comic con schedule: Captain Keyboard vs Captain Obvious vs captain planet';
console.log('Example 3:', funStr3.match(funRegex3));

// Example 3: [ 'Captain Keyboard', 'Captain Obvious' ]

// 4.
const funRegex4 = /\b\d{3}\b/g; //супергеройские псевдонимы на Captain
const funStr4 ='Escape room locks: 007 123 9999 404 300';
console.log('Example 4:', funStr4.match(funRegex4));

// Example 4: [ '007', '123', '404', '300' ]

// 5.

const funRegex5 = /\bpizza!{0,2}/g; //пицца с необязательными знаками восторга
const funStr5 ='Food poll: pizza pizza! pizza!! bruschetta?';
console.log('Example 5:', funStr5.match(funRegex5));

// Example 5: [ 'pizza', 'pizza!', 'pizza!!' ]

// 6.

const funRegex6 = /#\w+/g; //хэштэги для командного табло
const funStr6 ='Hackathon hashtags: #sleepIsForLater #winning #404teamNotFound';
console.log('Example 6:', funStr6.match(funRegex6));

// Example 6: [ '#sleepIsForLater', '#winning', '#404teamNotFound' ]

// 7.

const funRegex7 = /\b\w+ify\b/g; //стартап-словечки, оканчивающиеся на "ify"
const funStr7 ='Startup pitch gamify, unicornify, coffe, debugify, stuff';
console.log('Example 7:', funStr7.match(funRegex7));

// Example 7: [ 'gamify', 'unicornify', 'debugify' ]

// 8.

const funRegex8 = /\b\d{1,2}:\d{2}\b/g; //стартап-словечки, оканчивающиеся на "ify"
const funStr8 ='Train times: 7:05, 12:30, 24:99, 18:45';
console.log('Example 8:', funStr8.match(funRegex8));

// Example 8: [ '7:05', '12:30', '24:99', '18:45' ]

// 9.

const funRegex9 = /\b(one|two|three)\b/gi; //стартап-словечки, оканчивающиеся на "ify"
const funStr9 ='Countdown remix: one TWO tree three';
console.log('Example 9:', funStr9.match(funRegex9));

// Example 9: [ 'one', 'TWO', 'three' ]

// 10.

const funRegex10 = /TODO(?=:)/g; //заметки TODO с аккуратным двоеточием и пробелом
const funStr10 ='TODO: learn regex, TODONT: ignore tests, TODO : buy coffe';
console.log('Example 10:', funStr10.match(funRegex10));

// Example 10: [ 'TODO' ]

// Упражнение 1: Составьте регулярку, которая поймает каждое слово на "cake" в строке "cupcake pancake sneakysnake".

const funRegex11 = /\b\w*cake\w*\b/g; // \b — граница слова (чтобы не захватывать части других слов, если они не самостоятельные).
// \w* — любое количество букв/цифр/подчёркиваний до и после cake.
// флаг g — ищет все совпадения.
const funStr11 = 'cupcake pancake sneakysnake';
console.log('Exercise 1: ', funStr11.match(funRegex11));

// Exercise 1:  [ 'cupcake', 'pancake' ]

// Упражнение 2: Составьте регулярку, которая найдёт смайлики ":)", ":(", ":D" в строке " Mood log: :) :( :P :D "

const funRegex12 = /:\)|:\(|:D/g;
const funStr12 = 'Mood log: :) :( :P :D';
console.log('Exercise 2: ', funStr12.match(funRegex12));

// Exercise 2:  [ ':)', ':(', ':D' ]