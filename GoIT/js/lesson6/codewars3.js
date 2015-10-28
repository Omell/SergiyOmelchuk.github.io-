/**
 * Created by sergey on 27.10.2015.
 */
var arrMonth = [
    "The Evil",
    "The Vile",
    "The Cruel",
    "The Trashy",
    "The Despicable",
    "The Embarrassing",
    "The Disreputable",
    "The Atrocious",
    "The Twirling",
    "The Orange",
    "The Terrifying",
    "The Awkward"
];

var arrDate = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket" ];


function getVillainName(birthday){
    if (birthday.getDate()<10){
        lastNameNumber = birthday.getDate();
    } else if (birthday.getDate()<20) {
        lastNameNumber = birthday.getDate()-10;
    } else if (birthday.getDate()<30) {
        lastNameNumber = birthday.getDate()-20;
    } else { lastNameNumber = birthday.getDate()-30;}
    var name1 = arrMonth[birthday.getMonth()]+' '+arrDate[lastNameNumber];
    console.log(name1);
    return name1;

}


getVillainName(birthday);
