/**
 * Created by sergey on 26.10.2015.
 */
var arr = [1, 2, 3, 4, 5];


function randomSort(a, b) {
    return Math.random() - 0.5;
}

console.log(arr.sort(randomSort));
