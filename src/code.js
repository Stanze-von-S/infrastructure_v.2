import {configApi, Api} from './js/Api';
// import {Card} from './src/js/Card';
import CardList from './js/CardList';
import {getProfile} from './js/functions';
// // import {Popup} from './js/Popup';
// import {PopupForm} from './js/PopupForm';
import PopupImage from './js/PopupImage';
import PopupFormPlace from './js/PopupFormPlace';
import PopupFormEdit from './js/PopupFormEdit';
// import './pages/index.css';


const objectApi = new Api(configApi);
const addFormButton = document.querySelector('.user-info__button');
const addFormUserButton = document.querySelector('.user-info__button-edit');
const placePopup = new PopupFormPlace('.popup_new-place', objectApi);
const jobPopup = new PopupFormEdit('.popup_new-form', objectApi);
const profileName = document.querySelector('.user-info__name');
const profileJob = document.querySelector('.user-info__job');
const profileImage = document.querySelector('.user-info__photo');
const placesList = new CardList('.places-list', objectApi);
// Принимаем данные от сервера по профилю.
getProfile(objectApi, profileName, profileJob, profileImage);
// Выгружаем карточки с сервера.
placesList.render();

const formImage = new PopupImage('.popup_image');

addFormButton.addEventListener('click', function (event) {
    placePopup.open();
})

addFormUserButton.addEventListener('click', function (event) {
    jobPopup.open();
})
