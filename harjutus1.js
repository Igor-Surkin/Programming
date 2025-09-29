const age = 16;
if (age > 18) {
    console.log("добро пожаловать во взрослую жизнь");
}else {
    console.log("в холодильнике всё само появляется!");
}


const temp = 10;
if (temp <= -10) {
    console.log("холодно, сидим дома");
} else if(temp < 5) {
    console.log("Прохладно, можно погулять недолго.");
}else {
    console.log("Тепло, скоро весна.");
}


const hasTicket = true;
const hasPass = true;

if(hasTicket && hasPass) {
    console.log("Можно ехать");
}else if(hasTicket|| hasPass) {
    console.log("Подготовь все документы!");
} else {
    console.log("Нужен билет и паспорт, а у тебя ничего");
}

// Тернарный оператор
const likes = 50;
const label = likes >= 100 ? "Вы в тренде!" : "Ты неудачник";
console.log(label);

// switch 
const day = 7;
switch (day) {
    case 1: console.log("Понедельник, всё плохо");
        break;
    case 2: console.log("Вторник, всё ещё плохо!");
        break
    case 3: console.log("Среда, есть надежда!");
        break
    case 4: console.log("Четверг, счастье скоро!");
        break
    case 5: console.log("Пятница, победа!");
        break
    case 6: console.log("Суббота, выходной!");
        break
    case 7: console.log("Воскресенье, завтра на работу!");
        break
}

if("") console.log("Ничего не выведется!");
if(" ") console.log("Выведется!");
console.log(0 == false);
console.log(0 === false);
// циклы
for(let i = 1; i <= 10; i++ ) {
    console.log("Отжимание № ", i);
}

const snacks = ["яблоко", "банан", "батончик"];
let i
for(i = 0; i < snacks.length; i++) {
    console.log(i, snacks[i]);
}

for(const snack of snacks) {
    console.log("вкусный", snack);

}

let coins = 5;
while (coins > 0) {
    console.log("Добро пожаловать!", coins);
    coins--;
    if (coins === 0) {
        console.log("До свидания, до новых встреч!")
    }
}
for (let x = 1; x <= 10; x++) {
    if(x % 2 === 0) 
        continue 
        console.log (x);
    
    }
// сумма только положительных чисел
const arr = [-2, 5, 0, -15, 7, 4, -3];
let sum = 0;

for(i = 0; i < arr.length; i++) {
    if(arr[i]> 0) {
        sum += arr[i]
       
     }
     
}
 console.log(sum)

//  угадать число

const secret = Math.floor(Math.random() * 10) + 1;
console.log(secret);
let attems = 5;
while(attems > 0) {
    const guess = Math.floor(Math.random() * 10) + 1;
    console.log(`test : ${guess}`);
    if(guess === secret) {
        console.log("Угадал");
        break;
    }
    attems--;
    console.log(guess < secret ? "Больше!" : "Меньше");
}
if (attems === 0) console.log("Не угадал! А было загадано ", secret);
// Матрица
let streak = 0; // серия успешных уклонений подряд
for(let tick = 1; tick <= 20; tick++) {
    const dodged = Math.random() < 0.7; // шанс уклониться 70%
    console.log(dodged);
    if(dodged) {
        streak++;
        console.log(`${tick} : уклонился. Серия уклонений: ${streak}`);
        if (streak >= 3) {
            console.log("Нео победил");
            break;
        }
    }else 
        {
            console.log(`${tick} Нео всё! Матрица победила!`);
                break;
        }
        
}
