function clock(selector) {
    const clockDOM = document.querySelector(selector);
    const deadline = '01-04 14:00:00';
    let numbers = calcTime();
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="time">
                    <div class="value">${numberFormat(numbers[i])}</div>
                    <div class="label">${labels[i]}</div>
                </div>`;
    }

    clockDOM.innerHTML = HTML;
}

setInterval(function () {
    numbers = calcTime(deadline);
    console.log(numbers);
}, 1000);

function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function calcTime(deadline) {
    const date = new Date();
    let year = date.getFullYear();
    let fullDeadline = `${year}-${deadline}`;
    const fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();

    if (fullDeadlineInMiliseconds < Date.now()) {
        year++;
        fullDeadline = `${year}-${deadline}`;
    }

    console.log(fullDeadline);
    return [432, 9, 37, 39];
}


export { clock } 