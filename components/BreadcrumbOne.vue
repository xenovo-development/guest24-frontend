<template>
  <section
    class="breadcumb-section"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="tf-container">
      <div class="row">
        <div class="col-lg-12 center z-index1">
          <h1 class="title">{{ title }}</h1>
          <ul class="breadcumb-list flex-five">
            <li><a href="index.html">Home</a></li>
            <li>
              <span>{{ activePageName }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["activePageName", "title", "backgroundUrl"],
};
</script>
