function openPost(postName) {
  window.location.href = `/post-template.html?post=${postName}`;
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");

  nav.classList.toggle("active");
  overlay.classList.toggle("active");
}
