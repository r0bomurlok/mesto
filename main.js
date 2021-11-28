(()=>{"use strict";var t={132:(t,e,s)=>{t.exports=s.p+"0901e27a7b3cfdc9140b.jpg"},428:(t,e,s)=>{t.exports=s.p+"bef070e3958a94ff973f.jpg"},80:(t,e,s)=>{t.exports=s.p+"6d255c11444d1217837b.jpg"},705:(t,e,s)=>{t.exports=s.p+"b161e061eb1719506f81.jpg"},411:(t,e,s)=>{t.exports=s.p+"4651c6e698cd14b1856e.jpg"},662:(t,e,s)=>{t.exports=s.p+"f26feae408ad3a7b9e34.jpg"}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,s),o.exports}s.p="",(()=>{class t{constructor(t,e,s){this._card=t,this._templateSelector=s,this._onClickByImg=e}_setEventListeners(){this.element.querySelector(".card__img").addEventListener("click",this._onClickByImg),this.element.querySelector(".card__like-button").addEventListener("click",this._onLikeButtonClick),this.element.querySelector(".card__delete-button").addEventListener("click",this._onDeleteButtonClick)}_onLikeButtonClick(t){t.target.classList.toggle("card__like-button_active")}_onDeleteButtonClick(t){t.target.closest(".card").remove()}_getTemplate(){return document.querySelector(this._templateSelector).content.firstElementChild.cloneNode(!0)}createCardNode(){this.element=this._getTemplate();const t=this.element.querySelector(".card__img");return t.setAttribute("src",this._card.link),t.setAttribute("alt",this._card.name),this.element.querySelector(".card__capture").textContent=this._card.name,this.element.querySelector(".card__like-counter").textContent=this._card.likes.length,this._setEventListeners(),this.element}}class e{constructor(t,e){this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._formElement=e,this._inputList=Array.from(e.querySelectorAll(t.inputSelector)),this._submitButton=e.querySelector(t.submitButtonSelector)}_hasInvalidInput(){return this._inputList.some((t=>!1===t.validity.valid))}_showError(t,e){t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass),e.textContent=t.validationMessage}_hideError(t,e){t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}_isValid(t){const e=this._formElement.querySelector(`.${t.id}-error`);t.validity.valid?this._hideError(t,e):this._showError(t,e)}_setEventListeners(){const t=this._formElement.checkValidity();this._toggleSubmitButton(this._submitButton,t),Array.from(this._inputList).forEach((t=>{t.addEventListener("input",(()=>{const e=this._formElement.checkValidity();this._isValid(t),this._toggleSubmitButton(this._submitButton,e)}))})),this._formElement.addEventListener("reset",(()=>{this._toggleSubmitButton(this._submitButton,!1)}))}enableValidation(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}_toggleSubmitButton(t,e){e?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled")):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","true"))}}class r{constructor(t){this._popupSelector=t,this._popupEl=document.querySelector(t),this._listenerClick=this._handleEscClose.bind(this)}setEventListeners(){this._popupEl.addEventListener("click",(t=>{(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&this.close()}))}open(){this._popupEl.classList.add("popup_opened"),document.addEventListener("keydown",this._listenerClick)}close(){this._popupEl.classList.remove("popup_opened"),document.removeEventListener("keydown",this._listenerClick)}_handleEscClose(t){"Escape"===t.key&&this.close()}}class i{constructor({items:t,renderer:e},s){this._items=t,this._renderer=e,this._containerSelector=document.querySelector(s)}renderItems(){this._items.forEach((t=>{this._containerSelector.append(this._renderer(t))}))}addItem(t){this._containerSelector.prepend(t)}}s(80),s(428),s(411),s(705),s(132),s(662);class o extends r{constructor(t,e){super(t),this._handleFormSubmit=e,this._inputs=this._popupEl.querySelectorAll(".popup__input"),this._form=this._popupEl.querySelector(".popup__form")}_getInputValues(){const t={};return this._inputs.forEach((e=>{t[e.name]=e.value})),t}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(t=>{this._handleFormSubmit(this._getInputValues()),t.preventDefault()}))}close(){super.close(),this._form.reset()}}const n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error-message_active"},c=document.querySelector(".profile__edit-button"),a=document.querySelector(".popup__form"),l=a.querySelector("input[name='name']"),u=a.querySelector("input[name='description']"),p=document.querySelector("#popupPlace"),_=document.querySelector(".profile__add-button"),d=p.querySelector(".popup__form"),h=new class{constructor(t){this._options=t}_fetch(t,e){return fetch(this._options.baseUrl+t,{headers:this._options.headers,...e}).then((t=>t.ok?t.json():Promise.reject(`Ошибка: ${t.status}`)))}getUserInfo(){return this._fetch("/users/me")}getInitialCards(){return this._fetch("/cards")}updateUserInfo(t){return this._fetch("/users/me",{method:"PATCH",body:JSON.stringify(t)})}addNewCard(t){return this._fetch("/cards",{method:"POST",body:JSON.stringify(t)})}}({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-30",headers:{authorization:"824c1506-61a7-48e4-8b2f-cd5fe1a7a429","Content-Type":"application/json"}});function m(e){return new t(e,v,".templateForCard").createCardNode()}h.getInitialCards().then((t=>{new i({items:t,renderer:m},".cards").renderItems()})),new e(n,a).enableValidation(),new e(n,d).enableValidation();const f=new class extends r{constructor(t){super(t),this._imgPopup=this._popupEl.querySelector(".popup__img-gallery"),this._titlePopup=this._popupEl.querySelector(".popup__figcaption")}open({src:t,alt:e}){super.open(),this._imgPopup.setAttribute("src",t),this._imgPopup.setAttribute("alt",e),this._titlePopup.textContent=e}}("#popupGallery");function v(t){const e=t.target.getAttribute("src"),s=t.target.getAttribute("alt");f.open({src:e,alt:s})}f.setEventListeners();const S=new o("#popupEditProfile",(function({name:t,description:e}){b.setUserInfo({name:t,description:e,avatar:b.getUserInfo().avatar}),S.close()})),b=new class{constructor({nameSelector:t,descriptionSelector:e,avatarSelector:s}){this.name=document.querySelector(t),this.description=document.querySelector(e),this.avatar=document.querySelector(s)}getUserInfo(){return{name:this.name.textContent,description:this.description.textContent}}setUserInfo({name:t,description:e,avatar:s}){this.name.textContent=t,this.description.textContent=e,this.avatar.setAttribute("src",s)}}({nameSelector:".profile__name",descriptionSelector:".profile__description",avatarSelector:".profile__avatar"});S.setEventListeners();const E=new o("#popupPlace",(function({place:t,url:e}){const s={name:t,link:e};h.addNewCard(s).then((t=>{new i({},".cards").addItem(m(t)),E.close()}))}));h.getUserInfo().then((t=>{b.setUserInfo(t)})),E.setEventListeners(),c.addEventListener("click",(function(){S.open(),function(){const t=b.getUserInfo();l.value=t.name,u.value=t.description}()})),_.addEventListener("click",(function(){E.open()}))})()})();