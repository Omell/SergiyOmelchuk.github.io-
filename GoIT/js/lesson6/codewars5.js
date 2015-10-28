/**
 * Created by sergey on 28.10.2015.
 */
function isValidWalk(walk) {
    //insert brilliant code here
    for (i=0;i<walk.length;i++) {
        if (walk[i]==walk[i+1]) {
            walk.splice([i+1],1);
            i--;
        }
    }
    if (walk.length == 10) {
        return true;
    } else { return false;}
}