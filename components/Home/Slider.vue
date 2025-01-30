<template>
  <section class="relative overflow-hidden">
    <div class="slider-home2-image">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-home2">
            <img
              src="/img/slide/slider.jpg"
              class="image-slider-home2 relative"
              alt="Image slider"
            />
          </div>
        </div>
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
            <!-- <span
              class="sub-title text-main font-yes fs-28-46 wow fadeInUp animated"
              >{{
                $t("slider.title")
              }}</span
            > -->
            <h1
              class="banner-text title-slide text-white mb-45 wow fadeInUp animated"
            >
            {{ $t("slider.title") }}
            <br/>{{ $t("slider.titletwo") }}
            </h1>
            <div
              class="search-form-widget-slider relative wow fadeInUp animated"
            >
              <form action="/" id="search-form-slider">
                <div class="flex wd-search">
                  <div class="form-group flex">
                    <img src="/img/icons/destinations.png" alt="">
                    <div class="search-bar-group">
                      <label>{{ $t("slider.destination") }}</label>
                      <select
                        class="nice-select"
                        v-model="destination"
                        required
                      >
                        <option value="" disabled selected>
                          {{ $t("slider.selectadestination") }}
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
                    <img src="/img/icons/checkin-checkout.png" alt="">
                    <div class="search-bar-group">
                      <label>{{ $t("slider.checkin") }}</label>
                      <input
                        type="date"
                        class="search-input"
                        v-model="checkIn"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group flex">
                    <img src="/img/icons/checkin-checkout.png" alt="">
                    <div class="search-bar-group">
                      <label>{{ $t("slider.checkout") }}</label>
                      <input
                        type="date"
                        class="search-input"
                        v-model="checkOut"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group flex">
                    <img src="/img/icons/guests.png" alt="">
                    <div class="search-bar-group">
                      <label>{{ $t("slider.guests") }}</label>
                      <input
                        type="text"
                        :placeholder="$t('slider.enterguests')"
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
                      <i class="icon-Vector5"></i> {{ $t("slider.search") }}
                    </a>
                  </div>
                </div>
                <div class="wd-search-form" :class="{ show: isFilterClicked }">
                  <div class="input-group-grid">
                    <fieldset class="group-select relative">
                      <label>{{ $t("slider.filterbyprice") }}</label>
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
                            <p class="price-range">{{ $t("slider.price") }}</p>
                            <div class="number-range">
                              <span id="slider-range-value1"></span>
                              <span id="slider-range-value2"></span>
                            </div>
                          </div>
                        </div>
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
                        <label for="check4">{{
                          $t("slider.acceptscreditcards")
                        }}</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check5"
                          type="checkbox"
                          v-model="additionalFilters.carParking"
                        />
                        <label for="check5">{{
                          $t("slider.carparking")
                        }}</label>
                      </div>
                    </div>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check6"
                          type="checkbox"
                          v-model="additionalFilters.freeCoupons"
                        />
                        <label for="check6">{{
                          $t("slider.freecoupons")
                        }}</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check7"
                          type="checkbox"
                          v-model="additionalFilters.laundryService"
                        />
                        <label for="check7">{{
                          $t("slider.laundryservice")
                        }}</label>
                      </div>
                    </div>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check8"
                          type="checkbox"
                          v-model="additionalFilters.outdoorSeating"
                        />
                        <label for="check8">{{
                          $t("slider.outdoorseating")
                        }}</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check9"
                          type="checkbox"
                          v-model="additionalFilters.reservations"
                        />
                        <label for="check9">{{
                          $t("slider.reservations")
                        }}</label>
                      </div>
                    </div>
                    <div class="group-check-box-wrap">
                      <div class="checkbox">
                        <input
                          id="check10"
                          type="checkbox"
                          v-model="additionalFilters.restaurant"
                        />
                        <label for="check10">{{
                          $t("slider.restaurant")
                        }}</label>
                      </div>
                      <div class="checkbox">
                        <input
                          id="check11"
                          type="checkbox"
                          v-model="additionalFilters.smokingAllowed"
                        />
                        <label for="check11">{{
                          $t("slider.smokingallowed")
                        }}</label>
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
                  <span>{{ $t("slider.subtext1") }}</span>
                </li>
                <li>
                  <i class="icon-Vector-5"></i>
                  <span>{{ $t("slider.subtext2") }}</span>
                </li>
                <li>
                  <i class="icon-Vector-5"></i>
                  <span>{{ $t("slider.subtext3") }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const destination = ref("");
const checkIn = ref("");
const checkOut = ref("");
const guests = ref("");
const lorem = ref("");
const priceRange = reactive({ min: "", max: "" });
const additionalFilters = reactive({
  acceptsCreditCards: false,
  carParking: false,
  freeCoupons: false,
  laundryService: false,
  outdoorSeating: false,
  reservations: false,
  restaurant: false,
  smokingAllowed: false,
});
const isFilterClicked = ref(false);
const items = ["ipsum", "sit amet"];
const currentText = ref("");
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeDelay = 100;
const wordPause = 2000;

const toggleFilter = () => {
  isFilterClicked.value = !isFilterClicked.value;
};

const handleSearch = () => {
  const searchData = {
    destination: destination.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: guests.value,
    priceRange: { ...priceRange },
    lorem: lorem.value,
    filters: { ...additionalFilters },
  };
  console.log("Search Data:", searchData);
};

const startTypewriterEffect = () => {
  const currentWord = items[currentIndex];

  if (isDeleting) {
    currentText.value = currentWord.substring(0, charIndex--);
  } else {
    currentText.value = currentWord.substring(0, charIndex++);
  }
  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), wordPause);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % items.length;
  }
  const delay = isDeleting ? typeDelay / 2 : typeDelay;
  setTimeout(startTypewriterEffect, delay);
};

onMounted(() => {
  startTypewriterEffect();
});
</script>
