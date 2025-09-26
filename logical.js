// Логическое И (AND) - Конъюнкция(логическое умножение) &&
// Возвращает истину только, если оба условия истинны
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

/*  логическое умножение 
* 1 * 1 = 1
* 0 * 1 = 0
* 1 * 0 = 0
* 0 * 0 = 0
*/
let age = 25;
let hasDriversLicense = false;
// Человек может арендовать машину только если ему больше 18
// И у него есть водительские права
let canRentCar = age > 18 && hasDriversLicense;
console.log(`Может ли арендовать машину? Ответ: ${canRentCar}`);
// Логическое  ИЛИ (OR - ||). Дизъюнкция.
// Возвращает истину, если хотя бы одно условие истинно

console.log("----ИЛИ (OR - ||). Дизъюнкция----");
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);

let hasBusTicket = false;
let hasTrainTicket = true;
// Человек может уехать из Йыхви, если у него есть билет на автобус или поезд

let canLeave = hasBusTicket || hasTrainTicket;
console.log(`Может ли человек уехать? Ответ: ${canLeave}`);
/*
Логическое сложение ИЛИ
1 + 1 = 1
0 + 1 = 1
1 + 0 = 1
0 + 0 = 0
*/

// Логическое НЕ (NOT) операнд - "!"
// Инвертирует (на противоположное) логическое значение.
console.log("---Логическое НЕ (NOT)---");
console.log("!true", !true);
console.log("!false", !false);
let isDoorOpen = false;
console.log(`Дверь закрыта? Ответ: ${!isDoorOpen}`);
// Доступ к закрытому разделу сайта
let isUserAutorize = true;
let accessLevel = "admin";
let hasPremium = false;
// Доступ разрешён, если пользователь авторизова и он является админом
// или у него есть Премиум-подписка
let isAccessGranted = isUserAutorize && (accessLevel === "admin" || hasPremium);
console.log(`Доступ разрешён? Ответ: ${isAccessGranted}`);
// Пример получения скидки в магазине
let purchaseAmount = 120;
let hasLoyaltyCard = true;
let dayOfWeek = "суббота";
// Скидка даётся, если сумма покупки больше 100
// и у клиента есть скидочная карта ИЛИ сегодня выходной.
let hasDiscount = (purchaseAmount > 100 && hasLoyaltyCard) || (dayOfWeek === "суббота" || dayOfWeek === "воскресенье");
console.log(`Получу я скидку? Ответ: ${hasDiscount}`);
// Пример Зомби-апокалипсис
let hasWeapon = true;
let hasShelter = true;
let isFastRunner = true;

// Чтобы пережить ночь, нужно иметь оружие И (найти укрытие ИЛИ уметь быстро бегать)
let iWillSurvive = hasWeapon && (hasShelter || isFastRunner);
console.log(`Есть ли у тебя шанс выжить? Ответ: ${iWillSurvive}`);

// Пример с драконом
let isKnightBrave = true;
let hasMagicSword = false;
let isdragonSleep = true;

// Герой может забрать золото, если (он храбрый парень И у него есть магический меч)
// ИЛИ если дракон просто спит

let canGetTreasury = isdragonSleep || (isKnightBrave && hasMagicSword);
console.log(`Я получу сокровище дракона? Ответ: ${canGetTreasury}`);

let knowCode = true;
let hasCorrectCard = true;
let isLaserActive = true;

// Агент может войти в хранилище, если он знает код И у него правильная карта, И лазерная сетка НЕ активна.

let canEnter = knowCode && hasCorrectCard && !isLaserActive;
console.log(`Агент 007 может войти в хранилище? Ответ: ${canEnter}`);

// Пример - организация вечерники в пятницу
let hasGoodMusic = true;
let hasEnoughDrinks = false;
let hasBoltDelivery = true;
let hasFriendsAvailable = true;
let isNeighborAngry = true;
let hasSoundProofing = true;

// условия
// Должна быть хорошая музыка И (достаточно напитков ИЛИ доступна доставка еды)
// И все друзья могут прийти
// И (сосед НЕ злится ИЛИ в  квартире звукоизоляция)

let isFantasticParty = (hasGoodMusic && (hasEnoughDrinks || hasBoltDelivery)) && hasFriendsAvailable && (!isNeighborAngry || hasSoundProofing);

console.log(`Вечеринке быть? Ответ: ${isFantasticParty}`);
