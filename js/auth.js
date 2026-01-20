// auth.js loaded check
console.log("auth.js loaded");

// Firebase auth instance
const auth = firebase.auth();

// Elements
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const authBtn = document.getElementById("authBtn");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

let isLogin = true;

// Toggle tabs
loginTab.onclick = () => {
  isLogin = true;
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  authBtn.innerText = "Login";
};

signupTab.onclick = () => {
  isLogin = false;
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  authBtn.innerText = "Sign Up";
};

// Button action
authBtn.onclick = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    if (isLogin) {
      // LOGIN
      await auth.signInWithEmailAndPassword(email, password);
      alert("Login successful");
    } else {
      // SIGN UP
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Signup successful");
    }
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};
