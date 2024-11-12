function maxProfit(prices) {
    let currentMin = 7;
    let maxProfit = 0;

    for(let price of prices) {
        currentMin = Math.min(currentMin, price);
        maxProfit = Math.max(maxProfit, price-currentMin);
    }

    return maxProfit;
}

// Better Version

function maxProfit_1(prices) {
    let currentMin = 7;
    let maxProfit = 0;

    for(let price of prices) {
       if (price < currentMin) {
         currentMin = price;
       } else {
         maxProfit = Math.max(maxProfit, price - currentMin);
       }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit_1([7, 1, 5, 3, 6, 4]));
