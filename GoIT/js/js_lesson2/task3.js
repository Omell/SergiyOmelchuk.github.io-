/**
 * Created by sergey on 06.10.2015.
 */
var name = prompt('Введите Ваше имя');

if (name=='admin') {
    var password = prompt('Введите пароль');
    if (password == 'passw0rd') {
        alert('Welcome home');
    }
    else if (password === null) {
        alert('Canceled');
    }
    else {
        alert('Wrong password');
    }
}
else if (name === 'null') {
    alert ('Canceled');
}
else {
    alert ('Access denied');
}


