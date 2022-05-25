const editButton = document.querySelector('.profile__edit-button');
const popupWindowEdit = document.querySelector('.popup_window_edit');
const closingIconWindowEdit = popupWindowEdit.querySelector('.popup__closing-icon');
const formWindowEditElement = popupWindowEdit.querySelector('.popup__container');
const nameInput = popupWindowEdit.querySelector('.popup__input-text_input_name');
const jobInput = popupWindowEdit.querySelector('.popup__input-text_input_activity');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//editpopup
editButton.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popupWindowEdit.classList.add('popup_opened');
});

function closeFormWindowEdit() {
  popupWindowEdit.classList.remove('popup_opened');
}

closingIconWindowEdit.addEventListener('click', closeFormWindowEdit);

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closeFormWindowEdit();
}

formWindowEditElement.addEventListener('submit', formSubmitHandlerEdit);

//addpopup

const popupWindowAdd = document.querySelector('.popup_window_add');
const addButon = document.querySelector('.profile__add-button');
const namePlace = popupWindowAdd.querySelector('.popup__input-text_input_place');
const urlPlace = popupWindowAdd.querySelector('.popup__input-text_input_url');
const closingIconWindowAdd = popupWindowAdd.querySelector('.popup__closing-icon');
const formWindowAddElement = popupWindowAdd.querySelector('.popup__container');

addButon.addEventListener('click', function () {
  namePlace.value = '';
  urlPlace.value = '';
  popupWindowAdd.classList.add('popup_opened');
});

function closeFormWindowAdd() {
  popupWindowAdd.classList.remove('popup_opened');
}

closingIconWindowAdd.addEventListener('click', closeFormWindowAdd);

//рендеринг карточек

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardListElement = document.querySelector('.elements');

function renderItem(element) {
  const templateElement = document.querySelector('.template-element').content;
  const listElement = templateElement.cloneNode(true);
  const titleElement = listElement.querySelector('.element__title');
  const imageElement = listElement.querySelector('.element__image');
  titleElement.textContent = element.name;
  imageElement.style = `background-image: url(${element.link});`;
  cardListElement.append(listElement);
}

function renderList(data) {
  data.forEach(item => renderItem(item));
}

renderList(initialCards);

//реализация лайков

function favourites(evt) {
  let button = evt.target;
  let favoritElement = button.closest('.element__favourites');
  favoritElement.classList.toggle('element__favourites_active');
}

function allFavourites() {
  const buttonFavorit = document.querySelectorAll('.element__favourites').forEach((button) => {
    button.addEventListener('click', favourites);
  });
}
allFavourites()

const buttonFavorit = document.querySelectorAll('.element__favourites').forEach((button) => {
  button.addEventListener('click', favourites);
});

//функционал добавления карточки

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();
  const templateElement = document.querySelector('.template-element').content;
  const listElement = templateElement.cloneNode(true);
  const titleElement = listElement.querySelector('.element__title');
  const imageElement = listElement.querySelector('.element__image');
  titleElement.textContent = namePlace.value;
  imageElement.style = `background-image: url(${urlPlace.value});`;
  cardListElement.prepend(listElement);
  closeFormWindowAdd();
  allFavourites();
  allDeletIcon();
  openWindowsVievAll()
}

formWindowAddElement.addEventListener('submit', formSubmitHandlerAdd);

//функционал удаления карточек

function cardDelet(evt) {
  let button = evt.target;
  let cardDeletElement = button.closest('.element');
  cardDeletElement.remove();
}
function allDeletIcon() {
  const butoonDeletIcon = document.querySelectorAll('.element__delet-icon').forEach((button) => {
    button.addEventListener('click', cardDelet);
  });
}
allDeletIcon();

//просмотр картинок popup

const popupWindowViev = document.querySelector('.popup_window_viev');
const closeIconWindowViev = popupWindowViev.querySelector('.popup__closing-icon');
closeIconWindowViev.addEventListener('click', () => {
  popupWindowViev.classList.remove('popup_opened');
});

function openWindowViev(evt) {
  let button = evt.target;
  const vievImageElement = button.closest('.element__image');
  let popapContainerViev = document.querySelector('.popup__image');
  const vievElement = button.closest('.element');
  const vievTitleElement = vievElement.querySelector('.element__title');
  const popupTitleViev = document.querySelector('.popup__title-viev');
  const openPopupViev = document.querySelector('.popup_window_viev');
  popupTitleViev.textContent = vievTitleElement.textContent;
  popapContainerViev.src = vievImageElement.style.backgroundImage.slice(5, -2);
  openPopupViev.classList.add('popup_opened');
}
function openWindowsVievAll() {
  const openViev = document.querySelectorAll('.element__image').forEach((button) => {
    button.addEventListener('click', openWindowViev);
  });
}

openWindowsVievAll()