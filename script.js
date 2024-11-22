/*Задание 1: Основные алгоритмические задачи
1. Напишите функцию, которая проверяет, является ли строка палиндромом. Палиндром
— это слово, фраза, число или другая последовательность символов, которая
читается одинаково слева направо и справа налево (игнорируя пробелы, знаки
препинания и регистр). */

let arr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

const isPalindrome = (str) => {
  let filterStr = str.toLowerCase().split("").filter(i => arr.some(j => j.includes(i))).join("");
  filterStr.split("").reverse().join("") === filterStr ? console.log(true) : console.log(false);
};

/*isPalindrome("А роза упала на лапу Азора"); // true
isPalindrome("А, роза - упала! на ? лапу . Азора"); // true
isPalindrome("Привет"); // false
*/

/*2. FizzBuzz
Напишите функцию, которая выводит числа от 1 до 100. Но для кратных трём
выводите "Fizz" вместо числа, а для кратных пяти — "Buzz". Для чисел, кратных как
трём, так и пяти, выводите "FizzBuzz".*/


function fizzBuzz(maxNum) {
	let result = [];
	let num = 1;
	while (num <= maxNum) {
		if (num%3 == 0 && num%5 == 0) {
			result.push('FizzBuzz');
		} else if (num%3 == 0) {
			result.push('Fizz');
		} else if (num%5 == 0) {
			result.push('Buzz'); 
		} else {
			result.push(num);
		};
		num++;
	} 
	console.log(result);
};

//fizzBuzz(100)


/*3. Разбиение массива на части
Напишите функцию, которая разбивает массив на группы заданного размера.
*/

function chunkArray(array, size) {
	let result = [];
	for (let i = 0; i < array.length/size; i++) {
		result[i] = array.slice((i*size), (i*size)+size)
	};
	console.log(result)
};

//chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2); // [[1, 2], [3, 4], [5, 6],[7, 8]]
//chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6],[7, 8]]


//Задание 4: Объектно-ориентированный JavaScript (1-1.5 часа)
//1. Реализация простого калькулятора

//Создайте класс Calculator, который симулирует работу простого калькулятора с
//методами: add(a, b), subtract(a, b), multiply(a, b), divide(a, b). Если b равно 0,возвращает сообщение об ошибке.
//Создайте экземпляр класса и продемонстрируйте его использование, вызывая методыс разными аргументами.

class Calculator {
  constructor() {};
  add(a, b) {
    return a+b;
  };
  subtract(a, b) {
    return a-b;
  };
  multiply(a, b) {
    return a*b;
  }
  divide(a, b) {
    if (b===0) {
      return 'Делить на ноль нельзя!!!';
    } else {
      return a/b;
    };
  };
};

const myCalc = new Calculator();
//console.log(myCalc.add(5,7));
//console.log(myCalc.subtract(5,7));
//console.log(myCalc.multiply(5,7));
//console.log(myCalc.divide(5,7));
//console.log(myCalc.divide(5,0));


/*2. Система управления библиотекой
Создайте класс Book с следующими свойствами: Название, Автор, ISBN, Статус (взята или доступна)
Далее создайте класс Library, который:
● Позволяет добавлять новые книги.
● Позволяет брать книгу по её ISBN.
● Позволяет возвращать взятую книгу по её ISBN.
● Показывает список доступных книг.
Реализуйте методы для управления книгами и их статусами.*/

class Book {
  constructor(title, author, isbn, acess) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.acess = acess;
  }
}

class Library {
  constructor() {
    this.arrBooks = [];
  }
  addBook(book) { //добавление книги
    this.arrBooks.push(book);
  }
  borrowBook(isbn) { //брать книгу по ее ISBN
    let indexBook = this.arrBooks.findIndex(book => book.isbn == isbn)
    if (this.arrBooks[indexBook].acess == false) {
      alert('Эта книга уже взята или такой книги нет в библиотеке')
    } else {
      this.arrBooks[indexBook].acess = false
      alert(`Вы взяли книгу ${this.arrBooks[indexBook].title} автора ${this.arrBooks[indexBook].author}`)
    }
  }
  returnBook(isbn) { //Возврат книги по еë ISBN
    let indexBook = this.arrBooks.findIndex(book => book.isbn == isbn)
    if (this.arrBooks[indexBook].acess == true) {
      alert('Эта книга уже сдана, вы хотите нас обмануть???')
    } else {
      this.arrBooks[indexBook].acess = true
      alert('Спасибо что вернули нам книгу! Хорошего дня!')
    }
  }
  listAvailableBooks() { //Список доступных книг
    this.arrBooks.filter(book => book.acess == true)
  }
}

let myLibrary = new Library();

let firstBook = new Book('JS', 'Petrov', 1, true);
let secondBook = new Book('React', 'Ivanov', 2, true);
let thirdBook = new Book('HTML', 'Sidorov', 3, true);
let fourthBook = new Book('CSS', 'Krasov', 4, true);
let fifthBook = new Book('Next.js', 'Panov', 5, true);

myLibrary.addBook(firstBook)
myLibrary.addBook(secondBook)
myLibrary.addBook(thirdBook)
myLibrary.addBook(fourthBook)
myLibrary.addBook(fifthBook)


/*Задание 5: Решение проблем и оптимизация (1 час)
/*2. Глубокое клонирование объекта
Напишите функцию, которая выполняет глубокое клонирование объекта, т.е.
вложенные объекты также должны быть склонированы, а не переданы по ссылке.*/

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

const original = {
  name: 'John',
  address: {
  city: 'New York',
  country: 'USA'
  }
}

const copy = deepClone(original);
copy.address.city = 'Los Angeles';
//console.log(original)
//console.log(copy)