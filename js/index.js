document.querySelector(".logo").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function onUrlChange() {
  const hash = window.location.hash;

  const routeMap = {
    "#about": "home.html#about",
    "#features": "home.html#features",
  };

  const targetSrc = routeMap[hash];
  if (targetSrc) {
    animateIframe(targetSrc);
  }
}

document.addEventListener("DOMContentLoaded", onUrlChange);
window.addEventListener("hashchange", onUrlChange);
