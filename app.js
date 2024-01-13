let priceFirst = document.getElementById('price-first');
let priceSecond = document.getElementById('price-second');
let priceThird = document.getElementById('price-third');
let priceFourth = document.getElementById('price-fourth');
let itemFirst = +priceFirst.innerHTML;
let itemSecond = +priceSecond.innerHTML;
let itemThird = +priceThird.innerHTML;
let itemFourth = +priceFourth.innerHTML;
const sum = itemFirst + itemSecond + itemThird + itemFourth;
let result = document.querySelector('.total__result');
let couponButton = document.querySelector('.coupon');

function calculateSum() {
    const formattedSum = sum.toLocaleString('ru-RU');
    result.textContent = `Итого: ${formattedSum} руб.`;
}

calculateSum();

function couponApply() {
    couponButton.addEventListener('click', function () {
        let coupon = 20;
        let couponPrice = sum * coupon / 100;
        let totalPrice = sum - couponPrice;
        const formattedTotalPrice = totalPrice.toLocaleString('ru-RU');
        result.textContent = `Итого: ${formattedTotalPrice} руб.`;
    })
}

couponApply();
