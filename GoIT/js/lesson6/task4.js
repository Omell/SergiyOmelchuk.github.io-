/**
 * Created by sergey on 28.10.2015.
 */
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function peopleSort (a,b) {
    return a.age - b.age;
}

people = people.sort(peopleSort);
// теперь people: [vovochka, masha, vasya]
console.log(people[0].age); // 6
