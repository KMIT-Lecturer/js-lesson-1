// console.log('Hi from the external file')
// Це коментар: браузер його ігнорує

/*
console.log('1. Привіт із файлу');
console.log('2. Код виконується з гори вниз');
console.log('3. По одній команді за раз');
*/

/*
Багаторядковий
коментар
*/

// Блок ЗМІННІ
/*

let voltage = 220;
console.log(voltage);

voltage = 110;
console.log(voltage);

const maxCurrent = 16;
console.log(maxCurrent);

const pi = 3.1415926;

// maxCurrent = 20; // викликає помилку Uncaught TypeError: Assignment to constant variable.

let result;
console.log(result);

var myVariable = 'This is deprecated type';
*/

/*
// Обмін значень двох змінних
let a = 1;
let b = 2;

console.log('a', a)
console.log('b', b)

let tmp = a;

a = b;
b = tmp;

console.log('a', a)
console.log('b', b)
*/

// Типи даних

/*
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof `Привіт!!!`);
console.log(typeof true); // true false
console.log(typeof undefined);
console.log(typeof null);


let x = 10;
console.log(typeof x);
x = "десять";
console.log(typeof x);


console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));
console.log(typeof (0.1 + 0.2).toFixed(2));
console.log(10 / 0);
console.log(typeof (10 / 0));
console.log("abc" * 2);
console.log(typeof NaN);


// Перетворення типів
console.log(Number("42"));
console.log(Number("abc"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(""));


// Оператори
console.log(7 + 2);   // 9
console.log(7 - 2);   // 5
console.log(7 * 2);   // 14
console.log(7 / 2);   // 3.5
console.log(7 % 2);   // 1 (остача від ділення)
console.log(2 ** 10); // 1024 (степінь)


let score = 10;
score += 5; // score = score + 5
score++;
console.log('score', score)


const totalSeconds = 3725;
let hours = Math.floor(totalSeconds / 3600) ;
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;


console.table({hours, minutes, seconds});


// Рядки: склеювання та шаблони
const name = "Олена";
const age = 20;

console.log("Мене звуть " + name + ", мені " + age);
console.log(`Мене звуть ${name}, мені ${age + 1}`);


console.log('5' - 3);
console.log('2' * '10');
console.log('5' + 3);


//Порівняння
console.log(5 > 3);       // true
console.log(5 <= 3);      // false
console.log(5 === 5);     // true
console.log(5 === "5");   // false
console.log(5 == "5");    // true
console.log(5 !== 6);     // true


//Логічні оператори
const temperature = 25;
console.log(temperature > 20 && temperature < 30 && temperature); // true («і»)
console.log(temperature < 0 || temperature > 40);  // false («або»)
console.log(!(temperature > 20));                   // false («не»)


const celsius = 36.6;
const fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius} °C = ${fahrenheit.toFixed(1)} °F`);


//Умови

// if (умова) { ... } else { ... }

const voltage = 230;

if (voltage > 50) {
    console.log("Увага! Небезпечна напруга!");
} else {
    console.log("безпечний рівень напруги");
}



const temperature = 20;

if (temperature < 0) {
    console.log("ЛІД")
} else if (temperature < 100) {
    console.log("РІДИНА")
} else {
    console.log("ПАРА")
}



//умова з логікою
const age = 19;
const hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("Прохід дозволено");
} else {
    console.log("Прохід заборонено")
}



const n = 124;

if (n % 2 === 0) {
  console.log(n + " — парне");
} else {
  console.log(n + " — непарне");
}

//Тернарний оператор — скорочений if/else в один рядок
const status = n % 2 === 0 ? "парне" : "непарне"
console.log(status)



const input = prompt("Скільки вам років?");
console.log(input);
const age = Number(input);
if (Number.isNaN(age) || input === null) { alert('Введено невалідне значення. Будь ласка, введіть число') }
// console.log(typeof age);
if (age >= 18) {
    console.log("Ви повнолітні");
} else {
    console.log("Ви ще не повнолітні");
}

*/

let count = 0;

const button = document.getElementById('btn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    count++;
    output.textContent = `Кліків: ${count}`;

    if (count >= 20) {
        output.textContent = `Кліків: ${count}. Ого, ви наполегливі!!!`
    }
})