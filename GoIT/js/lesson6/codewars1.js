/**
 * Created by sergey on 27.10.2015.
 */
function getMissingElement(superImportantArray){
    superImportantArray=superImportantArray.sort(function(a,b){return a-b;});
    var j=0;
    for (i=0; i<superImportantArray.length; i++) {
        if (superImportantArray[i] == j) {
            j++;
        }
        else { return j;
            j++;}
    }

}
