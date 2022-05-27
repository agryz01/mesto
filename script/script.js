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

//функция открытия popup

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//функция закрытия popup

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
  openViev.addEventListener('click', ()=> openWindowViev(element));
  return listElement;
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
  newCard.forEach((item)=>{pasteElement(item)});
  closePopup(popupWindowAdd);
}

initialCards.forEach((item)=>{pasteElement(item)});
formWindowEditElement.addEventListener('submit', handleProfileFormSubmit);
formWindowAddElement.addEventListener('submit', handleAddCardFormSubmit);