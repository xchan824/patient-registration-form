let firstName = document.querySelector('#firstname');
let isFirstName = false;

let middleName = document.querySelector('#middlename');
let isMiddleName = false;

let lastName = document.querySelector('#lastname');
let isLastName = false;

let address = document.querySelector('#address');
let isAddress = false;

let number = document.querySelector('#number');
let isNumber = false;

let birthdate = document.querySelector('#birthdate');
let isBirthdate = false;

let genderMale = document.querySelector('#male');
let genderFemale = document.querySelector('#female');
let isGenderChecked = '';

let historyList = document.querySelectorAll(`input[name='disease']`);
let isHistoryChecked = [];

let symptomsList = document.querySelector('#symptoms');
let isSymptomsChecked = [];

let medicationsYes = document.querySelector('#yes');
let medicationsNo = document.querySelector('#no');
let medicationsTextarea = document.querySelector('#medications');
let isMedicationsChecked = '';

let firstNameError = document.querySelector('#firstname-error');
let middleNameError = document.querySelector('#middlename-error');
let lastNameError = document.querySelector('#lastname-error');
let addressError = document.querySelector('#address-error');
let numberError = document.querySelector('#number-error');
let birthdateError = document.querySelector('#birthdate-error');
let genderError = document.querySelector('#gender-error');
let historyError = document.querySelector('#history-error');
let symptomsError = document.querySelector('#symptoms-error');
let medicationsError = document.querySelector('#medications-error');

let form = document.querySelector('#patient-form');

let resetBtn = document.querySelector('#reset-form');

form.addEventListener('submit', function(e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    checkFirstName();
    checkMiddleName();
    checkLastName();
    checkAddress();
    checkNumber();
    checkBirthdate();
    checkGender();
    checkHistory();
    checkSymptoms();
    checkMedications();

    if (!(isFirstName == false) &&
        !(isMiddleName == false) &&
        !(isLastName == false) &&
        !(isAddress == false) &&
        !(isNumber == false) &&
        !(isBirthdate == false) &&
        !(isGenderChecked == false) &&
        !(isHistoryChecked == false) &&
        !(isSymptomsChecked == false) &&
        !(isMedicationsChecked == false)) {
        alert(`First name: ${firstName.value}\nMiddle name: ${middleName.value}\nLast name: ${lastName.value}\nAddress: ${address.value}\nMobile number: ${number.value}\nBirthdate: ${birthdate.value}\nGender: ${isGenderChecked}\nMedical History: ${isHistoryChecked}\nCurrent symptoms: ${isSymptomsChecked}\nIs the patient currently taking medications? ${isMedicationsChecked}`);
        // form.submit();
    }
});

resetBtn.onclick = () => {
    firstNameError.textContent = '';
    middleNameError.textContent = '';
    lastNameError.textContent = '';
    addressError.textContent = '';
    numberError.textContent = '';
    birthdateError.textContent = '';
    genderError.textContent = '';
    historyError.textContent = '';
    symptomsError.textContent = '';
    medicationsError.textContent = '';

    firstName.classList.remove('invalid-input');
    middleName.classList.remove('invalid-input');
    lastName.classList.remove('invalid-input');
    address.classList.remove('invalid-input');
    number.classList.remove('invalid-input');
    birthdate.classList.remove('invalid-input');
}


// functions used for form validation
const checkFirstName = () => {
    let firstNamePattern = /^[A-Za-z]+$/;
    if (firstName.value.length < 2 || firstName.value.length > 20) {
        firstNameError.textContent = 'First name should contain 2-20 characters';
        firstName.classList.add('invalid-input');
    } else {
        firstNameError.textContent = '';
        firstName.classList.remove('invalid-input');
        if (!firstNamePattern.test(firstName.value)) {
            firstNameError.textContent = 'First name should only contain letters';
            firstName.classList.add('invalid-input');
        } else {
            firstName.classList.remove('invalid-input');
            isFirstName = true;
        }
    }
}

const checkMiddleName = () => {
    let middleNamePattern = /^[A-Za-z]+$/;
    if (middleName.value.length < 2 || middleName.value.length > 20) {
        middleNameError.textContent = 'Middle name should contain 2-20 characters';
        middleName.classList.add('invalid-input');
    } else {
        middleNameError.textContent = '';
        middleName.classList.remove('invalid-input');
        if (!middleNamePattern.test(middleName.value)) {
            middleNameError.textContent = 'Middle name should only contain letters';
            middleName.classList.add('invalid-input');
        } else {
            middleName.classList.remove('invalid-input');
            isMiddleName = true;
        }
    }
}

const checkLastName = () => {
    let lastNamePattern = /^[A-Za-z]+$/;
    if (lastName.value.length < 2 || lastName.value.length > 20) {
        lastNameError.textContent = 'Last name should contain 2-20 characters';
        lastName.classList.add('invalid-input');
    } else {
        lastNameError.textContent = '';
        lastName.classList.remove('invalid-input');
        if (!lastNamePattern.test(lastName.value)) {
            lastNameError.textContent = 'Last name should only contain letters';
            lastName.classList.add('invalid-input');
        } else {
            lastName.classList.remove('invalid-input');
            isLastName = true;
        }
    }
}

const checkAddress = () => {
    let addressPattern = /^[A-Za-z, ]+$/;
    if (address.value.length < 20 || lastName.value.length > 200) {
        addressError.textContent = 'Address should contain 20-200 characters';
        address.classList.add('invalid-input');
    } else {
        addressError.textContent = '';
        address.classList.remove('invalid-input');
        if (!addressPattern.test(address.value)) {
            addressError.textContent = 'Address should only contain letters, numbers, commas, and spaces';
            address.classList.add('invalid-input');
        } else {
            address.classList.remove('invalid-input');
            isAddress = true;
        }
    }
}

const checkNumber = () => {
    let numberPattern = /^[0-9]{4}-[0-9]{3}-[0-9]{4}$/;
    if (!numberPattern.test(number.value)) {
        numberError.textContent = 'Number should be in the following format: 0912-345-6789';
        number.classList.add('invalid-input');
    } else {
        numberError.textContent = '';
        number.classList.remove('invalid-input');
        isNumber = true;
    }
}

const checkBirthdate = () => {
    if (!birthdate.value) {
        birthdateError.textContent = 'Please enter birthdate';
        birthdate.classList.add('invalid-input');
    } else {
        birthdateError.textContent = '';
        birthdate.classList.remove('invalid-input');
        isBirthdate = true;
    }
}

const checkGender = () => {
    if (genderMale.checked == false && genderFemale.checked == false) {
        genderError.textContent = 'Please choose a gender';
    } else if (genderMale.checked == true && genderFemale.checked == false) {
        genderError.textContent = '';
        isGenderChecked = genderMale.value;
    } else if (genderMale.checked == false && genderFemale.checked == true) {
        genderError.textContent = '';
        isGenderChecked = genderFemale.value;
    }
}

const checkHistory = () => {
    let newHistoryList = [];
    historyList.forEach(history => {
        history.checked ? newHistoryList.push(history.value) : null;
    });
    if (newHistoryList.length == 0) {
        historyError.textContent = 'Please choose at least one option';
    } else {
        historyError.textContent = '';
        isHistoryChecked = newHistoryList.join(', ');
    }
}

const checkSymptoms = () => {
    let selectedValues = [...symptomsList.options]
        .filter(option => option.selected)
        .map(option => option.text);
        console.log(selectedValues);
    if (selectedValues.length == 0) {
        symptomsError.textContent = 'Please choose at least one option';
    } else {
        isSymptomsChecked = selectedValues.join(', ');
        symptomsError.textContent = '';
    }
}

const checkMedications = () => {
    if (medicationsYes.checked == false && medicationsNo.checked == false) {
        medicationsError.textContent = 'Please choose at least one option';
    } else if (medicationsYes.checked == true && medicationsNo.checked == false) {
        isMedicationsChecked = `${medicationsYes.value}, ${medicationsTextarea.value}`;
        medicationsError.textContent = '';
    } else if (medicationsYes.checked == false && medicationsNo.checked == true) {
        isMedicationsChecked = medicationsNo.value;
        medicationsError.textContent = '';
    }
}

medicationsNo.onclick = () => {
    medicationsTextarea.disabled = true;
}

medicationsYes.onclick = () => {
    medicationsTextarea.disabled = false;
}