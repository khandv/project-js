'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}

function chooseExpansion() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько обойдется?');
        
        if (typeof(a) === 'string' &&  typeof(a) != null && 
            typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log("done")
                appData.expenses[a] = b;
        } else {
            i--;    
        }
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

chooseExpansion();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay)
}

detectDayBudget();

function detectLevel(mpd) {
    if (mpd < 100) {
        console.log("Минимальный уровень достатка");
    } else if (mpd <= 100 && mpd<= 2000) {
        console.log('Средний уровень достатка');
    } else if (mpd > 2000 ) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка');
    }
}

detectLevel(appData.moneyPerDay);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    } 
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let st = prompt('Статься необязательных расходов: ')
        appData.optionalExpenses[i+1] = st;
    }
}

chooseOptExpenses();

console.log(appData);