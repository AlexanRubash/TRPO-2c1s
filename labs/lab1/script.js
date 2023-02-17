let choise = prompt("Введите номер задания: ");
switch (choise) {

///////////Задание 1/////////////////////////////////////////////////////////////
case "1":

function pow(x, n) {
    let result = 1;
    
    for(let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?",'');
let n = prompt("n?",'');

if(n < 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else {
    alert(pow(x, n));
}

break;
///////////Задание 2/////////////////////////////////////////////////////////////
case "2":

let userName = 'Sanya';
let cityName = 'Minsk';
let birthYear = 2004;
const COLOR_RED = "#F00";


let userAnswer = confirm("Вы любите, кушать?","");

let number = Infinity;
const userPassword = 532;
let Perimeter_Quadrilateral_In_MM = 120;

let answerToAction = alert("Введенные данные неверны");

break;
///////////Задание 3/////////////////////////////////////////////////////////////
case "3":

console.log("Задание 3");

let a = 5;
console.log(typeof a);

let name = "Name";
console.log(typeof name);

let i = 0;
console.log(typeof i);

let double = 0.23;
console.log(typeof double);

let result = 1 / 0;
console.log(typeof result);

let answer = true;
console.log(typeof answer);

let no = null;
console.log(typeof no);

break;
///////////Задание 4/////////////////////////////////////////////////////////////
case "4":

console.log("Задание 4");

function CalcSquare(a, b) {
    return a * b;
}

let A = CalcSquare(45,21);
console.log("Square = " + A + " mm");

break;
/////////Задание 5/////////////////////////////////////////////////////////////
case "5":

console.log("Задание 5");

function calcNumberOfSquaresInRectangle(a,b,c) {
    return Math.round(a / c) * Math.round(b / c);
}

console.log(calcNumberOfSquaresInRectangle(45,21,5) + " Squares !");

break;
///////////Задание 6/////////////////////////////////////////////////////////////
case "6":

console.log("Задание 6");

let i2 =2;
let a2 = ++i2;
let b = i2++;

console.log(a2 == b);

break;
///////////Задание 7/////////////////////////////////////////////////////////////
case "7":

console.log("Задание 7");

console.log("1 "+("Привет" < "привет"));
console.log("2 "+("Привет" > "Пока"));
console.log("3 "+("Привет" > "Пока"));
console.log("4 "+(45 < "53"));
console.log("5 "+(false < 3));
console.log("6 "+(3 != "3мм"));
console.log("7 "+(null === undefined));

break;
///////////Задание 8/////////////////////////////////////////////////////////////
case "8":

console.log('введенные данные неверные!');

alert("введенные данные неверные!");

let userData = prompt("Введите данные");

if(userData) {
    alert("введенные данные неверные!");
}

break;
/////////Задание 9/////////////////////////////////////////////////////////////
case "9":

let userAnswer2 = prompt("Вы любите, кушать?","");

if(userAnswer2 == "да") {
    alert("Ответ верный!");
}
else {
    alert("Ответ неверный!");
}

break;
/////////Задание 10/////////////////////////////////////////////////////////////
case "10":

let userLogin = prompt("Введите имя","");
let userPassword2 = prompt("Введите пароль","");

if(userLogin != "Sanya" && userPassword != "1234") {
    alert("Данные введены неверно!");
}
else {
    alert("Данные введены верно!");
}

break;
/////////Задание 11/////////////////////////////////////////////////////////////
case "11":

let MathExam = 1;
let RussiaExam = 0;
let EnglishExam = 1;
alert(typeof MathExam);
if (MathExam && RussiaExam && EnglishExam) {
alert("Сдалл");
} else if (MathExam || RussiaExam || EnglishExam) {
alert("Пересдача")
} else {
alert("Не сдал");
}

break;
/////////Задание 12/////////////////////////////////////////////////////////////
case "12":

function calcSum(a,b) {
    return a + b;
}

let firstNumber = +(prompt('Введите первое число'));
let secondNumber = +(prompt('Введите второе число'));

alert(calcSum(firstNumber,secondNumber));


break;
/////////Задание 13/////////////////////////////////////////////////////////////
case "13":

console.log("Задание 13");

console.log(true + true);
console.log(0 + "5");
console.log(5 + "мм");
console.log(8 / Infinity);
console.log(9 * "\n9");
console.log(null - 1);
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log(7 && 0);

break;
/////////Задание 14/////////////////////////////////////////////////////////////
case "14":

console.log("Задание 14");

for(let i = 1; i <= 10; i++) {
    if(i % 2) {
        console.log(i + "мм");
        continue;
    }
    
    console.log(i + 2);
}

break;
/////////Задание 15/////////////////////////////////////////////////////////////
case "15":

for(;;) {
    let Number = +(prompt("Введите число"));
    if(Number >= 100) break;
}

break;
/////////Задание 16/////////////////////////////////////////////////////////////
case "16":

console.log("Задание 16");

let numberOfDay = +(prompt("Введите номер дня недели"));

switch(numberOfDay) {
    case 1: 
      alert('пн');
      break;
    case 2: 
      alert('вт');
      break;
    case 3: 
      alert('ср');
      break;
    case 4: 
      alert('чт');
      break;
    case 5: 
      alert('пт');
      break;
    case 6: 
      alert('сб');
      break;
    case 7: 
      alert('вс');
      break;
}
break;
}
