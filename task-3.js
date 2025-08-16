/**
 * ### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
 */

/**
 * laptop price --> 35000
 * tablet price --> 15000
 * mobile price --> 20000
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopCost = laptopQuantity * laptopPrice;
    const tabletCost = tabletQuantity * tabletPrice;
    const mobileCost = mobileQuantity * mobilePrice;

    const totalCost = laptopCost + tabletCost + mobileCost;

    return totalCost;
}

const total = calculateElectronicsBudget(2, 3, 5);
console.log('Total cost is:', total);
