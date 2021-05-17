
/* 
The onload event occurs when everything in the page has been loaded.

anonymous function is when a function does not have a name
*/
window.onload = function() {
  //variables
  let emailState = false;
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
  let emailInput = document.getElementsByClassName('email-modal__input')[0];
  let emailButton = document.getElementsByClassName('email-modal__button')[0];
  let errorMessage = document.getElementsByClassName('email-modal__error-message')[0];
  let errorForm = document.getElementsByClassName('email-modal__form-group')[0];

  //validating email
  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email); //regex
  }

  emailButton.addEventListener('click', () => {
    if(emailIsValid(emailInput.value)) {
      console.log(emailInput.value);
    }else{
      errorForm.classList.add('email-modal__form-group--error');
      errorMessage.classList.add('email-modal__error-message--active');
    }
  })

  let showModal = () => {
    if (emailState == false) {
      // this type of event element are called  call-back
      emailModal.classList.add('email-modal--visible');
      emailState = true;
    }

  }
  
  // removel modal when clicking the exit buttom
  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
  });
  // show modal when user is exting the page
  document.body.addEventListener('mouseleave', () => {
    showModal();
    });


console.log(document);

}
