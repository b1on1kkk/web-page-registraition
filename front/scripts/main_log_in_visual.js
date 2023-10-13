const get_header = document.querySelector("header");

// зарпос на получение человека по логину
fetch("http://localhost:2005/sign_up_data")
  .then((response) => response.json())
  .then((data) => {
    if (data.length !== 0) {
      get_header.innerHTML = `<div>
                <img src="${data[0].avatar_name}" alt="avatar">
                <div class = 'login'>${data[0].login}</div>
                <div class = 'logout'>Log out</div>
                </div>`;

      // получение кнопки выхода их аккаунта
      const logOutButton = document.querySelector(".logout");

      // запрос на удаление печеньки
      logOutButton.addEventListener("click", () => {
        fetch("http://localhost:2005/log_out", {
          method: "POST",
        });

        location.reload();
      });
    }
  })
  .catch((err) => console.error(err));
