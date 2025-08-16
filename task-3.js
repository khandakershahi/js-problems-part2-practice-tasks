/**
 * ### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
 */

const electronics = [
    {name: 'laptop', price: 35000, quantity: 2},
    {name: 'tablet', price: 15000, quantity: 3},
    {name: 'mobile', price: 20000, quantity: 5}
   
]


function calculateElectronicsBudget(electronics){
    let sum = 0;
    for (const product of electronics) {
        sum += product.price * product.quantity;
    }
    return sum;
}

const totalcost = calculateElectronicsBudget(electronics);
console.log('cost is ', totalcost);