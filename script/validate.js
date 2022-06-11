// ошибка видна

const showInputError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
}

// ошибка скрыта

const hideInputError = (formElement, inputElement, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = '';
}

// переключатель отображения ошибки

const checkInputValidity = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, object);
  } else {
    hideInputError(formElement, inputElement, object);
  }
}

// проверка полей на валидность

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

// переключатель кнопки

function toggleButtonState(inputList, buttonElement, object) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(object.inactiveButtonClass);
    buttonElement.disabled = 'disabled';    
    console.log('кнопка выключена', buttonElement);
  } else {
    buttonElement.classList.remove(object.inactiveButtonClass);
    buttonElement.disabled = '';
    console.log('кнопка активна', buttonElement);
  }
}

//валидация

const setEventListeners = (formElement, object) => {
  inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, object);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, buttonElement, object);
      checkInputValidity(formElement, inputElement, object);
    });
  });
}

const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, object);
  })
}

// enableValidation({
//   formSelector: '.popup__container',
//   inputSelector: '.popup__input-text',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input-text_error',
//   errorClass: 'popup__input-error_active'
// }); 