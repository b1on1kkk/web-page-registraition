import PostFetchRequest from "./modules/post_fetch_request.js";

const parent_block = document.querySelector(".all_users_wrapper");

const admin_password = "123456789";

const password = prompt("Enter admin password!");

if (password !== admin_password) {
  location.reload();
} else {
  fetch("http://localhost:2005/all_users")
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        parent_block.innerHTML = "<h2>No none have signed up :(</h2>";
      } else {
        const array_of_users =
          data
            .map((e) => {
              return `<div class="user_wrapper">
          <div class="img_wrapper">
            <img
              src="/${e.avatar_name}"
              alt="user_img"
            />
          </div>
          <div class="user_nickname">${e.login}</div>
          <div class="checkbox_wrapper">
            <label for="block_user_button">Block user</label>
            ${
              e.status
                ? '<input type="checkbox" name="block_user_button" class="block_status" checked/>'
                : '<input type="checkbox" name="block_user_button" class="block_status" />'
            }
            
            <div class="trash_block_wrapper">
              <img src="/trash_can.png" alt="trash" />
            </div>
          </div>
        </div>`;
            })
            .join("") +
          `<div class = 'submit_button'>
            <button>Submit</button>    
        </div>`;

        parent_block.innerHTML = array_of_users;

        const delete_button = document.querySelectorAll(".trash_block_wrapper");

        delete_button.forEach((e, idx) => {
          e.addEventListener("click", () => {
            PostFetchRequest(
              { login: data[idx].login },
              "delete_user_by_login"
            );

            location.reload();
          });
        });

        const submit_button = document.querySelector(".submit_button");

        submit_button.addEventListener("click", () => {
          const block_inputs = document.querySelectorAll(".block_status");

          const loginStatusArray = [];

          block_inputs.forEach((e, idx) => {
            loginStatusArray.push({
              status: e.checked,
              login: data[idx].login,
            });
          });

          PostFetchRequest({ data: loginStatusArray }, "change_user_status");
        });
      }
    })
    .catch((err) => console.error(err));
}
