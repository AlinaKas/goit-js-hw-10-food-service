
import cardsMarkup from '../templates/cardsMarkup.hbs';
import menu from '../menu.json';

const cardsListRefs = document.querySelector('.js-menu');
const cardsRef = cardsMarkup(menu);



cardsListRefs.insertAdjacentHTML('beforeend', cardsRef);

function createCardsMarkup(menu) {
    return menu.map(cardsMarkup);
}

createCardsMarkup(menu);