// ошибка видна

const showInputError = (formElement, inputElement, inputErrorClass, errorClass, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

// ошибка скрыта

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

// переключатель отображения ошибки

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputErrorClass, errorClass, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

// проверка полей на валидность

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

// переключатель кнопки

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = 'disabled';
    console.log()
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = '';
  }
}

// function toggleButtonState(inputList, buttonElement) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__button_disabled');
//     buttonElement.disabled = 'disabled';
//   } else {
//     buttonElement.classList.remove('popup__button_disabled');
//     buttonElement.disabled = "";
//   }
// }

//валидация

const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    const buttonElement = formElement.querySelector(object.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, object.inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        toggleButtonState(inputList, buttonElement, object.inactiveButtonClass);
        checkInputValidity(formElement, inputElement, object.inputErrorClass, object.errorClass);
      });
    });
  })

  
}

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-text_error',
  errorClass: 'popup__input-error_active'
}); 