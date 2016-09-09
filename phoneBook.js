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
            email:email,
			search:name+';'+phone+';'+email
        }
        phoneBook.push(contact); //метод push добавляет элементы в массив (также метод unshift - в начало массива, но он медленнее)
        console.log('Контакт введен!'+ contact.name + ' ' + contact.phone + ' ' + contact.email);
    }
    else {                                    // если не прошла проверку
        console.log('Контакт введен некорректно!'); //
    }
	
};

function validPhone(phone) {           //функция валидации номера
    var testPhone= /^(\+?(\d{0,3})|(\d{1,2}))\s?(\(?(\d{3}\))|\d{3})[\s|-]?\d{3}[\s|-]?\d{1}[\s|-]?\d{3}$/;
    return testPhone.test(phone);     //подходит ли строка под регулярное выражение
}

function validEmail (email) {     //функция валидации email
    var testEmail= /.+@.+\..+/i;
    return testEmail.test(email);

};

function showMessage(text, phoneRecord) {
 console.log(text, phoneRecord.name, phoneRecord.phone, phoneRecord.email);
 }

/*
 Функция поиска записи в телефонную книгу.
 Поиск ведется по всем полям.
 */
module.exports.remove = function remove(query) {
	 var x = new RegExp(query);
    for (var i = 0; i < phoneBook.length; i++) {
        if (x.test(phoneBook[i].search)) {
            showMessage('Найден:', phoneBook[i])
        }
    }
    return 0;
};	
/*
 Функция удаления записи в телефонной книге.
 */
module.exports.remove = function remove(query) {
	 var x = new RegExp(query);
    for (var i = 0; i < phoneBook.length; i++) {
        if (x.test(phoneBook[i].search)) {   //свойство search  прописано строкой
            showMessage('Запись удалена:', phoneBook[i]);
            delete phoneBook[i]
        }
    }
    return 0;
};		
/*
 Функция импорта записей из файла (задача со звёздочкой!).
 */
module.exports.importFromCsv = function importFromCsv(filename) {
    fs.readFile('./backup.csv', function(err, data) {
		if (err) {
			console.error(err);
			} else {
				console.log(data.toString('utf-8'));
		            }
	});
				


    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
 Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
 */
module.exports.showTable = function showTable() {
 /*   console.log('┌─────────────┬────────────────────╥──────────────────┐');
	console.log('│ Имя         │ Телефон            ║ email            │');
	console.log('├─────────────┼────────────────────╫──────────────────┤');
	console.log('├────' + + '──┼────'+ + '───────╫─────'+   +  '──────┤');
	*/

    // Ваша чёрная магия здесь

};
