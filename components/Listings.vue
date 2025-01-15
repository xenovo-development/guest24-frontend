<template>
  <section class="archieve-tour">
    <div class="tf-container">
      <div class="row">
        <ListingSearchBar />

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
              <nuxt-link to="/listings/_id" class="tour-listing-image">
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
              </nuxt-link>
              <div class="tour-listing-content">
                <span class="map"
                  ><i class="icon-Vector4"></i>United States USA</span
                >
                <h3 class="title-tour-list">
                  <nuxt-link to="/listings/_id"
                    >Days and 6 nights From Moscow</nuxt-link
                  >
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
                <li class="pages-item" aria-current="page">
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
