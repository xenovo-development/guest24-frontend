<template>
  <!-- Main Header -->
  <header
    class="main-header header-style1 flex"
    :class="{ 'is-fixed': isFixed, 'is-small': isSmall }"
  >
    <!-- Header Lower -->
    <div id="header">
      <div class="header-top">
        <div class="header-top-wrap flex-two">
          <div class="header-top-right">
            <ul class="flex-three">
              <li class="flex-three">
                <i class="icon-mail"></i>
                <span>info@guest24.services</span>
              </li>
              <li class="flex-three">
                <i class="icon-phone"></i>
                <span>000 000-000 000</span>
              </li>
            </ul>
          </div>
          <div class="header-top-left flex-two">
            <nuxt-link :to="localePath('/login')" class="booking">
              <span>{{ $t("nav.login") }} / {{ $t("nav.signin") }}</span>
            </nuxt-link>
            <div class="follow-social flex-two">
              <span>{{ $t("nav.followus") }} :</span>
              <ul class="flex-two">
                <li>
                  <a href="#"><i class="icon-icon-2"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon-Group-131"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon-x"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon-icon"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header-lower">
        <div class="tf-container full">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-container flex justify-space align-center">
                <!-- Logo Box -->

                <div class="logo-box">
                  <div class="logo">
                    <nuxt-link :to="localePath('/')">
                      <img src="/img/logo.png" alt="Logo" />
                    </nuxt-link>
                  </div>
                </div>
                <div class="nav-outer flex align-center">
                  <!-- Main Menu -->
                  <nav class="main-menu show navbar-expand-md">
                    <div
                      class="navbar-collapse collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul class="navigation clearfix">
                        <li>
                          <nuxt-link :to="localePath('/')">{{
                            $t("nav.home")
                          }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/about')">{{
                            $t("nav.about")
                          }}</nuxt-link>
                        </li>
                        <li class="dropdown2">
                          <a href="#">Lorem ipsum</a>
                          <ul>
                            <li>
                              <nuxt-link :to="localePath('/')"
                                >Lorem ipsum</nuxt-link
                              >
                            </li>
                            <li>
                              <nuxt-link :to="localePath('/')"
                                >Lorem ipsum</nuxt-link
                              >
                            </li>
                            <li>
                              <nuxt-link :to="localePath('/')"
                                >Lorem ipsum</nuxt-link
                              >
                            </li>
                            <li>
                              <nuxt-link :to="localePath('/')"
                                >Lorem ipsum</nuxt-link
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/')"
                            >Lorem ipsum</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/')">{{
                            $t("nav.destinations")
                          }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/')">{{
                            $t("nav.news")
                          }}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/contact')">{{
                            $t("nav.contact")
                          }}</nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <!-- Main Menu End-->
                </div>
                <div class="header-account flex align-center">
                  <div class="language">
                    <div class="nice-select" tabindex="0">
                      <img src="/img/page/language.svg" alt="" />
                      <span class="current">{{ currentLanguageName }}</span>
                      <ul class="list">
                        <li class="option" @click="changeLanguage('en')">
                          <img src="/img/page/language.svg" alt="" />{{
                            $t("nav.english")
                          }}
                        </li>
                        <li class="option" @click="changeLanguage('de')">
                          <img src="/img/page/language.svg" alt="" />{{
                            $t("nav.german")
                          }}
                        </li>
                        <li class="option" @click="changeLanguage('tr')">
                          <img src="/img/page/language.svg" alt="" />{{
                            $t("nav.turkish")
                          }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="currency">
                    <div class="nice-select" tabindex="0">
                      <span class="current">USD</span>
                      <ul class="list">
                        <li data-value="usd" class="option selected">USD</li>
                        <li data-value="ero" class="option">ERO</li>
                        <li data-value="try" class="option">TRY</li>
                      </ul>
                    </div>
                  </div>
                  <div class="search-mobie relative">
                    <div class="dropdown">
                      <a
                        type="button"
                        class="show-search"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="icon-Vector5"></i>
                      </a>
                      <ul class="dropdown-menu top-search">
                        <form action="/" id="search-bar-widget">
                          <input type="text" placeholder="Search here..." />
                          <button type="button">
                            <i class="icon-search-2"></i>
                          </button>
                        </form>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mobile-nav-toggler mobile-button">
                  <i class="icon-bar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Lower -->
    <!-- Mobile Menu  -->
    <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>
    <div class="mobile-menu">
      <div class="menu-backdrop"></div>
      <nav class="menu-box">
        <div class="nav-logo">
          <a href="index.html"> <img src="/img/logo-white.png" alt="" /></a>
        </div>
        <div class="bottom-canvas">
          <div class="menu-outer"></div>
        </div>
      </nav>
    </div>
    <!-- End Mobile Menu -->
  </header>
  <!-- End Main Header -->
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { locale, t, setLocale } = useI18n();
const router = useRouter();

const currentLanguageName = computed(() => t("nav.languageName"));

const changeLanguage = async (lang) => {
  if (locale.value === lang) return;

  await setLocale(lang);
  localStorage.setItem("selectedLanguage", lang);

  const currentRoute = router.currentRoute.value;
  const newPath = router.resolve({
    name: currentRoute.name,
    params: { ...currentRoute.params, locale: lang },
  }).fullPath;

  router.push(newPath).catch((err) => {
    if (err.name !== "NavigationDuplicated") {
      console.error(err);
    }
  });
};

const isFixed = ref(false);
const isSmall = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  isFixed.value = scrollPosition > 100;
  isSmall.value = scrollPosition > 200;
};

onMounted(() => {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  }

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
