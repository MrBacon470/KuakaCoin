let kuakaValue = 0;
let kuakaValuePrevious = 0;
kuakaValue = randomNumber(100, 10000)

let valueText = document.getElementById("valuation")
let priceChangeText = document.getElementById("priceChange");

if(kuakaValue < kuakaValuePrevious) {
    valueText.innerHTML = `Kuaka Coin Value in USD: $${Notate(kuakaValue)}`;
    priceChangeText.innerHTML = `Price Change Over 10 Seconds: -${Notate(kuakaValuePrevious / kuakaValue)}%`
    if(priceChangeText.classList.contains("green")) priceChangeText.classList.remove("green");
    priceChangeText.classList.add("red");
}
if(kuakaValue > kuakaValuePrevious) {
    valueText.innerHTML = `Kuaka Coin Value in USD: $${Notate(kuakaValue)}`;
    priceChangeText.innerHTML = kuakaValuePrevious > 0 ? `Price Change Over 10 Seconds: +${Notate(kuakaValue / kuakaValuePrevious)}%` : `Price Change Over 10 Seconds: +${Notate(kuakaValue / kuakaValue)}%`;
    if(priceChangeText.classList.contains("red")) priceChangeText.classList.remove("red");
    priceChangeText.classList.add("green");
}


window.setInterval( function(){
    let valueText = document.getElementById("valuation")
    let priceChangeText = document.getElementById("priceChange");

    kuakaValuePrevious = kuakaValue;
    kuakaValue = randomNumber(0, 10000);

    if(kuakaValue < kuakaValuePrevious) {
        valueText.innerHTML = `Kuaka Coin Value in USD: $${Notate(kuakaValue)}`;
        priceChangeText.innerHTML =  `Price Change Over 10 Seconds: -${Notate(kuakaValuePrevious / kuakaValue)}%`
        if(priceChangeText.classList.contains("green")) priceChangeText.classList.remove("green");
        priceChangeText.classList.add("red");
    }
    if(kuakaValue > kuakaValuePrevious) {
        valueText.innerHTML = `Kuaka Coin Value in USD: $${Notate(kuakaValue)}`;
        priceChangeText.innerHTML = kuakaValuePrevious > 0 ? `Price Change Over 10 Seconds: +${Notate(kuakaValue / kuakaValuePrevious)}%` : `Price Change Over 10 Seconds: +$${Notate(kuakaValue / kuakaValue)}%`;
        if(priceChangeText.classList.contains("red")) priceChangeText.classList.remove("red");
        priceChangeText.classList.add("green");
    }

}, 10000)










function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function Notate(x) {
    let exponent = Math.floor(Math.log10(Math.abs(x)));
    let mantissa = x / Math.pow(10, exponent);
    if(x >= 1e3)
        return `${mantissa.toFixed(2)}e${exponent}`
    else if(x < 1e3)
        return `${x.toFixed(2)}`;
    else if(x == 0)
        return '0';
}

