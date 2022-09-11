const form = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userData = {
    login: `${email.value}`,
    password: `${password.value}`,
  };

  console.log(userData);
  e.currentTarget.reset();
};
form.addEventListener("submit", handleSubmit);
