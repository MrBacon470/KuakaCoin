if(data.currentPrice.eq(D(0)))
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

function mainLoop() {
    updateHTML();
}

window.setInterval( function(){mainLoop()}, 50)

function updateKuaka(){
    data.previousPrice = data.currentPrice;
    data.currentPrice = getRandom(D(10), D(1e6))
}

window.setInterval(function(){updateKuaka()}, 10000)

function getRandom(min, max) {
    return Decimal.floor(Math.random() * (max.sub(min)) ).plus(min)
}

function buy() {
    if(data.money.lt(data.currentPrice)) return
}