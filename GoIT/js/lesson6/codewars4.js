/**
 * Created by sergey on 28.10.2015.
 */
function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    var result = array.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
    return result;
}