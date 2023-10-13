import EmailValidationChecker from "./modules/mail_checker.js";
import PasswordValidationChecker from "./modules/password_checker.js";
import handleSubmit from "./modules/submit_handler.js";

// email validation
const get_email = document.querySelector(".user_email");
const email_warning_block = document.querySelector(".mail_warning_text");

get_email.addEventListener("change", () =>
  EmailValidationChecker(get_email, email_warning_block)
);
//

// password validation
const get_password = document.querySelector(".password_rechecking");
const get_pattern_password = document.querySelector(".pattern_password");
const password_warning_block = document.querySelector(".password_warning_text");

get_password.addEventListener("change", () =>
  PasswordValidationChecker(
    password_warning_block,
    get_password,
    get_pattern_password
  )
);
//

// form validation
const all_inputs = document.querySelectorAll("input");
const all_input_error = document.querySelector(".main_error");

const form = document.querySelector("form");
const submit_button = document.querySelector("button");

const extension_error_block = document.querySelector(".main_error_block");

submit_button.addEventListener("click", (e) => {
  e.preventDefault();

  // чисто для красоты убираем, если включен
  all_input_error.setAttribute("style", "display: none");

  // если пользователь нажал на кнопку регистарции производим проверку,
  // имееются ли пустые поля, если имеются - кидаем ошибку и выходим из addEventListener
  try {
    all_inputs.forEach((e) => {
      if (e.value === "") throw new Error("Empty fields");
    });
  } catch (error) {
    all_input_error.setAttribute("style", "display: block");
    return;
  }

  if (
    PasswordValidationChecker(
      password_warning_block,
      get_password,
      get_pattern_password
    ) &&
    EmailValidationChecker(get_email, email_warning_block)
  ) {
    handleSubmit(form, extension_error_block);
  }
});
//
