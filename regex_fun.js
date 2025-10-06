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