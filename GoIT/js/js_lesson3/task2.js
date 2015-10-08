/**
 * Created by sergey on 07.10.2015.
 */
var interval =10;
var simpleNumber=2;
var numbers;
for (simpleNumber;simpleNumber<interval;simpleNumber++) {
    numbers=simpleNumber;
    for (numbers;numbers>1; numbers-- )
    if (simpleNumber % numbers != 0 )
    console.log (simpleNumber);
}