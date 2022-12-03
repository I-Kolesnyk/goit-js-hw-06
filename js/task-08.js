const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
  event.preventDefault();

  if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
    alert('Заповніть усі поля форми!');
  } else {
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const loginFormData = {
      email,
      password,
    };

    console.log(loginFormData);
    loginFormRef.reset();
  }
}
