import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">FoodieFrenzy Apps</h1>
        <p class="hero__tagline">Discover Your Next Favorite Restaurant with Our Restaurant App</p>
      </div>
    </div>
    <div class="content" id="content">
      <div class="content__heading">
        <h1>Explore Restaurant</h1>
      </div>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const restaurants = await RestaurantSource.homeRestaurants();
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
