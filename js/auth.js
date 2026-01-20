const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const authBtn = document.getElementById("authBtn");

window.onload = () => {
  document.getElementById("authModal").style.display = "flex";
};

loginTab.onclick = () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  authBtn.innerText = "Login";
};

signupTab.onclick = () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  authBtn.innerText = "Sign Up";
};

authBtn.onclick = () => {
  document.getElementById("authModal").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
};
