/**
 * Created by sergey on 22.10.2015.
 */
function text20 (text) {
    if (text.length < 20 ) {
        console.log(text);
    } else {
        text = text.slice(0,20)+'...';
    }
    console.log(text);
}

text20 ('123444444444444444510000');