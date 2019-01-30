var name = prompt('Как зовут?', 'Введи имя');
var age = prompt('Сколько лет?', 'Введи число');
var smoke = confirm('Куришь?');
if (age >= 5 && age <= 20) {
    var agename = ' лет';
}
else {
        console.log(agename);
        var agename = (age-((Math.trunc(age/10))*10));
        if (agename > 1 && agename <5) {
            var agename = ' года';
        }
        else if (agename == 1) {
            var agename = ' год';
        }
        else if (agename > 4) {
            var agename = ' лет';
        }
    }   
console.log(agename);
if ((smoke) & (age > 18)) alert('Ну и зря, ' + name + '. Тебе ' + age + agename);
else if ((smoke) & (age < 18)) alert(name + ', маме расскажу' + '. Тебе ' + age + agename);
else if (age < 18) alert(name + ', так держать!' + '. Тебе ' + age + agename);
else alert(name + ', молодец, и не надо' + '. Тебе ' + age + agename);
