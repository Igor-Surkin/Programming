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

// 6. Случайная сортировка
const randomSort = [...countries].sort(() => Math.random() - 0.5);
console.log("6. Случайная сортировка: ", randomSort);

// 7.Классические алгоритмы сортировки
// 7.1 Пузырьковая сортировка
// Идея: многократно проходить по массиву, сравнивая соседние элементы и меняя их местами, 
// если они в неправильном порядке.
// О(n^2) - квадратичная сложность
// медленная для больших массивов 

const bubbleSort = (arr) => {
  const newArr = [...arr];
  const n = newArr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (newArr[j].localeCompare(newArr[j + 1]) > 0) {
        // меняем элементы местами
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
      

    }
  }
  return newArr;
};
console.log("Bubble sorted: ", bubbleSort(countries));
// 7.2 Сортировка выбором
// Идея: находить наименьший (или наибольший) элемент в массиве
// и помещать его в начало (или конец) отсортированной части массива.
// О(n^2) - квадратичная сложность
// медленная для больших массивов 

//  7.3 Сортировка вставками 
// Идея: строить отсортированный массив по одному элементу,
// вставляя каждый новый элемент в его правильное место.
// О(n^2) - квадратичная сложность
// Эффективна для небольших ассивов или почти отсортированных данных 

// 7.4 Bogo Sort
// Идея: случайным образом перемешивать массив, пока он не будет отсортирован.
// O((n + 1)!)Факториальная сложность
// Очень неэффективный и нереалистичный алгоритм, используется только в образовательных целях

