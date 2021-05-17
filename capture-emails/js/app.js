
/* 
The onload event occurs when everything in the page has been loaded.

anonymous function is when a function does not have a name
*/
window.onload = function() {
  //variables
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
  // removel modal when clicking the exit buttom
  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
  });
  // show modal when user is exting the page
  document.addEventListener('mouseleave', () => {
    // this type of event element are called  call-back
      emailModal.classList.add('email-modal--visible');
    console.log('exit');
  });


}
