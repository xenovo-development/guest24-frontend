<template>
  <!-- Widget Slider -->
  <section class="relative overflow-hidden">
    <div class="slider-home2-image">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-home2">
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                    src="/img/slide/slider.jpg"
                    class="image-slider-home2 relative"
                    alt="Image slider"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="/img/slide/slider.jpg"
                    class="image-slider-home2 relative"
                    alt="Image slider"
                  />
                </div>
              </div>
              <div class="swiper-button-next next-slider2"></div>
              <div class="swiper-button-prev prev-slider2"></div>
            </div>
          </div>
        </div>
        <!-- /.main-banner-wrapper -->
      </div>
    </div>
    <div class="slider-home2-content">
      <div class="tf-container">
        <div class="row">
          <div class="col-lg-12 center relative z-index3">
            <img
              src="/img/page/mask-bcrumb.png"
              alt="Image"
              class="mask-slide2-flan"
            />
            <span
              class="sub-title text-main font-yes fs-28-46 wow fadeInUp animated"
              >Lorem ipsum</span
            >
            <h1
              class="banner-text title-slide text-white mb-45 wow fadeInUp animated"
            >
              Lorem
              <span class="animationtext clip text-main font-yes text-main">
                <span class="cd-words-wrapper">
                  <span class="item-text is-visible">{{ currentText }}</span>
                </span>
              </span>
              & <br />
              consectetur adipisicing.
            </h1>
            <div
              class="search-form-widget-slider relative wow fadeInUp animated"
            >
              <form action="/" id="search-form-slider">
                <div class="flex wd-search">
                  <div class="form-group flex">
                    <i class="icon-18"></i>
                    <div class="search-bar-group">
                      <label>Destination</label>
                      <select
                        class="nice-select"
                        v-model="destination"
                        required
                      >
                        <option value="" disabled selected>
                          Select a destination
                        </option>
                        <option value="Vienna">Vienna</option>
                        <option value="Oakland Park">Oakland Park</option>
                        <option value="Hadersdorf am Kamp">
                          Hadersdorf am Kamp
                        </option>
                        <option value="Kadikoy">Kadıköy</option>
                        <option value="Uskudar">Üsküdar</option>
                        <option value="Fatih">Fatih</option>
                        <option value="Tatlisu">Tatlısu</option>
                        <option value="Ilgaz">Ilgaz</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group flex">
                    <i class="icon-4"></i>
                    <div class="search-bar-group">
                      <label>Check-in</label>
                      <input
                        type="date"
                        class="search-input"
                        v-model="checkIn"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group flex">
                    <i class="icon-4"></i>
                    <div class="search-bar-group">
                      <label>Check-out</label>
                      <input
                        type="date"
                        class="search-input"
                        v-model="checkOut"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group flex">
                    <i class="icon-user"></i>
                    <div class="search-bar-group">
                      <label>Guests</label>
                      <input
                        type="text"
                        placeholder="Enter Guests"
                        class="search-input"
                        v-model="guests"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group flex-two">
                    <div
                      class="icon-icon-filter"
                      :class="{ click: isFilterClicked }"
                      @click="toggleFilter"
                    >
                      <i class="icon-14"></i>
                    </div>
                    <a
                      href="#"
                      class="btn-search"
                      @click.prevent="handleSearch"
                    >
                      <i class="icon-Vector5"></i> Search
                    </a>
                  </div>
                </div>
                <div class="wd-search-form" :class="{ show: isFilterClicked }">
                  <div class="input-group-grid">
                    <fieldset class="group-select relative">
                      <label>Filter By Price</label>
                      <div class="widget widget-price">
                        <div id="slider-range"></div>
                        <div class="slider-labels">
                          <div>
                            <input
                              type="hidden"
                              name="min-value"
                              v-model="priceRange.min"
                            />
                            <input
                              type="hidden"
                              name="max-value"
                              v-model="priceRange.max"
                            />
                          </div>
                          <div class="caption flex-three">
                            <p class="price-range">Price:</p>
                            <div class="number-range">
                              <span id="slider-range-value1"></span>
                              <span id="slider-range-value2"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.widget_price -->
                    </fieldset>
                    <fieldset class="group-select relative input-npd">
                      <div class="search-bar-group relative">
                        <label>Lorem</label>
                        <select class="nice-select" v-model="lorem" required>
                          <option value="" disabled selected>
                            Select a lorem
                          </option>
                          <option value="Lorem">Lorem</option>
                          <option value="Lorem">Lorem</option>
                        </select>
                      </div>
                    </fieldset>
                    <fieldset class="group-select relative input-npd">
                      <div class="search-bar-group relative">
                        <label>Lorem</label>
                        <select class="nice-select" v-model="lorem" required>
                          <option value="" disabled selected>
                            Select a lorem
                          </option>
                          <option value="Lorem">Lorem</option>
                          <option value="Lorem">Lorem</option>
                        </select>
                      </div>
                    </fieldset>
                    <fieldset class="group-select relative input-npd">
                      <div class="search-bar-group relative">
                        <label>Lorem</label>
                        <select class="nice-select" v-model="lorem" required>
                          <option value="" disabled selected>
                            Select a lorem
                          </option>
                          <option value="Lorem">Lorem</option>
                          <option value="Lorem">Lorem</option>
                        </select>
                      </div>
                    </fieldset>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check4"
                          type="checkbox"
                          v-model="additionalFilters.acceptsCreditCards"
                        />
                        <label for="check4">Accepts Credit Cards</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check5"
                          type="checkbox"
                          v-model="additionalFilters.carParking"
                        />
                        <label for="check5">Car Parking</label>
                      </div>
                    </div>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check6"
                          type="checkbox"
                          v-model="additionalFilters.freeCoupons"
                        />
                        <label for="check6">Free Coupons</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check7"
                          type="checkbox"
                          v-model="additionalFilters.laundryService"
                        />
                        <label for="check7">Laundry Service</label>
                      </div>
                    </div>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check8"
                          type="checkbox"
                          v-model="additionalFilters.outdoorSeating"
                        />
                        <label for="check8">Outdoor Seating</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check9"
                          type="checkbox"
                          v-model="additionalFilters.reservations"
                        />
                        <label for="check9">Reservations</label>
                      </div>
                    </div>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check10"
                          type="checkbox"
                          v-model="additionalFilters.restaurant"
                        />
                        <label for="check10">Restaurant</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check11"
                          type="checkbox"
                          v-model="additionalFilters.smokingAllowed"
                        />
                        <label for="check11">Smoking Allowed</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tour-list wow fadeInUp animated">
              <ul class="flex-five">
                <li>
                  <i class="icon-Vector-5"></i>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li>
                  <i class="icon-Vector-5"></i>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li>
                  <i class="icon-Vector-5"></i>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Widget Slider -->
</template>

<script>
export default {
  data() {
    return {
      destination: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      lorem: "",
      priceRange: { min: "", max: "" },
      additionalFilters: {
        acceptsCreditCards: false,
        carParking: false,
        freeCoupons: false,
        laundryService: false,
        outdoorSeating: false,
        reservations: false,
        restaurant: false,
        smokingAllowed: false,
      },
      isFilterClicked: false,
      items: ["ipsum", "sit amet"],
      currentText: "",
      currentIndex: 0,
      charIndex: 0,
      isDeleting: false,
      typeDelay: 100,
      wordPause: 2000,
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterClicked = !this.isFilterClicked;
    },
    handleSearch() {
      const searchData = {
        destination: this.destination,
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        guests: this.guests,
        priceRange: JSON.parse(JSON.stringify(this.priceRange)),
        lorem: this.lorem,
        filters: JSON.parse(JSON.stringify(this.additionalFilters)),
      };
      console.log("Search Data:", searchData);
    },
    startTypewriterEffect() {
      const currentWord = this.items[this.currentIndex];

      if (this.isDeleting) {
        this.currentText = currentWord.substring(0, this.charIndex--);
      } else {
        this.currentText = currentWord.substring(0, this.charIndex++);
      }
      if (!this.isDeleting && this.charIndex === currentWord.length) {
        setTimeout(() => (this.isDeleting = true), this.wordPause);
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }
      const delay = this.isDeleting ? this.typeDelay / 2 : this.typeDelay;
      setTimeout(this.startTypewriterEffect, delay);
    },
  },
  mounted() {
    this.startTypewriterEffect();
  },
};
</script>
