/**
 * Created by sergey on 26.10.2015.
 */
function isPal(string) {
    if (string.length % 2) {
        var arr=string.split('');
        var arrWithoutSpace=arr.filter(function(wordOnly){return wordOnly != ' ';});
        var arrFirstPart=arr.slice(0,arrWithoutSpace.length/2).join('').toLowerCase();
        var arrLastPart=arr.slice(-arrWithoutSpace.length/2).reverse().join('').toLowerCase();
        return arrFirstPart===arrLastPart;
    }
    else  {
        var arr2=string.split('');
        var arrWithoutSpace2=arr2.filter(function(wordOnly){return wordOnly != ' ';});
        var arrFirstPart2=arrWithoutSpace2.slice(0,arrWithoutSpace2.length/2).join('').toLowerCase();
        var arrLastPart2=arrWithoutSpace2.slice(-arrWithoutSpace2.length/2).reverse().join('').toLowerCase();
        return arrFirstPart2===arrLastPart2;
    }
}



console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false