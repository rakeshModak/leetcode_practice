var maxProfit = function (prices) {
    for (let i = 0; i < prices.length; i++) {
        let max = Math.max(...prices.slice(2));
        if (prices[i] < max) {
            return max - prices[i];
        }
    }
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))