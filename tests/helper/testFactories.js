/* eslint-disable import/prefer-default-export */
import KageLikeButtonInterior from '../../src/scripts/utils/kage-like-button-interior';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await KageLikeButtonInterior.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
