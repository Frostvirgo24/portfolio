const backToTopButton = document.getElementById("backToTop");

window.onscroll = () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};