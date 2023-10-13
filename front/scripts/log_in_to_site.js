const submit_button = document.querySelector("button");
const form = document.querySelector("form");
const warning_block = document.querySelector(".user_not_found_warning");
const login = document.querySelector(".user_login");
const password = document.querySelector(".user_password");

submit_button.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("http://localhost:2005/all_users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const login_includes = data.some(
        (person) =>
          person.login === login.value &&
          person.password === password.value &&
          person.status !== 1
      );

      if (login_includes) {
        form.submit();
      } else {
        warning_block.setAttribute("style", "display: block");
      }
    })
    .catch((err) => console.error(err));
});
