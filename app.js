const emailAddressField = document.getElementById('emailAddressInputField');
const emailSubmitButton = document.getElementById('emailSubmitButton');
const invalidFormatText = document.getElementById('invalidFormatText');
const emailSuccessText = document.getElementById('emailSuccessText');

const GetEmail = () => {
    const email = emailAddressField.value;
    return email;
}

const NoEmail = () => {
    emailAddressField.classList.add('inputFieldError');
    invalidFormatText.classList.remove('hidden');
    invalidFormatText.value = "Oops! Please add your email";
    console.log("No Email");
}

const InvalidEmail = () => {
    emailAddressField.classList.add('inputFieldError');
    invalidFormatText.classList.remove('hidden');
    invalidFormatText.value = "Oops! That doesn’t look like an email address";
    console.log("Invalid email");
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailAddressField.addEventListener('input', () => {
    emailAddressField.classList.remove('inputFieldError');
    invalidFormatText.classList.add('hidden');
    emailSuccessText.classList.add('hidden');
});

emailSubmitButton.addEventListener('click', () => {
    emailAddressField.classList.remove('inputFieldError');
    emailSuccessText.classList.add('hidden');

    const email = GetEmail();

    emailAddressField.value = '';

    if (!email || email.length === 0) {
        NoEmail();
        return;
    }

    if (!validateEmail(email)) {
        InvalidEmail();
        return;
    }

    console.log("Email: ", email);

    emailAddressField.classList.remove('inputFieldError');
    invalidFormatText.classList.add('hidden');
    emailSuccessText.classList.remove('hidden');
});