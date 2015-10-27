/**
 * Created by sergey on 26.10.2015.
 */
var obj = {
    className: 'open menu'
};

var arr=[];
function removeClass (items, del) {
    if ('className' in items) {
        arr=items.className.split(' ');
    }
    for (var i =0; i<arr.length; i++) {
        if (arr[i]===del) {
            arr.splice([i],1);
            i-=1;
        }
    }

    items=arr.join(' ');
    console.log(items);
}


removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений