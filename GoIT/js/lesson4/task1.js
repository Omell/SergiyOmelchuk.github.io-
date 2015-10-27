/**
 * Created by sergey on 22.10.2015.
 */
function fib (n) {
    var a=0;
    var b=0;
    var c=1;
    for (i=1; i<n; i++) {
        a=b;
        b=c;
        c=a+b;
    }
    return c;
}

alert (fib(77));