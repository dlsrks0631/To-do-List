const loginForm = document.querySelector("#login-form");
// == const loginForm = document.getElementById("login-form")
// -> id 를 가져온다는 사실을 알기 때문에

// loginForm에서 input과 button을 가져옴
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// == const loginInput = document.querySelector("#login-form input");
// == const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log(loginInput.value);
  console.log("click");
}

loginButton.addEventListener("click", onLoginBtnClick);
