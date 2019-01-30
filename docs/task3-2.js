var name = prompt('Как зовут?', 'Введи имя');
var age = prompt('Сколько лет?', 'Введи число');
var smoke = confirm('Куришь?');
if ((smoke) & (age > 18)) alert('Ну и зря, ' + name);
else if ((smoke) & (age < 18)) alert(name + ', маме расскажу');
else if (age < 18) alert(name + ', так держать!');
else alert(name + ', молодец, и не надо');