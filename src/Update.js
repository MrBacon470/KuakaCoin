function updateHTML() {
    let valueText = document.getElementById("valuation")
    let priceChangeText = document.getElementById("priceChange")
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
    document.getElementById('walletText').innerHTML = `Wallet Funds: $${format(data.money)}`
}