export default async function handleSubmit(form, error_block) {
  const formData = new FormData(form);

  error_block.innerHTML = "";

  try {
    const response = await fetch("/sign_up", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    //
    const link = document.createElement("a");
    link.href = "http://localhost:2005/congratulations";
    link.click();
    //
  } catch (error) {
    const errorArray = JSON.parse(error.message);

    errorArray.errors.forEach((error) => {
      const newDiv = document.createElement("div");
      newDiv.innerText = error.error;
      error_block.appendChild(newDiv);
    });

    error_block.setAttribute("style", "display: block");
  }
}
