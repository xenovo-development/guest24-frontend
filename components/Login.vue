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
              <form @submit.prevent="handleLogin" id="login" class="login-user">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <label>Name</label>
                      <input
                        type="text"
                        v-model="formData.name"
                        placeholder="Enter your name*"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrap">
                      <label>Email</label>
                      <input
                        type="email"
                        v-model="formData.email"
                        placeholder="Enter your email*"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-wrap">
                      <div class="flex-two">
                        <label>Your password</label>
                        <a href="#" class="mb-15">Forgot Password?</a>
                      </div>
                      <input
                        type="password"
                        v-model="formData.password"
                        placeholder="Enter your password*"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 mb-30">
                    <button type="submit" class="btn-submit">Sign in</button>
                  </div>
                  <div class="col-lg-12 mb-30">
                    <div class="checkbox">
                      <input
                        id="check-policy"
                        type="checkbox"
                        v-model="formData.agree"
                        required
                      />
                      <label for="check-policy">
                        By signing up, you agree to Customers.ai’s Terms Of
                        Service and Privacy Policy
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="flex-three">
                      <span class="account">Don,t you have an account?</span>
                      <nuxt-link :to="localePath('/signup')" class="link-login"
                        >Register</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </form>
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
              <p v-if="successMessage" class="success">{{ successMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const formData = ref({
  name: "",
  email: "",
  password: "",
  agree: false,
});

const errorMessage = ref("");
const successMessage = ref("");

async function handleLogin() {
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const response = await axios.post("https://api", {
      name: formData.value.name,
      email: formData.value.email,
      password: formData.value.password,
    });

    if (response.data.success) {
      successMessage.value = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      errorMessage.value =
        response.data.message || "Login failed. Please try again.";
    }
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || "An error occurred during login.";
  }
}
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
.success {
  color: green;
  margin-top: 10px;
}
</style>
