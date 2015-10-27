/**
 * Created by sergey on 27.10.2015.
 */
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {
    var obj ={};
    for (i=0;i<arr.length; i++) {
        var j = arr[i].toLowerCase().split('').sort().join('');
        obj[j]=arr[i];
    }
    var arrNew = [];
    for (var key in obj){
        arrNew.push(obj[key]);
    }

    console.log(arrNew);
}

anClean(arr);
//console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'