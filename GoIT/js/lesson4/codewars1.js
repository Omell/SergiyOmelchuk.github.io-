/**
 * Created by sergey on 27.10.2015.
 */

Test.expect(always(true)(), 'A function that is always true will return true')
function always (n) {
    function returnN (always) {
        return n;
    }
    return returnN;

}
always();