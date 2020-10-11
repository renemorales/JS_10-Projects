// SELECT element
const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');
const popup_container = document.getElementById('popup-container');

btn_open.addEventListener("click", () => {
  popup_container.classList.add('activate');
});

btn_close.addEventListener('click', () => {
  popup_container.classList.remove('activate');
});





