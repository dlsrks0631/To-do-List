const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
// == const loginForm = document.getElementById("login-form")
// -> id 를 가져온다는 사실을 알기 때문에
// loginForm에서 input과 button을 가져옴
// == const loginInput = document.querySelector("#login-form input");
// == const loginButton = document.querySelector("#login-form button");

// 일반적으로 string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greeting.innerText = `Welcome 💗 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  // preventDefault => 어떤 이벤트의 기본 동작(ex))submit을 누르면 새로고침)이든지
  // 발생되지 않도록 막는 것.
  loginForm.classList.add(HIDDEN_CLASSNAME); // 클래스 추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  //   greeting.innerText = `Hello ${username}`; // === greeting.innerText = "Hello " + username;
  //   greeting.classList.remove(HIDDEN_CLASSNAME); // 클래스 삭제
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
