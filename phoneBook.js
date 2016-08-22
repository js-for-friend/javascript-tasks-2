'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите


/*
 Функция добавления записи в телефонную книгу.
 На вход может прийти что угодно, будьте осторожны.
 */
module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
    if(validPhone(phone) && validEmail(email)) {    //проверка валидности номера и e-mail
        var contact={              // создаем переменную contact со свойством
            name:name,
            phone:phone,
            email:email
        }
        phoneBook.push(contact); //метод push добавляет элементы в массив (также метод unshift - в начало массива, но он медленнее)
        console.log('Контакт введен!'+contact);
    }
    else {                                    // если не прошла проверку
        console.log('Контакт введен некорректно!');
    }
};

function validPhone(phone) {           //функция валидации номера
    var testPhone= /\+\s()d/;
    return testPhone.test(phone);     //подходит ли строка под регулярное выражение
}

function validEmail (email) {     //функция валидации email
    var testEmail= /^[A-Za-zА-Яа-я0-9_]/;
    return testEmail.test(email);

};

/*
 Функция поиска записи в телефонную книгу.
 Поиск ведется по всем полям.
 */
module.exports.find = function find(query) {
    var search=
    for (var i = 0; i < search.length; i++) {
   console.log( search[i].name+' '+search[i].phone+' '+search[i].email);
    
};
/*
 Функция удаления записи в телефонной книге.
 */
module.exports.remove = function remove(query) {

};
/*
 Функция импорта записей из файла (задача со звёздочкой!).
 */
module.exports.importFromCsv = function importFromCsv(filename) {


    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
 Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
 */
module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};
