
// $100 +, 25%
// 75 - 99, 15%
// 50 - 74, 10%

let discountAmount; 
let price = 85;
let discountedPrice;
let tax = 0.08;
let subtotal;
let taxAmount;

if (price >= 100) {
    discountAmount = price * 0.25;
    discountedPrice = price - discountAmount;

} else if (75 <= price && price <= 99) {
    discountAmount = price * 0.15;
    discountedPrice = price - discountAmount;

} else if (50 <= price && price <= 74) {
    discountAmount = price * 0.10;
    discountedPrice = price - discountAmount;
} 


taxAmount = discountedPrice * tax
subtotal = discountedPrice + taxAmount

console.log(`Original Price: ${price}`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Discounted Price: ${discountedPrice}`);
console.log(`Subtotal Amount (with tax): ${subtotal}`);


// subtotal conditions for shipping fee
// 100$ + shipping is fee
// 50 - 99$ , shipping is $10
// otherwise $20

let shippingCost;
let finalTotal;

if (subtotal >= 100) {
    shippingCost = 0;
} else if (subtotal >= 50) {
    shippingCost = 10;
} else {
    shippingCost = 20;
}

finalTotal = subtotal + shippingCost
console.log(`Shipping Cost: ${shippingCost}`);
console.log(`Final Price (Tax + Shipping Cost): ${finalTotal}`);

let giftText;

if (price >= 120) {
    giftText = 'Yes'
} else {
    giftText = 'No'

}

console.log(`Gift Status: ${giftText}`)