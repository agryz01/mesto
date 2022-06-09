const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.add('popup__input-text_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input-text_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}

const enableValidation = (formElement, inputElement) => {
  //console.log(inputElement.validationMessage);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_disabled');
      buttonElement.disabled = 'disabled';
      } else {
        buttonElement.classList.remove('popup__button_disabled');
        buttonElement.disabled = '';
      }
}

const setEventListeners = (formElement) => {
  inputList = Array.from(formElement.querySelectorAll('.popup__input-text'));
  console.log(inputList);
  const buttonElement = formElement.querySelector('.popup__button');
  //console.log(buttonElement);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    //console.log(inputElement);
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, buttonElement);
      enableValidation(formElement, inputElement);
    });
  });
}


