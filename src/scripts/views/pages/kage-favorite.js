import FavoriteKageRestaurantIdb from '../../data/favorite-kage-restaurant';
import { createKageRestaurantItem } from '../templates/kage-creator';

const Favorite = {
  async render() {
    return `
      <div class="kage-favorite-content">
        <h2 class="kage-favorite-heading">Your Favorite Restaurant</h2>
        <div id="kage-favorite-restaurants" class="kage-favorite-restaurants">
            
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteKageRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#kage-favorite-restaurants');
    const kageHero = document.querySelector('.hero');
    kageHero.style.display = 'none';
    const titleExplore = document.querySelector('.title-explore');
    titleExplore.style.display = 'none';

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createKageRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
