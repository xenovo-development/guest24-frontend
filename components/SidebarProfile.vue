<template>
  <h4 class="title">Menu</h4>
  <div class="infomation-dashboard">
    <div class="sidebar-dashboard">
      <div class="db-menu">
        <ul>
          <li>
            <nuxt-link to="my-booking.html">
              <i class="icon-Layer-2"></i>
              <span>{{ $t("myprofile.myprofile") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="my-favorite.html">
              <i class="icon-Vector-10"></i>
              <span>{{ $t("myprofile.myprofile") }}</span>
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="my-profile.html">
              <i class="icon-profile-user-1"></i>
              <span>{{ $t("myprofile.myprofile") }}</span>
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="my-profile.html">
              <i class="icon-profile-user-1"></i>
              <span>{{ $t("myprofile.myprofile") }}</span>
            </nuxt-link>
          </li>
          <li class="active">
            <nuxt-link to="my-profile.html">
              <i class="icon-profile-user-1"></i>
              <span>{{ $t("myprofile.myprofile") }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
