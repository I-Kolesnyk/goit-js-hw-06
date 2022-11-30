const inputRef = document.querySelector('.validation-input');

inputRef.addEventListener('blur', handleInputValidation);
inputRef.addEventListener('focus', handleInputFocus);

function handleInputValidation(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    console.log(inputRef);
  } else {
    inputRef.classList.add('invalid');
    console.log(inputRef);
  }
}

function handleInputFocus(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('valid');
    console.log(inputRef);
  } else {
    inputRef.classList.remove('invalid');
    console.log(inputRef);
  }
}
