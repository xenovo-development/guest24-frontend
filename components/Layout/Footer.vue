<template>
  <footer class="footer footer-style2">
    <div class="tf-container">
      <div class="row">
        <div class="col-md-3">
          <div class="footer-item-logo">
            <div class="logo">
              <img src="/img/logo.png" alt="image" />
            </div>
            <p class="des-footer">
              {{ $t("footer.text") }}
            </p>
            <ul class="social flex-three">
              <li>
                <a href="#">
                  <i class="icon-icon-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-x"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-icon_03"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer-item-company">
            <h6 class="title mb-30">Our Company</h6>
            <ul class="footer-menu">
              <li>
                <a href="about-us.html">Our About </a>
              </li>
              <li>
                <a href="terms-condition.html">Terms Condition</a>
              </li>
              <li>
                <a href="team.html">Team</a>
              </li>
              <li>
                <nuxt-link :to="localePath('/faq')">FAQ</nuxt-link>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer-item-quick-link">
            <h6 class="title mb-30">Quick Link</h6>
            <ul class="footer-menu">
              <li>
                <a href="dashboard.html">Dashboard</a>
              </li>
              <li>
                <a href="my-booking.html">My Booking</a>
              </li>
              <li>
                <a href="my-favorite.html">My Favorite</a>
              </li>
              <li>
                <a href="my-listing.html">My Listing</a>
              </li>
              <li>
                <a href="my-profile.html">My Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="footer-item-newsletter">
            <h6 class="title mb-30">Our Newsletter</h6>
            <p class="des mb-22">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
              commodo
            </p>
            <form action="/" class="form-footer-st2 flex-three">
              <input
                type="email"
                class="input-search"
                placeholder="Enter Mail"
              />
              <button type="submit"><i class="icon-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
      <div class="row footer-bottom">
        <div class="col-md-6">
          <p class="copy-right">Copyright© 2024 All Rights Reserved</p>
        </div>
        <div class="col-md-6">
          <ul class="policy-tern flex-six">
            <li>
              <a href="terms-condition.html">Terms and conditions</a>
            </li>
            <li>
              <a href="help-center.html"> Privacy policy</a>
            </li>
            <li>
              <a href="login.html">Login / Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
