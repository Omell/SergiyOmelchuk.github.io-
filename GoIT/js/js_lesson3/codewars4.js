/**
 * Created by sergey on 08.10.2015.
 */
function lovefunc(flower1, flower2){
    // moment of truth
    if ((flower1+flower2)%2===0) {
        return false;
    } else {
        return true;
    }
}