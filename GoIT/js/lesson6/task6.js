/**
 * Created by sergey on 26.10.2015.
 */
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];


function unique(strings) {
    strings = strings.sort();
    for (i=0;i<strings.length;i++) {
        if (strings[i]===strings[i+1]) {
            strings.splice((i+1),1);
            i-=1;
        } else {
        }
    }
    return strings;
}


console.log( unique(strings) ); // кришна, харе, 8-()