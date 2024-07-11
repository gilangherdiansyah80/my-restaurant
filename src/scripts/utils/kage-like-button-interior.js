import FavoriteKageRestaurantIdb from '../data/favorite-kage-restaurant';
import { createLikeMovieButtonTemplate, createUnlikeMovieButtonTemplate } from '../views/templates/kage-creator';

const KageLikeButtonInterior = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    // console.log(id);
    const detail = await this._isRestaurantExist(id);

    if (typeof detail !== 'undefined') {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteKageRestaurantIdb.getRestaurant(id);
    return restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeMovieButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteKageRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeMovieButtonTemplate();

    const likedButton = document.querySelector('#likeButton');
    likedButton.addEventListener('click', async () => {
      await FavoriteKageRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default KageLikeButtonInterior;
