let choise = prompt("Введите номер задания: ");
switch(choise) {

    case '1': {
     

       function func() {
        let arr = Array.from(arguments);
        
        if(arr.length>7) {
            return alert("Слишком большое количество аргументов");
            
        }
        switch(arr.length) {

            case 1: 
            case 2: 
            case 3: {
                let stringOfParameters = arr.join('');
                return alert(stringOfParameters);  
            }

            case 4:
            case 5: {  
                let typeArr = [];
              for(let i = 0; i<arr.length; ++i){
                typeArr[i] = typeof(arr[i]); //??
              }
              return alert(typeArr);
            }

            case 6:
            case 7: {
                 return alert("Количество аргументов: " + arr.length);
            }

            default: {
                alert("Нет таких значений");
                break;
            }
        }
        
       
      }

     func(1,2,3);
      func("sd","ыекшт",2,3,4);
     func(1,4,7,7,6,4,6,7,5,4,6,6,4,6);
        break;
    }


    case '2': {
        // //№ 1
        // window.a; 
        // alert(a);

        // //№ 2
        // alert(a);
        // window.a = 2;

        // //№ 3 
        // alert(a); //ничего не выведет
        // window.a = 2;
        // let a;
        
        // //№ 4 
        // alert(a); //undefined
        // window.a = 2;
        // var a=2;

        // //№ 5 
        // alert(a); //невозможно получить доступ до инициализации
        // let a = 2;

        // //№ 6 
        // let a = 2;
        // window.a = 3; 
        // alert(a); //2

        // // //№ 7
        // var a = 2;
        // window.a = 3; 
        // alert(a); //3
        
        break;
    }

    case '3': {
    
      // let s = 5;
        let s;
        function sum() {
            alert(s);
        }

        sum();

        break;
    }

    case '4': {
        function makeCounter() {
            let currentCount = 1;
             
            return function() {
                return currentCount++;
            };
        }
       
        let counter = makeCounter();
        
        alert(counter());
        alert(counter());
        alert(counter());

        let counter2 = makeCounter();
        alert(counter2());

        alert(counter.name);
        alert(makeCounter.name);

        // let currentCount = 1;
        // function makeCounter() {            
        //     return function() {
        //         return currentCount++;
        //     };
        // }

        // let counter = makeCounter();
        // let counter2 = makeCounter();

        // alert(counter());
        // alert(counter());

        // alert(counter2());
        // alert(counter2());
        break;
    }
    case '6': {
        
        let A;
        let b;
        let c;
        let exit = true;
        while(exit){
            A = prompt("Введите длину ребра параллелепипеда, которая будет постоянна: ");
            if(Number(A) && A>0) {
                A = Number(A);
                exit = false;
            } else alert("Некорректное значение");
        }

        exit = true;
        while(exit){
            b = prompt("Введите ширину");
            if(Number(b) && b>0) {
                b = Number(b);
                exit = false;
            } else alert("Некорректное значение");
        }

        exit = true;
        while(exit){
            c = prompt("Введите высоту");
            if(Number(c) && c>0) {
                c = Number(c);
                exit = false;
            } else alert("Некорректное значение");
        }
        
        function volume(A) {
            return (b, c) => {
                return A * b * c;
            }
        }
            alert(`Объем 1 равен: ` + volume(A)(b,c));
            alert(`Объем 2 равен: ` + volume(A)(10,15));
            alert(`Объем 3 равен: ` + volume(A)(4,6));
            alert(`Объем 4 равен: ` + volume(A)(18,36));
            alert(`Объем 5 равен: ` + volume(A)(2,9));
        break;
    }


    case '7': {
        let obj = {     
            "left": 0,  
            "right": 0,
            "up": 0,
            "down": 0
          };

                let cycle = 1;
                while(cycle) {
                    let key = prompt("Введите команду (left, right, up, down): ");

                    switch(key) {
                        case 'left': {
                            obj[key] = obj[key] - 10;
                            console.log("left: " + obj[key]);
                            break;
                        }
                        case 'right': {
                            obj[key] = obj[key] + 10;
                            console.log("right: " + obj[key]);
                            break;
                        }
                        case 'up': {
                            obj[key] = obj[key] + 10;
                            console.log("up: " + obj[key]);
                            break;
                        }
                        case 'down': {
                            obj[key] = obj[key] - 10;
                            console.log("down: " + obj[key]);
                            break;
                        }
                        default: {
                            alert("Некорректное значение");
                        }
                    }
                    
                    cycle = prompt("Желаете управлять движением объекта снова?\n 1 - да\n 2 - нет");

                        
                    if(cycle !=1) {   
                        
                        let x = obj.left + obj.right;
                        let y = obj.down + obj.up;
                        function* generateCoordsXY() {
                            yield x;
                            yield y;
                        } 
                        let generator2 = generateCoordsXY();
                        for(let value of generator2) {
                            alert(value);
                        }
                        break;
                    }; 
                }
        break;
    }

    default: {
        alert("Некорректное значение");
    }
}




