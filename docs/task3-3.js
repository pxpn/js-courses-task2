var name = prompt('Как зовут?', 'Введи имя');
var age = prompt('Сколько лет?', 'Введи число');
var agename = (age-((Math.trunc(age/10))*10));
console.log(agename);