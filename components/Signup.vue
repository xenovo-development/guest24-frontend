<template>
  <section class="login">
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-12">
          <div class="login-wrap flex">
            <div class="image">
              <img src="/img/page/sign-up.jpg" alt="image" />
            </div>
            <div class="content">
              <div class="inner-header-login">
                <h3 class="title">Create an account to get started</h3>
                <div class="flex-three">
                  <span class="sale">20% off</span>
                  <p>get 20% off for web signup</p>
                </div>
              </div>
              <form action="/" id="sign-up" class="login-user">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <label>Name</label>
                      <input type="text" placeholder="Enter your name*" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <label>Email</label>
                      <input type="email" placeholder="Enter your email*" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Enter your Phone*" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <label>Your password</label>
                      <input
                        type="password"
                        placeholder="Enter your password*"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 mb-40">
                    <div class="input-wrap-social">
                      <span class="or">or</span>
                      <div class="flex-three">
                        <a href="#" class="login-social flex-three">
                          <img src="/img/page/gg.png" alt="image" />
                          <span>Sign in with Google</span>
                        </a>
                        <a href="#" class="login-social flex-three">
                          <img src="/img/page/fb.png" alt="image" />
                          <span>Sign in with facebook</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mb-30">
                    <button type="submit" class="btn-submit">Sign Up</button>
                  </div>
                  <div class="col-lg-12 mb-30">
                    <div class="checkbox">
                      <input
                        id="check-policy"
                        type="checkbox"
                        name="check"
                        value="check"
                      />
                      <label for="check-policy"
                        >By signing up, you agree to Customers.ai’s Terms Of
                        Service and Privacy Policy</label
                      >
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="flex-three">
                      <span class="account">Don,t you have an account?</span>
                      <nuxt-link :to="localePath('/login')" class="link-login"
                        >Login</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { setLocale, locale } = useI18n();

function setLanguage(language) {
  setLocale(language);
  locale.value = language;
  localStorage.setItem("language", language);
}
</script>
