/**
 * Created by sergey on 25.10.2015.
 */
function result(tasks) {
    var max=0;
    var maxName='нет сотрудников';
    for (var key in tasks) {
        if (max<tasks[key]) {
            max=tasks[key];
            maxName=key;
        } else {}
    }
    console.log(maxName);
}

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

result(tasksCompleted);