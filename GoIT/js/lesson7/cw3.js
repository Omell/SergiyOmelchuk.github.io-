/**
 * Created by sergey on 08.12.2015.
 */
var add = function (a, b) {
    return a + b;
};
var double = function (n) {
    return n * 2;
};

var make_lazy = function () {
    return function () {

    };
};




var lazy_value = make_lazy(double, 5);




var lazy_sum = make_lazy(add, 2, 3);