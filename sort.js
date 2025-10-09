// Array of world countries
// Массив стран мира
const countries = [
  "Estonia", "Colombia", "China", "India", "Brazil", "Canada", "Australia", "Argentina", "Mexico", "France",
  "Germany", "Italy", "Spain", "United Kingdom", "Japan", "South Korea", "Indonesia", "Russia",
  "Egypt", "South Africa", "Saudi Arabia", "Turkey", "Iran", "Pakistan", "Bangladesh", "Vietnam",
  "Thailand", "Philippines", "Malaysia", "USA", "Peru", "Chile", "Venezuela", "Ecuador", "Cuba",
  "Belarus", "Ukraine", "Poland", "Czech Republic", "Sweden", "Norway", "Finland", "Denmark", "Greece",
  "Portugal", "Switzerland", "Austria", "Hungary", "Romania", "Bulgaria", "Serbia", "Croatia",
  "New Zealand", "United Arab Emirates"
];

// 1. Сортировка в алфавитном порядке
const sortedAlphabetically = [...countries].sort((a, b) => a.localeCompare(b));
console.log("1. Сортировка в алфавитном порядке: ", sortedAlphabetically);

// 2. Сортировка в обратном алфавитном  порядке
const sortedReverseAlphabetically = [...countries].sort((a, b) => b.localeCompare(a));
console.log("2. Сортировка в обратном порядке: ", sortedReverseAlphabetically);

// 3. Сортировка по длине названия страны (от короткого к длинному)

const sortedByLength = [...countries].sort((a, b) => a.length - b.length);
console.log("3. Сортировка по длине названия страны (от короткого к длинному): ", sortedByLength);

// 4. Сортировка по длине названия страны (от длинного к короткому)

const sortedByLengthDecs = [...countries].sort((a, b) => b.length - a.length);
console.log("3. Сортировка по длине названия страны (от длинного к короткому): ", sortedByLengthDecs);

// 5. Сортировка по количеству гласных в названии страны (от меньшего к большему)
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(letter => vowels.includes(letter)).length;

};

const sortedByVowelCount = [...countries].sort((a, b) => countVowels(a) - countVowels(b));
console.log("5. Сортировка по количеству гласных в названии страны (от меньшего к большему): ", sortedByVowelCount);