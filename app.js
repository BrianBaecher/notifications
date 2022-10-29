const markAll = document.querySelector(".markAll");

markAll.addEventListener("click", markAllRead);
function markAllRead() {
  const notifications = document.querySelectorAll(".notification");
  const readIndicators = document.querySelectorAll(".readIndicator");
  let idx = -1;
  notifications.forEach((x) => removeAllIndicators(x));
  function removeAllIndicators(x) {
    idx++;
    if (x.classList.contains("unread")) {
      readIndicators[idx].style.display = "none";
      x.style.backgroundColor = "hsla(0, 0%, 95%, 0.375)";
    }
    document.querySelector(".notifyAmount").textContent = "0"
  }
}
