const notifications = document.querySelectorAll(".notification");
const notif_number = document.querySelector(".header .number");
document.querySelector("#mark-as-read").addEventListener("click", () => {
  notifications.forEach((element) => {
    element.classList.add("read");
  });
  clac_notif();
});

notifications.forEach(element =>
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.add("read");
    clac_notif();
  })
);

function clac_notif() {
  let notifs = 0;
  notifications.forEach((element) => {
    if (!element.classList.contains("read")) {
      notifs += 1;
    }
  });
  notif_number.innerText = notifs;
}
