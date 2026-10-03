function calculateProfit() {
    const buyingPrice = parseFloat(document.getElementById("buyingPrice").value) || 0;
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value) || 0;
    const expenses = parseFloat(document.getElementById("expenses").value) || 0;

    const totalCost = buyingPrice + expenses;
    const profit = sellingPrice - totalCost;

    let profitPercentage = 0;

    if (totalCost > 0) {
        profitPercentage = (profit / totalCost) * 100;
    }

    const result = document.getElementById("result");

    if (profit > 0) {
        result.innerHTML =
            `Profit: ₹${profit.toFixed(2)}<br>` +
            `Profit Percentage: ${profitPercentage.toFixed(2)}%`;
    } else if (profit < 0) {
        result.innerHTML =
            `Loss: ₹${Math.abs(profit).toFixed(2)}<br>` +
            `Loss Percentage: ${Math.abs(profitPercentage).toFixed(2)}%`;
    } else {
        result.innerHTML = "No Profit, No Loss";
    }
}
