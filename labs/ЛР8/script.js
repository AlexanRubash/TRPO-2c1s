let Form__Button = document.querySelectorAll('.Forms-Container__Button');

   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth() + 1; 
   var yyyy = today.getFullYear();
   if(dd < 10){
       dd='0' + dd
   } 
   if(mm < 10){
       mm='0' + mm
   } 
  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("datetime-local").setAttribute("max", today);


class Validator {
     static isEmail(mail) {
        return mail.match(/^[\w-]+@[\w-]+\.[a-z]{2,5}$/) ? true : false;
     }
    static isPassword(password){
        return password.match(/^.{6,15}$/); 
    }

    static isFIO(fio){
        return fio.match(/^[a-zA-Z]{2,10}$/) 
    }
    
    static inList(mail) {
        return userList.filter((el) => el.Mail === mail).length ? true : false;
    }

    static isPasswordList(mail, password) {
        return userList.filter((el) => el.Mail === mail && el.Password === password).length ? true : false;        
    }
}

class User {
    constructor(lastname, name, birthday, mail, password) {
        this.Lastname = lastname;
        this.Name = name;
        this.Birthday = birthday;
        this.Mail = mail;
        this.Password = password;
    }
}

let userList = []; //new User('rubashek', 'alexander', '2004-01-23', 'rubasheka@gmail.com', '123123')

for (let i = 0; i < Form__Button.length; i++) {
    Form__Button[i].addEventListener('click', (e) =>{
        if(!e.currentTarget.className.includes('.Forms-Container__Button__Active')){
            document.querySelector('.Forms-Container__Button__Active').classList.toggle('Forms-Container__Button__Active');
            e.currentTarget.classList.toggle('Forms-Container__Button__Active');
            switch (e.currentTarget.getAttribute('value')) {
                case "Auth":
                    document.querySelector('.Form-Reg').style.display = 'none';
                    document.querySelector('.Form-Auth').style.display = 'flex';
                    break;
                case "Reg":
                    document.querySelector('.Form-Auth').style.display = 'none';
                    document.querySelector('.Form-Reg').style.display = 'flex';                
                    break;
                default:
                    break;
            }
        }
    });
    document.forms[i].addEventListener('submit', (e) =>{
        e.preventDefault();
        try{
            switch(document.querySelector('.Forms-Container__Button__Active').getAttribute('value')){
                case "Auth":
                    if (!Validator.isEmail(document.forms[0].elements.login.value)) throw new Error("Неверный формат почты");
                    if (!Validator.isPassword(document.forms[0].elements.password.value)) throw new Error('Неверный формат пароля');
                    if (!Validator.inList(document.forms[0].elements.login.value)) throw new Error('Пользователь с такой почтой не найден');
                    if (!Validator.isPasswordList(document.forms[0].elements.login.value, document.forms[0].elements.password.value)) throw new Error("Неверный пароль");
                    alert("Вы успешно авторизировались!");
                    break;
                case "Reg":
                    if (!Validator.isFIO(document.forms[1].elements.lastname.value)) throw new Error("Неверный формат фамилии");
                    if (!Validator.isFIO(document.forms[1].elements.name.value)) throw new Error("Неверный формат имени");
                    if (!Validator.isEmail(document.forms[1].elements.login.value)) throw new Error("Неверный формат почты");
                    if (Validator.inList(document.forms[1].elements.login.value)) throw new Error('Пользователь с такой почтой уже существует');
                    if (!Validator.isPassword(document.forms[1].elements.password.value)) throw new Error('Неверный формат пароля');
                    userList.push(new User(document.forms[1].elements.lastname.value, document.forms[1].elements.name.value, document.forms[1].elements.birthday.value, document.forms[1].elements.login.value, document.forms[1].elements.password.value));
                    alert("Вы успешно зарегистрировались!")
                    console.log(userList);
                    break;
                default:
                    break;
            }
        }
        catch(error){
            alert(error.message)
        }
    });
}