document.addEventListener("DOMContentLoaded", () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      // user NOT logged in → redirect
      window.location.replace("index.html");
    }
  });
});
