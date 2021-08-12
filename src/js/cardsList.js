
import cardsMarkup from '../templates/cardsMarkup.hbs';
import menu from '../menu.json';


const cardsListRefs = document.querySelector('.js-menu');
const cardsRef = cardsMarkup(menu);

// createCardsMarkup(menu);

cardsListRefs.insertAdjacentHTML('beforeend', cardsRef);

// function createCardsMarkup() {
//     return menu.map(cardsMarkup).join('');
// }

