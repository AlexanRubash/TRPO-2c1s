let choise = prompt("Введите номер задания: ");
switch (choise) {


  case "1":
    let radius = prompt("Введите радиус круга: "); 
    
    function calcSquareOfCircle() { //Declaration
        let square = 3.14*radius**2;
        return square;
    }
    
    let calcDiameterOfCircle = function() { //Expression
        let diameter = 2*radius;
        return diameter;
    };
    
    let getLengthOfCircle = () => { //Arrow
        let length = 2*3.14*radius;
        return length;
    };

   alert("Площадь круга равна: " + calcSquareOfCircle() + "\n" +
         "Диаметр круга равен: " + calcDiameterOfCircle() + "\n" +
         "Длина окружности равна: " + getLengthOfCircle());
    break;

    
  case "2":
    function getParameters(age = 18, name, par3) {
        par3 = prompt("Введите третий параметр: ");
        return `${age}${name}${par3}`;
    }
    alert(getParameters());
    break;



  case "3":{
    function getAmountOfStudents() {
        let names = prompt("Введите имена студентов: ");
        let amount = names.split(' ');    
        return amount.length;

    }
    alert( "Количество студентов: " + getAmountOfStudents());

  
    break;
  }



  case "4":
    let timeInSeconds= (26**5*10**3)*3; //всего секунд, необходимых для перебора всех вариантов

    let yearSeconds = 60*60*24*360;//кол-во секунд в году
    
    let years=0;
    let monthes=0;
    let days=0;
    let hours=0;
    let minutes = 0;
    let seconds=0;

    function calcYears() {
        years = timeInSeconds / yearSeconds;      
        monthes = ((years - Math.floor(years)) * 12);
        years = Math.trunc(years); 
          return years;
    }

    function calcMonthes() {
        days = (monthes - Math.floor(monthes))*30;
        monthes = Math.trunc(monthes);
          return monthes;
    }

    function calcDays() {       
        hours = (days - Math.floor(days))*24;
        days = Math.trunc(days);
          return days; 
        }

    function calcHours() {
        minutes = (hours - Math.floor(hours))*60; 
        hours = Math.trunc(hours);
          return hours;
    } 

    function calcMinutes() {   
        minutes = Math.round(minutes);
          return minutes;
    }

    function calcSeconds() {
      return seconds;
    }

    alert(`${calcYears()} лет ${calcMonthes()} месяцев ${calcDays()} дней ${calcHours()} часов ${calcMinutes()} минут ${calcSeconds()} секунд`);

        break;



  case "5":
    
    let userData = prompt("Введите данные (число или текст): ");
    
    if(isFinite(userData)) { 
        userData = Number(userData);
        if(userData-Math.floor(userData)) {
            showMathRound();
        } 
        else {
            alert(userData.toString(16).toUpperCase());
        }
    }
    else { 
        alert("Текст в верхнем регистре: " + userData.toUpperCase() + "\n" +
        "Текст в нижнем регистре: " + userData.toLowerCase());
    }
   
    function showMathRound() {
        alert("Округление в меньшую сторону: " + Math.floor(userData) + "\n" +
              "Округление до ближашего целого: " + Math.ceil(userData) + "\n" +
              "Округление в большую сторону: " + Math.round(userData));
    }

  
    break;
 
    

  case "6":
    let dictWord = "биография";
    let userWord = prompt("Введите слово: ");
    for (let i = 0; i<dictWord.length; i++) {
        if(dictWord[i]==userWord[i]) continue;
        else alert(`Ошибка в позиции: ${i+1}`);
      }
      
    break;


    
  case "7": {
    let cathet_1 = prompt("Введите длину первого катета: ");
    cathet_1 = Number(cathet_1);
    let cathet_2 = prompt("Введите длину второго катета: ");
    cathet_2 = Number(cathet_2);
    let hypotenuse = Math.sqrt(cathet_1**2+cathet_2**2);
    let sin_1, sin_2, cos_1, cos_2, tg_1, tg_2;

    function calcAreaOfTriangle() {
        let area = cathet_1*cathet_2/2;
        return area;
    }
    
    function calcPerimeterOfTriangle() {
        let perimeter = cathet_1 + cathet_2 + hypotenuse;
        return perimeter;
    }

    function calcHeightOfTriangle() {
        let height = cathet_1*cathet_2/hypotenuse;
        return height;
    }

    function calcSinOfTriangle() {
        sin_1 = cathet_1/hypotenuse;
        sin_2 = cathet_2/hypotenuse;
        return `sin_1 = ${sin_1}, sin_2 = ${sin_2}`;
    }

    function calcCosOfTriangle() {
        cos_1 = sin_2;
        cos_2 = sin_1;
        return `cos_1 = ${cos_1}, cos_2 = ${cos_2}`;
    }

    function calcTgOfTriangle() {
        tg_1 = sin_1/cos_1;
        tg_2 = sin_2/cos_2;
        return `tg_1 = ${tg_1.toFixed(3)}, tg_2 = ${tg_2.toFixed(3)}`;
    }

    function calcCtgOfTriangle() {
        let ctg_1 = 1/tg_1;
        let ctg_2= 1/tg_2;
        return `ctg_1 = ${ctg_1.toFixed(3)}, ctg_2 = ${ctg_2.toFixed(3)}`;
    }

    function getInformationOfTriangle() {
        alert("Площадь треугольника: " + calcAreaOfTriangle() + "\n" +
              "Периметр треугольника: " + calcPerimeterOfTriangle() + "\n" +
              "Высота (к гипотенузе): " + calcHeightOfTriangle() + "\n" +
              "Синусы углов: " + calcSinOfTriangle() + "\n" +
              "Коcинусы углов: " + calcCosOfTriangle() + "\n" +
              "Тангенсы углов: " + calcTgOfTriangle() + "\n" +
              "котангенсы углов: " + calcCtgOfTriangle() + "\n");
    }
    getInformationOfTriangle();
    break;
  }

  default:
    alert("Нет такого значения");
}


















