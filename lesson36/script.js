let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function() {
    let request = new XMLHttpRequest();
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/JSON; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
});
console.log(data);