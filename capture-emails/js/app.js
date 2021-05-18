/* 
The onload event occurs when everything in the page has been loaded.

anonymous function is when a function does not have a name
*/
window.onload = function () {
  //variables
  let emailState = false;
  let emailModal = document.getElementsByClassName("email-modal")[0];
  let closeButton = document.getElementsByClassName(
    "email-modal__close-btn"
  )[0];
  let emailInput = document.getElementsByClassName("email-modal__input")[0];
  let emailButton = document.getElementsByClassName("email-modal__button")[0];
  let errorMessage = document.getElementsByClassName(
    "email-modal__error-message"
  )[0];
  let errorForm = document.getElementsByClassName("email-modal__form-group")[0];
  let thankContainer = document.getElementsByClassName("email-thank")[0];
  let declineOffer = document.getElementsByClassName(
    "email-modal__decline-offer"
  )[0];

  //validating email
  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email); //regex
  }

  let showModal = () => {
    if (emailState == false) {
      // this type of event element are called  call-back
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };

  let closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let addError = () => {
    errorForm.classList.add("email-modal__form-group--error");
    errorMessage.classList.add("email-modal__error-message--active");
  };

  let removeError = () => {
    errorForm.classList.remove("email-modal__form-group--error");
    errorMessage.classList.remove("email-modal__error-message--active");
  };

  let showThankMessage = () => {
    thankContainer.classList.add("email-thank--success");
    setTimeout(() => {
      closeModal();
    }, 2500);
  };

  // show modal when user is exting the page
  document.body.addEventListener("mouseleave", () => {
    showModal();
  });
  // removel modal when clicking the exit buttom
  closeButton.addEventListener("click", () => {
    closeModal();
  });

  emailInput.addEventListener("click", () => {
    removeError();
  });

  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      showThankMessage();
    } else {
      addError();
    }
  });

  declineOffer.addEventListener("click", () => {
    closeModal();
  });
};
