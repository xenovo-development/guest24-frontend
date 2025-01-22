<template>
  <div>
    <BreadcrumbOne
      :activePageName="$t('breadcrumb.faq')"
      :title="$t('breadcrumb.faq')"
      backgroundUrl="/img/slider.jpg"
    />
    <FaqOne />
  </div>
</template>
<script>
export default {
  name: "FaqPage",
};
</script>
<style>
@import url("../public/assets/css/app.css");
</style>
