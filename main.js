(()=>{"use strict";var t={formSelector:".popup__container",inputSelector:".popup__input-text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input-text_error",errorClass:"popup__input-error_active"};function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e,n,r){var o=r.handleCardClick,i=r.openWindowsConfirmation,u=r.isOwner,a=r.isFavourites,c=r.toggleLikes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e._id,this._idOwner=e.owner._id,this._listElement=document.querySelector(n).content,this._cardElement=this._listElement.querySelector(".element").cloneNode(!0),this._buttonFavorit=this._cardElement.querySelector(".element__favourites"),this._namberOfFavorites=this._cardElement.querySelector(".element__namber-of-favourites"),this._handleCardClick=o,this._openWindowsConfirmation=i,this._isOwner=u,this._isFavourites=a(this._likes),this._toggleLikes=c}var n,r;return n=t,(r=[{key:"handleCardFavourites",value:function(t){this._buttonFavorit.classList.toggle("element__favourites_active"),this._isFavourites=!this._isFavourites,this._namberOfFavorites.textContent=t.likes.length}},{key:"getTemplate",value:function(){var t=this,e=this._cardElement.querySelector(".element__title"),n=this._cardElement.querySelector(".element__image");return this._isOwner(this._idOwner)?this._cardElement.querySelector(".element__delet-icon").addEventListener("click",(function(){t._openWindowsConfirmation(t._id,t._cardElement)})):this._cardElement.querySelector(".element__delet-icon").remove(),e.textContent=this._name,n.style="background-image: url(".concat(this._link,");"),this._isFavourites&&this._buttonFavorit.classList.add("element__favourites_active"),this._namberOfFavorites.textContent=this._likes.length,this._buttonFavorit.addEventListener("click",(function(){t._toggleLikes(t._isFavourites,t._id)})),n.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._cardElement}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled="disabled"):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled="")}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e),t._toggleButtonState()}))}},{key:"enableValidation",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._element=document.querySelector(n)}var e,n;return e=t,n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e?this._element.prepend(t):this._element.append(t)}}],n&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._linkHandleEscKey=this._handleEscKey.bind(this),this._popup=document.querySelector(e),this.button=this._popup.querySelector(".popup__button")}var e,n;return e=t,(n=[{key:"_handleEscKey",value:function(t){"Escape"===t.key&&this.close()}},{key:"close",value:function(){document.removeEventListener("keydown",this._linkHandleEscKey),this._popup.classList.remove("popup_opened")}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._linkHandleEscKey)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__closing-icon"))&&t.close()}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=p(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._name=e._popup.querySelector(".popup__title-viev"),e._link=e._popup.querySelector(".popup__image"),e}return e=u,(n=[{key:"open",value:function(t,e){this._name.textContent=t,this._link.src=e,this._link.alt='картинка "'.concat(t,'" в полный размер.'),f(y(u.prototype),"open",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=w(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function w(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function E(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).popupForm=n._popup.querySelector(".popup__container"),n._handleFormSubmit=r,n._inputList=Array.from(n.popupForm.querySelectorAll(".popup__input-text")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputElementValues={},this._inputList.forEach((function(e){t._inputElementValues[e.name]=e.value})),this._inputElementValues}},{key:"setEventListeners",value:function(){var t=this;this.popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),m(O(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this.popupForm.reset(),m(O(u.prototype),"close",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=P(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function P(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function T(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t,e){var n,r=e.handleWindowConfirmation;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._button=n._popup.querySelector(".popup__button"),n._handleWindowConfirmation=r,n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;this._button.addEventListener("mousedown",(function(){t._handleWindowConfirmation(t._id,t._target)})),j(I(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(t,e){this._id=t,this._target=e,j(I(u.prototype),"open",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var F=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileTitle=document.querySelector(e),this._profileSubtitle=document.querySelector(n),this.profileAvatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={yourname:this._profileTitle.textContent,yourjob:this._profileSubtitle.textContent},this._userInfo}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t._id;this._profileTitle.textContent=e,this._profileSubtitle.textContent=n,this.id=r}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this.profileAvatar.style="background-image: url(".concat(e,");")}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this._response=e.response}var e,n;return e=t,n=[{key:"getUserInformation",value:function(){var t=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"setUserInformation",value:function(t,e){var n=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return n._response(t)}))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(t){return t.json()}))}},{key:"addCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return n._response(t)}))}},{key:"deletCard",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"toggleCardLikes",value:function(t,e){var n=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(t){return n._response(t)}))}},{key:"setAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._response(t)}))}}],n&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var V=document.querySelector(".profile__edit-button"),U=document.querySelector(".popup__input-text_input_name"),D=document.querySelector(".popup__input-text_input_activity"),W=document.querySelector(".profile__add-button"),H=document.querySelector(".profile__avatar"),K=new _(".popup_window_viev"),N=new k(".popup_window_add",{handleFormSubmit:function(t){var e=t.placename,n=t.placeurl;N.button.textContent="Сохранение...",ot.addCard(e,n).then((function(t){var e=et(t);nt.addItem(e.getTemplate()),N.close()})).catch((function(t){console.log(t)})).finally((function(){N.button.textContent="Создать"}))}}),J=new q(".popup_window_confirmation",{handleWindowConfirmation:function(t,e){ot.deletCard(t).then((function(t){e.remove(),J.close()})).catch((function(t){console.log(t)}))}}),G=new o(t,N.popupForm),M=new F(".profile__title",".profile__subtitle",".profile__avatar"),z=new k(".popup_window_edit",{handleFormSubmit:function(t){var e=t.yourname,n=t.yourjob;z.button.textContent="Сохранение...",ot.setUserInformation(e,n).then((function(t){document.querySelector(".profile__title").textContent=e,document.querySelector(".profile__subtitle").textContent=n,z.close()})).catch((function(t){console.log(t)})).finally((function(){z.button.textContent="Сохранить"}))}}),$=new o(t,z.popupForm),Q=new k(".popup_window_edit-avatar",{handleFormSubmit:function(t){Q.button.textContent="Сохранение...",ot.setAvatar(t.avatar).then((function(e){M.setUserAvatar(t),Q.close()})).catch((function(t){console.log(t)})).finally((function(){Q.button.textContent="Сохранить"}))}}),X=new o(t,Q.popupForm),Y=function(t,e){return K.open(t,e)},Z=function(t,e){J.open(t,e)};V.addEventListener("click",(function(){var t=M.getUserInfo();U.value=t.yourname,D.value=t.yourjob,$.resetValidation(),z.open()})),W.addEventListener("click",(function(){G.resetValidation(),N.open()})),H.addEventListener("click",(function(){X.resetValidation(),Q.open()}));var tt=function(t){return t.some((function(t){return t._id===M.id}))},et=function(t){var e=new n(t,".template-element",{handleCardClick:Y,openWindowsConfirmation:Z,isOwner:rt,isFavourites:tt,toggleLikes:function(t,n){ot.toggleCardLikes(t,n).then((function(t){e.handleCardFavourites(t)})).catch((function(t){console.log(t)}))}});return e},nt=new u({renderer:function(t){var e=et(t);nt.addItem(e.getTemplate(),!1)}},".elements"),rt=function(t){return t===M.id};K.setEventListeners(),N.setEventListeners(),z.setEventListeners(),J.setEventListeners(),Q.setEventListeners(),$.enableValidation(),G.enableValidation(),X.enableValidation();var ot=new A({url:"https://mesto.nomoreparties.co/v1/cohort-46/",headers:{authorization:"7db7170a-ac3c-4dc5-8594-c4340cfc9c1b","Content-Type":"application/json; charset=UTF-8"},response:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}});Promise.all([ot.getUserInformation(),ot.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(o),M.setUserAvatar(o),nt.renderItems(i)}))})();