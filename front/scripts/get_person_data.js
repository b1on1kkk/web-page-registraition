fetch("http://localhost:2005/sign_up_data")
  .then((response) => response.json())
  .then((data) => {
    const parent_block = document.querySelector(".main_wrapper");

    parent_block.innerHTML = `
    <img src="/${data[0].avatar_name}" alt="avatar">
    <h1>Hello, ${data[0].login}</h1>
    `;
  })
  .catch((err) => console.error(err));
