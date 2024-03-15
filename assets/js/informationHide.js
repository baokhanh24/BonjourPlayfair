const alertElement = document.querySelector('.alert');
const shipfreeElement = document.querySelector('.ship');

const city = document.querySelector('#city');
const district = document.querySelector('#district');
const ward = document.querySelector('#ward');

const inputValues = [
    document.querySelector('#email'),
    document.querySelector('#billingName'),
    document.querySelector('#billingPhone'),
    document.querySelector('#billingAddress'),
    city,
    district,
    ward
];

inputValues.forEach(item => {
    item.addEventListener('input', function () {
        checkFormFields();
    });
});

function checkFormFields() {
    const isAnyInputEmpty = inputValues.every(input => input.value === '');

    if (isAnyInputEmpty) {
        alertElement.style.display = 'block';
        shipfreeElement.style.display = 'none';
    } else {
        alertElement.style.display = 'none';
        shipfreeElement.style.display = 'block';
    }
}
city.addEventListener('change', checkFormFields);
district.addEventListener('change', checkFormFields);
ward.addEventListener('change', checkFormFields);






