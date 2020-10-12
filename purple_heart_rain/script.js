const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement('p');
  notif.innerText = "Hello, Coders";

  notif.classList.add('toast');

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}






















