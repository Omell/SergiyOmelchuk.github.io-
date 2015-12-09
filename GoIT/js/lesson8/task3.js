/**
 * Created by sergey on 06.12.2015.
 */
function Article() {
    this.created = new Date();
    Article.date = Date();
    Article.counter++;
    // ... ваш код ...
}
Article.counter=0;
Article.date = (1,1,1);
Article.showStats = function () {
    console.log('Всего: ' + this.counter + ', Последняя: ' + this.date);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)