'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите в формате YYYY-MM-DD');

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

alert(appData.budjet / 30);

let firstAnswer = prompt('Введите обязательную статью расходов в этом месяце');
let secondAnswer = prompt('Во сколько обойдется?');
appData.expenses[firstAnswer] = secondAnswer;

firstAnswer = prompt('Введите обязательную статью расходов в этом месяце');
secondAnswer = prompt('Во сколько обойдется?');
appData.expenses[firstAnswer] = secondAnswer;

console.log(appData);
