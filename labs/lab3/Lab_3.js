    let choise = prompt("Введите номер задания");
    switch(choise) {

        //TASK 1
        case '1': {
            let userComment = prompt("Напишите комментарий: ");
            const LENGTH = 30;
    
              userComment = userComment.replace('кот', '*');
            
            if(userComment.includes('собак')) {    
                userComment = userComment.replace('собак', 'Собак');
            }
            if(userComment.includes('пес')) {     
                userComment = userComment.replace(/пес/, 'многоуважаемый пес');
            }
            if(userComment.length > LENGTH) {
                userComment = userComment.substring(0, LENGTH);
            }
            alert("Отредактированный комментарий: " + userComment);
            break;
        }


        
        //TASK 2
        case '2': {
            let week = {
                1 : "пн",
                2 : "вт",
                3 : "ср",
                4 : "чт",
                5 : "пт",
                6 : "сб",
                7 : "вс",
            };
            let key = prompt("Введите номер дня недели");
            alert(week[key]);

            let countOfOddDays = 0;
            for(let secondkey in week) {
                if(secondkey%2) {
                    alert(secondkey + ": " + week[secondkey])
                    countOfOddDays++;
                }    
            }
            alert("Количество нечетных дней: " + countOfOddDays);
            break;
        }



        //TASK 3
        case '3': {
            let buttonstyle = {
                margin: '10px 20px',
                padding: '10px 20px', 
                border: '3px solid black',
                'border-radius': '10px',
                'background-color': 'yellow',
                'font-size': '15px',
            }

            let linkStyle = {
                margin: '10px 20px',
                padding: '10px 20px',
                'border-radius': '10px',
                'background-color': 'yellow',
                'font-size': '15px',
            }

            let firstButton = document.createElement('button'); 
            for(let prop in buttonstyle) {
                firstButton.style[prop] = buttonstyle[prop];
            }

            firstButton.innerHTML = 'Первая кнопка';
            firstButton.onclick = () => alert("Нажатие на первую кнопку");
            document.body.append(firstButton); //вставка кнопки в документ


            let secondButton = document.createElement('button');
            for(let prop in buttonstyle) {
                secondButton.style[prop] = buttonstyle[prop];
            }

            secondButton.innerHTML = 'Вторая кнопка';
            secondButton.onclick = () => alert("Нажатие на вторую кнопку");
            document.body.append(secondButton);

            let link = document.createElement('a');
            for(let prop in linkStyle) {
                link.style[prop] = linkStyle[prop];
            }
            link.innerHTML = 'Ссылка'; //получить HTML-содержимое элемента в виде строки
            link.href = '3.html';
            document.body.append(link);

            break;
        }



        //TASK 4
        case '4': {
            let listOfProducts = new Set();

            let guitar = { name: "Гитара" };
            let capodaster = { name: "Каподастр" };
            let amplifier = { name: "Комбоусилитель" };

            let cycle = 1;
            while(cycle) {

                let choise = prompt("Выберите, что хотите сделать:\n 1 - добавление товара\n 2 - удаление товара\n 3 - проверка наличия товара\n" +
                " 4 - количество имеющегося товара");
              
                  switch(choise) {
  
                      case '1': {

                            //let cycle = 1;
                            while(cycle){
                                let choiseProduct = prompt("Выберите, какой товар хотите добавить:\n 1 - Гитара\n 2 - Каподастр\n 3 - Комбоусилитель");

                                switch(choiseProduct) {
                                    case '1': {
                                        listOfProducts.add(guitar);  
                                        alert( ` Вы добавили товар ${guitar.name}\n`); //?? guitar.name
                                        break;
                                    }
                                    case '2': {
                                        listOfProducts.add(capodaster);  
                                        alert( ` Вы добавили товар ${capodaster.name}\n`); 
                                        break;
                                    }
                                    case '3': {
                                        listOfProducts.add(amplifier);  
                                        alert( ` Вы добавили товар ${amplifier.name}\n`);
                                        break;
                                    }
                                    default: {
                                        alert("Нет такого товара");
                                    }
                                }
                                cycle = prompt("Желаете добавить что-нибудь еще?\n 1 - да\n 2 - нет");
                                if(cycle !=1) break;
                            }        
                        break;
                      }
      
                      case '2': {
                        //let cycle = 1;
                            while(cycle){
                                let choiseProduct = prompt("Выберите, какой товар хотите удалить:\n 1 - Гитара\n 2 - Каподастр\n 3 - Комбоусилитель");

                                switch(choiseProduct) {
                                    case '1': {
                                        if(listOfProducts.has(guitar)) {
                                            listOfProducts.delete(guitar);  
                                            alert( `Вы удалили товар ${guitar.name}\n`); //?? guitar.name
                                        } else {
                                            alert(`Невозможно удалить: товара ${guitar.name} нет в наличии`);
                                        }
                                        break;
                                    }
                                    case '2': {
                                        if(listOfProducts.has(capodaster)) {
                                            listOfProducts.delete(capodaster);  
                                            alert( `Вы удалили товар ${capodaster.name}`); //?? guitar.name
                                        } else {
                                            alert(`Невозможно удалить: товара ${capodaster.name} нет в наличии`);
                                        }
                                        break;
                                    }
                                    case '3': {
                                        if(listOfProducts.has(amplifier)) {
                                            listOfProducts.delete(amplifier);  
                                            alert( `Вы удалили товар ${amplifier.name}`); //?? guitar.name
                                        } else {
                                            alert(`Невозможно удалить: товара ${amplifier.name} нет в наличии`);
                                        }
                                        break;
                                    }
                                    default: {
                                        alert("Нет такого товара");
                                    }
                                }
                                cycle = prompt("Желаете удалить что-нибудь еще?\n 1 - да\n 2 - нет");
                                if(cycle !=1) break;
                            }        
                        break;
                      }

                      case '3': {
                        //let cycle = 1;
                        while(cycle){
                            let choiseProduct = prompt("Выберите, наличие какого товара хотите проверить:\n 1 - Гитара\n 2 - Каподастр\n 3 - Комбоусилитель");

                            switch(choiseProduct) {
                                case '1': {
                                    if(listOfProducts.has(guitar)) {
                                        alert( `Товар ${guitar.name} есть в наличии`); //?? guitar.name
                                    } else {
                                        alert(`Товара нет в наличии`);
                                    }
                                    break;
                                }
                                case '2': {
                                    if(listOfProducts.has(capodaster)) {
                                        alert( `Товар ${capodaster.name} есть в наличии`); //?? guitar.name
                                    } else {
                                        alert(`Товара нет в наличии`);
                                    }
                                    break;
                                }
                                case '3': {
                                    if(listOfProducts.has(amplifier)) {
                                        alert( `Товар ${amplifier.name} есть в наличии`); //?? guitar.name
                                    } else {
                                        alert(`Товара нет в наличии`);
                                    }
                                    break;
                                }
                                default: {
                                    alert("Нет такого товара");
                                }
                            }
                            cycle = prompt("Желаете проверить наличие еще какого-нибудь товара?\n 1 - да\n 2 - нет");
                            if(cycle !=1) break;
                        }
                        break;
                      }
      
                      case '4': {
                        alert("Размер коллекции: " + listOfProducts.size);
                        break;
                      }
                      default: {
                          alert("Нет таких значений");
                      }
                  }
                  cycle = prompt("Желаете продолжить?\n 1 - да\n 2 - нет");
                }
           
            break;
        }



        //TASK 5
        case '5': {
            let shoppingCart = new Map();
        

            let firstProduct; //имя первого товара
            let secondProduct; //второго
            let thirdProduct; //третьего

            let firstPrice = 0; //цена 1-го
            let secondPrice = 0; //цена 2-го
            let thirdPrice = 0; //цена 3-го

            let firstAmount = 0; //кол-во 1-го товара
            let secondAmount = 0; //2-го
            let thirdAmount = 0; //3-го

            shoppingCart.set("id", 12345); //айди

            shoppingCart.set("firstAmount", firstAmount); 
            shoppingCart.set("secondAmount", secondAmount); 
            shoppingCart.set("thirdAmount", thirdAmount); 

            shoppingCart.set("firstPrice", firstPrice); 
            shoppingCart.set("secondPrice", secondPrice); 
            shoppingCart.set("thirdPrice", thirdPrice); 
            
            let cycle = 1; 

            while(cycle) {
                let choise = prompt("Выберите, что хотите сделать:\n 1 - добавление товара\n 2 - удаление товара\n 3 - изменить количество товара\n" +
                " 4 - подсчет количества товара в корзине \n 5 - сумма заказа");

                switch(choise) {

                    case '1': {
                        firstProduct = prompt("Введите название товара: ");
                        shoppingCart.set("firstProduct", firstProduct);

                        secondProduct = prompt("Введите название второго товара: ");
                        shoppingCart.set("secondProduct", secondProduct);

                        thirdProduct = prompt("Введите название третьего товара: ");
                        shoppingCart.set("thirdProduct", thirdProduct);

                        alert(`Вы добавили товары: ${shoppingCart.get("firstProduct")}, ${shoppingCart.get("secondProduct")}, ${shoppingCart.get("thirdProduct")}`);
                        break;
                    }

                    case '2': {

                        while(cycle) {
                            let choise = prompt(`Выберите, какой товар хотите удалить: \n1 - ${shoppingCart.get("firstProduct")} \n2 - ${shoppingCart.get("secondProduct")}` +
                        `\n3 - ${shoppingCart.get("thirdProduct")} \n4 - все`); 
                            switch(choise) {
                            
                                case '1': {
                                    alert(`Товар ${shoppingCart.get("firstProduct")} удален`);
                                    shoppingCart.delete("firstProduct");
                                    firstPrice = 0; // при удалении количество и цену нужно занулить, тк перед удалением мы могли написать туда какую-то 
                                    //цену в п.3 и она считалась бы в сумме заказов, а нам это не нужно
                                    firstAmount = 0;
                                    break;
                                }

                                case '2': {
                                    alert(`Товар ${shoppingCart.get("secondProduct")} удален`);
                                    shoppingCart.delete("secondProduct");
                                    secondPrice = 0;
                                    secondAmount = 0;
                                    break;
                                }

                                case '3': {
                                    alert(`Товар ${shoppingCart.get("thirdProduct")} удален`);
                                    shoppingCart.delete("thirdProduct");
                                    thirdPrice = 0;
                                    thirdAmount = 0;
                                    break;
                                }

                                case '4': {
                                    firstPrice = 0; 
                                    firstAmount = 0;
                                    
                                    secondPrice = 0;
                                    secondAmount = 0;
                                    
                                    thirdPrice = 0;
                                    thirdAmount = 0;

                                    shoppingCart.clear();
                                    alert("Все товары удалены");
                                    break;
                                }
                                default: {
                                    alert("Нет таких значений");
                                    break;
                                }
                            }
                            cycle = prompt("Хотите удалить еще какой-нибудь товар?\n 1 - да\n 2 - нет");
                            if(cycle !=1) break;
                        }
                        break;
                    }

                    case '3': {
                        while(cycle) {
                            let choise = prompt(`Выберите, кол-во и цену какого товара хотите изменить: \n1 - ${shoppingCart.get("firstProduct")} \n2 - ${shoppingCart.get("secondProduct")}` +
                        `\n3 - ${shoppingCart.get("thirdProduct")} \n4 - все`); 
                            switch(choise) {
                            
                                case '1': {
                                    if(shoppingCart.has("firstProduct")) {
                                        firstAmount = prompt(`Введите кол-во товара:  ${shoppingCart.get("firstProduct")}`);
                                        firstPrice = prompt(`Введите цену за единицу товара:  ${shoppingCart.get("firstProduct")}`);
                                    } else {
                                        alert("Невозможно изменить, товар не добавлен или удален");
                                    }
                                    break;
                                }

                                case '2': {
                                    if(shoppingCart.has("secondProduct")) {
                                        secondAmount = prompt(`Введите кол-во товара: ${shoppingCart.get("secondProduct")}`);
                                        secondPrice = prompt(`Введите цену за единицу товара: ${shoppingCart.get("secondProduct")}`);
                                    } else {
                                        alert("Невозможно изменить, товар не добавлен или удален");
                                    }
                                    break;
                                }

                                case '3': {
                                    if(shoppingCart.has("thirdProduct")) {
                                        thirdAmount = prompt(`Введите кол-во товара: ${shoppingCart.get("thirdProduct")}`);
                                        thirdPrice = prompt(`Введите цену за единицу товара: ${shoppingCart.get("thirdProduct")}`);
                                    } else {
                                        alert("Невозможно изменить, товар  не добавлен или удален");
                                    }
                                  
                                    break;
                                }

                                case '4': {
                                    if(shoppingCart.has("firstProduct")) {
                                        firstAmount = prompt(`Введите кол-во товара:  ${shoppingCart.get("firstProduct")}`);
                                        firstPrice = prompt(`Введите цену за единицу товара:  ${shoppingCart.get("firstProduct")}`);
                                    } else {
                                        alert("Невозможно изменить, товары удалены или не добавлены");
                                    }

                                    if(shoppingCart.has("secondProduct")) {
                                        secondAmount = prompt(`Введите кол-во товара: ${shoppingCart.get("secondProduct")}`);
                                        secondPrice = prompt(`Введите цену за единицу товара: ${shoppingCart.get("secondProduct")}`);
                                    } else {
                                        alert("Невозможно изменить, товар удален");
                                    }

                                    if(shoppingCart.has("thirdProduct")) {
                                        thirdAmount = prompt(`Введите кол-во товара: ${shoppingCart.get("thirdProduct")}`);
                                        thirdPrice = prompt(`Введите цену за единицу товара: ${shoppingCart.get("thirdProduct")}`);
                                    } else {
                                        alert("Невозможно изменить, товар удален");
                                    }
                                    break;
                                }
                                default: {
                                    alert("Нет таких значений");
                                    break;
                                }
                            }
                            cycle = prompt("Хотите изменить кол-во еще какого-нибудь товара?\n 1 - да\n 2 - нет");
                            if(cycle !=1) break;
                        }
                        break;
                    }

                    case '4': {
                        firstAmount = Number(firstAmount);
                        secondAmount = Number(secondAmount);
                        thirdAmount = Number(thirdAmount);

                        let countOfPositions = firstAmount + secondAmount + thirdAmount;
                        alert("Количество товара в корзине: " + countOfPositions);
                        break;
                    }

                    case '5': {
                        let sumOfProducts = firstAmount*firstPrice + secondAmount*secondPrice + thirdAmount*thirdPrice;
                        alert(`Сумма заказа: ${sumOfProducts}`);
                        break;
                    }

                    default: {
                        alert("Нет таких значений");
                    }
                    cycle = prompt("Желаете продолжить?\n 1 - да\n 2 - нет");
                }
            }
            //alert(shoppingCart.get("id"));
            break;
        }




        default: {
            alert("Нет таких значений");
        }
    }
