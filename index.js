const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const expiryDateInput = document.getElementById('expiry-date');
const cvcInput = document.getElementById('cvc');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateName() && validateNumber() && validateExpiryDate() && validateCVC()) {
        form.submit();
    }
});

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        setErrorFor(nameInput, 'Name is required');
        return false;
    } else {
        setSuccessFor(nameInput);
        return true;
    }
}

function validateNumber() {
    const numberValue = numberInput.value.trim();
    if (numberValue === '') {
        setErrorFor(numberInput, 'Card number is required');
        return false;
    } else if (!/^\d{16}$/.test(numberValue)) {
        setErrorFor(numberInput, 'Card number must be 16 digits');
        return false;
    } else {
        setSuccessFor(numberInput);
        return true;
    }
}

function validateExpiryDate() {
    const expiryDateValue = expiryDateInput.value.trim();
    const expiryDateYYValue = document.querySelector('.expiry-date-yy').value.trim();
    if (expiryDateValue === '' || expiryDateYYValue === '') {
        setErrorFor(expiryDateInput, 'Expiry date is required');
        return false;
    } else if (!/^\d{2}$/.test(expiryDateValue) || !/^\d{2}$/.test(expiryDateYYValue)) {
        setErrorFor(expiryDateInput, 'Expiry date must be in MM/YY format');
        return false;
    } else {
        setSuccessFor(expiryDateInput);
        return true;
    }
}

function validateCVC() {
    const cvcValue = cvcInput.value.trim();
    if (cvcValue === '') {
        setErrorFor(cvcInput, 'CVC is required');
        return false;
    } else if (!/^\d{3}$/.test(cvcValue)) {
        setErrorFor(cvcInput, 'CVC must be 3 digits');
        return false;
    } else {
        setSuccessFor(cvcInput);
        return true;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    formControl.classList.add('error');
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}
