'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const userInput = prompt('Eneter a login you want do add...');

// if(userInput === null){
//     console.log('Have a good day!');
// }else{
    const isLoginValid = function (login) {
        if (login.length >= 4 && login.length <= 16) {
            return true;
        } else {
            console.log('Login should be less than 4 or more than 16 characters')
            return false;
        }
    };
    
    
    const isLoginUnique = function (allLogins, login) {
        if(allLogins.indexOf(login) === -1){
            return true;
        }else{
            console.log('Already exists')
            return false;
        }
        
    };
    
    const addLogin = function(allLogins, login) {
        if(isLoginUnique(allLogins, login) && isLoginValid(login)){
            allLogins.push(login);
            console.log('New user has been registered!')
        }
        // else{
        //     console.log('Som ting wong!')
        // }
      };

    // addLogin(logins, userInput);
// }

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
