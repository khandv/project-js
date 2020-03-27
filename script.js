'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpansion: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            
            if (typeof(a) === 'string' &&  typeof(a) != null && 
                typeof(b) != null && a != '' && b != '' && a.length < 50) {
                    console.log("done")
                    appData.expenses[a] = b;
            } else {
                i--;    
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'руб.');
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay <= 100 && appData.moneyPerDay<= 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000 ) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let st = prompt('Статься необязательных расходов: ')
            appData.optionalExpenses[i+1] = st;
        }
    },
    chooseIncome: function() {

        while (true) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if (typeof(items) === 'string' &&  typeof(items) != null && items != '') {   
                appData.income = items.split(', ');
                break;
            }
        }
        appData.income.push(prompt('Мб что-то еще?'));
        appData.income.sort();
        
        alert("Способы доп. заработка: ");
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        })
    }
};

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
    console.log(key + ': ' + appData[key]);
}
