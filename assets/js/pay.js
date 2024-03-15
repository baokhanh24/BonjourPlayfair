function formatNumberWithCommasAndCurrency(number) {
    // Chuyển đổi số thành chuỗi và ngược lại
    const numberString = number.toString();

   // Tách phần nguyên và phần thập phân (nếu có)
    const [integerPart, decimalPart] = numberString.split('.');

    // Thêm dấu chấm phân tách mỗi 3 chữ số trong phần nguyên
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Kết hợp lại phần nguyên và phần thập phân (nếu có)
    const formattedNumber = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;

    // Thêm ký hiệu đồng (₫) vào cuối số
    return formattedNumber + '₫';
}

const orderSummary = document.querySelectorAll('.order-summary-emphasis');
const tienhang = document.querySelector('.tienhang');

let sum = 0;
orderSummary.forEach((item) => {
    sum += parseFloat(item.textContent || item.innerText);
});

sum = Math.round(sum * 100) / 100;

const formattedSum = formatNumberWithCommasAndCurrency(sum);

tienhang.textContent = formattedSum;

