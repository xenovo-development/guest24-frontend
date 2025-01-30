<template>
  <!-- Widget activities -->
  <section class="our-activities relative">
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-12">
          <div class="mb-30">
            <span
              class="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated"
              >Explore the world</span
            >
            <h2 class="title-heading text-white wow fadeInUp animated">
              {{ $t("explore.title") }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="activities-wrap">
            <ul class="activities-list mb-25">
              <li>
                <a href="#" class="flex-three wow fadeInUp animated">
                  <div class="icon">
                    <img src="/img/icons/sehir-kultur.png" alt="" />
                  </div>
                  <span class="activities-text">{{
                    $t("explore.category1")
                  }}</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex-three wow fadeInUp animated">
                  <div class="icon">
                    <img src="/img/icons/kiyi-doga.png" alt="" />
                  </div>
                  <span class="activities-text">{{
                    $t("explore.category2")
                  }}</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex-three wow fadeInUp animated">
                  <div class="icon">
                    <img src="/img/icons/simgesel-yapilar.png" alt="" />
                  </div>
                  <span class="activities-text">{{
                    $t("explore.category3")
                  }}</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex-three wow fadeInUp animated">
                  <div class="icon">
                    <img src="/img/icons/sahil-mutlulugu.png" alt="" />
                  </div>
                  <span class="activities-text">{{
                    $t("explore.category4")
                  }}</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex-three wow fadeInUp animated">
                  <div class="icon">
                    <img src="/img/icons/dag-ve-uzum-bagi.png" alt="" />
                  </div>
                  <span class="activities-text">{{
                    $t("explore.category5")
                  }}</span>
                </a>
              </li>
            </ul>
            <a href="#" class="more-place center">{{
              $t("explore.moreplace")
            }}</a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="right-side">
            <div class="image-activities mb-10">
              <img src="/img/page/explore.jpg" alt="" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="icon-box-style5">
                  <div class="flex-three wow fadeInUp animated">
                    <div class="icon">
                      <img src="/img/icons/kesfet.png" alt="" />
                    </div>
                    <span class="text">{{ $t("explore.subtitle1") }}</span>
                  </div>
                  <p class="des wow fadeInUp animated">
                    {{ $t("explore.subtext1") }}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-style5">
                  <div class="flex-three wow fadeInUp animated">
                    <div class="icon">
                      <img src="/img/icons/farkli-dunya-tek-tatil.png" alt="" />
                    </div>
                    <span class="text">{{ $t("explore.subtitle2") }}</span>
                  </div>
                  <p class="des wow fadeInUp animated">
                    {{ $t("explore.subtext2") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Widget activities -->
</template>
