export default function EmailValidationChecker(input, parent) {
  if (!input.value.includes("@") || !input.value.includes(".")) {
    parent.setAttribute("style", "display: block");
    return false;
  } else {
    parent.setAttribute("style", "display: none");
    return true;
  }
}
