const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const user = {
      email: formElements.email.value,
      password: formElements.password.value,
    };
    console.log(user);
    form.reset();
  }
}
