'use strict';

var phoneBook={}; // Здесь вы храните записи как хотите

/**
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
    var regExPhone = /^\d[\d\(\)\ -]{4,14}\d$/; //регулярные выражения для проверки
    var regExpEmailAddress = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

    if (regExPhone.test(phone) && regExpEmailAddress.test(email)) {
        var contact = {
            name: name,
            phone: phone,
            email: email
        };
        phoneBook.push(contact);
        console.log(name + 'добавлен');
    } else {
        console.log(name + 'ошибка в записи');
    }
};
/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    // Ваша удивительная магия здесь
        for (var i = 0; i < phoneBook.length; i++) {
            if ((phoneBook[i].name.indexOf(query) > -1) || (phoneBook[i].phone.indexOf(query) > -1) || (phoneBook[i].email.indexOf(query) > -1) || (query === undefined)) {
                console.log(phoneBook[i]);}
        }
    };
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {

    // Ваша необьяснимая магия здесь

};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
