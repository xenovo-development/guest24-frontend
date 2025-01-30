<template>
  <!-- Widget destination -->
  <section class="widget-destination1 pd-main relative">
    <img src="/img/page/shape2.png" alt="image" class="shape-destination" />
    <div class="tf-container">
      <div class="row mb-50 z-index3 relative">
        <div class="col-md-8">
          <div class="">
            <span
              class="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated"
              >{{ $t("destinations.destinations") }}</span
            >
            <h2 class="title-heading wow fadeInUp animated">
              {{ $t("destinations.title1") }} {{ $t("destinations.title2") }}
              <span class="text-gray font-yes">{{
                $t("destinations.title3")
              }}</span>
            </h2>
          </div>
        </div>
        <div class="col-md-4 flex-five view-all-wrap">
          <a
            href="tour-destination-v1.html"
            class="view-all wow fadeInUp animated"
            >{{ $t("destinations.viewall") }} <i class="icon-Group-13"></i
          ></a>
        </div>
      </div>
      <div class="destination-grid z-index3 relative">
        <div
          class="destination-tour center wow fadeInUp animated"
          data-wow-delay="0.1s"
        >
          <a href="tour-destination-v1.html" class="destination-image">
            <img src="/img/destination/a.jpg" alt="" />
          </a>
          <div class="title-tour">
            <a href="tour-destination-v1.html">Kıbrıs</a>
          </div>
        </div>
        <div
          class="destination-tour center wow fadeInUp animated"
          data-wow-delay="0.2s"
        >
          <a href="tour-destination-v2.html" class="destination-image">
            <img src="/img/destination/b.jpg" alt="" />
          </a>
          <div class="title-tour">
            <a href="tour-destination-v2.html">Florida</a>
          </div>
        </div>
        <div
          class="destination-tour center wow fadeInUp animated"
          data-wow-delay="0.3s"
        >
          <a href="tour-destination-v3.html" class="destination-image">
            <img src="/img/destination/c.jpg" alt="" />
          </a>
          <div class="title-tour">
            <a href="tour-destination-v3.html">İstanbul</a>
          </div>
        </div>
        <div
          class="destination-tour center wow fadeInUp animated"
          data-wow-delay="0.4s"
        >
          <a href="tour-destination-v3.html" class="destination-image">
            <img src="/img/destination/d.jpg" alt="" />
          </a>
          <div class="title-tour">
            <a href="tour-destination-v3.html">Vienna</a>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-lg-12">
          <p class="center destination-explore wow fadeInUp animated">
            Explore our top destinations voted by more than
            <span class="text-main">100,000+</span> customers around the world.
          </p>
        </div>
      </div> -->
    </div>
  </section>
  <!-- Widget destination -->
</template>
