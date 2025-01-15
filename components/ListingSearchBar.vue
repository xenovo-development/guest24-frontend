<template>
  <div class="col-lg-4">
    <form action="/" class="sider-bar-tour-package">
      <div class="widget-filter mb-30">
        <h6 class="title-tour">Search by Filter</h6>
        <div class="group-select-wrap">
          <fieldset class="group-select relative mb-22">
            <i class="icon-Vector-8"></i>
            <div class="search-bar-group relative">
              <label>Destination</label>
              <div class="nice-select" tabindex="0">
                <span class="current">Location</span>
                <ul class="list">
                  <li data-value="" class="option selected focus">Tokyo</li>
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
                  <li data-value="" class="option selected focus">Date From</li>
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
                  <li data-value="" class="option selected focus">Guests</li>
                  <li data-value="guests5" class="option">5 Guests</li>
                  <li data-value="guests10" class="option">10 Guests</li>
                  <li data-value="guests15" class="option">15 Guests</li>
                </ul>
              </div>
            </div>
          </fieldset>
          <fieldset class="group-select relative input-npd mb-22">
            <div class="search-bar-group relative">
              <label>0</label>
              <div class="nice-select" tabindex="0">
                <span class="current">English</span>
                <ul class="list">
                  <li data-value="" class="option selected focus">Language</li>
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
                  <li data-value="" class="option selected focus">Month</li>
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
                  <li data-value="" class="option selected focus">Duration</li>
                  <li data-value="duration15" class="option">15 day</li>
                  <li data-value="duration20" class="option">20 day</li>
                  <li data-value="duration30" class="option">30 day</li>
                </ul>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="widget-filter mb-30">
        <h6 class="title-tour">Search by Filter</h6>
        <div class="group-check-box-wrap">
          <div class="checkbox">
            <input id="check" type="checkbox" name="check" value="check" />
            <label for="check">10+</label>
          </div>
          <div class="checkbox">
            <input id="check1" type="checkbox" name="check" value="check" />
            <label for="check1">12+</label>
          </div>
          <div class="checkbox">
            <input id="check2" type="checkbox" name="check" value="check" />
            <label for="check2">15+</label>
          </div>
          <div class="checkbox">
            <input id="check3" type="checkbox" name="check" value="check" />
            <label for="check3">Adults</label>
          </div>
        </div>
      </div>
      <div class="widget-filter mb-30">
        <h6 class="title-tour">Search by Filter</h6>
        <div class="group-check-box-wrap">
          <div class="checkbox">
            <input id="check4-bar" type="checkbox" name="check" value="check" />
            <label for="check4-bar">Accepts Credit Cards</label>
          </div>
          <div class="checkbox">
            <input id="check5-bar" type="checkbox" name="check" value="check" />
            <label for="check5-bar">Car Parking</label>
          </div>
          <div class="checkbox">
            <input id="check6-bar" type="checkbox" name="check" value="check" />
            <label for="check6-bar">Free Coupons</label>
          </div>
          <div class="checkbox">
            <input id="check7-bar" type="checkbox" name="check" value="check" />
            <label for="check7-bar">Laundry Service</label>
          </div>
          <div class="checkbox">
            <input id="check8-bar" type="checkbox" name="check" value="check" />
            <label for="check8-bar">Outdoor Seating</label>
          </div>
          <div class="checkbox">
            <input id="check9-bar" type="checkbox" name="check" value="check" />
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
</template>
