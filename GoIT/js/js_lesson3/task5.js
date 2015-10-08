/**
 * Created by sergey on 08.10.2015.
 */
var rowsHeight = 8;
var rowsWidth = 4;
var text='';
var sign = '#';


function makeRow (sign, rowsWidth) {
    for (var i=1; i<=rowsWidth; i++) {
        text += sign;
    }
    text += '\n';
}

function makeGrid (rowsHeight) {
    for (var j=1; j<rowsHeight; j++) {
        if (j % 2 !== 0) {
            makeRow ('# ', rowsWidth);
        }
        else {
            makeRow (' #', rowsWidth);
        }
    }
    console.log(text);
}

makeGrid (rowsHeight);




