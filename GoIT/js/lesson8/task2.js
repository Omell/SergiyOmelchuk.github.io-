/**
 * Created by sergey on 06.12.2015.
 */

var Calculator = {
    calculate: function (str) {
        if (str.split(' ')[1]=='+') {
            return str.split(' ')[0] + +str.split(' ')[2];
        } else if (str.split(' ')[1]=='-') {
            return +str.split(' ')[0] - +str.split(' ')[2];
        }
    }
};

console.log(Calculator.calculate('1 - 2'));