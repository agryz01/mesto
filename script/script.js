const editButton = document.querySelector('.profile__edit-button');
const popupWindowEdit = document.querySelector('.popup_window_edit');
const closingIconWindowEdit = popupWindowEdit.querySelector('.popup__closing-icon');
const formWindowEditElement = popupWindowEdit.querySelector('.popup__container');
const nameInput = popupWindowEdit.querySelector('.popup__input-text_input_name');
const jobInput = popupWindowEdit.querySelector('.popup__input-text_input_activity');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupWindowAdd = document.querySelector('.popup_window_add');
const addButon = document.querySelector('.profile__add-button');
const namePlace = popupWindowAdd.querySelector('.popup__input-text_input_place');
const urlPlace = popupWindowAdd.querySelector('.popup__input-text_input_url');
const formWindowAddElement = popupWindowAdd.querySelector('.popup__container');
const cardListElements = document.querySelector('.elements');
const popupWindowViev = document.querySelector('.popup_window_viev');
const templateElement = document.querySelector('.template-element').content;
const popapContainerViev = document.querySelector('.popup__image');
const popupTitleViev = document.querySelector('.popup__title-viev');
const openPopupViev = document.querySelector('.popup_window_viev');
let markFormAdd = 0;

//функция закрытия popup

function closePopup(popup) {
  document.removeEventListener('keydown', checkEscap);
  const errorList = Array.from(popup.querySelectorAll('.popup__input-error'));
  errorList.forEach((errorElement) => {
    errorElement.textContent = '';
  });
  const inputList = Array.from(popup.querySelectorAll('.popup__input-text'));
  inputList.forEach((inputElement) => {
    inputElement.classList.remove('popup__input-text_error');
  });
  popup.classList.remove('popup_opened');
}

//закрытие по клику по оверлею

function closeCklicPopup(popup) {
  popup.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('popup__container') && evt.target.classList.contains('popup') && evt.target.classList.contains('popup_opened'))
      closePopup(popup);
  });
}

//закрытие по клавише Escap

function checkEscap(evt) {    
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    }
  }

//функция открытия popup

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', checkEscap);
  closeCklicPopup(popup);
}

document.querySelectorAll('.popup__closing-icon').forEach(function (button) {
  button.addEventListener('click', function (evt) {
    const popup = evt.target.closest('.popup_opened');
    closePopup(popup);
  })
})

//editpopup

editButton.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupWindowEdit);
  enableValidation(popupWindowEdit);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupWindowEdit);
}

//addpopup

addButon.addEventListener('click', function () {
  formWindowAddElement.reset();
  openPopup(popupWindowAdd);
  enableValidation(popupWindowAdd);
});

//просмотр картинок popup

function openWindowViev(element) {
  popupTitleViev.textContent = element.name;
  popapContainerViev.src = element.link
  popapContainerViev.alt = `картинка "${element.name}" в полный размер.`;
  openPopup(openPopupViev);
}

//функция вставки эл-та

function pasteElement(card) {
  const newElement = renderItem(card);
  if (markFormAdd !== 0) {
    cardListElements.prepend(newElement);
  } else {
    cardListElements.append(newElement);
  }
}

//реализация лайков

function handleCardFavourites(evt) {
  const button = evt.target;
  button.classList.toggle('element__favourites_active');
}

//функционал удаления карточек

function handleCardDelete(evt) {
  const button = evt.target;
  const cardDeletElement = button.closest('.element');
  cardDeletElement.remove();
}

//рендеринг

function renderItem(element) {
  const listElement = templateElement.cloneNode(true);
  const titleElement = listElement.querySelector('.element__title');
  const imageElement = listElement.querySelector('.element__image');
  const buttonFavorit = listElement.querySelector('.element__favourites');
  const buttonDeletIcon = listElement.querySelector('.element__delet-icon');
  const openViev = listElement.querySelector('.element__image');
  titleElement.textContent = element.name;
  imageElement.style = `background-image: url(${element.link});`;
  buttonFavorit.addEventListener('click', handleCardFavourites);
  buttonDeletIcon.addEventListener('click', handleCardDelete);
  openViev.addEventListener('click', () => openWindowViev(element));
  return listElement;
}

function renderList(data) {
  data.forEach(item => pasteElement(item));
}

//функционал добавления карточки

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = [
    {
      name: namePlace.value,
      link: urlPlace.value
    }
  ];
  markFormAdd = 1;
  renderList(newCard);
  closePopup(popupWindowAdd);
}

renderList(initialCards);
formWindowEditElement.addEventListener('submit', handleProfileFormSubmit);
formWindowAddElement.addEventListener('submit', handleAddCardFormSubmit);