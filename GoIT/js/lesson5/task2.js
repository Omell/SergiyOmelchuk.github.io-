/**
 * Created by sergey on 26.10.2015.
 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(it) {
    for (var key in it) {
        if (isNumeric(it[key])) {
            it[key]*=2;
        }}
    console.log(it);
}

multiplyNumeric(image);