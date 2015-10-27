/**
 * Created by sergey on 21.10.2015.
 */
function checkSpam(text) {
    if (~text.toLowerCase().indexOf('sex')) {
        console.log('true');
    }
    else if (~text.toLowerCase().indexOf('spam')) {
        console.log('true');
    } else {
        console.log('false');
    }
}


checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false