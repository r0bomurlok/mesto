(()=>{"use strict";class t{constructor(t,e,s,{handleCardClick:i,handleCardDelete:r,handleCardLike:n}){this._card=t,this._templateSelector=e,this._userId=s,this._handleCardClick=i,this._handleCardDelete=r,this._handleCardLike=n}_setEventListeners(){this.element.querySelector(".card__img").addEventListener("click",this._handleCardClick),this.element.querySelector(".card__like-button").addEventListener("click",this._onLikeButtonClick.bind(this)),this.element.querySelector(".card__delete-button").addEventListener("click",this._onDeleteButtonClick.bind(this))}_onLikeButtonClick(){this._handleCardLike(this._card._id,(t=>{this._updateLikes(t.likes)}),this._isLiked)}_onDeleteButtonClick(t){this._handleCardDelete(this._card._id,(()=>{t.target.closest(".card").remove()}))}_updateLikes(t){this.element.querySelector(".card__like-counter").textContent=t.length;const e=t.find((t=>t._id===this._userId)),s=this.element.querySelector(".card__like-button");e?s.classList.add("card__like-button_active"):s.classList.remove("card__like-button_active"),this._isLiked=e}_getTemplate(){return document.querySelector(this._templateSelector).content.firstElementChild.cloneNode(!0)}createCardNode(){this.element=this._getTemplate();const t=this.element.querySelector(".card__img");return t.setAttribute("src",this._card.link),t.setAttribute("alt",this._card.name),this.element.querySelector(".card__capture").textContent=this._card.name,this._updateLikes(this._card.likes),this._card.owner._id===this._userId&&this.element.querySelector(".card__delete-button").classList.add("card__delete-button_visible"),this._setEventListeners(),this.element}}class e{constructor(t,e){this._form=document.querySelector(e),this._validationConfig=t,this._inputList=Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector)),this._submitButton=this._form.querySelector(this._validationConfig.submitButtonSelector)}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}_showError(t,e){const s=this._form.querySelector(`.${t.id}-error`);t.classList.add(this._validationConfig.inputErrorClass),s.textContent=e,s.classList.add(this._validationConfig.errorClass)}_hideError(t){const e=this._form.querySelector(`.${t.id}-error`);t.classList.remove(this._validationConfig.inputErrorClass),e.classList.remove(this._validationConfig.errorClass),e.textContent=""}_isValid(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}_setEventListeners(){this._toggleSubmitButton(),this._inputList.forEach((t=>{t.addEventListener("input",(()=>{this._isValid(t),this._toggleSubmitButton()}))})),this._form.addEventListener("reset",(()=>{this._disableButton()}))}enableValidation(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}_toggleSubmitButton(){this._hasInvalidInput()?this._disableButton():this._enableButton()}_disableButton(){this._submitButton.classList.add(this._validationConfig.inactiveButtonClass),this._submitButton.setAttribute("disabled","disabled")}_enableButton(){this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}setInitialFormState(){this._inputList.forEach((t=>{this._hideError(t)})),this._toggleSubmitButton()}enableValidation(){this._form.addEventListener("submit",(t=>{t.preventDefault()})),this._setEventListeners()}}class s{constructor(t){this._popupSelector=t,this._popupEl=document.querySelector(t),this._listenerClick=this._handleEscClose.bind(this)}setEventListeners(){this._popupEl.addEventListener("click",(t=>{(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&this.close()}))}open(){this._popupEl.classList.add("popup_opened"),document.addEventListener("keydown",this._listenerClick)}close(){this._popupEl.classList.remove("popup_opened"),document.removeEventListener("keydown",this._listenerClick)}_handleEscClose(t){"Escape"===t.key&&this.close()}}class i extends s{constructor(t,e){super(t),this._handleFormSubmit=e,this._inputs=this._popupEl.querySelectorAll(".popup__input"),this._form=this._popupEl.querySelector(".popup__form"),this._submit=this._form.querySelector(".popup__button"),this._submitText=this._submit.textContent}_getInputValues(){const t={};return this._inputs.forEach((e=>{t[e.name]=e.value})),t}enableSubmit(){this._submit.removeAttribute("disabled"),this._submit.textContent=this._submitText}disableSubmit(){this._submit.setAttribute("disabled","disabled"),this._submit.textContent="Сохранение..."}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(t=>{this._handleFormSubmit(this._getInputValues()),t.preventDefault()}))}close(){super.close(),this._form.reset()}}const r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error-message_active"},n=document.querySelector(".profile__edit-button"),o=document.querySelector(".popup__form"),a=o.querySelector("input[name='name']"),l=o.querySelector("input[name='about']"),u=document.querySelector("#popupPlace"),c=document.querySelector(".profile__add-button"),d=(u.querySelector(".popup__form"),document.querySelector(".profile__img-wrapper")),_=new class{constructor(t){this._options=t}_fetch(t,e){return fetch(this._options.baseUrl+t,{headers:this._options.headers,...e}).then((t=>t.ok?t.json():Promise.reject(`Ошибка: ${t.status}`)))}getUserInfo(){return this._fetch("/users/me")}getInitialCards(){return this._fetch("/cards")}updateUserInfo(t){return this._fetch("/users/me",{method:"PATCH",body:JSON.stringify(t)})}addNewCard(t){return this._fetch("/cards",{method:"POST",body:JSON.stringify(t)})}deleteCard(t){return this._fetch(`/cards/${t}`,{method:"DELETE"})}setLike(t){return this._fetch(`/cards/likes/${t}`,{method:"PUT"})}deleteLike(t){return this._fetch(`/cards/likes/${t}`,{method:"DELETE"})}changeAvatar(t){return this._fetch("/users/me/avatar",{method:"PATCH",body:JSON.stringify(t)})}}({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-30",headers:{authorization:"824c1506-61a7-48e4-8b2f-cd5fe1a7a429","Content-Type":"application/json"}});function h(e){const s=C.getUserInfo()._id;return new t(e,".templateForCard",s,{handleCardClick:t=>{const e=t.target.getAttribute("src"),s=t.target.getAttribute("alt");v.open({src:e,alt:s})},handleCardDelete:(t,e)=>{E.open(t,e)},handleCardLike:(t,e,s)=>{s?_.deleteLike(t).then((t=>{e(t)})).catch(y):_.setLike(t).then((t=>{e(t)})).catch(y)}}).createCardNode()}const p=new class{constructor({items:t,renderer:e},s){this._items=t,this._renderer=e,this._container=document.querySelector(s)}renderItems(t){this._items.concat(t).forEach((t=>{this._container.append(this._renderer(t))}))}addItem(t){this._container.prepend(t)}}({items:[],renderer:h},".cards");Promise.all([_.getInitialCards(),_.getUserInfo()]).then((([t,e])=>{C.setUserInfo(e),C.render(),p.renderItems(t)})).catch(y);const m=new e(r,"form[name = 'profile']");m.enableValidation();const b=new e(r,"form[name = 'addCard']");b.enableValidation();const f=new e(r,"form[name = 'changeAvatar']");f.enableValidation();const v=new class extends s{constructor(t){super(t),this._imgPopup=this._popupEl.querySelector(".popup__img-gallery"),this._titlePopup=this._popupEl.querySelector(".popup__figcaption")}open({src:t,alt:e}){super.open(),this._imgPopup.setAttribute("src",t),this._imgPopup.setAttribute("alt",e),this._titlePopup.textContent=e}}("#popupGallery");v.setEventListeners();const S=new i("#popupEditProfile",(function(t){S.disableSubmit(),_.updateUserInfo(t).then((t=>{C.setUserInfo(t),C.render(),S.close()})).catch(y).finally((()=>{S.enableSubmit()}))})),C=new class{constructor({nameSelector:t,aboutSelector:e,avatarSelector:s}){this.name=document.querySelector(t),this.about=document.querySelector(e),this.avatar=document.querySelector(s)}render(){this.name.textContent=this._userInfo.name,this.about.textContent=this._userInfo.about,this.avatar.setAttribute("src",this._userInfo.avatar)}setUserAvatar(t){this._userInfo.avatar=t}getUserInfo(){return this._userInfo}setUserInfo(t){this._userInfo=t}}({nameSelector:".profile__name",aboutSelector:".profile__description",avatarSelector:".profile__avatar"});S.setEventListeners();const L=new i("#popupPlace",(function({place:t,url:e}){const s={name:t,link:e};L.disableSubmit(),_.addNewCard(s).then((t=>{p.addItem(h(t)),L.close()})).catch(y).finally((()=>{L.enableSubmit()}))})),E=new class extends i{constructor(t,e){super(t,(()=>{})),this._onConfirmationFormSubmit=e}open(t,e){this._cardId=t,this._afterFormSubmit=e,super.open()}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(t=>{t.preventDefault(),this._onConfirmationFormSubmit(this._cardId,this._afterFormSubmit)}))}}("#popupConfirmation",(function(t,e){E.disableSubmit(),_.deleteCard(t).then((()=>{e(),E.close()})).catch(y).finally((()=>{E.enableSubmit()}))}));E.setEventListeners();const g=new i("#popupChangeAvatar",(function(t){g.disableSubmit(),_.changeAvatar(t).then((()=>{C.setUserAvatar(t.avatar),C.render(),g.close()})).catch(y).finally((()=>{g.enableSubmit()}))}));function y(t){console.log(t)}g.setEventListeners(),L.setEventListeners(),n.addEventListener("click",(function(){S.open(),function(){const t=C.getUserInfo();a.value=t.name,l.value=t.about,m.setInitialFormState()}()})),c.addEventListener("click",(function(){L.open(),b.setInitialFormState()})),d.addEventListener("click",(function(){g.open(),f.setInitialFormState()}))})();