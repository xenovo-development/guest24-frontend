<template>
  <section class="pd-main bg-1">
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-12">
          <div class="center m0-auto w-text-heading mb-40">
            <span class="sub-title-heading text-main fs-28-46 font-yes">
              Explore the world
            </span>
            <h2 class="title-heading">
              Amazing Featured Tour
              <span class="text-gray font-yes">Package</span> the world
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 relative">
          <ClientOnly>
            <swiper-container
              ref="containerRef"
              :slides-per-view="2"
              :space-between="30"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              loop="true"
              class="testimonialSwiper"
              :breakpoints="{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                }
              }"
            >
              <swiper-slide
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="widget-testimonial-style2 relative"
              >
                <div class="flex-two mb-25">
                  <div class="flex-three">
                    <div class="image">
                      <img :src="testimonial.image" alt="Image Testimonial" />
                    </div>
                    <div class="profile">
                      <h5 class="name">{{ testimonial.name }}</h5>
                      <span class="job">{{ testimonial.job }}</span>
                    </div>
                  </div>
                  <div class="icon-tes flex-five">
                    <i class="icon-Layer_x0020_1"></i>
                  </div>
                </div>
                <p class="des">{{ testimonial.description }}</p>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper as SwiperSlide } from "swiper/vue";

const containerRef = ref(null);
const testimonials = ref([
  {
    name: "Lorem Ipsum",
    job: "CEO & Founder",
    image: "/img/testimonial/avata.jpg",
    description:
      "The most advanced revenue than this. I will refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.",
  },
  {
    name: "Lorem Ipsum Sit",
    job: "CEO & Founder",
    image: "/img/testimonial/avata.jpg",
    description:
      "The most advanced revenue than this. I will refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.",
  },
  {
    name: "Lorem Ipsum Sit Amet",
    job: "CEO & Founder",
    image: "/img/testimonial/avata.jpg",
    description:
      "The most advanced revenue than this. I will refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.",
  },
]);

let swiperInstance;

onMounted(() => {
  swiperInstance = containerRef.value?.swiper;
  console.log(swiperInstance);
});
</script>
