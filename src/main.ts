import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <DIV>
      <h2>Задание 1</h2>
      <p>Разработайте сценарий для веб-страницы, который по введенному
      числу определяет, к какой группе оно относится: простые, четные, нечетные
      и добавляет это число в соответствующую группу (список).</p>
      <input id="numInput" type="number" placeholder="Введите число">
    
      <table>
        <thead>
            <td>
                <ul id="primeList">Простые числа:</ul>
            </td>
            <td>
              <ul id="evenList">Четные числа:</ul>
            </td>
            <td> 
                <ul id="oddList">Нечетные числа:</>
            </td>
        </thead>

  </DIV>
  </div>
`;

// ЗАДАНИЕ 1
// Получаем ссылки на элементы на странице
const inputElement = document.getElementById("numInput") as HTMLInputElement;
const primeList = document.getElementById("primeList");
const evenList = document.getElementById("evenList");
const oddList = document.getElementById("oddList");

// Функция для определения, является ли число простым
function isPrime(num: number): boolean {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Обработчик события ввода числа
function handleInput() {
  const num = parseInt(inputElement.value);

  if (isNaN(num)) {
    return;
  }

  if (isPrime(num)) {
    const li = document.createElement("li");
    li.textContent = num.toString();
    primeList.appendChild(li);
  } else if (num % 2 === 0) {
    const li = document.createElement("li");
    li.textContent = num.toString();
    evenList.appendChild(li);
  } else {
    const li = document.createElement("li");
    li.textContent = num.toString();
    oddList.appendChild(li);
  }
}

// Назначаем обработчик событий на ввод числа
inputElement.addEventListener("input", handleInput);


document.querySelector<HTMLDivElement>("#sec")!.innerHTML = `
  <div>
  <DIV>
      <h2>Задание 2</h2>
      <p>Разработайте сценарий для веб-страницы, который подсчитывает
      число одинаковых слов, встречающихся в текстовом поле веб-страницы.</p>
      <textarea id="inputText" rows="10" cols="30"></textarea><br>
        <button id="countButton">Подсчитать</button>
        <div id="result"></div>

  </DIV>
  </div>
`;
// ЗАДАНИЕ 2
document.getElementById("countButton")!.addEventListener("click", function() {
    const inputText = (<HTMLInputElement> document.getElementById("inputText")).value;
    const words = inputText.split(" ");
    const wordCount = {};

    // Подсчет количества каждого слова
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    // Вывод результатов
    let result = "";
    for (let word in wordCount) {
        result += word + ": " + wordCount[word] + "<br>";
    }
    document.getElementById("result")!.innerHTML = result;
});

document.querySelector<HTMLDivElement>("#third")!.innerHTML = `
  <div>
  <DIV>
      <h2>Задание 3</h2>
      <p> Разработайте сценарий для веб-страницы, который сможет по
      нажатию на соответствующую кнопку добавлять часто употребляемые слова,
      например: добрый день, спасибо, пожалуйста, к сожалению, и т.д.</p>
      <input type="text" id="wordInput">
      <button id="addBtn">Добавить слово</button>
      <ul id="wordList">
         <h5>Часто употребляемые слова</h5>
      </ul>

  </DIV>
  </div>
`;

// Получаем ссылки на элементы HTML
const wordInput = document.getElementById("wordInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn");
const wordList = document.getElementById("wordList");

// Определяем массив с часто употребляемыми словами
const commonWords = ["добрый день", "спасибо", "пожалуйста", "к сожалению"];

// Функция обработки события нажатия кнопки
function addWord() {
    const newWord = wordInput.value;
    // Добавляем новое слово в массив
    commonWords.push(newWord);
    // Создаем новый элемент li с добавленным словом
    const newListItem = document.createElement("li");
    newListItem.textContent = newWord;
    // Добавляем новый элемент в список
    wordList.appendChild(newListItem);
    // Очищаем поле ввода
    wordInput.value = "";
}

// Назначаем обработчик события нажатия кнопки
addBtn.addEventListener("click", addWord);