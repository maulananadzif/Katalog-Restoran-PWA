import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div>
      <img class="restaurant-detail__image" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <section class="add-review">
        <h3 class="add-review__title">Buat Review</h3>
        <a class="add-review__form" id="store-review">
          <div class="add-review__form-group">
            <label for="review-name" class="add-review__label">Nama:</label>
            <input type="text" id="review-name" name="review-name" class="add-review__input" placeholder="Masukkan Nama Anda" required>
            <input type="text" value="${restaurant.id}" name="review-id" id="review-id" hidden>
          </div>
          <div class="add-review__form-group">
            <label for="review-content" class="add-review__label">Review:</label>
            <textarea id="review-content" name="review-content" class="add-review__textarea" placeholder="Tulis Review" required></textarea>
          </div>
          <div class="add-review__form-group">
            <button class="add-review__submit" id="add-review__submit">Submit Review</button>
          </div>
        </a>
      </section>    
    </div>
    <div class="restaurant-detail__content">
      <div class="restaurant-detail__header">
        <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      </div>
      <p class="restaurant-detail__description">${restaurant.description}</p>
      <p class="restaurant-detail__location">Kota: ${restaurant.city}</p>
      <p class="restaurant-detail__address">Alamat: ${restaurant.address}</p>
      <h3 class="restaurant-detail__categories">Kategori:</h3>
      <ul class="restaurant-detail__categories-list">
        ${Object.keys(restaurant.categories).map((key) => (
    `<li>${restaurant.categories[key].name}</li>`
  )).join('')}
      </ul>
      <h3 class="restaurant-detail__menus">Menu:</h3>
      <div class="restaurant-detail__foods">
        <h4>Makanan:</h4>
        <ul>
        ${Object.keys(restaurant.menus.foods).map((key) => (
    `<li>${restaurant.menus.foods[key].name}</li>`
  )).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__drinks">
        <h4>Minuman:</h4>
        <ul>
        ${Object.keys(restaurant.menus.drinks).map((key) => (
    `<li>${restaurant.menus.drinks[key].name}</li>`
  )).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__reviews-container">
        <h3 class="restaurant-detail__section-title">Review dari Customer</h3>
        ${Object.keys(restaurant.customerReviews).map((key) => (
    `<ul class="restaurant-detail__review-list">
          <li class="restaurant-detail__review-item">
            <div class="restaurant-detail__review-meta">
              <div class="restaurant-detail__review-header">
                <span class="restaurant-detail__review-name">${restaurant.customerReviews[key].name}</span>
                <span class="restaurant-detail__review-date">${restaurant.customerReviews[key].date}</span>
              </div>
            </div>
            <p class="restaurant-detail__review-content">${restaurant.customerReviews[key].review}</p>
          </li>
        </ul>`
  )).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <a class="restaurant-card" href="#/detail/${restaurant.id}">
    <img class="restaurant-card__image" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
    <div class="restaurant-card__content">
    <h3 class="restaurant-card__name">${restaurant.name}</h3>
    <p class="restaurant-card__rating">Rating: ⭐️${restaurant.rating}</p>
    <p class="restaurant-card__description">${restaurant.description}</p>
    <p class="restaurant-card__city">Kota: ${restaurant.city}</p>
    </div>
  </a>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
