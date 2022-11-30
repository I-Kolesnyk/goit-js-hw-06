const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputValidation);
inputRef.addEventListener('focus', handleInputFocus);

function handleInputValidation(event) {
  event.currentTarget.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}

function handleInputFocus(event) {
  event.currentTarget.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.remove('valid')
    : inputRef.classList.remove('invalid');
}
