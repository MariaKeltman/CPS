/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs/index.js!./SCSS/style.scss"
/*!**************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs/index.js!./SCSS/style.scss ***!
  \**************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Bold.woff */ "./font/TTLakes-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Medium.woff */ "./font/TTLakes-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/TTLakes-Light.woff */ "./font/TTLakes-Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sidebar {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 6;
  width: 272px;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 30px 29px 48px 22px;
  transform: translateX(-100%);
  background-color: white;
}
.sidebar--active {
  transform: translateX(0);
}
.sidebar__wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.sidebar .header__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar .header__container1 {
  display: flex;
  gap: 16px;
}
.sidebar .header__cross {
  display: block;
  cursor: pointer;
}
.sidebar .nav__list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0;
  list-style: none;
  padding-left: 0;
}
.sidebar .item__link {
  position: relative;
  text-decoration: none;
  color: #1B1C21;
  font-weight: 500;
  font-size: 16px;
}
.sidebar .item__link_active {
  color: #7E7E82;
}
.sidebar .item__link_active::before {
  position: absolute;
  content: "";
  width: 4px;
  height: 32px;
  left: -24px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
  background-color: #41F6D7;
}
.sidebar .sidebar__footer {
  margin-top: auto;
}
.sidebar .footer {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 0;
}
.sidebar .footer__wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.sidebar .footer__button {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
}
.sidebar .footer__mail {
  text-decoration: none;
  color: #1B1C21;
}
.sidebar .footer__phone {
  text-decoration: none;
  color: #1B1C21;
  font-weight: 700;
}
.sidebar .footer__lang {
  display: flex;
  flex-direction: row;
  gap: 7px;
}
.sidebar .footer__link {
  text-decoration: none;
  color: #1B1C21;
}
.sidebar .footer__link_active {
  color: #7E7E82;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);
    padding-top: 19px;
  }
}
@media (min-width: 1120px) {
  .sidebar {
    transform: translateX(0);
  }
  .header__cross {
    display: none !important;
  }
  .page {
    margin-left: 320px;
  }
}
.page {
  background-color: #F8F8F8;
}
.page .header {
  border-bottom: 1px solid #D9FFF5;
  padding: 18px 16px 10px 16px;
  background-color: #FFFFFF;
}
.page .header__menu {
  display: flex;
  justify-content: space-between;
}
.page .header__container1 {
  display: flex;
  gap: 16px;
}
.page .header__img {
  border: none;
  background: none;
  padding: 0;
}
.page .header__container2 {
  display: flex;
  gap: 16px;
}
.page .header__call, .page .header__chat, .page .header__profile, .page .header__settings, .page .header__search {
  border: none;
  background: none;
  padding: 0;
}
.page .header__divider2 {
  width: 2px;
  height: 32px;
  background-color: #EAEAEA;
  align-self: center;
}
.page .header__divider1, .page .header__call, .page .header__chat, .page .header__profile, .page .header__divider3, .page .header__settings-text, .page .header__search-text {
  display: none;
}
.page .main {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.page .main__header {
  padding-top: 35px;
}
.page .main__title {
  position: relative;
  align-self: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 16px;
  font-size: 28px;
  color: #1B1C21;
  font-weight: 700;
}
.page .main__title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 40px;
  border-radius: 20px;
  background-color: #41F6D7;
}
.page .main__bottom {
  display: none;
}
.page .main__nav {
  margin: 0;
}
.page .main .nav {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
}
.page .main .nav__list {
  display: flex;
  list-style: none;
  padding-left: 16px;
  margin: 0;
}
.page .main .nav__item {
  display: inline-block;
  font-size: 16px;
  color: #7E7E82;
  padding: 8px 22px;
  text-decoration: none;
}
.page .main .nav__items--active {
  border: 2px solid #7fe0c7;
  border-radius: 6px;
  background-color: #FFFFFF;
}
.page .main__container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-right: 32px;
}
.page .main__about-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
}
.page .main__about {
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  height: 90px;
}
.page .main__about-arrow {
  display: inline;
  padding-bottom: 16px;
}
.page .main__about-next {
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #1B1C21;
}
.page .main__img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
@media (min-width: 768px) {
  .page .header__divider1 {
    display: inline;
    width: 2px;
    height: 32px;
    background-color: #EAEAEA;
    align-self: center;
  }
  .page .header__divider2 {
    display: none;
  }
  .page .header__divider3 {
    display: inline-block;
    width: 2px;
    height: 32px;
    background-color: #EAEAEA;
    align-self: center;
  }
  .page .header__call, .page .header__chat, .page .header__profile {
    display: block;
  }
  .page .header_bottom {
    display: none;
  }
  .page .main__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 40px;
    gap: 48px;
  }
  .page .main__about {
    overflow: hidden;
    height: 160px;
    width: 312px;
  }
  .page .main__img {
    width: 50%;
    height: auto;
  }
}
@media (min-width: 1120px) {
  .page .header {
    display: none;
  }
  .page .main__header {
    display: flex;
    justify-content: space-between;
  }
  .page .main__settings-text {
    font-size: 16px;
    font-weight: 500;
  }
  .page .main__search-text {
    font-size: 16px;
    font-weight: 500;
  }
  .page .main__item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .page .main__settings, .page .main__search {
    border: none;
    background: none;
    padding: 0;
  }
  .page .main__nav {
    margin: 0;
  }
  .page .main .nav__list {
    flex-wrap: wrap;
  }
  .page .main__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 40px;
    gap: 48px;
  }
  .page .main__about {
    width: 490px;
    height: auto;
    overflow: visible;
  }
  .page .main__about-content {
    width: 490px;
  }
  .page .main__bottom {
    display: flex;
    gap: 32px;
    padding-right: 32px;
  }
  .page .main__img {
    width: 531px;
    height: auto;
  }
}

.brands {
  padding: 16px;
  background-color: #F8F8F8;
}
.brands__name {
  text-transform: uppercase;
  color: #7E7E82;
  font-weight: 400;
  font-size: 16px;
}
.brands__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 32px;
  padding-left: 0;
  margin: 0;
  list-style: none;
}
.brands__list-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 0 16px;
}
.brands__list-items--hidden {
  display: none;
}
.brands__btn {
  margin-top: 24px;
}
.brands__btn-show {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
.brands__btn-open {
  transform: rotate(180deg);
}
.brands__swiper {
  position: relative;
  margin-top: 24px;
}
.brands .swiper-pagination {
  bottom: 0 !important;
  display: none;
}
.brands .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: #D9D9D9;
  opacity: 1;
}
.brands .swiper-pagination-bullet-active {
  background: #7E7E82;
}
.brands .item__btn {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.brands .item__btn:hover {
  transform: scale(0.9);
}

@media (max-width: 767px) {
  .brands__swiper {
    position: relative;
  }
  .brands__swiper::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
  }
  .brands__list {
    display: flex;
    grid-template-columns: none;
    gap: 0;
  }
  .brands .swiper-slide {
    width: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
  }
  .brands__btn {
    display: none;
  }
  .brands .swiper-pagination {
    display: block;
  }
  .brands__list-items--hidden, .brands__list-items--hidden-min {
    display: flex !important;
  }
  .brands__swiper {
    padding-bottom: 32px;
  }
}
@media (min-width: 768px) {
  .brands {
    padding: 32px;
  }
  .brands__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px 32px;
  }
  .brands .swiper-wrapper {
    display: grid;
  }
  .brands .swiper-slide {
    flex-shrink: 1;
    width: auto;
  }
}
@media (min-width: 768px) and (min-width: 768px) and (max-width: 1024px) {
  .brands {
    padding: 24px;
  }
  .brands__list {
    grid-template-columns: repeat(3, 1fr);
  }
  .brands__list-items--hidden, .brands__list-items--hidden-min {
    display: none;
  }
  .brands .swiper-wrapper {
    display: grid;
  }
  .brands .swiper-slide {
    width: auto;
    flex-shrink: 1;
  }
}
.price {
  padding: 16px;
}
.price__name {
  text-transform: uppercase;
  color: #7E7E82;
  font-weight: 400;
  font-size: 16px;
}
.price__header {
  min-height: 40px;
  color: #7e7e82;
  font-weight: 500;
  font-size: 14px;
}
.price__header span {
  padding-left: 12px;
}
.price__list {
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
}
.price__list-items, .price__header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 136px;
  align-items: center;
}
.price__list-items {
  font-weight: 400;
  font-size: 14px;
}
.price .item {
  min-height: 64px;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 16px;
}
.price .item__label {
  display: none;
}
.price .item__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  width: 119px;
  height: 32px;
  padding: 10px 16px;
  border: none;
  border-radius: 16px;
  background-color: #ff3e79;
  color: #fff;
  cursor: pointer;
}
.price .item__button-arrow {
  font-size: 20px;
  line-height: 1;
}
.price .item__button-text {
  font-weight: 700;
  font-size: 14px;
}

@media (max-width: 767px) {
  .price__header {
    display: none;
  }
  .price__swiper {
    position: relative;
  }
  .price__swiper::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
  }
  .price__list {
    background: none;
  }
  .price__list-items {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 0;
    height: auto;
    padding: 16px;
    background-color: #fff;
    border: 0;
    border-radius: 6px;
  }
  .price .item__button {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
  .price .item__label {
    display: block;
    color: #7E7E82;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .price .item__service, .price .item__price, .price .item__time {
    display: flex;
    flex-direction: column;
  }
  .price__swiper {
    width: 100%;
    overflow: hidden;
    padding-bottom: 32px;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .swiper-pagination {
    display: block;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #D9D9D9;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #7E7E82;
  }
}
@media (min-width: 768px) {
  .price {
    padding: 32px;
  }
  .price__list {
    display: block;
  }
  .price .item__button {
    justify-self: end;
    margin-right: 32px;
  }
}
@media (min-width: 1025px) {
  .price .item__button {
    justify-self: end;
    margin-right: 40px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .price {
    padding: 24px;
  }
}
.repair {
  padding: 16px;
}
.repair__name {
  text-transform: uppercase;
  color: #7E7E82;
  font-weight: 400;
  font-size: 16px;
}
.repair__list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.repair__swiper {
  margin-top: 24px;
}
.repair .item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.repair .item__btn {
  align-self: flex-end;
}
.repair .item__btn {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.repair .item__btn:hover {
  transform: scale(0.9);
}
.repair__list-items {
  display: flex;
  justify-content: space-between;
  height: 128px;
  font-weight: 500;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 16px;
}
.repair__btn {
  margin-top: 24px;
}
.repair__btn-show {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  gap: 8px;
}
.repair__btn-open {
  transform: rotate(180deg);
}
.repair__list-items--hidden {
  display: none;
}
.repair .swiper-pagination {
  bottom: 0 !important;
  display: none;
}
.repair .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: #D9D9D9;
  opacity: 1;
}
.repair .swiper-pagination-bullet-active {
  background: #7E7E82;
}

@media (max-width: 767px) {
  .repair__swiper {
    position: relative;
  }
  .repair__swiper::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
  }
  .repair__list {
    display: flex;
    gap: 0;
  }
  .repair__list-items--hidden, .repair__list-items--hidden-min {
    display: flex;
  }
  .repair__btn {
    display: none;
  }
  .repair__swiper {
    padding-bottom: 32px;
    overflow: hidden;
    width: 100%;
  }
  .repair .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .repair .swiper-pagination {
    display: block;
  }
}
@media (min-width: 768px) {
  .repair {
    padding: 32px;
  }
  .repair__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .repair .swiper-slide {
    width: auto;
    flex-shrink: 1;
  }
  .repair__list-items.repair__list-items--hidden {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .repair {
    padding: 24px;
  }
  .repair__list {
    grid-template-columns: repeat(3, 1fr);
  }
  .repair__list-items.repair__list-items--hidden-min {
    display: none;
  }
  .repair__list-items--hidden {
    display: none;
  }
}
.footer {
  padding: 16px 24px;
}
.footer__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;
}
.footer__text {
  max-width: 480px;
}
.footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
}
.footer__copyright {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.footer__copyright-text, .footer__copyright-offer {
  color: #7E7E82;
}
.footer__copyright-link {
  text-decoration: none;
  color: #7E7E82;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer__copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
  .footer__copyright-text {
    min-width: 250px;
    text-align: left;
  }
  .footer__copyright-offer {
    text-align: right;
  }
}
@media (min-width: 1024px) {
  .footer {
    padding: 16px 32px 16px 32px;
  }
  .footer__copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .footer__copyright-text {
    max-width: 280px;
    text-align: left;
  }
  .footer__copyright-offer {
    white-space: pre-line;
    text-align: right;
  }
}
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 440px;
  background-color: #fff;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.modal--active {
  transform: translateX(0);
}
.modal--active .modal__close {
  opacity: 1;
  visibility: visible;
}
.modal__content {
  position: relative;
  padding: 32px;
}
.modal__close {
  position: absolute;
  top: 24px;
  left: -73px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
}
.modal__title {
  position: relative;
  margin: 0 0 24px;
  padding-left: 24px;
  font-size: 24px;
  font-weight: 700;
}
.modal__title::before {
  content: "";
  position: absolute;
  left: -32px;
  top: 0;
  width: 3px;
  height: 32px;
  background-color: #41ead4;
  border-radius: 2px;
}
.modal__form {
  display: flex;
  flex-direction: column;
}
.modal__input {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 0 16px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
}
.modal__textarea {
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  resize: none;
  font-family: inherit;
  font-size: 14px;
}
.modal__text {
  margin: 0 0 16px;
  font-size: 12px;
  line-height: 16px;
  color: #7e7e82;
}
.modal__text-data, .modal__text-confidentiality {
  color: #ff3e79;
  text-decoration: none;
}
.modal__button {
  align-self: flex-end;
  padding: 10px 20px;
  border: 0;
  border-radius: 20px;
  background-color: #ff3e79;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .modal {
    width: 320px;
  }
  .modal__content {
    padding: 32px 16px;
  }
  .modal__close {
    top: 16px;
    left: 16px;
  }
  .modal__title {
    margin-top: 56px;
    margin-bottom: 24px;
    padding-left: 12px;
    font-size: 18px;
  }
  .modal__title::before {
    left: -16px;
    height: 28px;
  }
}
.overlay {
  position: fixed;
  z-index: 5;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.overlay--active {
  opacity: 1;
  visibility: visible;
}

@font-face {
  font-family: "TT Lakes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  font-weight: 700;
}
@font-face {
  font-family: "TT Lakes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 500;
}
@font-face {
  font-family: "TT Lakes";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff");
  font-weight: 400;
}
body {
  font-family: "TT Lakes", sans-serif;
  margin: 0;
  background-color: #F8F8F8;
}

button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
}

button:hover {
  opacity: 0.7;
}`, "",{"version":3,"sources":["webpack://./SCSS/sidebar.scss","webpack://./SCSS/style.scss","webpack://./SCSS/page.scss","webpack://./SCSS/brands.scss","webpack://./SCSS/price.scss","webpack://./SCSS/repair.scss","webpack://./SCSS/footer.scss","webpack://./SCSS/modal.scss","webpack://./SCSS/overlay.scss","webpack://./SCSS/base.scss"],"names":[],"mappings":"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","sourcesContent":[".sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  z-index: 6;\r\n  width: 272px;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  padding: 30px 29px 48px 22px;\r\n  transform: translateX(-100%);\r\n  background-color: white;\r\n\r\n  &--active {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n  }\r\n\r\n  .header{\r\n    &__menu {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n    }\r\n\r\n    &__container1 {\r\n      display: flex;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__cross {\r\n      display: block;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  .nav {\r\n    &__list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 32px;\r\n      margin: 0;\r\n      list-style: none;\r\n      padding-left: 0 ;\r\n    }\r\n  }\r\n\r\n  .item {\r\n    &__link {\r\n      position: relative;\r\n      text-decoration: none;\r\n      color: #1B1C21;\r\n      font-weight: 500;\r\n      font-size: 16px;\r\n    }\r\n\r\n    &__link_active {\r\n      color: #7E7E82;\r\n\r\n      &::before {\r\n        position: absolute;\r\n        content: \"\";\r\n        width: 4px;\r\n        height: 32px;\r\n        left: -24px;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        border-radius: 20px;\r\n        background-color: #41F6D7;\r\n      }\r\n    }\r\n  }\r\n\r\n  .sidebar__footer {\r\n    margin-top: auto;\r\n  }\r\n\r\n  .footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n\r\n    padding-left: 0;\r\n\r\n\r\n    &__wrapper {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 12px;\r\n    }\r\n\r\n    &__button {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: flex-start;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__mail{\r\n      text-decoration: none;\r\n      color: #1B1C21;\r\n    }\r\n\r\n    &__phone {\r\n      text-decoration: none;\r\n      color: #1B1C21;\r\n      font-weight: 700;\r\n    }\r\n\r\n    &__lang {\r\n      display: flex;\r\n      flex-direction: row;\r\n      gap: 7px;\r\n    }\r\n\r\n    &__link {\r\n      text-decoration: none;\r\n      color: #1B1C21;\r\n    }\r\n\r\n    &__link_active {\r\n      color: #7E7E82;\r\n    }\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) and (max-width: 1024px) {\r\n  .sidebar {\r\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);\r\n    padding-top: 19px;\r\n  }\r\n}\r\n\r\n@media(min-width: 1120px) {\r\n\r\n  .sidebar {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .header{\r\n    &__cross {\r\n      display: none !important;\r\n    }\r\n  }\r\n\r\n  .page{\r\n    margin-left: 320px;\r\n  }\r\n}",".sidebar {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 6;\n  width: 272px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding: 30px 29px 48px 22px;\n  transform: translateX(-100%);\n  background-color: white;\n}\n.sidebar--active {\n  transform: translateX(0);\n}\n.sidebar__wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n.sidebar .header__menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sidebar .header__container1 {\n  display: flex;\n  gap: 16px;\n}\n.sidebar .header__cross {\n  display: block;\n  cursor: pointer;\n}\n.sidebar .nav__list {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  margin: 0;\n  list-style: none;\n  padding-left: 0;\n}\n.sidebar .item__link {\n  position: relative;\n  text-decoration: none;\n  color: #1B1C21;\n  font-weight: 500;\n  font-size: 16px;\n}\n.sidebar .item__link_active {\n  color: #7E7E82;\n}\n.sidebar .item__link_active::before {\n  position: absolute;\n  content: \"\";\n  width: 4px;\n  height: 32px;\n  left: -24px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 20px;\n  background-color: #41F6D7;\n}\n.sidebar .sidebar__footer {\n  margin-top: auto;\n}\n.sidebar .footer {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  padding-left: 0;\n}\n.sidebar .footer__wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sidebar .footer__button {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  gap: 16px;\n}\n.sidebar .footer__mail {\n  text-decoration: none;\n  color: #1B1C21;\n}\n.sidebar .footer__phone {\n  text-decoration: none;\n  color: #1B1C21;\n  font-weight: 700;\n}\n.sidebar .footer__lang {\n  display: flex;\n  flex-direction: row;\n  gap: 7px;\n}\n.sidebar .footer__link {\n  text-decoration: none;\n  color: #1B1C21;\n}\n.sidebar .footer__link_active {\n  color: #7E7E82;\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .sidebar {\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.15);\n    padding-top: 19px;\n  }\n}\n@media (min-width: 1120px) {\n  .sidebar {\n    transform: translateX(0);\n  }\n  .header__cross {\n    display: none !important;\n  }\n  .page {\n    margin-left: 320px;\n  }\n}\n.page {\n  background-color: #F8F8F8;\n}\n.page .header {\n  border-bottom: 1px solid #D9FFF5;\n  padding: 18px 16px 10px 16px;\n  background-color: #FFFFFF;\n}\n.page .header__menu {\n  display: flex;\n  justify-content: space-between;\n}\n.page .header__container1 {\n  display: flex;\n  gap: 16px;\n}\n.page .header__img {\n  border: none;\n  background: none;\n  padding: 0;\n}\n.page .header__container2 {\n  display: flex;\n  gap: 16px;\n}\n.page .header__call, .page .header__chat, .page .header__profile, .page .header__settings, .page .header__search {\n  border: none;\n  background: none;\n  padding: 0;\n}\n.page .header__divider2 {\n  width: 2px;\n  height: 32px;\n  background-color: #EAEAEA;\n  align-self: center;\n}\n.page .header__divider1, .page .header__call, .page .header__chat, .page .header__profile, .page .header__divider3, .page .header__settings-text, .page .header__search-text {\n  display: none;\n}\n.page .main {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page .main__header {\n  padding-top: 35px;\n}\n.page .main__title {\n  position: relative;\n  align-self: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 16px;\n  font-size: 28px;\n  color: #1B1C21;\n  font-weight: 700;\n}\n.page .main__title::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 3px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #41F6D7;\n}\n.page .main__bottom {\n  display: none;\n}\n.page .main__nav {\n  margin: 0;\n}\n.page .main .nav {\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.page .main .nav__list {\n  display: flex;\n  list-style: none;\n  padding-left: 16px;\n  margin: 0;\n}\n.page .main .nav__item {\n  display: inline-block;\n  font-size: 16px;\n  color: #7E7E82;\n  padding: 8px 22px;\n  text-decoration: none;\n}\n.page .main .nav__items--active {\n  border: 2px solid #7fe0c7;\n  border-radius: 6px;\n  background-color: #FFFFFF;\n}\n.page .main__container {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding-right: 32px;\n}\n.page .main__about-content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 16px;\n}\n.page .main__about {\n  font-size: 14px;\n  font-weight: 400;\n  overflow: hidden;\n  height: 90px;\n}\n.page .main__about-arrow {\n  display: inline;\n  padding-bottom: 16px;\n}\n.page .main__about-next {\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 16px;\n  color: #1B1C21;\n}\n.page .main__img {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n@media (min-width: 768px) {\n  .page .header__divider1 {\n    display: inline;\n    width: 2px;\n    height: 32px;\n    background-color: #EAEAEA;\n    align-self: center;\n  }\n  .page .header__divider2 {\n    display: none;\n  }\n  .page .header__divider3 {\n    display: inline-block;\n    width: 2px;\n    height: 32px;\n    background-color: #EAEAEA;\n    align-self: center;\n  }\n  .page .header__call, .page .header__chat, .page .header__profile {\n    display: block;\n  }\n  .page .header_bottom {\n    display: none;\n  }\n  .page .main__container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding-right: 40px;\n    gap: 48px;\n  }\n  .page .main__about {\n    overflow: hidden;\n    height: 160px;\n    width: 312px;\n  }\n  .page .main__img {\n    width: 50%;\n    height: auto;\n  }\n}\n@media (min-width: 1120px) {\n  .page .header {\n    display: none;\n  }\n  .page .main__header {\n    display: flex;\n    justify-content: space-between;\n  }\n  .page .main__settings-text {\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .page .main__search-text {\n    font-size: 16px;\n    font-weight: 500;\n  }\n  .page .main__item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  .page .main__settings, .page .main__search {\n    border: none;\n    background: none;\n    padding: 0;\n  }\n  .page .main__nav {\n    margin: 0;\n  }\n  .page .main .nav__list {\n    flex-wrap: wrap;\n  }\n  .page .main__container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding-right: 40px;\n    gap: 48px;\n  }\n  .page .main__about {\n    width: 490px;\n    height: auto;\n    overflow: visible;\n  }\n  .page .main__about-content {\n    width: 490px;\n  }\n  .page .main__bottom {\n    display: flex;\n    gap: 32px;\n    padding-right: 32px;\n  }\n  .page .main__img {\n    width: 531px;\n    height: auto;\n  }\n}\n\n.brands {\n  padding: 16px;\n  background-color: #F8F8F8;\n}\n.brands__name {\n  text-transform: uppercase;\n  color: #7E7E82;\n  font-weight: 400;\n  font-size: 16px;\n}\n.brands__list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px 32px;\n  padding-left: 0;\n  margin: 0;\n  list-style: none;\n}\n.brands__list-items {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 72px;\n  background-color: #fff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 0 16px;\n}\n.brands__list-items--hidden {\n  display: none;\n}\n.brands__btn {\n  margin-top: 24px;\n}\n.brands__btn-show {\n  display: flex;\n  align-items: center;\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n}\n.brands__btn-open {\n  transform: rotate(180deg);\n}\n.brands__swiper {\n  position: relative;\n  margin-top: 24px;\n}\n.brands .swiper-pagination {\n  bottom: 0 !important;\n  display: none;\n}\n.brands .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background: #D9D9D9;\n  opacity: 1;\n}\n.brands .swiper-pagination-bullet-active {\n  background: #7E7E82;\n}\n.brands .item__btn {\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.brands .item__btn:hover {\n  transform: scale(0.9);\n}\n\n@media (max-width: 767px) {\n  .brands__swiper {\n    position: relative;\n  }\n  .brands__swiper::after {\n    content: \"\";\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    width: 40px;\n    height: 100%;\n    pointer-events: none;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));\n  }\n  .brands__list {\n    display: flex;\n    grid-template-columns: none;\n    gap: 0;\n  }\n  .brands .swiper-slide {\n    width: 100%;\n    flex-shrink: 0;\n    box-sizing: border-box;\n  }\n  .brands__btn {\n    display: none;\n  }\n  .brands .swiper-pagination {\n    display: block;\n  }\n  .brands__list-items--hidden, .brands__list-items--hidden-min {\n    display: flex !important;\n  }\n  .brands__swiper {\n    padding-bottom: 32px;\n  }\n}\n@media (min-width: 768px) {\n  .brands {\n    padding: 32px;\n  }\n  .brands__list {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px 32px;\n  }\n  .brands .swiper-wrapper {\n    display: grid;\n  }\n  .brands .swiper-slide {\n    flex-shrink: 1;\n    width: auto;\n  }\n}\n@media (min-width: 768px) and (min-width: 768px) and (max-width: 1024px) {\n  .brands {\n    padding: 24px;\n  }\n  .brands__list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .brands__list-items--hidden, .brands__list-items--hidden-min {\n    display: none;\n  }\n  .brands .swiper-wrapper {\n    display: grid;\n  }\n  .brands .swiper-slide {\n    width: auto;\n    flex-shrink: 1;\n  }\n}\n.price {\n  padding: 16px;\n}\n.price__name {\n  text-transform: uppercase;\n  color: #7E7E82;\n  font-weight: 400;\n  font-size: 16px;\n}\n.price__header {\n  min-height: 40px;\n  color: #7e7e82;\n  font-weight: 500;\n  font-size: 14px;\n}\n.price__header span {\n  padding-left: 12px;\n}\n.price__list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background-color: white;\n}\n.price__list-items, .price__header {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 136px;\n  align-items: center;\n}\n.price__list-items {\n  font-weight: 400;\n  font-size: 14px;\n}\n.price .item {\n  min-height: 64px;\n  border-bottom: 1px solid #eaeaea;\n  padding: 10px 16px;\n}\n.price .item__label {\n  display: none;\n}\n.price .item__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 17px;\n  width: 119px;\n  height: 32px;\n  padding: 10px 16px;\n  border: none;\n  border-radius: 16px;\n  background-color: #ff3e79;\n  color: #fff;\n  cursor: pointer;\n}\n.price .item__button-arrow {\n  font-size: 20px;\n  line-height: 1;\n}\n.price .item__button-text {\n  font-weight: 700;\n  font-size: 14px;\n}\n\n@media (max-width: 767px) {\n  .price__header {\n    display: none;\n  }\n  .price__swiper {\n    position: relative;\n  }\n  .price__swiper::after {\n    content: \"\";\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    width: 40px;\n    height: 100%;\n    pointer-events: none;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));\n  }\n  .price__list {\n    background: none;\n  }\n  .price__list-items {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    min-height: 0;\n    height: auto;\n    padding: 16px;\n    background-color: #fff;\n    border: 0;\n    border-radius: 6px;\n  }\n  .price .item__button {\n    position: absolute;\n    right: 16px;\n    bottom: 16px;\n  }\n  .price .item__label {\n    display: block;\n    color: #7E7E82;\n    font-size: 14px;\n    margin-bottom: 4px;\n  }\n  .price .item__service, .price .item__price, .price .item__time {\n    display: flex;\n    flex-direction: column;\n  }\n  .price__swiper {\n    width: 100%;\n    overflow: hidden;\n    padding-bottom: 32px;\n  }\n  .swiper-slide {\n    flex-shrink: 0;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .swiper-pagination {\n    display: block;\n    bottom: 0;\n  }\n  .swiper-pagination-bullet {\n    width: 12px;\n    height: 12px;\n    background: #D9D9D9;\n    opacity: 1;\n  }\n  .swiper-pagination-bullet-active {\n    background: #7E7E82;\n  }\n}\n@media (min-width: 768px) {\n  .price {\n    padding: 32px;\n  }\n  .price__list {\n    display: block;\n  }\n  .price .item__button {\n    justify-self: end;\n    margin-right: 32px;\n  }\n}\n@media (min-width: 1025px) {\n  .price .item__button {\n    justify-self: end;\n    margin-right: 40px;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .price {\n    padding: 24px;\n  }\n}\n.repair {\n  padding: 16px;\n}\n.repair__name {\n  text-transform: uppercase;\n  color: #7E7E82;\n  font-weight: 400;\n  font-size: 16px;\n}\n.repair__list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.repair__swiper {\n  margin-top: 24px;\n}\n.repair .item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.repair .item__btn {\n  align-self: flex-end;\n}\n.repair .item__btn {\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.repair .item__btn:hover {\n  transform: scale(0.9);\n}\n.repair__list-items {\n  display: flex;\n  justify-content: space-between;\n  height: 128px;\n  font-weight: 500;\n  background-color: #fff;\n  border: 1px solid #eaeaea;\n  border-radius: 6px;\n  padding: 16px;\n}\n.repair__btn {\n  margin-top: 24px;\n}\n.repair__btn-show {\n  display: flex;\n  align-items: center;\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  gap: 8px;\n}\n.repair__btn-open {\n  transform: rotate(180deg);\n}\n.repair__list-items--hidden {\n  display: none;\n}\n.repair .swiper-pagination {\n  bottom: 0 !important;\n  display: none;\n}\n.repair .swiper-pagination-bullet {\n  width: 12px;\n  height: 12px;\n  background: #D9D9D9;\n  opacity: 1;\n}\n.repair .swiper-pagination-bullet-active {\n  background: #7E7E82;\n}\n\n@media (max-width: 767px) {\n  .repair__swiper {\n    position: relative;\n  }\n  .repair__swiper::after {\n    content: \"\";\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    width: 40px;\n    height: 100%;\n    pointer-events: none;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));\n  }\n  .repair__list {\n    display: flex;\n    gap: 0;\n  }\n  .repair__list-items--hidden, .repair__list-items--hidden-min {\n    display: flex;\n  }\n  .repair__btn {\n    display: none;\n  }\n  .repair__swiper {\n    padding-bottom: 32px;\n    overflow: hidden;\n    width: 100%;\n  }\n  .repair .swiper-slide {\n    flex-shrink: 0;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .repair .swiper-pagination {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .repair {\n    padding: 32px;\n  }\n  .repair__list {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n  }\n  .repair .swiper-slide {\n    width: auto;\n    flex-shrink: 1;\n  }\n  .repair__list-items.repair__list-items--hidden {\n    display: none;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .repair {\n    padding: 24px;\n  }\n  .repair__list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .repair__list-items.repair__list-items--hidden-min {\n    display: none;\n  }\n  .repair__list-items--hidden {\n    display: none;\n  }\n}\n.footer {\n  padding: 16px 24px;\n}\n.footer__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 80px;\n}\n.footer__text {\n  max-width: 480px;\n}\n.footer__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: left;\n}\n.footer__copyright {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.footer__copyright-text, .footer__copyright-offer {\n  color: #7E7E82;\n}\n.footer__copyright-link {\n  text-decoration: none;\n  color: #7E7E82;\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .footer__copyright {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 20px;\n  }\n  .footer__copyright-text {\n    min-width: 250px;\n    text-align: left;\n  }\n  .footer__copyright-offer {\n    text-align: right;\n  }\n}\n@media (min-width: 1024px) {\n  .footer {\n    padding: 16px 32px 16px 32px;\n  }\n  .footer__copyright {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .footer__copyright-text {\n    max-width: 280px;\n    text-align: left;\n  }\n  .footer__copyright-offer {\n    white-space: pre-line;\n    text-align: right;\n  }\n}\n.modal {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 440px;\n  background-color: #fff;\n  transform: translateX(100%);\n  transition: transform 0.3s ease;\n}\n.modal--active {\n  transform: translateX(0);\n}\n.modal--active .modal__close {\n  opacity: 1;\n  visibility: visible;\n}\n.modal__content {\n  position: relative;\n  padding: 32px;\n}\n.modal__close {\n  position: absolute;\n  top: 24px;\n  left: -73px;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  opacity: 0;\n  visibility: hidden;\n}\n.modal__title {\n  position: relative;\n  margin: 0 0 24px;\n  padding-left: 24px;\n  font-size: 24px;\n  font-weight: 700;\n}\n.modal__title::before {\n  content: \"\";\n  position: absolute;\n  left: -32px;\n  top: 0;\n  width: 3px;\n  height: 32px;\n  background-color: #41ead4;\n  border-radius: 2px;\n}\n.modal__form {\n  display: flex;\n  flex-direction: column;\n}\n.modal__input {\n  width: 100%;\n  height: 48px;\n  box-sizing: border-box;\n  margin-bottom: 16px;\n  padding: 0 16px;\n  border: 1px solid #eaeaea;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 14px;\n}\n.modal__textarea {\n  box-sizing: border-box;\n  width: 100%;\n  height: 120px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border: 1px solid #eaeaea;\n  border-radius: 8px;\n  resize: none;\n  font-family: inherit;\n  font-size: 14px;\n}\n.modal__text {\n  margin: 0 0 16px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #7e7e82;\n}\n.modal__text-data, .modal__text-confidentiality {\n  color: #ff3e79;\n  text-decoration: none;\n}\n.modal__button {\n  align-self: flex-end;\n  padding: 10px 20px;\n  border: 0;\n  border-radius: 20px;\n  background-color: #ff3e79;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n@media (max-width: 1024px) {\n  .modal {\n    width: 320px;\n  }\n  .modal__content {\n    padding: 32px 16px;\n  }\n  .modal__close {\n    top: 16px;\n    left: 16px;\n  }\n  .modal__title {\n    margin-top: 56px;\n    margin-bottom: 24px;\n    padding-left: 12px;\n    font-size: 18px;\n  }\n  .modal__title::before {\n    left: -16px;\n    height: 28px;\n  }\n}\n.overlay {\n  position: fixed;\n  z-index: 5;\n  inset: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n.overlay--active {\n  opacity: 1;\n  visibility: visible;\n}\n\n@font-face {\n  font-family: \"TT Lakes\";\n  src: url(\"../font/TTLakes-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"TT Lakes\";\n  src: url(\"../font/TTLakes-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"TT Lakes\";\n  src: url(\"../font/TTLakes-Light.woff\") format(\"woff\");\n  font-weight: 400;\n}\nbody {\n  font-family: \"TT Lakes\", sans-serif;\n  margin: 0;\n  background-color: #F8F8F8;\n}\n\nbutton {\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\nbutton:hover {\n  opacity: 0.7;\n}",".page {\r\n  background-color: #F8F8F8;\r\n\r\n  .header {\r\n    border-bottom: 1px solid #D9FFF5;\r\n    padding: 18px 16px 10px 16px;\r\n    background-color: #FFFFFF;\r\n\r\n    &__menu {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    &__container1 {\r\n      display: flex;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__img {\r\n      border: none;\r\n      background: none;\r\n      padding: 0;\r\n    }\r\n\r\n    &__container2 {\r\n      display: flex;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__call,\r\n    &__chat,\r\n    &__profile,\r\n    &__settings,\r\n    &__search {\r\n      border: none;\r\n      background: none;\r\n      padding: 0;\r\n    }\r\n\r\n    &__divider2 {\r\n      width: 2px;\r\n      height: 32px;\r\n      background-color: #EAEAEA;\r\n      align-self: center;\r\n    }\r\n\r\n    &__divider1,\r\n    &__call,\r\n    &__chat,\r\n    &__profile,\r\n    &__divider3,\r\n    &__settings-text,\r\n    &__search-text {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 24px;\r\n\r\n\r\n    &__header {\r\n      padding-top: 35px;\r\n    }\r\n\r\n    &__title {\r\n      position: relative;\r\n      align-self: center;\r\n      margin-top: 0;\r\n      margin-bottom: 0;\r\n      padding-left: 16px;\r\n      font-size: 28px;\r\n      color: #1B1C21;\r\n      font-weight: 700;\r\n    }\r\n\r\n    &__title::before {\r\n      content: \"\";\r\n      position: absolute;\r\n      left: 0;\r\n      top: 0;\r\n      width: 3px;\r\n      height: 40px;\r\n      border-radius: 20px;\r\n      background-color: #41F6D7;\r\n    }\r\n\r\n    &__bottom {\r\n      display: none;\r\n    }\r\n\r\n\r\n    &__nav {\r\n      margin: 0;\r\n    }\r\n\r\n    .nav {\r\n      overflow-x: auto;\r\n      white-space: nowrap;\r\n      scrollbar-width: none;\r\n\r\n      &__list {\r\n        display: flex;\r\n        list-style: none;\r\n        padding-left: 16px;\r\n        margin: 0;\r\n      }\r\n\r\n      &__item {\r\n        display: inline-block;\r\n        font-size: 16px;\r\n        color: #7E7E82;\r\n        padding: 8px 22px;\r\n        text-decoration: none;\r\n      }\r\n\r\n      &__items--active {\r\n        border: 2px solid #7fe0c7;\r\n        border-radius: 6px;\r\n        background-color: #FFFFFF;\r\n      }\r\n    }\r\n\r\n    &__container {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 32px;\r\n      padding-right: 32px;\r\n    }\r\n\r\n    &__about-content {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n      padding: 0 16px;\r\n    }\r\n\r\n    &__about {\r\n      font-size: 14px;\r\n      font-weight: 400;\r\n      overflow: hidden;\r\n      height: 90px;\r\n    }\r\n\r\n    &__about-arrow {\r\n      display: inline;\r\n      padding-bottom: 16px;\r\n    }\r\n\r\n    &__about-next {\r\n      text-decoration: none;\r\n      font-weight: 500;\r\n      font-size: 16px;\r\n      color: #1B1C21;\r\n    }\r\n\r\n    &__img {\r\n      width: 100%;\r\n      height: auto;\r\n      border-radius: 8px;\r\n    }\r\n  }\r\n\r\n  @media ( min-width: 768px) {\r\n    .header {\r\n      &__divider1 {\r\n        display: inline;\r\n        width: 2px;\r\n        height: 32px;\r\n        background-color: #EAEAEA;\r\n        align-self: center;\r\n      }\r\n\r\n      &__divider2 {\r\n        display: none;\r\n      }\r\n\r\n      &__divider3 {\r\n        display: inline-block;\r\n        width: 2px;\r\n        height: 32px;\r\n        background-color: #EAEAEA;\r\n        align-self: center;\r\n      }\r\n\r\n      &__call,\r\n      &__chat,\r\n      &__profile{\r\n        display: block;\r\n      }\r\n\r\n      &_bottom {\r\n        display: none;\r\n      }\r\n    }\r\n    .main {\r\n      &__container {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        padding-right: 40px;\r\n        gap: 48px;\r\n      }\r\n\r\n      &__about {\r\n        overflow: hidden;\r\n        height: 160px;\r\n        width: 312px;\r\n      }\r\n\r\n      &__img {\r\n        width: 50%;\r\n        height: auto;\r\n      }\r\n    }\r\n  }\r\n\r\n  @media(min-width: 1120px) {\r\n\r\n    .header {\r\n      display: none;\r\n    }\r\n\r\n    .main {\r\n\r\n      &__header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n      }\r\n\r\n      &__settings-text{\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n      }\r\n\r\n      &__search-text{\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n      }\r\n\r\n      &__item {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 8px;\r\n      }\r\n\r\n      &__settings,\r\n      &__search{\r\n        border: none;\r\n        background: none;\r\n        padding: 0;\r\n      }\r\n\r\n      &__nav{\r\n        margin: 0;\r\n      }\r\n      .nav {\r\n        &__list {\r\n          flex-wrap: wrap;\r\n        }\r\n      }\r\n\r\n      &__container {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        padding-right: 40px;\r\n        gap: 48px;\r\n      }\r\n\r\n      &__about {\r\n        width: 490px;\r\n        height: auto;\r\n        overflow: visible;\r\n      }\r\n\r\n      &__about-content {\r\n        width: 490px;\r\n      }\r\n\r\n      &__bottom{\r\n        display: flex;\r\n        gap: 32px;\r\n        padding-right: 32px;\r\n      }\r\n\r\n      &__img {\r\n        width: 531px;\r\n        height: auto;\r\n      }\r\n    }\r\n  }\r\n}",".brands{\r\n  padding: 16px ;\r\n  background-color: #F8F8F8;\r\n\r\n  &__name{\r\n    text-transform: uppercase;\r\n    color:#7E7E82;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n\r\n  }\r\n\r\n  &__list{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 16px 32px;\r\n    padding-left: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n\r\n  &__list-items{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    height: 72px;\r\n    background-color: #fff;\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 6px;\r\n    padding: 0 16px;\r\n  }\r\n\r\n  &__list-items--hidden{\r\n    display: none;\r\n  }\r\n\r\n  &__btn{\r\n    margin-top: 24px;\r\n  }\r\n\r\n  &__btn-show{\r\n    display: flex;\r\n    align-items: center;\r\n    border: none;\r\n    background: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n  }\r\n  &__btn-open{\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  &__swiper{\r\n    position: relative;\r\n    margin-top: 24px;\r\n  }\r\n\r\n  .swiper-pagination{\r\n    bottom: 0 !important;\r\n    display: none;\r\n  }\r\n\r\n  .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background: #D9D9D9;\r\n    opacity: 1;\r\n  }\r\n\r\n  .swiper-pagination-bullet-active {\r\n    background: #7E7E82;\r\n  }\r\n\r\n  .item{\r\n    &__btn{\r\n      border: none;\r\n      background: none;\r\n      padding: 0;\r\n      cursor: pointer;\r\n      transition: transform 0.3s ease;\r\n    }\r\n\r\n    &__btn:hover {\r\n      transform: scale(0.9);\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .brands{\r\n\r\n    &__swiper {\r\n      position: relative;\r\n    }\r\n\r\n    &__swiper::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      z-index: 2;\r\n      top: 0;\r\n      right: 0;\r\n      width: 40px;\r\n      height: 100%;\r\n      pointer-events: none;\r\n      background: linear-gradient(\r\n              to right,\r\n              rgba(255, 255, 255, 0),\r\n              rgba(255, 255, 255, 0.9)\r\n      );\r\n    }\r\n\r\n    &__list {\r\n      display: flex;\r\n      grid-template-columns: none;\r\n      gap: 0;\r\n    }\r\n\r\n    .swiper-slide {\r\n      width: 100%;\r\n      flex-shrink: 0;\r\n      box-sizing: border-box;\r\n    }\r\n\r\n    &__btn {\r\n      display: none;\r\n    }\r\n\r\n    .swiper-pagination {\r\n      display: block;\r\n    }\r\n\r\n    &__list-items--hidden,\r\n    &__list-items--hidden-min {\r\n      display: flex !important;\r\n    }\r\n    &__swiper {\r\n      padding-bottom: 32px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .brands{\r\n    padding: 32px;\r\n\r\n    &__list{\r\n      display: grid;\r\n      grid-template-columns: repeat(4, 1fr);\r\n      gap: 16px 32px;\r\n    }\r\n\r\n    .swiper-wrapper {\r\n      display: grid;\r\n    }\r\n    .swiper-slide {\r\n      flex-shrink: 1;\r\n      width: auto;\r\n    }\r\n  }\r\n\r\n  @media (min-width: 768px) and (max-width: 1024px) {\r\n\r\n    .brands{\r\n      padding: 24px;\r\n\r\n      &__list {\r\n        grid-template-columns: repeat(3, 1fr);\r\n      }\r\n      &__list-items--hidden,\r\n      &__list-items--hidden-min{\r\n        display: none;\r\n      }\r\n\r\n      .swiper-wrapper {\r\n        display: grid;\r\n      }\r\n\r\n      .swiper-slide {\r\n        width: auto;\r\n        flex-shrink: 1;\r\n      }\r\n    }\r\n  }\r\n}",".price{\r\n  padding: 16px;\r\n\r\n  &__name{\r\n    text-transform: uppercase;\r\n    color:#7E7E82;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n  }\r\n\r\n  &__header {\r\n    min-height: 40px;\r\n    color: #7e7e82;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n\r\n    span {\r\n      padding-left: 12px;\r\n    }\r\n  }\r\n\r\n\r\n  &__list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    background-color: white;\r\n  }\r\n\r\n  &__list-items,\r\n  &__header{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr 1fr 136px;\r\n    align-items: center;\r\n\r\n  }\r\n\r\n  &__list-items{\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .item {\r\n    min-height: 64px;\r\n    border-bottom: 1px solid #eaeaea;\r\n    padding: 10px 16px;\r\n\r\n    &__label {\r\n      display: none;\r\n    }\r\n\r\n    &__button {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 17px;\r\n\r\n      width: 119px;\r\n      height: 32px;\r\n\r\n      padding: 10px 16px;\r\n\r\n\r\n      border: none;\r\n      border-radius: 16px;\r\n\r\n      background-color: #ff3e79;\r\n      color: #fff;\r\n\r\n      cursor: pointer;\r\n    }\r\n\r\n    &__button-arrow {\r\n      font-size: 20px;\r\n      line-height: 1;\r\n    }\r\n\r\n    &__button-text{\r\n      font-weight: 700;\r\n      font-size: 14px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .price {\r\n\r\n    &__header {\r\n      display: none;\r\n    }\r\n\r\n    &__swiper {\r\n      position: relative;\r\n    }\r\n\r\n    &__swiper::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      z-index: 2;\r\n      top: 0;\r\n      right: 0;\r\n      width: 40px;\r\n      height: 100%;\r\n      pointer-events: none;\r\n      background: linear-gradient(\r\n              to right,\r\n              rgba(255, 255, 255, 0),\r\n              rgba(255, 255, 255, 0.9)\r\n      );\r\n    }\r\n\r\n    &__list {\r\n      background: none;\r\n    }\r\n\r\n    &__list-items {\r\n      position: relative;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      min-height: 0;\r\n      height: auto;\r\n      padding: 16px;\r\n      background-color: #fff;\r\n      border: 0;\r\n      border-radius: 6px;\r\n    }\r\n\r\n    .item {\r\n\r\n      &__button {\r\n        position: absolute;\r\n        right: 16px;\r\n        bottom: 16px;\r\n      }\r\n\r\n      &__label {\r\n        display: block;\r\n        color: #7E7E82;\r\n        font-size: 14px;\r\n        margin-bottom: 4px;\r\n      }\r\n\r\n      &__service,\r\n      &__price,\r\n      &__time {\r\n        display: flex;\r\n        flex-direction: column;\r\n      }\r\n    }\r\n\r\n    &__swiper {\r\n      width: 100%;\r\n      overflow: hidden;\r\n      padding-bottom: 32px;\r\n    }\r\n\r\n  }\r\n  .swiper-slide {\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .swiper-pagination {\r\n    display: block;\r\n    bottom: 0;\r\n  }\r\n\r\n  .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background: #D9D9D9;\r\n    opacity: 1;\r\n  }\r\n\r\n  .swiper-pagination-bullet-active {\r\n    background: #7E7E82;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .price {\r\n    padding: 32px;\r\n\r\n    &__list {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .price .item__button {\r\n    justify-self: end;\r\n    margin-right: 32px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n  .price .item__button {\r\n    justify-self: end;\r\n    margin-right: 40px;\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  .price {\r\n    padding: 24px;\r\n  }\r\n}\r\n\r\n",".repair{\r\n  padding: 16px;\r\n\r\n  &__name{\r\n    text-transform: uppercase;\r\n    color:#7E7E82;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n  }\r\n\r\n\r\n  &__list{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n\r\n\r\n  &__swiper{\r\n    margin-top:24px ;\r\n  }\r\n\r\n  .item{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n\r\n    &__btn {\r\n      align-self: flex-end;\r\n    }\r\n\r\n\r\n    &__btn{\r\n      border: none;\r\n      background: none;\r\n      padding: 0;\r\n      cursor: pointer;\r\n      transition: transform 0.3s ease;\r\n    }\r\n\r\n    &__btn:hover {\r\n      transform: scale(0.9);\r\n    }\r\n\r\n  }\r\n\r\n  &__list-items{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 128px;\r\n\r\n    font-weight: 500;\r\n    background-color: #fff;\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 6px;\r\n    padding: 16px ;\r\n  }\r\n\r\n  &__btn{\r\n    margin-top: 24px;\r\n  }\r\n\r\n  &__btn-show{\r\n    display: flex;\r\n    align-items: center;\r\n    border: none;\r\n    background: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    gap: 8px;\r\n  }\r\n\r\n  &__btn-open{\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  &__list-items--hidden{\r\n    display: none ;\r\n  }\r\n\r\n  .swiper-pagination{\r\n    bottom: 0 !important;\r\n    display: none;\r\n  }\r\n\r\n  .swiper-pagination-bullet {\r\n    width: 12px;\r\n    height: 12px;\r\n    background: #D9D9D9;\r\n    opacity: 1;\r\n  }\r\n\r\n  .swiper-pagination-bullet-active {\r\n    background: #7E7E82;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .repair {\r\n\r\n    &__swiper {\r\n      position: relative;\r\n    }\r\n\r\n    &__swiper::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      z-index: 2;\r\n      top: 0;\r\n      right: 0;\r\n      width: 40px;\r\n      height: 100%;\r\n      pointer-events: none;\r\n      background: linear-gradient(\r\n              to right,\r\n              rgba(255, 255, 255, 0),\r\n              rgba(255, 255, 255, 0.9)\r\n      );\r\n    }\r\n\r\n    &__list {\r\n      display: flex;\r\n      gap: 0;\r\n    }\r\n\r\n    &__list-items--hidden,\r\n    &__list-items--hidden-min {\r\n      display: flex;\r\n    }\r\n\r\n    &__btn {\r\n      display: none;\r\n    }\r\n\r\n    &__swiper {\r\n      padding-bottom: 32px;\r\n      overflow: hidden;\r\n      width: 100%;\r\n    }\r\n\r\n    .swiper-slide {\r\n      flex-shrink: 0;\r\n      width: 100%;\r\n      box-sizing: border-box;\r\n    }\r\n\r\n    .swiper-pagination {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .repair {\r\n    padding: 32px;\r\n\r\n    &__list {\r\n      display: grid;\r\n      grid-template-columns: repeat(4, 1fr);\r\n      gap: 16px;\r\n    }\r\n\r\n    .swiper-slide {\r\n      width: auto;\r\n      flex-shrink: 1;\r\n    }\r\n    &__list-items.repair__list-items--hidden {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  .repair{\r\n    padding: 24px;\r\n\r\n    &__list{\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n\r\n    &__list-items.repair__list-items--hidden-min{\r\n      display: none;\r\n    }\r\n    &__list-items--hidden {\r\n      display: none;\r\n    }\r\n  }\r\n}",".footer{\r\n  padding: 16px 24px ;\r\n\r\n  &__container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 80px;\r\n  }\r\n\r\n  &__text{\r\n    max-width: 480px;\r\n  }\r\n\r\n  &__button{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 9px;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    text-align: left;\r\n  }\r\n\r\n  &__copyright{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n\r\n  &__copyright-text,\r\n  &__copyright-offer{\r\n    color: #7E7E82;\r\n  }\r\n\r\n  &__copyright-link{\r\n    text-decoration: none;\r\n    color: #7E7E82;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  .footer {\r\n\r\n    &__copyright {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      align-items: flex-start;\r\n      gap: 20px;\r\n    }\r\n\r\n    &__copyright-text {\r\n      min-width: 250px;\r\n      text-align: left;\r\n    }\r\n\r\n    &__copyright-offer{\r\n      text-align: right;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .footer {\r\n    padding: 16px 32px 16px 32px;\r\n\r\n    &__copyright {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n    }\r\n\r\n    &__copyright-text {\r\n      max-width: 280px;\r\n      text-align: left;\r\n    }\r\n\r\n    &__copyright-offer {\r\n      white-space: pre-line;\r\n      text-align: right;\r\n    }\r\n  }\r\n}",".modal {\r\n  position: fixed;\r\n  z-index: 10;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  box-sizing: border-box;\r\n  width: 440px;\r\n\r\n  background-color: #fff;\r\n\r\n  transform: translateX(100%);\r\n  transition: transform 0.3s ease;\r\n\r\n  &--active {\r\n    transform: translateX(0);\r\n\r\n    .modal__close {\r\n      opacity: 1;\r\n      visibility: visible;\r\n    }\r\n  }\r\n\r\n  &__content {\r\n    position: relative;\r\n    padding: 32px;\r\n  }\r\n\r\n  &__close {\r\n    position: absolute;\r\n\r\n    top: 24px;\r\n    left: -73px;\r\n\r\n    width: 40px;\r\n    height: 40px;\r\n\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n\r\n    cursor: pointer;\r\n\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n\r\n  &__title {\r\n    position: relative;\r\n\r\n    margin: 0 0 24px;\r\n    padding-left: 24px;\r\n\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n\r\n    &::before {\r\n      content: \"\";\r\n\r\n      position: absolute;\r\n      left: -32px;\r\n      top: 0;\r\n\r\n      width: 3px;\r\n      height: 32px;\r\n\r\n      background-color: #41ead4;\r\n      border-radius: 2px;\r\n    }\r\n  }\r\n\r\n  &__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  &__input {\r\n    width: 100%;\r\n    height: 48px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 16px;\r\n    padding: 0 16px;\r\n\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 8px;\r\n\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n  }\r\n\r\n  &__textarea {\r\n    box-sizing: border-box;\r\n\r\n    width: 100%;\r\n    height: 120px;\r\n\r\n    margin-bottom: 16px;\r\n    padding: 16px;\r\n\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 8px;\r\n\r\n    resize: none;\r\n\r\n    font-family: inherit;\r\n    font-size: 14px;\r\n  }\r\n\r\n  &__text {\r\n    margin: 0 0 16px;\r\n\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    color: #7e7e82;\r\n  }\r\n  &__text-data,\r\n  &__text-confidentiality{\r\n    color: #ff3e79;\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n  &__button {\r\n    align-self: flex-end;\r\n\r\n    padding: 10px 20px;\r\n\r\n    border: 0;\r\n    border-radius: 20px;\r\n\r\n    background-color: #ff3e79;\r\n    color: #fff;\r\n\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .modal {\r\n    width: 320px;\r\n\r\n    &__content {\r\n      padding: 32px 16px;\r\n    }\r\n\r\n    &__close {\r\n      top: 16px;\r\n      left: 16px;\r\n    }\r\n\r\n    &__title {\r\n      margin-top: 56px;\r\n      margin-bottom: 24px;\r\n      padding-left: 12px;\r\n\r\n      font-size: 18px;\r\n\r\n      &::before {\r\n        left: -16px;\r\n        height: 28px;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".overlay {\r\n  position: fixed;\r\n  z-index: 5;\r\n\r\n  inset: 0;\r\n\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n\r\n  backdrop-filter: blur(4px);\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n\r\n  transition:\r\n          opacity 0.3s ease,\r\n          visibility 0.3s ease;\r\n\r\n  &--active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}","@font-face {\r\n  font-family: 'TT Lakes';\r\n  src: url(\"../font/TTLakes-Bold.woff\") format(\"woff\");\r\n  font-weight: 700;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'TT Lakes';\r\n  src: url(\"../font/TTLakes-Medium.woff\") format(\"woff\");\r\n  font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'TT Lakes';\r\n  src: url(\"../font/TTLakes-Light.woff\") format(\"woff\");\r\n  font-weight: 400;\r\n}\r\n\r\nbody {\r\n  font-family: 'TT Lakes', sans-serif;\r\n  margin: 0;\r\n  background-color: #F8F8F8;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  opacity: 1;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./SCSS/style.scss"
/*!*************************!*\
  !*** ./SCSS/style.scss ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs/index.js!./style.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs/index.js!./SCSS/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./font/TTLakes-Bold.woff"
/*!********************************!*\
  !*** ./font/TTLakes-Bold.woff ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5fe27ad211f7b79014fc.woff";

/***/ },

/***/ "./font/TTLakes-Light.woff"
/*!*********************************!*\
  !*** ./font/TTLakes-Light.woff ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "638fe72dcda3ae59c025.woff";

/***/ },

/***/ "./font/TTLakes-Medium.woff"
/*!**********************************!*\
  !*** ./font/TTLakes-Medium.woff ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe25154d26f37feaf90c.woff";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./cpsJS.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SCSS_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SCSS/style.scss */ "./SCSS/style.scss");


const showButton = document.querySelector(".brands__btn-show");
const showButtonText = document.querySelector(".brands__btn-text");
const showButtonIcon = showButton.querySelector("svg");
let isOpen = false;
const hiddenItems = document.querySelectorAll(".brands__list-items--hidden");
const hiddenItemsMin = document.querySelectorAll(".brands__list-items--hidden-min");
const isTablet = function () {
  return window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
};
let swiper = null;
showButton.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen === true) {
    showButtonText.textContent = "Скрыть";
    showButtonIcon.classList.add("brands__btn-open");
    for (let i = 0; i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove("brands__list-items--hidden");
    }
    if (isTablet() === true) {
      for (let i = 0; i < hiddenItemsMin.length; i++) {
        hiddenItemsMin[i].classList.remove("brands__list-items--hidden-min");
      }
    }
  } else {
    showButtonText.textContent = "Показать все";
    showButtonIcon.classList.remove("brands__btn-open");
    for (let i = 0; i < hiddenItems.length; i++) {
      hiddenItems[i].classList.add("brands__list-items--hidden");
    }
    if (isTablet() === true) {
      for (let i = 0; i < hiddenItemsMin.length; i++) {
        hiddenItemsMin[i].classList.add("brands__list-items--hidden-min");
      }
    }
  }
});
const initSwiper = function () {
  if (window.innerWidth < 768 && !swiper) {
    swiper = new Swiper('.brands__swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.brands__swiper .swiper-pagination',
        clickable: true
      }
    });
  }
  if (window.innerWidth >= 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
};
initSwiper();
window.addEventListener('resize', function () {
  initSwiper();
});
const repairShowButton = document.querySelector(".repair__btn-show");
const repairShowButtonText = document.querySelector(".repair__btn-text");
const repairShowButtonIcon = repairShowButton.querySelector("svg");
let repairIsOpen = false;
const repairHiddenItems = document.querySelectorAll(".repair__list-items--hidden");
const repairHiddenItemsMin = document.querySelectorAll(".repair__list-items--hidden-min");
const isRepairTablet = function () {
  return window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;
};
let repairSwiper = null;
repairShowButton.addEventListener("click", function () {
  repairIsOpen = !repairIsOpen;
  if (repairIsOpen === true) {
    repairShowButtonText.textContent = "Скрыть";
    repairShowButtonIcon.classList.add("repair__btn-open");
    for (let i = 0; i < repairHiddenItems.length; i++) {
      repairHiddenItems[i].classList.remove("repair__list-items--hidden");
    }
    if (isRepairTablet() === true) {
      for (let i = 0; i < repairHiddenItemsMin.length; i++) {
        repairHiddenItemsMin[i].classList.remove("repair__list-items--hidden-min");
      }
    }
  } else {
    repairShowButtonText.textContent = "Показать все";
    repairShowButtonIcon.classList.remove("repair__btn-open");
    for (let i = 0; i < repairHiddenItems.length; i++) {
      repairHiddenItems[i].classList.add("repair__list-items--hidden");
    }
    if (isRepairTablet() === true) {
      for (let i = 0; i < repairHiddenItemsMin.length; i++) {
        repairHiddenItemsMin[i].classList.add("repair__list-items--hidden-min");
      }
    }
  }
});
const repairInitSwiper = function () {
  if (window.innerWidth < 768 && !repairSwiper) {
    repairSwiper = new Swiper('.repair__swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.repair__swiper .swiper-pagination',
        clickable: true
      }
    });
  }
  if (window.innerWidth >= 768 && repairSwiper) {
    repairSwiper.destroy(true, true);
    repairSwiper = null;
  }
};
repairInitSwiper();
window.addEventListener('resize', function () {
  repairInitSwiper();
});
let priceSwiper = null;
const priceShowSwiper = function () {
  if (window.innerWidth < 768 && !priceSwiper) {
    priceSwiper = new Swiper(".price__swiper", {
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: ".price__swiper .swiper-pagination",
        clickable: true
      }
    });
  }
  if (window.innerWidth >= 768 && priceSwiper) {
    priceSwiper.destroy(true, true);
    priceSwiper = null;
  }
};
priceShowSwiper();
window.addEventListener("resize", function () {
  priceShowSwiper();
});
const overlay = document.querySelector('.overlay');
const callButtons = document.querySelectorAll('.header__call, .footer__call');
const callModal = document.querySelector('.modal-call');
const callClose = document.querySelector('.modal-call__close');
callButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    callModal.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  });
});
callClose.addEventListener('click', function () {
  callModal.classList.remove('modal--active');
  overlay.classList.remove('overlay--active');
});
const feedbackButtons = document.querySelectorAll('.header__chat, .footer__chat');
const feedbackModal = document.querySelector('.modal-feedback');
const feedbackClose = document.querySelector('.modal-feedback__close');
feedbackButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    feedbackModal.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  });
});
feedbackClose.addEventListener('click', function () {
  feedbackModal.classList.remove('modal--active');
  overlay.classList.remove('overlay--active');
});
const menuButton = document.querySelector('.header__img');
const sidebar = document.querySelector('.sidebar');
const sidebarCross = document.querySelector('.header__cross');
menuButton.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--active');
  overlay.classList.toggle('overlay--active');
});
sidebarCross.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--active');
  overlay.classList.remove('overlay--active');
});
overlay.addEventListener('click', function () {
  callModal.classList.remove('modal--active');
  feedbackModal.classList.remove('modal--active');
  sidebar.classList.remove('sidebar--active');
  overlay.classList.remove('overlay--active');
});
const modalForms = document.querySelectorAll('.modal__form');
modalForms.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });
});
const phoneInputs = document.querySelectorAll("#phone, #phone2");
phoneInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    input.value = input.value.replace(/\D/g, "");
  });
});
const navLinks = document.querySelectorAll(".item__link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("item__link_active");
    });
    link.classList.add("item__link_active");
  });
});
const navItems = document.querySelectorAll(".nav__items");
navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navItems.forEach(function (item) {
      item.classList.remove("nav__items--active");
    });
    item.classList.add("nav__items--active");
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map