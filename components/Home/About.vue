<template>
  <!-- Widget About Us -->
  <section class="about-us-h2 pd-main relative">
    <!-- <img src="/img/about-us/plane.png" alt="image" class="mask1-about" /> -->
    <!-- <img src="/img/page/fly4.png" alt="image" class="mask2-about" /> -->
    <div class="tf-container">
      <div class="row">
        <div class="col-md-6">
          <div class="image-about-us relative">
            <img src="/img/slide/iki.png" alt="image" class="mask1" />
            <img src="/img/page/fly3.png" alt="image" class="mask2" />
            <img
              src="/img/about-us/ewewe2.png"
              alt="image"
              class="image-main"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="content-about-us">
            <div class="mb-50 pl-about">
              <h2 class="title-heading mb-18 wow fadeInUp animated">
                {{ $t('adventure.title') }}
              </h2>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="icon-box-style-4 flex">
                  <div class="icon flex-five">
                    <img src="/img/icons/world.png" alt="">

                  </div>
                  <div class="content">
                    <h6 class="title mb-15 wow fadeInUp animated">
                      <a href="#">{{ $t("adventure.subtitle1") }}</a>
                    </h6>
                    <p class="des wow fadeInUp animated">
                      {{ $t("adventure.description1") }}
                    </p>
                  </div>
                </div>
                <div class="icon-box-style-4 flex">
                  <div class="icon flex-five">
                    <img src="/img/icons/smarter.png" alt="">

                  </div>
                  <div class="content">
                    <h6 class="title mb-15 wow fadeInUp animated">
                      <a href="#">{{ $t("adventure.subtitle2") }}</a>
                    </h6>
                    <p class="des wow fadeInUp animated">
                      {{ $t("adventure.description2") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-style-4 flex">
                  <div class="icon flex-five">
                    <img src="/img/icons/new-destinations.png" alt="">

                  </div>
                  <div class="content">
                    <h6 class="title mb-15 wow fadeInUp animated">
                      <a href="#">{{ $t("adventure.subtitle3") }}</a>
                    </h6>
                    <p class="des wow fadeInUp animated">
                      {{ $t("adventure.description3") }}
                    </p>
                  </div>
                </div>
                <div class="icon-box-style-4 flex">
                  <div class="icon flex-five">
                    <img src="/img/icons/unforgettable.png" alt="">

                  </div>
                  <div class="content">
                    <h6 class="title mb-15 wow fadeInUp animated">
                      <a href="#">{{ $t("adventure.subtitle4") }}</a>
                    </h6>
                    <p class="des wow fadeInUp animated">
                      {{ $t("adventure.description4") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Widget Brand Part -->
</template>
