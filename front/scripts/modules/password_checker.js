export default function PasswordValidationChecker(parent, main, pattern) {
  if (main.value !== pattern.value) {
    parent.setAttribute("style", "display: block");
    return false;
  } else {
    parent.setAttribute("style", "display: none");
    return true;
  }
}
