
import cardsMarkup from '../templates/cardsMarkup.hbs';
import menu from '../menu.json';


console.log(cardsMarkup);

const cardsListRefs = document.querySelector('.js-menu');
const cardsRef = cardsMarkup(menu);

createCardsMarkup(menu);

cardsListRefs.insertAdjacentHTML('beforeend', cardsRef);

function createCardsMarkup(menu) {
    return menu.map(cardsMarkup).join('');
}

