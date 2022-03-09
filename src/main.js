data.previousPrice = data.currentPrice;
data.currentPrice = getRandom(D(10), D(1e6))

let valueText = document.getElementById("valuation")
let priceChangeText = document.getElementById("priceChange")

if(data.currentPrice.lt(data.previousPrice)) {
    valueText.innerHTML = `Kuaka Coin Value in USD: $${format(data.currentPrice)}`
    priceChangeText.innerHTML = `Price Change Over 10 Seconds: -${format(data.previousPrice.divide(data.currentPrice))}%`
    if(priceChangeText.classList.contains("green")) priceChangeText.classList.remove("green")
    priceChangeText.classList.add("red")
}
if(data.currentPrice.gt(data.previousPrice)) {
    valueText.innerHTML = `Kuaka Coin Value in USD: $${format(data.currentPrice)}`
    priceChangeText.innerHTML = data.previousPrice.gt(D(0)) ? `Price Change Over 10 Seconds: +${format(data.currentPrice.divide(data.previousPrice))}%` : `Price Change Over 10 Seconds: +${format(data.currentPrice.divide(data.currentPrice))}%`
    if(priceChangeText.classList.contains("red")) priceChangeText.classList.remove("red")
    priceChangeText.classList.add("green")
}


window.setInterval( function(){
    let valueText = document.getElementById("valuation")
    let priceChangeText = document.getElementById("priceChange")

    data.previousPrice = data.currentPrice;
    data.currentPrice = getRandom(D(10), D(1e6))

    if(data.currentPrice.lt(data.previousPrice)) {
        valueText.innerHTML = `Kuaka Coin Value in USD: $${format(data.currentPrice)}`;
        priceChangeText.innerHTML = `Price Change Over 10 Seconds: -${format(data.previousPrice.divide(data.currentPrice))}%`
        if(priceChangeText.classList.contains("green")) priceChangeText.classList.remove("green")
        priceChangeText.classList.add("red")
    }
    if(data.currentPrice.gt(data.previousPrice)) {
        valueText.innerHTML = `Kuaka Coin Value in USD: $${format(data.currentPrice)}`;
        priceChangeText.innerHTML = data.previousPrice.gt(D(0)) ? `Price Change Over 10 Seconds: +${format(data.currentPrice.divide(data.previousPrice))}%` : `Price Change Over 10 Seconds: +${format(data.currentPrice.divide(data.currentPrice))}%`
        if(priceChangeText.classList.contains("red")) priceChangeText.classList.remove("red")
        priceChangeText.classList.add("green")
    }

}, 10000)










function getRandom(min, max) {
    return Decimal.floor(Math.random() * (max.sub(min)) ).plus(min)
}

function Notate(x) {
    let exponent = Math.floor(Math.log10(Math.abs(x)))
    let mantissa = x / Math.pow(10, exponent)
    if(x >= 1e3)
        return `${mantissa.toFixed(2)}e${exponent}`
    else if(x < 1e3)
        return `${x.toFixed(2)}`
    else if(x == 0)
        return '0';
}

