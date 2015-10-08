/**
 * Created by sergey on 08.10.2015.
 */
function pow(x, n){
    var degree=x;
    for (i=1; i<n;i++) {

        x *=degree;
    }
    console.log(x);

}
pow (12, 4);