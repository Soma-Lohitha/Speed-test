let quoteDisplayEle = document.getElementById('quoteDisplay');
let quoteInputEle = document.getElementById('quoteInput');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let timerEle = document.getElementById('timer');
let resultEle = document.getElementById('result');
// request
let quote;
let url = 'https://apis.ccbp.in/random-quote';
let options = {
    method: 'GET'
};
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quote = data.content;
        console.log(quote);
        quoteDisplayEle.textContent = quote;
    });
// timer 
let counter = 0;
let uniqueId = setInterval(function() {
    counter = counter + 1;
    timerEle.textContent = counter;
}, 1000);
// submit func 
submitBtn.onclick = function() {
    let displayQuote = quoteDisplayEle.textContent;
    let writtenQuote = quoteInputEle.value;
    if (displayQuote === writtenQuote) {
        clearInterval(uniqueId);
        let time = timerEle.textContent;
        resultEle.textContent = 'You typed in ' + time + ' seconds';
    } else {
        resultEle.textContent = 'You typed incorrect sentence';
    }
};

resetBtn.onclick = function() {
    quoteInputEle.value = '';
    resultEle.textContent = '';

    counter = 0;
    uniqueId = setInterval(function() {
        counter = counter + 1;
        timerEle.textContent = counter;
    }, 1000);


    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quote = data.content;
            console.log(quote);
            quoteDisplayEle.textContent = quote;
        });
};