document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut()
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("Logout error:", error);
        });
    });
  }
});
