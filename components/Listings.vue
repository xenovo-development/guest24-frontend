<template>
  <section class="archieve-tour">
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-4">
          <form action="/" class="sider-bar-tour-package">
            <div class="widget-filter mb-40">
              <h6 class="title-tour">Search by Filter</h6>
              <div class="group-select-wrap">
                <fieldset class="group-select relative mb-22">
                  <i class="icon-Vector-8"></i>
                  <div class="search-bar-group relative">
                    <label>Destination</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Location</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Tokyo
                        </li>
                        <li data-value="hongkong" class="option">Hong Kong</li>
                        <li data-value="taiwan" class="option">Taiwan</li>
                        <li data-value="hanoi" class="option">Ha Noi</li>
                        <li data-value="seoul" class="option">Seoul</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="group-select relative mb-22">
                  <i class="icon-Vector-22"></i>
                  <div class="search-bar-group relative">
                    <label>Activities</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Booking Type</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Booking Type
                        </li>
                        <li data-value="4seat" class="option">4 Seat</li>
                        <li data-value="7seat" class="option">7 Seat</li>
                        <li data-value="12seat" class="option">12 Seat</li>
                        <li data-value="32seat" class="option">32 Seat</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="group-select relative mb-22">
                  <i class="icon-Group-111"></i>
                  <div class="search-bar-group relative">
                    <label>Date</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Date From</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Date From
                        </li>
                        <li data-value="3-5day" class="option">3-5 day</li>
                        <li data-value="5-7day" class="option">5-7 day</li>
                        <li data-value="7-12day" class="option">7-12 day</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="group-select relative mb-22">
                  <i class="icon-user"></i>
                  <div class="search-bar-group relative">
                    <label>0</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Guests</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Guests
                        </li>
                        <li data-value="guests5" class="option">5 Guests</li>
                        <li data-value="guests10" class="option">10 Guests</li>
                        <li data-value="guests15" class="option">15 Guests</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="group-select relative mb-40">
                  <h6 class="title-tour">Filter By Price</h6>
                  <div class="widget widget-price">
                    <div id="slider-range2"></div>
                    <div class="slider-labels">
                      <div>
                        <input type="hidden" name="min-value2" value="" />
                        <input type="hidden" name="max-value2" value="" />
                      </div>
                      <div class="caption flex-three">
                        <p class="price-range">Price:</p>
                        <div class="number-range">
                          <span id="slider-range-value01"></span>
                          <span id="slider-range-value02"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.widget_price -->
                </fieldset>
                <fieldset class="group-select relative input-npd mb-22">
                  <div class="search-bar-group relative">
                    <label>0</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">English</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Language
                        </li>
                        <li data-value="chinese" class="option">Chinese</li>
                        <li data-value="japanese" class="option">Japanese</li>
                        <li data-value="russian" class="option">Russian</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="group-select relative input-npd mb-22">
                  <div class="search-bar-group relative">
                    <label>Any</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Month</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Month
                        </li>
                        <li data-value="month1" class="option">1 Month</li>
                        <li data-value="month2" class="option">2 Month</li>
                        <li data-value="month3" class="option">3 Month</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="group-select relative input-npd">
                  <div class="search-bar-group relative">
                    <label>Any</label>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Duration</span>
                      <ul class="list">
                        <li data-value="" class="option selected focus">
                          Duration
                        </li>
                        <li data-value="duration15" class="option">15 day</li>
                        <li data-value="duration20" class="option">20 day</li>
                        <li data-value="duration30" class="option">30 day</li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="widget-filter mb-40">
              <h6 class="title-tour">Search by Filter</h6>
              <div class="group-check-box-wrap">
                <div class="checkbox">
                  <input
                    id="check"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check">10+</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check1"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check1">12+</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check2"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check2">15+</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check3"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check3">Adults</label>
                </div>
              </div>
            </div>
            <div class="widget-filter mb-40">
              <h6 class="title-tour">Search by Filter</h6>
              <div class="group-check-box-wrap">
                <div class="checkbox">
                  <input
                    id="check4-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check4-bar">Accepts Credit Cards</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check5-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check5-bar">Car Parking</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check6-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check6-bar">Free Coupons</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check7-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check7-bar">Laundry Service</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check8-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check8-bar">Outdoor Seating</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check9-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check9-bar">Reservations</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check10-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check10-bar">Restaurant</label>
                </div>
                <div class="checkbox">
                  <input
                    id="check11-bar"
                    type="checkbox"
                    name="check"
                    value="check"
                  />
                  <label for="check11-bar">Smoking Allowed</label>
                </div>
              </div>
            </div>
            <div class="widget-filter-content">
              <div class="z-index3 relative">
                <span class="text-main">This Week only</span>
                <h4 class="title text-white">Enjoy 50% Off</h4>
                <p class="text-main">& Free cancelation</p>
                <a href="#" class="booking-now"
                  >Booking Now <i class="icon-Vector2"></i
                ></a>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-8 listing-list-car-wrap">
          <form action="/" class="tf-my-listing mb-37">
            <div class="row align-center">
              <div class="col-sm-5">
                <p class="showing">
                  Showing <span class="text-main">12</span> of 21 Results
                </p>
              </div>
              <div class="col-sm-7 group-bar-wrap flex-six">
                <div class="listing-all-wrap">
                  <div class="flex-three">
                    <div class="toolbar-list">
                      <div class="form-group">
                        <a
                          type="button"
                          class="btn-display-listing-grid"
                          :class="{ active: viewListingType === 'grid' }"
                          @click="setViewListingType('grid')"
                        >
                          <i class="icon-Group-1000001297"></i>
                        </a>
                      </div>
                      <div class="form-group">
                        <a
                          type="button"
                          class="btn-display-listing-list"
                          :class="{ active: viewListingType === 'list' }"
                          @click="setViewListingType('list')"
                        >
                          <i class="icon-list"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            class="listing-list-car-grid mb-60"
            :class="{ 'listing-list-car-list': viewListingType === 'list' }"
          >
            <div class="tour-listing box-sd">
              <a href="tour-single.html" class="tour-listing-image">
                <div class="badge-top flex-two">
                  <span class="feature">Featured</span>
                  <div class="badge-media flex-five">
                    <span class="media"
                      ><i class="icon-Group-1000002909"></i>5</span
                    >
                    <span class="media"
                      ><i class="icon-Group-1000002910"></i>2</span
                    >
                  </div>
                </div>
                <img src="/img/travel-list/1.jpg" alt="Image Listing" />
              </a>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <a href="tour-single.html">Days and 6 nights From Moscow</a>
                </h3>
                <div class="review">
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <span>(1 Review)</span>
                </div>
                <div class="icon-box flex-three">
                  <div class="icons flex-three">
                    <i class="icon-time-left"></i>
                    <span>5 days</span>
                  </div>
                  <div class="icons flex-three">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1035 15.1797V9.02734"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1797 12.1035H14.0273"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12 Person</span>
                  </div>
                </div>
                <div class="flex-two">
                  <div class="price-box flex-three">
                    <p>From <span class="price-sale">$169.00</span></p>
                    <span class="price">$199.00</span>
                  </div>
                  <div class="icon-bookmark">
                    <i class="icon-Vector-151"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="tour-listing box-sd">
              <a href="tour-single.html" class="tour-listing-image">
                <div class="badge-top flex-two">
                  <span class="feature">Featured</span>
                  <div class="badge-media flex-five">
                    <span class="media"
                      ><i class="icon-Group-1000002909"></i>5</span
                    >
                    <span class="media"
                      ><i class="icon-Group-1000002910"></i>2</span
                    >
                  </div>
                </div>
                <img src="/img/travel-list/2.jpg" alt="Image Listing" />
              </a>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <a href="tour-single.html">Days and 6 nights From Moscow</a>
                </h3>
                <div class="review">
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <span>(1 Review)</span>
                </div>
                <div class="icon-box flex-three">
                  <div class="icons flex-three">
                    <i class="icon-time-left"></i>
                    <span>5 days</span>
                  </div>
                  <div class="icons flex-three">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1035 15.1797V9.02734"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1797 12.1035H14.0273"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12 Person</span>
                  </div>
                </div>
                <div class="flex-two">
                  <div class="price-box flex-three">
                    <p>From <span class="price-sale">$169.00</span></p>
                    <span class="price">$199.00</span>
                  </div>
                  <div class="icon-bookmark">
                    <i class="icon-Vector-151"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="tour-listing box-sd">
              <a href="tour-single.html" class="tour-listing-image">
                <div class="badge-top flex-two">
                  <span class="feature">Featured</span>
                  <div class="badge-media flex-five">
                    <span class="media"
                      ><i class="icon-Group-1000002909"></i>5</span
                    >
                    <span class="media"
                      ><i class="icon-Group-1000002910"></i>2</span
                    >
                  </div>
                </div>
                <img src="/img/travel-list/3.jpg" alt="Image Listing" />
              </a>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <a href="tour-single.html">Days and 6 nights From Moscow</a>
                </h3>
                <div class="review">
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <span>(1 Review)</span>
                </div>
                <div class="icon-box flex-three">
                  <div class="icons flex-three">
                    <i class="icon-time-left"></i>
                    <span>5 days</span>
                  </div>
                  <div class="icons flex-three">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1035 15.1797V9.02734"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1797 12.1035H14.0273"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12 Person</span>
                  </div>
                </div>
                <div class="flex-two">
                  <div class="price-box flex-three">
                    <p>From <span class="price-sale">$169.00</span></p>
                    <span class="price">$199.00</span>
                  </div>
                  <div class="icon-bookmark">
                    <i class="icon-Vector-151"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="tour-listing box-sd">
              <a href="tour-single.html" class="tour-listing-image">
                <div class="badge-top flex-two">
                  <span class="feature">Featured</span>
                  <div class="badge-media flex-five">
                    <span class="media"
                      ><i class="icon-Group-1000002909"></i>5</span
                    >
                    <span class="media"
                      ><i class="icon-Group-1000002910"></i>2</span
                    >
                  </div>
                </div>
                <img src="/img/travel-list/4.jpg" alt="Image Listing" />
              </a>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <a href="tour-single.html">Days and 6 nights From Moscow</a>
                </h3>
                <div class="review">
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <span>(1 Review)</span>
                </div>
                <div class="icon-box flex-three">
                  <div class="icons flex-three">
                    <i class="icon-time-left"></i>
                    <span>5 days</span>
                  </div>
                  <div class="icons flex-three">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1035 15.1797V9.02734"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1797 12.1035H14.0273"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12 Person</span>
                  </div>
                </div>
                <div class="flex-two">
                  <div class="price-box flex-three">
                    <p>From <span class="price-sale">$169.00</span></p>
                    <span class="price">$199.00</span>
                  </div>
                  <div class="icon-bookmark">
                    <i class="icon-Vector-151"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="tour-listing box-sd">
              <a href="tour-single.html" class="tour-listing-image">
                <div class="badge-top flex-two">
                  <span class="feature">Featured</span>
                  <div class="badge-media flex-five">
                    <span class="media"
                      ><i class="icon-Group-1000002909"></i>5</span
                    >
                    <span class="media"
                      ><i class="icon-Group-1000002910"></i>2</span
                    >
                  </div>
                </div>
                <img src="/img/travel-list/5.jpg" alt="Image Listing" />
              </a>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <a href="tour-single.html">Days and 6 nights From Moscow</a>
                </h3>
                <div class="review">
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <span>(1 Review)</span>
                </div>
                <div class="icon-box flex-three">
                  <div class="icons flex-three">
                    <i class="icon-time-left"></i>
                    <span>5 days</span>
                  </div>
                  <div class="icons flex-three">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1035 15.1797V9.02734"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1797 12.1035H14.0273"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12 Person</span>
                  </div>
                </div>
                <div class="flex-two">
                  <div class="price-box flex-three">
                    <p>From <span class="price-sale">$169.00</span></p>
                    <span class="price">$199.00</span>
                  </div>
                  <div class="icon-bookmark">
                    <i class="icon-Vector-151"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="tour-listing box-sd">
              <a href="tour-single.html" class="tour-listing-image">
                <div class="badge-top flex-two">
                  <span class="feature">Featured</span>
                  <div class="badge-media flex-five">
                    <span class="media"
                      ><i class="icon-Group-1000002909"></i>5</span
                    >
                    <span class="media"
                      ><i class="icon-Group-1000002910"></i>2</span
                    >
                  </div>
                </div>
                <img src="/img/travel-list/6.jpg" alt="Image Listing" />
              </a>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <a href="tour-single.html">Days and 6 nights From Moscow</a>
                </h3>
                <div class="review">
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <i class="icon-Star"></i>
                  <span>(1 Review)</span>
                </div>
                <div class="icon-box flex-three">
                  <div class="icons flex-three">
                    <i class="icon-time-left"></i>
                    <span>5 days</span>
                  </div>
                  <div class="icons flex-three">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1035 15.1797V9.02734"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1797 12.1035H14.0273"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>12 Person</span>
                  </div>
                </div>
                <div class="flex-two">
                  <div class="price-box flex-three">
                    <p>From <span class="price-sale">$169.00</span></p>
                    <span class="price">$199.00</span>
                  </div>
                  <div class="icon-bookmark">
                    <i class="icon-Vector-151"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ul class="tf-pagination flex-three">
                <li>
                  <a class="pages-link" href="#"> <i class="icon-29"></i></a>
                </li>
                <li>
                  <a class="pages-link" href="#">1</a>
                </li>
                <li class="pages-item active" aria-current="page">
                  <a class="pages-link" href="#">2</a>
                </li>
                <li><a class="pages-link" href="#">3</a></li>
                <li>
                  <a class="pages-link" href="#"><i class="icon--1"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      viewListingType: "grid",
    };
  },
  mounted() {
    this.checkViewListing();
  },
  methods: {
    setViewListingType(type) {
      this.viewListingType = type;
      localStorage.setItem("VIEW_LISTING_TYPE", type);
    },
    checkViewListing() {
      const type = localStorage.getItem("VIEW_LISTING_TYPE");
      if (type) {
        this.viewListingType = type;
      }
    },
  },
};
</script>
