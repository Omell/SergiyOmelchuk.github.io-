var lifeCounter=3;
var scoreCounter=0;
var winCounter = 0;
var gunmanFireTime;
var startTime=new Date();
var rewardsValue;
var side;

function gunmanMoveRight () {
    var go = +gunman.offsetLeft - 10;
    gunman.style.left = go + 'px';

    var u = gunmanImage.offsetLeft;
    if (u === 0) {
        gunmanImage.style.left = '-120px';
    } else if (u === -120) {
        gunmanImage.style.left = '-240px';
    } else if (u === -240) {
        gunmanImage.style.left = '0px';
    } else {gunmanImage.style.left = '0px';}
}

function gunmanMoveLeft () {
    gunmanImage.style.transform = 'scale(-1, 1)';

    var go = +gunman.offsetLeft + 10;
    gunman.style.left = go + 'px';

    var u = gunmanImage.offsetLeft;
    if (u === -1080) {
        gunmanImage.style.left = '-1200px';
    } else if (u === -1200) {
        gunmanImage.style.left = '-960px';
    } else if (u === -960) {
        gunmanImage.style.left = '-1080px';
    } else {gunmanImage.style.left = '-1080px';}
}


function roundResult(e) {
    e.preventDefault();
    /* КРАСНЫЙ ФОН ПРИ ВЫСТРЕЛЕ */
    mainPart.style.background = 'red';
    setTimeout(function () {
        mainPart.style.background = '';
    }, 100);
    /* END КРАСНЫЙ ФОН ПРИ ВЫСТРЕЛЕ */

    /* ПОДСЧЕТ ВРЕМЕНИ ВЫСТРЕЛА ИГРОКА */
    var playerFireTime = new Date();
    playerResult = playerFireTime - startTime;
    playerTime.innerHTML = (playerResult / 1000).toFixed(2);
    /* END ПОДСЧЕТ ВРЕМЕНИ ВЫСТРЕЛА ИГРОКА */

    gunman.removeEventListener('click', roundResult);

    /* МИГАНИЕ ВРЕМЕНИ ВЫСТРЕЛА ИГРОКА */
    var playerTimeBlinck = setInterval(function () {
        playerTime.classList.toggle('visiability');
    }, 100);
    setTimeout(function () {
        clearInterval(playerTimeBlinck);
    }, 5100);
    /* END МИГАНИЕ ВРЕМЕНИ ВЫСТРЕЛА ИГРОКА */

    /* ОПРЕДЕЛЕНИЕ РЕЗУЛЬТАТОВ РАУНДА */
    if (playerResult < gunmanFireTime) {
        won.style.visibility = 'visible';

        /* ДВИЖЕНИЕ GUNMAN ПРИ ПРОИГРАШЕ */
            gunmanImage.style.left = '-840px';
        setTimeout(function () {
            gunmanImage.style.left = '-960px';
        }, 75);
        gunmanHat.style.visibility = 'visible';
        gunmanHat.style.top = '45px';
        /* END ДВИЖЕНИЕ GUNMAN ПРИ ПРОИГРАШЕ */

        /* ПОДСЧЕТ И ВЫВОД НА ЕКРАН БОНУСОВ И ОЧКОВ ЗА ПОБЕДУ */
        setTimeout(function bonusCount() {
            bonus.style.visibility = 'visible';
            won.style.visibility = '';
            var scoreValue = (gunmanFireTime - playerResult) / 100;
            scoreValue = scoreValue.toFixed(0) * 1000;
            var a = 1000;
            var bonusCounter = setInterval(function () {
                bonus.innerHTML = 'BONUS: ' + a;
                a += 1000;
            }, 199);
            var bonusCounterTimeEnd = scoreValue / 1000 * 200;

            setTimeout(function () {
                clearInterval(bonusCounter);
            }, bonusCounterTimeEnd);
            scoreCounter += scoreValue;
            scoreCounter += rewardsValue;
            setTimeout(function () {
                score.innerHTML = '<span>' + scoreCounter + '</span>';
            }, bonusCounterTimeEnd);
        }, 2000);
        /* END ПОДСЧЕТ И ВЫВОД НА ЕКРАН БОНУСОВ И ОЧКОВ ЗА ПОБЕДУ */

        winCounter++;
    }
        /* ДЕЙСТВИЯ В СЛУЧАЕ ФАЛЬСТАРТА (5 СЕК - ПОТОМУ ЧТО С 5-Й СЕКУНДЫ ТОЛЬКО МОЖНО СТРЕЛЯТЬ, ДО ЭТОГО GUNMAN ШЕЛ) */
    else if (playerResult>5000) {
        gunmanImage.style.left = '-1200px';
        playerTime.innerHTML = 'Oops...';
        lose.style.visibility = 'visible';
        lifeCounter--;
        mainPart.classList.add('loseGame');

        /* ДВИЖЕНИЕ GUNMAN - УХОДИТ */
        if (side==='right') {
        var gunmanMove = setInterval(gunmanMoveLeft , 100);
            setTimeout(function () { clearInterval(gunmanMove);}, 5100);
        } else {var gunmanMove = setInterval(gunmanMoveRight , 100);
            setTimeout(function () { clearInterval(gunmanMove);}, 5100);}
        /* END ДВИЖЕНИЕ GUNMAN - УХОДИТ */
    }
        /* ДЕЙСТВИЯ В СЛУЧАЕ ПОРАЖЕНИЯ */
     else {
        gunmanImage.style.left = '-1200px';
        lose.style.visibility = 'visible';
        lifeCounter--;
        mainPart.classList.add('loseGame');

        /* ДВИЖЕНИЕ GUNMAN - УХОДИТ */
        setTimeout(function () {
            if (side==='right') {
                var gunmanMove = setInterval(gunmanMoveLeft , 100);
                setTimeout(function () { clearInterval(gunmanMove);}, 5100);
            } else {var gunmanMove = setInterval(gunmanMoveRight , 100);
                setTimeout(function () { clearInterval(gunmanMove);}, 5100);}
        }, 1500);
        /* END ДВИЖЕНИЕ GUNMAN - УХОДИТ */
    }
    /* END ОПРЕДЕЛЕНИЕ РЕЗУЛЬТАТОВ РАУНДА */

    /* ВЫВОД НА ЭКРАН К-ВА ПОБЕД И ЖИЗНЕЙ */
    win.innerHTML = 'w. <span>' + winCounter + '</span>';
    life.innerHTML = 'l. <span>' + lifeCounter + '</span>';
}




function action () {

    var playerResult=0;
    var startDuel = 8050;

    /* НАЧАЛЬНЫЕ УСТАНОВКИ */
    var gunmansQuality = 5; // количество возможных Ганменов
    fire.style.visibility = '';
    gunman.style.left = '900px';
    bonus.style.visibility = '';
    lose.style.visibility = '';
    gunmanHat.style.visibility = '';
    gunman.querySelector('img').style.left = '0';
    gunmanHat.style.top = '-100px';
    playerTime.innerHTML = '0.00';
    mainPart.classList.remove('loseGame');
    gunmanImage.style.transform = '';
    /* END НАЧАЛЬНЫЕ УСТАНОВКИ */

    /* ОПРЕДЕЛЕНИЕ СТОРОНЫ ВЫХОДА И ГАНМЕНА КОТОРЫЙ ВЫХОДИТ */
    gunmanCurrent = Math.ceil((Math.random() * gunmansQuality))*225 - 225;
    gunmanImage.style.top = '-' + gunmanCurrent + 'px';
    gunmanHatImage.style.top = '-' + gunmanCurrent + 'px';
    var sideRandom = Math.random();
    if (sideRandom>0.5) {side='left';}
    else {side='right';}


    /* ВРЕМЯ ВЫСТРЕЛА GUNMANA В ЗАВИСИМОСТИ ОТ ПРОЙДЕННОГО УРОВНЯ (С КАЖДЫМ 5 РАУНДОМ СЛОЖНОСТЬ УВЕЛИЧИВАЕТСЯ) */
    if (winCounter < 5 ) {
        gunmanFireTime = (700 -0.5 + Math.random() * (1200 - 700 + 1));
    } else if (winCounter < 10) {
        gunmanFireTime = (500 - 0.5 + Math.random() * (1000 - 500 + 1));
    } else if (winCounter >10) {
        gunmanFireTime = (400 - 0.5 + Math.random() * (900 - 400 + 1));
    } else {gunmanFireTime = (400 - 0.5 + Math.random() * (800 - 400 + 1));}
    /* END ВРЕМЯ ВЫСТРЕЛА GUNMANA В ЗАВИСИМОСТИ ОТ ПРОЙДЕННОГО УРОВНЯ (С КАЖДЫМ 5 РАУНДОМ СЛОЖНОСТЬ УВЕЛИЧИВАЕТСЯ) */

    /* РАСЧЕТ REWADRS В ЗАВИСИМОСТИ ОТ СЛОЖНОСТИ */
    if (gunmanFireTime > 1000) {rewardsValue=1000;}
    else if (gunmanFireTime > 900) {rewardsValue=1500;}
    else if (gunmanFireTime > 750) {rewardsValue=2500;}
    else if (gunmanFireTime > 600) {rewardsValue=3500;}
    else if (gunmanFireTime > 500) {rewardsValue=5000;}
    else {rewardsValue=6000;}
    /* END РАСЧЕТ REWADRS В ЗАВИСИМОСТИ ОТ СЛОЖНОСТИ */
    rewards.innerHTML = '<span>$ </span> ' + rewardsValue;
    gunmanTime.innerHTML = (gunmanFireTime / 1000).toFixed(1) +'0';

    /* ДВИЖЕНИЕ GUNMAN - ВЫХОД НА ЦЕНТР */

    if (side=== 'right') {
        gunman.style.left = '900px';
    var gunmanMove = setInterval(gunmanMoveRight, 100);
    setTimeout(function () {  clearInterval(gunmanMove); }, 5100);
    } else if (side==='left') {
        gunman.style.left = '-100px';
        var gunmanMove = setInterval(gunmanMoveLeft, 100);
        setTimeout(function () {  clearInterval(gunmanMove); }, 5100);
    }
    /* END ДВИЖЕНИЕ GUNMAN - ВЫХОД НА ЦЕНТР */

    /* ОСТАНОВКА ПО ЦЕНТРУ */
    setTimeout(function () {
        gunmanImage.style.transform = '';
        gunman.querySelector('img').style.left = '-360px';
        /* ВОЗМОЖНОСТЬ ВЫСТРЕЛА */
        if (playerResult===0) {
            gunman.addEventListener('click', roundResult);
        }
        /* END ВОЗМОЖНОСТЬ ВЫСТРЕЛА */
    }, 5001);
    /* END ОСТАНОВКА ПО ЦЕНТРУ */

    /* НАЧАЛО РАУНДА */
    setTimeout(function () {
        fire.style.visibility = 'visible';
        gunmanImage.style.left = '-480px';
        setTimeout(function () {
            gunmanImage.style.left = '-600px';
        }, 150);
        setTimeout(function () {
            gunmanImage.style.left = '-720px';
        }, 350);
        setTimeout(function () {
            gunmanImage.style.left = '-360px';
        }, gunmanFireTime);

        /* ПОБЕДА ГАНМЕНА */
        setTimeout( function () {
        if (gunmanFireTime < playerResult || playerResult === 0 ) {
            gunmanImage.style.left = '-1200px';
            lose.style.visibility = 'visible';
            lifeCounter--;
            mainPart.classList.add('loseGame');

            /* ДВИЖЕНИЕ GUNMAN - УХОДИТ */
            setTimeout(function () {
                if (side==='right') {
                    var gunmanMove = setInterval(gunmanMoveLeft , 100);
                    setTimeout(function () { clearInterval(gunmanMove);}, 5100);
                } else {var gunmanMove = setInterval(gunmanMoveRight , 100);
                    setTimeout(function () { clearInterval(gunmanMove);}, 5100);}
            }, gunmanFireTime);
            /* END ДВИЖЕНИЕ GUNMAN - УХОДИТ */
    }}, gunmanFireTime);
        /* END ПОБЕДА ГАНМЕНА */

        startTime = new Date();
        return;
    }, startDuel);

    return;
}

var gunmanPrototype  = {
    startDuel: 8050,
    side: 'right'
};
var gunmansQuality = 5;
var side44 = ['left', 'right'];




function duel () {
    action();
setInterval(function() {if(lifeCounter>0){action();}
else{ gameResult.style.visibility = 'visible';
    gameResult.innerHTML = '<br/>YOUR RESULT:<br/><br/>' + scoreCounter +'<br/><br/>THE END<br/>';
}},15000);
}

duel();


